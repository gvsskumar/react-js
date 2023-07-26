import React,{useEffect} from 'react'

const Child2 =()=> {
    console.log('Child2 rendered...');
    useEffect(()=>{
        console.log('Child2 rendered with empty Dependency ...');
    },[])
  return (
    <>Empty Dependency</>
  )
}

export default React.memo(Child2);