import React, { useState } from 'react'

const Add = () => {
    const [newTodo,setNewTodo] = useState('')
  return (
    <div>
        <h2>Add new To Do</h2>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button>Add Item</button>
    </div>
  )
}

export default Add