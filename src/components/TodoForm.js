import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";


function TodoForm(props) {
    const[input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
    };

//setInput('');

  return (
    <form className='todo-form'onSubmit={handleSubmit}>
        <input
         type="text" placeholder="Add a measure" value={input} name="text" className='todo-input' onChange={handleChange}/>
          <button>Add</button>
    </form>
   
  )
}

export default TodoForm