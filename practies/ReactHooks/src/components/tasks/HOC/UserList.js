import React from 'react'
import HOComponent from './HOComponent';
const UserList =({data})=> {
   
    //renderUser list items
    let renderUser = data.map((user)=>{
        return (<div key={user.id}>
            <p>{user.name}</p>
        </div>)
    });

    
  return (
    <div>
    <div>{renderUser}</div>
    </div>
  )
}
const SearchUsers = HOComponent(UserList,"users")
export default SearchUsers