import React,{useEffect} from 'react'

const Child1 =()=> {
    console.log('Child1 rendered...');
    useEffect(()=>{
        console.log('Child1 rendered No Dependancy...');
    })
  return (
    <>Without Dependency</>
  )
}

export default React.memo(Child1);