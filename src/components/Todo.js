import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {RiCloseCircleLine} from 'react-icons/ri'
import {GrNotification} from 'react-icons/gr'
import { Routes, Route, Link } from "react-router-dom";




function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({id: null, value: ''})





  return(
      <div>
           <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        {todos.map((todo,index) => (<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
          </div>

          <div className='icons'> 

          <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)} className = 'delete-icon'/>

          </div>
      <Link to="notifications"> Notifications</Link> 
      </div> 
      ))}
      
      </div>
  ) 
  
}



export default Todo