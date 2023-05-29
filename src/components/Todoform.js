import React, {useState} from 'react'

function Todoform() {
    const
  return ([input, setInput] =useState('')

    <form className="todo-form">
        <input type="text" 
        placeholder="Add a todo" 
        value={input}
        name="text" 
        className='todo-input'/>
        </input>
        <button className='todo-button'>Add todo</button>
         
    </form>
  )
}

export default Todoform