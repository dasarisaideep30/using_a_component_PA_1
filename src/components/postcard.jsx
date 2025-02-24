import React from 'react'
import Likebutton from './likebutton'

function Postcard({profileImage, username, content, isLiked}) {
  return (
    <div>
         <img src={profileImage} alt="Profile Image"/>
         <p>{username}</p>
         <p>{content}</p>
         <Likebutton isLiked={isLiked}/>
    </div>
  )
}

export default Postcard
