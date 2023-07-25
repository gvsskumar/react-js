import React from 'react'
import "./App.css";
import UserList from './components/tasks/HOC/UserList'
import TodoList from './components/tasks/HOC/TodoList'
const App =()=> {
  return (
    <><div>
          <h2>Higher Order Component</h2>
     <div className='section'>
         <UserList />
         <TodoList />
      </div> 
    </div>
    
    </>
  )
}

export default App