import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter2() {
    const ans = useSelector(Store => Store.CC2)
    const ans1 = useDispatch()

    const Up1 = ()=>{
        ans1({type : "INC"})
    }
    const Down1 = ()=>{
        ans1({type : "DEC"})
    }
  return (
    <div>
        <button onClick={Up1}>+</button>
        <h1>{ans}</h1>
        <button onClick={Down1}>-</button>
    </div>
  )
}

export default Counter2