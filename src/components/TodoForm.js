import React, { useState, useEffect, useRef } from 'react';
/* Importing  functions and hooks from the 'react' library.
useState:manage state variables
useEffect: 
useRef: store and access variables easier 
*/
function TodoForm(props) { // TodoForm function declration that recieves props as its parameter
  const [input, setInput] = useState('');

  const inputRef = useRef(null);
 // Create a reference variable 'inputRef' using the 'useRef' hook while setting its initial value to 'null'
  useEffect(() => {
    // Set focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
      // Update the 'input' state with the entered value in the input field
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    // Function is event holder for form submission with e as its parameter
    e.preventDefault();

    if (typeof props.onSubmit === 'function') {
      // Create a new task object with a random ID and the input text
      const newTask = {
        id: Math.floor(Math.random() * 10000), // Randomizes id value with number value ranging between 0 and 9999
        text: input // Assigned current value of input variable
      };

      // Call the onSubmit function passed from the parent component and pass the new task object
      props.onSubmit(newTask);

      // Clear the input field after submitting the form
      setInput('');
  // Logs the new task to the console
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

export default TodoForm; /* Exports the TodoForm component as the default export of this module, making it available for other parts of the application to import and use. */
