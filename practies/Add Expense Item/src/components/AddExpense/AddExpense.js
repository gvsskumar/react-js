import React from 'react'
import FormExpense from "./FormExpense";
import './NewExpense.css';
function AddExpense(props) {
  const AddExpenseItem = (expense) =>{ 
    props.onAddExpese(expense);
  }  
  return (
    <>
      <div className='new-expense'>
            <FormExpense onAddExpenseItem={AddExpenseItem} />
      </div>
        
    </>
  )
}

export default AddExpense;