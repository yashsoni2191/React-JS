import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './EditProduct.css';

function EditProduct() {
  const { id } = useParams();
  const [form, setForm] = useState({
    Title: "",
    ImageURL: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="edit-product-container">
      <div className="edit-product-card">
        <h2 className="edit-product-title">Edit Product</h2>
        <form onSubmit={handleSubmit} className="edit-product-form">
          <input
            type="text"
            placeholder="Product Title"
            name="Title"
            value={form.Title}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="ImageURL"
            placeholder="Product Image URL"
            value={form.ImageURL}
            onChange={handleChange}
            className="form-input"
            required
          />
          <button type="submit" className="submit-btn">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
