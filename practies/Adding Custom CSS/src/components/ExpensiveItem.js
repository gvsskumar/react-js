import React from 'react'
import "./ExpenseItem.css";
function ExpensiveItem() {
  return (
    <div className='expense-item'>
       <div>March 28th 2023</div> 
       <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>
        $278.33
        </div>
        </div>
    </div>
  )
}

export default ExpensiveItem;