import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
  const [form, setform] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/username`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
      });

    setform({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
