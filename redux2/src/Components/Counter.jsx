import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INC, DEC } from "../Redux/actionType";

function Counter() {
  const data = useSelector((st) => st.count);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter 1</h1>
      <button onClick={()=>dispatch({type : INC})}>+</button>
      <h1>{data}</h1>
      <button disabled={data == 0 }onClick={()=>dispatch({type : DEC})}>-</button>
    </div>
  );
}

export default Counter;
