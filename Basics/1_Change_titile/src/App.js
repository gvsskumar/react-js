//import React, { useCallback } from 'react';

import {React,useState,useCallback,useMemo} from 'react';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button';
import './App.css';

function App() {
  const [listTitle,setListTitle] = useState('My Lists');
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  },[]);
  const listItems = useMemo(()=>[5,3,1,10,9],[]);
  return (
    <div className="App">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change Title</Button>
    </div>
  );
}

export default App;
