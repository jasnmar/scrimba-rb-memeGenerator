import { useState } from 'react'
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

import './App.css'
import Header from './components/Header/Header'
import Meme from './components/Meme/Meme'

function App() {
  const [result, func] = useState("YNoes")
  console.log('result: ', result)
  return (
    <>
      <Header />
      <Meme />
      <h1>{result}</h1>
    </>
  )
}

export default App
