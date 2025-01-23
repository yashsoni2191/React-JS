import { useState } from "react";
import "./App.css";
import db from './firebase/fire'
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState([])

  const userCollection = collection(db, "users");

  useEffect(()=>{
    getData()
  },[])

  const getData = ()=>{
    let data = getData(userCollection)
    let a = data.docs.map((el)=>{
      return{id : el.id , ...el.data()}
    })
    setState(a)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = { email, password };
    await addDoc(userCollection, obj);
    alert("Data Added")
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <button>Submit</button>
      </form>
      
    </>
  );
}

export default App;
