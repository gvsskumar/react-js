import React,{ useState } from "react";
export function ElementStateDemo(){
    const [display,setDisplay] = useState({'display':'none'});
    const [userName,setUserName] = useState("");
    function ShowMessage(){
        setDisplay({'display':'block'})
    }
    function HideMessage(e){
        setDisplay({'display':'none'});
        setUserName(e.target.value.toUpperCase());
    }
    function HandleUserName(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={HideMessage} onChange={HandleUserName} value={userName} onBlur={HideMessage} onFocus={ShowMessage} placeholder="Name in Block Letters" /></dd>
                <dd style={display}>Name in Block Letters</dd>
            </dl>
        </div>
    )
}