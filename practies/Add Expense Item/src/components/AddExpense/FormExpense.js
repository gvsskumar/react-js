import React,{useState} from 'react'
import './ExpenseForm.css';
function FormExpense(props) {
    const [title,setTitle] = useState(null);
    const [amount,setAmount] = useState(null);
    const [date,setDate] = useState(null);
    const submitHandler = (e) =>{
        e.preventDefault();
        const item = {
            title:title,
            amount:amount,
            date:new Date(date)
        } 
       props.onAddExpenseItem(item);
       console.log(item);
       setTitle('');
       setAmount('');
       setDate('');
    }
  return (
    <>
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
            <input type='text' name='title' onChange={(e)=>setTitle(e.target.value)} 
            value={title} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>    
            <input type='number' name='amount' onChange={(e)=>setAmount(e.target.value)}
            value={amount} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>    
            <input type='date' name='date' onChange={(e)=>setDate(e.target.value)}
            value={date} />
        </div>   
        </div> 
        <div className='new-expense__actions'>
        <button type='submit' name='add'>Add Expenses</button>
        </div>
          
        </form>
    </>
  )
}

export default FormExpense;