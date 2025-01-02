import React, { useState } from "react";
import './Product.css';
import { useNavigate } from "react-router-dom";

function Product() {
  const [form, setform] = useState({
    Title: "",
    ImageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/Cart")
      })
      .catch((err) => {
        console.log(err);
      });

    setform({
      Title: "",
      ImageURL: "",
    });
  };

  return (
    <div className="product-container">
      <div className="product-form-container">
        <h2 className="form-title">Add a New Product</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            placeholder="Title"
            name="Title"
            value={form.Title}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="ImageURL"
            placeholder="Image URL"
            value={form.ImageURL}
            onChange={handleChange}
            className="form-input"
          />
          <button type="submit" className="submit-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default Product;
