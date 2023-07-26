import React from 'react'

const ChildUseCallback = (props) => {
    console.log("useCallback Child component rendered")
  return (
    <>
    <button type='button' onClick={props.onClick}>{props.children}</button>
    </>
  )
}

export default ChildUseCallback