import React,{useRef} from 'react'

const UseRef =()=> {
    const inputRef = useRef(null);
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    const buttonHandler = () =>{
        inputRef.current.focus();
    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <input type='text' ref={inputRef} />
        <button type='submit'>Submit</button>
        <button type='button' onClick={buttonHandler}>Focus</button>
    </form>
    </>
  )
}

export default UseRef