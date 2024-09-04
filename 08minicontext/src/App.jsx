import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextPorvider'

function App() {


  return (
    <UserContextProvider>
      <h1>Reat with chai</h1>
      <Login/>
      <Profile/>
      <UserContextProvider/>

    </UserContextProvider>
  )
}

export default App
