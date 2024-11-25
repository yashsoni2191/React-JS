import React, { useState } from 'react'

function Counter() {
    const [state, setState] = useState(true)

  return (
    <div>
      
      {state == "show" ? <h1>Hey</h1> : <h1>HidenCOmponent</h1>}

      <button onClick={() => setState("show")}>Show</button>
      <button onClick={() => setState("hide")}>Hide</button>
    </div>
  )
}

export default Counter