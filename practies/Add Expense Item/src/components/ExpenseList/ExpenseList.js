import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
function ExpenseList(props) {
  return (
    <>
    <ul className='expenses-list'>
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
    </>
  )
}

export default ExpenseList;