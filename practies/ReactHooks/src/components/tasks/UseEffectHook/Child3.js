import React,{useEffect} from 'react'

const Child3 =(props)=> {
    console.log('Child3 rendered...');
    useEffect(()=>{
        console.log(`Child3 rendered with ${props.data}...`);
    },[props.data])
  return (
    <>
    <p>Dependency with props : {props.data}</p></>
  )
}

export default React.memo(Child3);