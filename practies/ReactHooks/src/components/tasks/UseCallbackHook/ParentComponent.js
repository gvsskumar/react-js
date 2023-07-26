import React,{useState,useMemo,useCallback} from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
const ParentComponent = () =>{
 const [age,setAge]= useState(29);
 const [salary,setSalary] = useState(1000);
 const memoTitle = useMemo(()=>{return <Title />},[]);
 const incrementAge = useCallback(() =>{
setAge((prevAge)=>prevAge+1);
 },[age])
const incrementSalary = useCallback(() =>{
setSalary((prevSalary)=>prevSalary+500);
},[salary])
 return (<>
 <div>
  {memoTitle}
  <Count text="Age" count={age} />
  <Button handleClick={incrementAge}>Increment Age</Button>
  <Count text="Salary" count={salary} />
  <Button handleClick={incrementSalary}>Increment Salary</Button>
 </div>
 </>)
}
export default ParentComponent;