import React, { useState } from "react";
// import './Login.css'
import { useNavigate } from "react-router-dom";

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
          if (Res[0].password == form.password) {
            alert("login Successfull");

            navigate("/");
            console.log(Res);
            localStorage.setItem("inLogin", "true");
          } else {
            alert("Wrong Password");
            localStorage.setItem("inLogin")
          }
        } else {
          alert("User not Registered");
          localStorage.setItem("inLogin")
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleInputChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Login;
