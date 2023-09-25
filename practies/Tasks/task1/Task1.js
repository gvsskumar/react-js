import React,{useState} from 'react'

function Task1() {
    const [obj,setObj] = useState({fname:"Satya",lname:"Kumar",exprience:{websky:"1 year",tecnolynx:"2 years"}})
    const changeHandle = () =>{
        setObj({...obj,exprience:{...obj.exprience,tecnolynx:"3 years"}});
    }
    return (
    <div><ul>
        <li>{obj.fname}</li>
        <li>{obj.lname}</li>
        <li>{obj.exprience['websky']}</li>
        <li>{obj.exprience['tecnolynx']}</li>
        </ul>
        <button onClick={changeHandle}>Change </button>
        </div>
  )
}

export default Task1