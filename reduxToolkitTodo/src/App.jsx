import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>learn about redux toolkit</h1>
    <AddToDo/>
    <Todos/>
    </>
   
  )
}

export default App
