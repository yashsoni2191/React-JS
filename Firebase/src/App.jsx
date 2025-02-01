import { useState } from "react";
import "./App.css";
import {db} from "./firebase/fire";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState([]);
  const [edit, setEdit] = useState(null);

  const userCollection = collection(db, "users");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getDocs(userCollection);
    let a = data.docs.map((el) => {
      return { id: el.id, ...el.data() };
    });
    setState(a);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = { email, password };
    if (edit || null) {
      await addDoc(userCollection, obj);
      alert("Data Added");
    } else {
      let data = doc(db, "users", edit);
      await updateDoc(data, obj);
    }
    setEmail("");
    setPassword("");
    setEdit(null);
    getData();
  };

  const handleDelete = async (id) => {
    let del = doc(db, "users", id);
    await deleteDoc(del);
    getData();
  };

  const handleEdit = (i) => {
    setEdit(i);
    state.forEach((el) => {
      if (el.id == i) {
        setEmail(el.email);
        setPassword(el.password);
      }
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
      {state.map((el) => {
        return (
          <>
            <h1>
              {el.email} - {el.password}
            </h1>
            <button onClick={() => handleEdit(el.id)}>Edit</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </>
        );
      })}
    </>
  );
}

export default App;