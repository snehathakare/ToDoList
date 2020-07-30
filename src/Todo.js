import React, {useState} from 'react';


function Todo(props) {

  return (
    <div className="todo">
      <li>{props.text}</li>  
	  
    </div>
  );
}

export default Todo;