import React, {useState} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
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
