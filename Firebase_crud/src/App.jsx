import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product/>
    </>
  )
}

export default App
