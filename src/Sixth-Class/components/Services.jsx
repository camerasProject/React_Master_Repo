import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
    const navigate=useNavigate();// to navigate on a particular path
  return (
    <div>
      <h1>Services Page</h1>
      <button onClick={()=>{navigate("java")}}>Go to JAVA FULL STACK</button>
      <button onClick={()=>{navigate("python")}}>Go to PYTHON FULL STACK</button>
      <button onClick={()=>{navigate("mern")}}>Go to MERN FULL STACK</button>

      <Outlet/>
    </div>
  )
}

export default Services
