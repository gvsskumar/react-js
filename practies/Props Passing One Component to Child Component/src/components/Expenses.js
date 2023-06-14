import React from 'react'
import ExpensiveItem from "./ExpensiveItem";
function Expenses(props) {
  return (
    <div>
      <ExpensiveItem 
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
        />
      <ExpensiveItem 
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
        />
      <ExpensiveItem 
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
        />
      <ExpensiveItem 
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </div>
  )
}

export default Expenses;