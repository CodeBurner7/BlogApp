import React from 'react'
import "./register.css";
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..." />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." />
      <button className="registerButton">Register</button>
    </form>
    <NavLink to="/login"><button className="loginRegisterButton">Login</button></NavLink>
  </div>
  )
}

export default Register