import React from 'react'
import "./login.css";
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm">
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." />
      <button className="loginButton">Login</button>
    </form>
      <NavLink to="/register"><button className="loginRegisterButton">Register</button></NavLink>
  </div>
  )
}

export default Login