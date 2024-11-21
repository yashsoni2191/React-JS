import React, { useState } from 'react'

function App() {
    let[state, setState]  = useState("100")
  return (
    <div><h1>{state}</h1></div>
  )
}

export default App