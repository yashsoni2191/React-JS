import React from 'react'
// import './Logout.css'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem("inLogin")
        navigate("/login")
    }

  return (
    <div><button onClick={handleLogout}>Logout</button></div>
  )
}

export default Logout