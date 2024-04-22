import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaWhatsappSquare, FaInstagramSquare, FaSearch } from "react-icons/fa";
import "./topbar.css";
import a from "../../images/a.png";

const Topbar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topleft'>
        <NavLink to="/"><FaFacebook /></NavLink>
        <NavLink to="/"><FaTwitter /></NavLink>
        <NavLink to="/"><FaWhatsappSquare /></NavLink>
        <NavLink to="/"><FaInstagramSquare /></NavLink>
      </div>
      <div className='topcenter'>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/write">Write</NavLink></li>
           {user ? <li><NavLink to="/logout">Logout</NavLink></li> :
           <>
           <li><NavLink to="/login">Login</NavLink></li>
           <li><NavLink to="/register">Register</NavLink></li>
           </>
           }
          </ul>
        </nav>
      </div>
      <div className='topright'>
      <NavLink to="/settings"><img src={a} alt="profile_image"  className='logo'/></NavLink>
          <div className="search">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Topbar;