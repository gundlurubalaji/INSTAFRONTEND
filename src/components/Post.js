import React, { useEffect, useState } from "react";
import share_icon from './icons/send.png'
import more from './icons/more.png'
import heart from './icons/heart.png'
import './postpage.css'


const Post = (props) => {
  const {data}=props
  const [allPost, setAllPost] = useState([])
  const [status, setStatus] = useState("")
  useEffect(() => {
    fetch('https://instaclonebackend-bzkz.onrender.com/posts', {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(data => data.json())
      .then((data) => {
        setAllPost(data.allposts)
        setStatus(data.status)
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="card-container">
      {
        allPost.map((post, index) => {
          return (
            <div key={index}>
              <div className='post-container'>
                <div className="header">
                  <div className="information">
                    <h1 className="name">{data.name}</h1>

                  </div>
                  <div className="three-dot">
                    <span><img className='more-icon' src={more} /></span>
                  </div>
                </div>
                <p className="location">{data.location}</p>
                <div className="image-box">
                  <img className='post-image' src={data.PostImage} />
                </div>
                <div className="footer">
                  <span><img className='heart-icon' src={heart} /></span>
                  <span><img className='send-icon' src={share_icon} /></span>
                  <p className='title'>{data.description}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}


export default Post