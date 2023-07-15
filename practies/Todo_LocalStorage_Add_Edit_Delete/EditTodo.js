import React,{useEffect, useRef} from 'react'

const EditTodo =(props) => {
    const inputTextRef = useRef(null);
   
    useEffect(()=>{
        inputTextRef.current.value =props.data.title;
    })
   
   const  editSubmitHandler = (event) =>{
            event.preventDefault();
           const newTitle = inputTextRef.current.value;
           props.onChangeTodo(props.data.id,newTitle);
           inputTextRef.current.value ='';
   } 
  return (
    <form onSubmit={editSubmitHandler}>
        <div>
            <label htmlFor='input-text'>Todo Title</label>
            <input 
            type='text' 
            id='input-text'
           ref={inputTextRef}
             />
        </div>
        <button type='submit'>Update Todo</button>
    </form>
  )
}

export default EditTodo;