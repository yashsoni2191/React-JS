import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
  const [arr, setarr] = useState([]);
  
  useEffect(() => {
    fetch(`https://form-product-validation.onrender.com/products`)
      .then((res) => res.json())
      .then((Res) => {
        setarr(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [arr]);

  const handleDelete = (id) => {
    fetch(`https://form-product-validation.onrender.com/products/${id}`, {
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
    <div className="cart-container">
      {arr.map((el) => (
        <div key={el.id} className="product-card">
          <img src={el.ImageURL} alt={el.Title} className="product-image" />
          <h2 className="product-title">{el.Title}</h2>
          <div className="button-group">
            <button className="edit-btn">
              <Link to={`/editProduct/${el.id}`} className="btn-link">Edit</Link>
            </button>
            <button
              onClick={() => handleDelete(el.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
