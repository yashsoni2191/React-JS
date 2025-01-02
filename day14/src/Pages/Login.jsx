import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/username?email=${form.email}`)
      .then((res) => res.json())
      .then((Res) => {
        if (Res.length > 0) {
          if (Res[0].password === form.password) {
            alert("Login Successful");
            navigate("/");
            localStorage.setItem("inLogin", "true");
          } else {
            alert("Wrong Password");
          }
        } else {
          alert("User not Registered");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;