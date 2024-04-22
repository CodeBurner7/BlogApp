import React from 'react'
import { NavLink } from 'react-router-dom';
import "./sidebar.css"
import { FaFacebook, FaTwitter, FaWhatsappSquare, FaInstagramSquare, FaSearch } from "react-icons/fa";
import profileimage from "../../images/R.jpg"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar_item">
      <span className="sidebar_title">ABOUT ME</span>
      <img
        src={profileimage}
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebar_item">
      <span className="sidebar_title">CATEGORIES</span>
      <ul className="sidebar_list">
        <li className="sidebarListItem">
          <NavLink className="link" to="/">
            Life
          </NavLink>
        </li>
        <li className="sidebarListItem">
          <NavLink className="link" to="/">
            Music
          </NavLink>
        </li>
        <li className="sidebarListItem">
          <NavLink className="link" to="/">
            Sport
          </NavLink>
        </li>
        <li className="sidebarListItem">
          <NavLink className="link" to="/">
            Style
          </NavLink>
        </li>
        <li className="sidebarListItem">
          <NavLink className="link" to="/">
            Tech
          </NavLink>
        </li>
        <li className="sidebarListItem">
          <NavLink className="link" to="/">
            Cinema
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="sidebar_item">
      <span className="sidebar_title">FOLLOW US</span>
      <div className="sidebar_social">
      <NavLink to="/" className="icon"><FaFacebook /></NavLink>
        <NavLink to="/" className="icon"><FaTwitter /></NavLink>
        <NavLink to="/"className="icon"><FaWhatsappSquare /></NavLink>
        <NavLink to="/"className="icon"><FaInstagramSquare /></NavLink>
      </div>
    </div>
  </div>
  )
}

export default Sidebar