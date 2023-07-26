import React,{useMemo, useState,useCallback} from 'react'
import ChildUseMemo from "./ChildUseMemo"
import ChildUseCallback from './ChildUseCallback';
const Parent =()=> {
    const [num,setNum] = useState(1);
    const getChildComponent = useMemo(()=><ChildUseMemo />,[]);
    const IncrementNumber = useCallback(() =>{
        setNum((prevNum)=>prevNum+1);
    },[])
    console.log("Parent Component rendered")
  return (
    <>
    {num}{getChildComponent}
    <ChildUseCallback onClick={IncrementNumber} >Increment</ChildUseCallback>
    
    </>
  )
}

export default Parent