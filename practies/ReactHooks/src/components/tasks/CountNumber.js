import React,{useState} from 'react'

const CountNumber =()=> {
    const [count,setCount] = useState(0);
    const incrementCount = (e) =>{
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }

    const decrementCount = (e) =>{
        setCount((prevCount)=>{
            return prevCount-1;
        })
    }
  return (
    <div>
        <button onClick={decrementCount} >Decrement</button>
        {count}
        <button onClick={incrementCount} >Increment</button>
                
    </div>
  )
}

export default CountNumber