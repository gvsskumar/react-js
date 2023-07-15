import React,{useState} from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
const todoList = [{id:'t1',title:"Sample Task1"}];

const TodoList =()=> {
    
    const [todos,setTodos] = useState(todoList);
    const [isEditing,setIsEditing] = useState(false);
    const [currentTodo,setCurrentTodo] = useState(null);
    const addTodoHandler = (title) => {
        setTodos((prevTodo)=>{
            return [{id:Math.random()*10,title:title},...prevTodo]
        })
    }

    const editTodoHandler = (todo) =>{
        setIsEditing(true);
       // console.log(todo);
        setCurrentTodo(todo);
    }
    const ChangeTodoHandler =(id,title)=>{
       // console.log(title);
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? {id:id,title:title} : todo;
          });
          setTodos([...updatedItem]);
          setIsEditing(false);
    }
    const removeTodoHandler = (id) =>{
        console.log(id);
        let rTodoItem = todos.filter((el)=>el.id!==id);
        setTodos([...rTodoItem]);
    }

  return (<>
    {isEditing?<EditTodo data={currentTodo} onChangeTodo={ChangeTodoHandler} />:<AddTodo onAddTodo={addTodoHandler} />}
    <TodoItem items={todos} onEditTodo={editTodoHandler} onRemoveTodo={removeTodoHandler}/>
    </>
  )
}

export default TodoList