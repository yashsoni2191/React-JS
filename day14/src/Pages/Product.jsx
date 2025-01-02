import React from "react";
// import './Product.css'
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

function Product() {
  const [form, setform] = useState({
    Title: "",
    ImageURL: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

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
      })
      .catch((err) => {
        console.log(err);
      });

      setform({
        Title: "",
        ImageURL: "",
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ImageURL"
          placeholder="ImageURL"
          onChange={handleChange}
         />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Product;
