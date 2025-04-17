import React from 'react'

const TodoItem = ({item}) => {
  return (
    <div>
        <p>{item.name} <button>Delete</button></p>
    </div>
  )
}

export default TodoItem