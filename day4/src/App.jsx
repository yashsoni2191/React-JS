import React from "react";
import { useState } from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  }
  return (
    <center>
      <div>
        <h1>Counter</h1>
        <div className="App">
          <button onClick={decrease} id="'but1">-</button>
          <Counter a = {count}/>
          <button onClick={increase} id="'but1">+</button>
        </div>
      </div>
    </center>
  );
}

export default App;
