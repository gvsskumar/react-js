import React,{useState,useMemo} from 'react'

const Factorial = () => {
  const [number,setNumber] = useState(1);
  const factNum = useMemo(() => FactorialNumber(number),[number]);
  const ChangeNumber = (event) => {
    setNumber(Number(event.target.value));
  }  
  return (
    <div>
        <input type='number' onChange={ChangeNumber} value={number} />
        <p>{number} is Factorial of : {factNum}</p>
    </div>
  )
}

const FactorialNumber = (n) =>{
    console.log(`factorialOf(${n}) called!`);
    return n<=0?1:n*FactorialNumber(n-1)
}
export default Factorial