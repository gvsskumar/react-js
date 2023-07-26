import React,{useState,useCallback} from 'react'
import Child from "./Child";
const Counter =() => {
    const [count,setCount] = useState(0)
    const cnt =5;
    
    const clickHandler = useCallback(() =>{
        
        setCount((prevCount)=>{            
            return cnt+prevCount});
    },[cnt])
    console.log('hello');
  return (
    <>
    {count}<Child onClick={clickHandler} />
    </>
  )
}

export default React.memo(Counter)