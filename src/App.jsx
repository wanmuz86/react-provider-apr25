import { TodoProvider } from './lib/TodoContext'
import './App.css'
import Add from './components/Add'
import TodoList from './components/TodoList'

function App() {
  return (
    // wrap with TodoProvider to provide access to state and dispatch
    <TodoProvider>
      <Add/>
      <TodoList/>
    </TodoProvider>
  )
}

export default App
