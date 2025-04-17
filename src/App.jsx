import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <Add/>
      <TodoList/>
    </>
  )
}

export default App
