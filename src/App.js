import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input, Container, Typography } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');

  useEffect(() => {

  	//to listen when there is a change in db

  	db.collection('todo').orderBy('timestamp', 'desc').onSnapshot( snapshot => {
  		setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo}) ))
  	})
  	
  	},[]);
  

  const addToDo = (event) => {
  	event.preventDefault();

  	db.collection('todo').add({
  		todo: input,
  		timestamp: firebase.firestore.FieldValue.serverTimestamp()
  	})

  	setInput('');
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <h1 className="app__header">To Do List</h1>
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
    	  		<Todo todo={todo} />
    	  		)
    	  	)}
    	  	
    	  </ul>
        </Typography>
	  </Container>	
	  
    </div>
  );
}

export default App;
