import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');
  

  const addToDo = (event) => {
  	event.preventDefault();
  	setTodos([...todos, input]);
  	setInput('');
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input value={input} id="outlined-basic" label="Outlined" variant="outlined" onChange={event => setInput(event.target.value)} />
      <Button variant="contained" color="primary" onClick={addToDo}>
  		Add Task
	  </Button>
	  <ul>
	  	{
	  		todos.map(todos => (
	  		<li>{todos}</li>
	  		)
	  	)}
	  	
	  </ul>
	  	
	  
    </div>
  );
}

export default App;
