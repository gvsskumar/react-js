import React,{useEffect,useRef} from 'react'

const EditTodo = (props) => {

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.value = props.currentTodo.title;
    })
    const submitHandler = (e) => {
        e.preventDefault();
        props.onEditTodo(props.currentTodo.id,inputRef.current.value);
        
    }
   return (
    <>
    <form onSubmit={submitHandler}>
        <input type='text' ref={inputRef}   />
        <button type='submit' >Update</button>
    </form>
    </>
  )
}

export default EditTodo;