import React from 'react'
import { useTodo } from '../lib/TodoContext'

const TodoItem = ({item}) => {
  const {dispatch} = useTodo()
  const handleClick = () => {
    dispatch({type:'REMOVE_TODO', payload:{id:item.id} })
  }
  return (
    <div>
        <p>{item.name} 
        <button onClick={handleClick}>Delete</button></p>
    </div>
  )
}

export default TodoItem