import React,{useState,useEffect} from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import Section from './components/UI/Section';
function App() {
  const [tasks,setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch ('https://rjs-movielist-default-rtdb.firebaseio.com/tasks.json')
      if(!response.ok){
        throw new Error('Request failed');
      }
      const data = await response.json();
      const loadedTasks = [];
      for(const taskKey in data){
        loadedTasks.push({id:taskKey,text:data[taskKey].text});
      }
      setTasks(loadedTasks);
    } catch(err){
      setError(err.message||'Something went wrong!')
    }
    setIsLoading(false);
  };
  useEffect(()=>{
    fetchTasks();
  },[]);
  const taskAddHandler = (task) =>{
    setTasks((prevTasks) =>prevTasks.concat(task) );
  }
 return (
    <React.Fragment>
      <Section><h2>Tasks Module</h2></Section>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks}  error={error} loading={isLoading}  />
    </React.Fragment>
  );
}

export default App;
