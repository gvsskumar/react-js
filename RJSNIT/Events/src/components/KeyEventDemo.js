import {useState} from 'react'
export function KeyEventDemo(){
    const [users] =useState([{"UserId":"Kumar"},{"UserId":"Venkata"},{"UserId":"Satya"}]);
    const [userMsg,setUserMsg] = useState(" ");
    const [errorColor,setErrorColor]  = useState("");
    const [displayError,setDisplayError] = useState({'display':'none'});
    function VerifyUserId(e){
        for(var user of users){
            if(user.UserId===e.target.value){
            setUserMsg("User id Token - Try Another");
            setErrorColor("Invalid-style");
            break;
            }else{
                setUserMsg("User Id Avaiable");
                setErrorColor('valid-style');
            }

        }
    }
    function ClearMessage(){
        setUserMsg("");
    }
    function VerifyCaps(e){
        if(e.which>=65 && e.which<=90){
            setDisplayError({'display':'block'})
        } else{
            setDisplayError({'display':'none'})
        }
    }
    return(
        <div className='container-fluid'>
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onBlur={ClearMessage} onKeyUp={VerifyUserId} /></dd>
                <dd className={errorColor}>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyUp={VerifyCaps} />
                </dd>
                <dd className='text-warning' style={displayError}>
                    <span className='bi bi-exclamation-triangle'></span>Caps ON
                </dd>
            </dl>
        </div>
    )

}