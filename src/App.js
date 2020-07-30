import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

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
      <input value={input} id="outlined-basic" label="Outlined" variant="outlined" onChange={event => setInput(event.target.value)} placeholder="Add task" />
      <Button variant="contained" color="primary" onClick={addToDo}>
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
