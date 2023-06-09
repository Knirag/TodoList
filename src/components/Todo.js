import React, { useState } from 'react'; //'react' module
import TodoForm from './TodoForm';// Imports the TodoForm component from the TodoForm file
import { RiCloseCircleLine } from 'react-icons/ri'; // Import the close/delete icon from the React Icons Library
import { TiEdit } from 'react-icons/ti'; // Import the Eddit/Modify Icon from the React Icon Library

const initialState = {
  id: null,
  value:''
  //Defining constant variable initialState with its 2 properties id & value, id  stores the identifier and value to store any data
}
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  //Todo function that contains the todos,completeTodo,removeTodo and updateTodo parameters
  //Willl show the list of todos and enable deletion,addition or editing
  const [edit, setEdit] = useState(initialState);
  // use of'useState' to initialize the edit state variable with that found in the initial state variable and setEdit function to update the edit variable.
 const myState = useState(initialState);
 //use of useState to initialize the myState variable with the initial state value and 
 console.log(myState);
 //logs the value of myState to the console
 const edit2 = myState[0];
 //assigning the first array element of mySate to the variable edit2
 const setEdit2 = myState[1];
 //assigning the second array element of mySate to the variable setEdit2
  const submitUpdate = value => {
   // variable declaration of submitUpdate function
    updateTodo(edit.id, value);
    //Updates a specific todo item with a new value using the updateTodo function
    setEdit({
      id: null,
      value: ''
    });
    //Resets the state of the edit variable
  };

  if (edit.id) {
    // If an edit ID exists, render the TodoForm component for editing the todo
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        //Assigns each todo item to the todo variable and the index to the index variable
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            {/* Button to remove the todo */}
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            {/* Button to edit the todo */}
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div>
      ))}
      {/* Render the TodoForm component for adding new todos */}
    </>
  );
}

export default Todo;
