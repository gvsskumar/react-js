import React,{useState} from "react";
import AddExpense from "./components/AddExpense/AddExpense";
import ExpenseList from "./components/ExpenseList/ExpenseList";
const expenseData = [{
  title:"Sony TV",
  amount:250,
  date: new Date(2020, 7, 14)
},
{
  title:"Laptop Service",
  amount:500,
  date: new Date(2021, 3, 12)
},
{
  title:"Car Service",
  amount:250,
  date: new Date(2020, 2, 25)
}]
function App() {
  const [expeses,setExpeses] = useState(expenseData);
  const ExpenseHandler =(expese) =>{
    setExpeses((prevExpense)=>{
      return [expese,...prevExpense]
    })
  }
  return (
    <div className="App">
      <AddExpense onAddExpese={ExpenseHandler} />
      <ExpenseList data={expeses}  />
    </div>
  );
}

export default App;
