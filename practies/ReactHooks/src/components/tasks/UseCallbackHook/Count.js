import React from "react";
const Count = (props) =>{
  console.log(`rendred count is ${props.text} ...`);
  return(<>
  <p>{props.text} as {props.count}</p>
  </>)

}
export default React.memo(Count);