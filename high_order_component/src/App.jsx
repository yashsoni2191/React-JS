import { useEffect, useState } from "react";
import "./App.css";
import A, {C, deepak } from "./HOC";


function App() {
  const [state, setState] = useState(true);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setArr(res);
        setState(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <A arr={arr} dd={state} />
    </>
  );
}

export default App;
