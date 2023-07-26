import React,{useRef} from 'react'

const AddTodo = (props) => {
    const inputRef = useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddTodo(inputRef.current.value);
        inputRef.current.value = '';
    }
   return (
    <>
    <form onSubmit={submitHandler}>
        <input type='text' ref={inputRef} />
        <button type='submit' >Submit</button>
    </form>
    </>
  )
}

export default AddTodo;