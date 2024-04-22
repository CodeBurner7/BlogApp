import React from 'react'
import "./posts.css"
import Post from '../post/Post'
import a from "../../images/cc.webp";
import b from "../../images/s.jpg";
import c from "../../images/t.jpg";
import d from "../../images/c.jpg";
import e from "../../images/p.webp";
import f from "../../images/Rr.jpg";



const Posts = () => {
  return (
    <div className='posts'>
        <Post imageko={a}/>
        <Post imageko={b}/>
        <Post imageko={c}/>
        <Post imageko={d}/>
        <Post imageko={e}/>
        <Post imageko={f}/>
    </div>
  )
}

export default Posts