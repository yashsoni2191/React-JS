import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEC2 } from "../Redux/actionType";

function Counter3() {
  const [user, setUser] = useState("");
  const data = useSelector((sts) => sts.count3);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setUser(value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); 
    dispatch({ type: DEC2, payload: Number(user) }); 
  };

  return (
    <div>
      <h1>Counter 3</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={user} onChange={handleChange} />
        <input type="submit" disabled={user === "0"} />
      </form>
      <h2>Current Redux Value: {data}</h2>
    </div>
  );
}

export default Counter3;
