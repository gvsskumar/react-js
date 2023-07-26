import React from 'react'

const TodoItem = (props) => {
    const editClickHandler = (todo) =>{
         props.onEditHandler(todo);
    }

    const deleteClickHandler =(id)=>{
        props.onDeleteHandler(id)
    }
  return (
    <>
       {props.items.map((el)=>{
        return (<li key={el.id}><span>{el.title}</span> 
        <button type='button' onClick={()=>editClickHandler(el)} >Edit</button>
        <button type='button' onClick={()=>deleteClickHandler(el.id)} >Delete</button>
        </li>)
        })}
    </>
  )
}

export default TodoItem;