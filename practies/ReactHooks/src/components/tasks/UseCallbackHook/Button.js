import React from "react";
const Button = (props) =>{
  console.log(`rendred Button ${props.children}`);
 return (<>
 <button type="button" onClick={props.handleClick}>{props.children}</button>
 </>)
}
export default React.memo(Button);