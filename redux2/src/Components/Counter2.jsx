import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INC2 } from "../Redux/actionType";

function Counter2() {
  const data = useSelector((ts) => ts.count2);
  const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter 2</h1>
      <h1>{data}</h1>
      <button disabled={data.count2 == 0 }onClick={()=>dispatch({type : INC2})}>Sqaure</button>
    </div>
  );
}

export default Counter2;
