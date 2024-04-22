import React from 'react'
import  "./header.css";
import headerImage from "../../images/wp2599594.jpg"; 

const Header = () => {
  return (
    <div className='header'>
      <div className='headertitle'>
      <div className='headertitleup'>ReactJs</div>
      <div className='headertitledown'>Blog</div>
      </div>
      <div className='headerimage'>
        <img src={headerImage} alt="headerimage"  style={{backgroundColor:"red"}}/>
      </div>

    </div>
  )
}

export default Header