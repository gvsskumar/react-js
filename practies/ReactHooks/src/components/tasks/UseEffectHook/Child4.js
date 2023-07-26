import React,{useEffect,useState} from 'react'

const Child4 =(props)=> {
    const [count,setCount] = useState(29)
    console.log('Child4 rendered...');
    const increment = () =>{
             setCount((prevCount)=>prevCount+1);
    }

    const decrement = () =>{
        setCount((prevCount)=>prevCount-1);
    }
    useEffect(()=>{
       
        console.log(`Child4 rendered No Dependancy ${count}...`);
        
    })
    useEffect(()=>{
       
        console.log(`Child4 rendered empty dependancy ${count}...`);
        
    },[])
    useEffect(()=>{
        console.log(`Child4 rendered with props ${props.data}...`);
         
     },[props.data])
     useEffect(()=>{
       
         console.log(`Child4 rendered with state : ${count}...`);
        // return ;
        
     },[count]) 
    // useEffect(()=>{
    //   // return count;
    //     console.log(`Child4 rendered with ${count}...`);
        
    // },[count])
  return (
    <><p>Dependency with state : {count}</p>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement} >Decrement</button>
    </>
  )
}

export default React.memo(Child4);