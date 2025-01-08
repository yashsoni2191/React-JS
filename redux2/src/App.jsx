import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Counter2 from './Components/Counter2'
import Counter3 from './Components/Counter3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <Counter2/>
      <Counter3/>
    </>
  )
}

export default App
