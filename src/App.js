import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {

  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');

  useEffect(() => {

  	//to listen when there is a change in db

  	db.collection('todo').onSnapshot( snapshot => {
  		setTodos(snapshot.docs.map(doc => doc.data().todo))
  	})
  	
  	},[]);
  

  const addToDo = (event) => {
  	event.preventDefault();

  	db.collection('todo').add({
  		todo: input
  	})

  	setInput('');
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <FormControl>
		  <InputLabel>Add Task...</InputLabel>
		  <Input value={input} onChange={event => setInput(event.target.value)}/>
	</FormControl>
      <Button disabled={!input} variant="contained" color="primary" onClick={addToDo}>
  		Add Task
	  </Button>
	  <ul>
	  	{
	  		todos.map(todo => (
	  		<Todo text={todo} />
	  		)
	  	)}
	  	
	  </ul>
	  	
	  
    </div>
  );
}

export default App;
