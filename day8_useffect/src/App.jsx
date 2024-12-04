import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [arr, setArr] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((res)=>{
      setArr(res)
      console.log(arr);
      
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>{arr.map((el)=>{
      return ( <div className='card000'>
          <img src={el.image} alt="" width="200px" height="200px" />
          <h1>{el.title}</h1>
          <p>{el.description}</p>
          <p>{el.price}</p>
        </div>
      )
    })}
      <div>
        
      </div>
    </>
  )
}

export default App
