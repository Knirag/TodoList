import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    // Set focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    // Update the input state when the user types in the input field
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (typeof props.onSubmit === 'function') {
      // Create a new task object with a random ID and the input text
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        text: input
      };

      // Call the onSubmit function passed from the parent component and pass the new task object
      props.onSubmit(newTask);

      // Clear the input field after submitting the form
      setInput('');

      console.log('New task:', newTask);
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {/* Input field for entering the todo */}
      <input
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
      />
      {/* Button to submit the todo */}
      <button className='todo-button'>Add todo</button>
    </form>
  );
}

export default TodoForm;
