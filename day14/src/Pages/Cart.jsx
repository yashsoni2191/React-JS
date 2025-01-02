import React from "react";
// import './Cart.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {

  const [arr, setarr] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((Res) => {
        setarr(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [arr]);
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((Res) => {
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {arr.map((el) => (
        <div key={el.id}>
          <h1>{el.Title}</h1>
          <img src={el.ImageURL} alt={el.Title} height="200px" width="200px" />
          <br />
          <button>
            {" "}
            <Link to={`/editProduct/${el.id}`}>Edit</Link>
          </button>

          <button
            onClick={() => {
              handleDelete(el.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
