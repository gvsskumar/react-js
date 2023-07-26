import React,{useState} from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import store from "../../../store/storeConfig";
import {getTodoTask,addTodoTask,deleteTodoTask} from '../../../store/slice/todoSlice';
const todosList = [
    {id:1,title:"Sample Title",status:false},
    {id:2,title:"Sample Title2",status:false},
]
const TodoList = () => {
    const [todos,setTodos] = useState(todosList);
    const [editing,setEditing] = useState(false);
    const [currentTodo,setCurrentTodo] = useState([]);
    store.dispatch(getTodoTask({}))
    const editHandler = (todo) => {
        setEditing(true);
        setCurrentTodo(todo);
    }

    const deleteHandler = (id) =>{
        //----------Remove Item Filter Method -----//
        store.dispatch(deleteTodoTask({id:id}))
        let todosList = todos.filter((el)=>el.id!==id)
        setTodos((prevTodo)=>{
            return [...todosList]
        }); 
        //----------Remove Item Slice Method -----//
       /* const index = todos.findIndex((todo)=>todo.id!==id)
        const todosList = todos.splice(index,1);
        setTodos((prevTodo)=>{
                return [...todosList]
            }); */
    }
    const addTodoHandler = (title) => {
        let newItem = {id:Math.random()*100,title:title,status:false}
        store.dispatch(addTodoTask(newItem))
        setTodos((prevTodo)=>{
            return [newItem,...prevTodo]})
    }
    const updateHandler = (id,title) =>{
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? {id:id,title:title} : todo;
          });
          setTodos([...updatedItem]);
          setEditing(false);
    }
  return (
    <>
    {editing===true?<EditTodo 
    currentTodo={currentTodo}
    onEditTodo={updateHandler} />:<AddTodo onAddTodo={addTodoHandler} />}
    <TodoItem items={todos} onEditHandler={editHandler} onDeleteHandler={deleteHandler} />
    </>
  )
}

export default TodoList