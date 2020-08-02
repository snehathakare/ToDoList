import React, {useState} from 'react';
import { Button, List, ListItem, ListItemText} from '@material-ui/core';
import db from './firebase';

function Todo(props) {

  return (
    <div className="todo">
      <List>
        <ListItem>
          <ListItemText primary="Todo" secondary={props.todo.todo} />
            <Button variant="contained" color="primary" onClick={event => db.collection('todo').doc(props.todo.id).delete()} >
              X DELETE ME
            </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;