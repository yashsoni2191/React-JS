import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { googleAuth } from './firebase/fire'

function App() {
  const [count, setCount] = useState(0)

  const handle = () => {
    googleAuth()
  }

  return (
    <>
     <button onClick={handle}>Google</button>
    </>
  )
}

export default App
