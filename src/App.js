import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import './App.css';

function App() {

  const [todos, setTodos] = useState(["Cook Dinner", "Go for a walk", "Commit code to git"]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary">
  		Add Task
	  </Button>
	  <ul>
	  	{todos.map(todos => (
	  		<li>{todos}</li>

	  		)
	  	)}
	  	
	  </ul>
	  	
	  
    </div>
  );
}

export default App;
