import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
  const [todos, SetTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos];

    SetTodos(newTodos);
  };

const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id){
      todo.isComplete = !todo.isComplete
    }
    return todo
  })
  SetTodos(updatedTodos);
}

  return (
    <div>
      <h1>What Cyber Security measures would you like to add?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo
      todos={todos}
      completeTodo={completeTodo} />
    </div>
  )
}

export default TodoList