import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {RiCloseCircleLine} from 'react-icons/ri'
import {GrNotification} from 'react-icons/gr'


function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({id: null, value: ''})





  return todos.map((todo,index) => (<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
          </div>

          <div className='icons'> 

          <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)} className = 'delete-icon'/>

          <GrNotification/>

          </div>
      
      </div> 
      ))
      
  
}

export default Todo