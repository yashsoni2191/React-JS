import React from 'react'
// import './Navbar.css'
import  {NavLink}  from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li> 
            <li><NavLink to={"/product"}>Product</NavLink></li>
            <li><NavLink to={"/Cart"}>Cart</NavLink></li>
            <li><NavLink to={"/Login"}>Login</NavLink></li>
            <li><NavLink to={"/Signup"}>Signup</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar