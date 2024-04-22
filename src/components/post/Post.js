import React from 'react'
import "./post.css";
import { NavLink } from 'react-router-dom';
import img from "../../images/OIP.jpg"; 

const Post = ({imageko}) => {
  return (
    <div className="post">
    <img className="post_img" src={imageko} alt="post_image"
    />
    <div className="post_info">

      <div className="post_categories">
        <span className="post_cate">
          <NavLink className="link" to="/">Music</NavLink>
        </span>
        <span className="postCat">
          <NavLink className="link" to="/">Life</NavLink>
        </span>
      </div>

      <span className="post_title">
        <NavLink to="/" className="link">Lorem ipsum dolor sit amet</NavLink>
      </span>
      <hr />
      <span className="post_date">1 hour ago</span>
    </div>
    <p className="post_description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum  magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>
  )
}

export default Post