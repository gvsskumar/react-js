import React from 'react'

const Child = ({onClick}) => {
   console.log('hello'); 
  return (
    <><button type='button' onClick={onClick} >Increment</button></>
  )
}

export default React.memo(Child);