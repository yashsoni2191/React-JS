import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter2 from './Counter2'

function Counter() {
    const anst = useSelector(Store=>Store.CC1)
    const ans1 = useDispatch()
    console.log(anst)

    const Up = ()=>{
        ans1({type : "INC1"})
    }
    const Down = ()=>{
        ans1({type : "DEC1"})
    }
  return (
    <div>
        <h1>Counter 1</h1>
        <div>
            <button onClick={Up}>+</button>
            <h1>{anst}</h1>
            <button onClick={Down}>-</button>
        </div>
        <h1>Counter2</h1>
        <Counter2/>
    </div>
  )
}

export default Counter