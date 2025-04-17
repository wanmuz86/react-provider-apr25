import React, { useState } from 'react'
import { useTodo } from '../lib/TodoContext'


const Add = () => {
    const [newTodo,setNewTodo] = useState('')
    // Decide needs function (dispatch) or state? (state)
    // We need function/method ADD_ACTION ->dispatch
    const {dispatch} = useTodo()

    const handleAddItem = () => {
      dispatch({type:'ADD_TODO', payload:{id:Date.now(), name:newTodo}})
      
      // to rest the form
      setNewTodo('')
    }

  return (
    <div>
        <h2>Add new To Do</h2>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default Add