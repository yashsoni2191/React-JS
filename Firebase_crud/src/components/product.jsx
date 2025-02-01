import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/fire";
import "../App.css";

function Product() {
  const useCollaction = collection(db, "product");
  console.log(useCollaction);

  const [state, setState] = useState({
    name: "",
    img: "",
    price: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const [arr, setArr] = useState([]);
  const [edit, setEdit] = useState(null);
  console.log(edit);

  const getData = async () => {
    let data = await getDocs(useCollaction);
    console.log(data);

    let product = data.docs.map((el) => {
      return { id: el.id, ...el.data() };
    });
    setArr(product);
  };

  const handle = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit == null) {
      addDoc(useCollaction, state);
      getData();
      console.log(arr);
    } else {
      let update = doc(db, "product", edit);
      updateDoc(update, state);
      getData();
    }

    setState({
      name: "",
      img: "",
      price: "",
    });
    setEdit(null);
  };

  const handleDelete = async (id) => {
    console.log(id);
    let del = doc(useCollaction, id);
    await deleteDoc(del);
    getData();
  };

  const handleEdit = (id) => {
    setEdit(id);
    arr.forEach((el) => {
      if (el.id == id) {
        setState({
          name: el.name,
          img: el.img,
          price: el.price,
        });
      }
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Product Form</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handle}
          value={state.name}
        />
        <input
          type="text"
          placeholder="URL"
          name="img"
          onChange={handle}
          value={state.img}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          onChange={handle}
          value={state.price}
        />
        <br />
        <br />
        {edit == null ? (
          <button id="submit">submit</button>
        ) : (
          <button id="edit">Edit</button>
        )}
      </form>

      <div id="product">
        {arr.map((el) => {
          return (
            <div id="main">
              <div id="img">
                <img src={el.img} alt="" width={"200px"} />
              </div>
              <h3>{el.name}</h3>
              <p>₹{el.price}</p>
              <button
                id="edit"
                onClick={() => {
                  handleEdit(el.id);
                }}
              >
                Edit
              </button>
              <button
                id="delete"
                onClick={() => {
                  handleDelete(el.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
