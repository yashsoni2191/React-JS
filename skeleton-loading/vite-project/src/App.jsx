import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from './Components/Article'
import User from './Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <header>React Skeleton loading</header>
      </div>
      <div className='content'>
        <Article/>
        <User/>
      </div>
    </>
  )
}

export default App
