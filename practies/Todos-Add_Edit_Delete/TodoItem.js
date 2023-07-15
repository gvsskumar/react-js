import React from 'react'

const TodoItem =(props)=> {
    const editTodo =(todo)=>{
        props.onEditTodo(todo);
    }
   const deleteTodo = (id) =>{
         props.onRemoveTodo(id);
   } 
  return (
    <ul>
            {props.items.map((el)=>{return <li key={el.id}>
                <span>{el.title}</span>
                <button onClick={()=>editTodo(el)}>Edit</button>
                <button onClick={()=>deleteTodo(el.id)}>Delete</button>
            </li>})}
        </ul>
  )
}

export default TodoItem