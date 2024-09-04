import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'

import './App.css'
import UserContextProvider from './context/UserContextPorvider'

function App() {


  return (
    <UserContextProvider>
      <h1>Reat with chai</h1>
      <Login/>
      <Profile/>
     

    </UserContextProvider>
  )
}

export default App
