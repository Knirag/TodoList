import React, { useState } from 'react';
import TodoForm from './TodoForm';// Imports the TodoForm component from the TodoForm file
import Todo from './Todo'; // Imports the Todo component from the Todo file

function TodoList() {
  const [todos, setTodos] = useState([]);
    //Declare TodoList function and state variable 'todos' and setter function 'setTodos'
//Function 'addTodo' to add a new todo to the 'todos' array
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) 
        // Check if the todo text is empty or contains only whitespace
    {
      return;
    }
    const newTodos = [todo, ...todos];
      // Create a new array 'newTodos' with the new todo at the beginning and the existing todos
    setTodos(newTodos);
     // Update the 'todos' state with the new array values
    console.log(...todos);
     // Logs the todos to the console
  };

  const removeTodo = id => {
    //Declaring function 'removeTodo' to remove a todo from the 'todos' array
    const removeArr = [...todos].filter(todo => todo.id !== id);
    // Filter out the todo with the provided id from the todos array
    setTodos(removeArr);
    //Update the 'todos' state with the filtered array
  };

  const updateTodo = (todoId, newValue) => {
    // Defining function 'updateTodo' to update a todo in the 'todos' array
    if (!newValue.text || /^\s*$/.test(newValue.text)) 
        // Check if the new value is empty or contains only whitespace
{
      return;
    }
    setTodos(prev =>
    // Update the 'todos' state by mapping through the existing todos and replacing a specific todo with its updated version.
      prev.map(item => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = id => {
    //Declaring function 'completeTodo' to mark a todo as complete/incomplete
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        // Invert the value of the 'isComplete' property for the todo item with the provided ID.
      }
      return todo;
    });
    setTodos(updatedTodos);
    // Update the 'todos' state with the updated array
  };

  return (
    <div>
      <h1>What Are We Doing Today?</h1>
      {/* Render the TodoForm component for adding new todos */}
      <TodoForm onSubmit={addTodo} />
      {/* Render the Todo component to display todos */}
      <Todo
        todos={todos} //Pass the todos array as a property
        completeTodo={completeTodo} //  Pass the completeTodo function as a prop
        removeTodo={removeTodo} //  Pass the removeTodo function as a prop
        updateTodo={updateTodo} // Pass the updateTodo function as a prop
      />
    </div>
  );
}

export default TodoList; /* Exports the TodoList component as the default export of this module, making it available for other parts of the application to import and use. */
