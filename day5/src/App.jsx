import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [state, setState] = useState(0);

  function increase() {
    setState(state + 1);
  }

  function decrease() {
    setState(state - 1);
  }

  return (
    <div>

      <Counter/>
        <button onClick={increase}>+</button>
        <div>{state}</div>
        <button disabled = {state == 0} onClick={decrease}>-</button>
    </div>
  );
}

export default App;
