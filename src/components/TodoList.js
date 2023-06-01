import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    // Check if the todo text is empty or contains only whitespace
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = id => {
    // Filter out the todo with the provided ID from the todos array
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    // Check if the new value is empty or contains only whitespace
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev =>
      prev.map(item => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = id => {
    // Toggle the isComplete property of the todo with the provided ID
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What Are We Doing Today?</h1>
      {/* Render the TodoForm component for adding new todos */}
      <TodoForm onSubmit={addTodo} />
      {/* Render the Todo component to display todos */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
