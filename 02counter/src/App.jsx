import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] =useState(15)
  

  //let counter=15;

  const addValue=()=>{
   
   //counter=counter +1
   if(counter<20){
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)

   }
   else{
    console.log('value connot be greater than 20')
   }

   

  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      console.log('value cannot be negative')
    }
   
    
   
  }
  

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add value</button>
    <br  />
    <button
    onClick={removeValue}>remove value</button>
    </>

  )
}

export default App