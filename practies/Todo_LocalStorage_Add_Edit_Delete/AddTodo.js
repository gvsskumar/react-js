import React,{useRef} from 'react'

const AddTodo =(props)=> {
    const inputTextRef = useRef(null);
    const addSubmitHandler = (e) =>{
        e.preventDefault();
        const title = inputTextRef.current.value;
         props.onAddTodo(title);
         inputTextRef.current.value ='';
    }
  return (
    <form onSubmit={addSubmitHandler}>
        <div>
            <label htmlFor='input-text'>Todo Title</label>
            <input 
            type='text' 
            id='input-text'
            ref={inputTextRef}
             />
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo