import "./App.css";
import { useState } from "react";

function App() {
  let [state, setState] = useState(0);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loginEmail, setloginEmail] = useState("");
  let [loginPassword, setloginPassword] = useState("");
  let [arr, setArr] = useState([]);

  const handleClick = () => {
    let obj = {
      name,
      email,
      password,
    };
      setArr([...arr,obj])
    alert("Signup Successfull");
    setState(0);
  };

  const handleLoginClick = ()=> {
    let a = arr.filter((el) => {
      if(el.email == loginEmail && el.password == loginPassword){
        return el
      }
    })

    if(a.length > 0){
      alert("Login successfull")
    }
    else{
      alert("Wrong Credentials")
    }
  }
  

  return (
    <div className="App">
      {state == 0 ? (
        <div className="login">
          <h1>Login</h1>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            onChange={(email) => {
              setloginEmail(email.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
            onChange={(pass) => {
              setloginPassword(pass.target.value);
            }}
          />{" "}
          <br />
          <button onClick={handleLoginClick}>Login</button> <br />
          <span
            onClick={() => {
              setState(1);
            }}
          >
            Create an account !
          </span>
        </div>
      ) : (
        <div className="signup">
          <h1>Signup</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
            onChange={(signName) => {
              setName(signName.target.value);
            }}
          />{" "}
          <br />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            onChange={(signEmail) => {
              setEmail(signEmail.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
            onChange={(signPass) => {
              setPassword(signPass.target.value);
            }}
          />{" "}
          <br />
          <button onClick={handleClick}>Signup</button> <br />
          <span
            onClick={() => {
              setState(0);
            }}
          >
            Create an account !
          </span>
        </div>
      )}
    </div>
  );
}

export default App;

