import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <h1>HOC</h1>
      <HOCRed cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
      <HOCBlue cmp={Counter}/>
    </>
  );
}

function HOCRed(props){
  return (
    <div>
      <h4 style={{background : 'Red'}}><props.cmp/></h4>
    </div>
  )
}

function HOCGreen(props){
  return (
    <div>
      <h4 style={{background : 'Green'}}><props.cmp/></h4>
    </div>
  )
}

function HOCBlue(props){
  return (
    <div>
      <h4 style={{background : 'Blue'}}><props.cmp/></h4>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> {setCount(count +1)}}>+</button>
      <button onClick={()=> {setCount(count -1)}} disabled={count == 0}>-</button>
    </div>
  );
}

export default App;
