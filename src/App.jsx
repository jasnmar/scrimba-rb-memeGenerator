//import { useState } from 'react'
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

import './App.css'
import Header from './components/Header/Header'
import Meme from './components/Meme/Meme'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Meme />
    </>
  )
}

export default App
