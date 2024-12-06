import { useState } from 'react'  
import './App.css'
import Product from './product'

function App() {
  const [state, setState] = useState({
    title : '',
    image : '',
    price : 0
  })

  const[arr, setArr]= useState([])

 const handlechange = (e)=>{
  const {name, value}= e.target
  setState({... state, [name]:value})
  console.log(state)
 }

 const handleCLick = (e)=>{
  e.preventDefault()
  setArr([... arr, state])
  console.log(arr)
}

  

  return (
    <>
      <form action="" onSubmit={handleCLick}>
        <input type="text" name="title" placeholder="Title" onChange={handlechange}/>
        <input type="text" name="image" placeholder='Image Url' onChange={handlechange}/>
        <input type="text" name="price" placeholder='Price' onChange={handlechange}/>
        <button type='submit'>Add</button>
      </form>
      <Product arr={arr}/>
    </>
  )
}

export default App
