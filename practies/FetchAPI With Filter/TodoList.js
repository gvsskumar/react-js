import React,{useState,useEffect} from 'react'

const TodoList =()=> {
    const [todos,setTodos] = useState([]);
    const [term,setTerm] = useState("");
    useEffect(()=>{

        const fetchTodos = async () =>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
            const json = await res.json();
            setTodos(json);
            console.log(json);
        };
        fetchTodos();
    },[])

    //renderUser list items
    // let renderUser = users.map((user)=>{
    //     return (<div key={user.id}>
    //         <p>{user.name}</p>
    //     </div>)
    // });

    //Filtered userslist
    let filteredTodos = todos.slice(0,10).filter(({title})=>{
        return title.indexOf(term)>=0;
    }).map((todo)=>{
        return (<div key={todo.id}>
            <p>{todo.title}</p>
        </div>)
    })
  return (
    <div>
        <h2>Todo List</h2>
        <input type='text' value={term} onChange={(e)=>setTerm(e.target.value)} />
    <div>{filteredTodos}</div>
    </div>
  )
}

export default TodoList;