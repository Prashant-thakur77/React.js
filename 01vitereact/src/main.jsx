import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App! chai</h1>
    </div>
  )

}

/*const Reactelement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'click me to visit google'
}*/
const anotheruser="chai aur react"

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

//how react accepts the code in behind the scene working
const reactElement= React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
 ' click me to open google',
 anotheruser

)


createRoot(document.getElementById('root')).render(

    reactElement

)
