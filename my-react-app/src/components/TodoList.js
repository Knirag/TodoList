import React, { useState } from 'react';
import TodoForm from './Todoform';
import Todo from './Todo';


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.test || /^\s*$/.test(todo.text)){
        return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(...todos);

  }
  return (
    <div>
      <h1>What Are We Doing Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo />
    </div>
  );
}

export default TodoList;
