import React,{useState,useEffect} from 'react'

const UserList =()=> {
    const [users,setUsers] = useState([]);
    const [term,setTerm] = useState("");
    useEffect(()=>{

        const fetchUsers = async () =>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
            const json = await res.json();
            setUsers(json);
            console.log(json);
        };
        fetchUsers();
    },[])

    //renderUser list items
    // let renderUser = users.map((user)=>{
    //     return (<div key={user.id}>
    //         <p>{user.name}</p>
    //     </div>)
    // });

    //Filtered userslist
    let filteredUsers = users.filter(({name})=>{
        return name.indexOf(term)>=0;
    }).map((user)=>{
        return (<div key={user.id}>
            <p>{user.name}</p>
        </div>)
    })
  return (
    <div>
        <h2>Users List</h2>
        <input type='text' value={term} onChange={(e)=>setTerm(e.target.value)} />
    <div>{filteredUsers}</div>
    </div>
  )
}

export default UserList