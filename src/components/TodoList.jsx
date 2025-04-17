import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div>
        <h2>List To do</h2>

        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </div>
  )
}

export default TodoList