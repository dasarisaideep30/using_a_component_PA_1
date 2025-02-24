import React, { useState } from 'react'

function Likebutton(isLiked) {
    const [liked,setLiked]=useState(isLiked)
    return (
    <div>
      <button onClick={()=>setLiked(!liked)}
              style={{
                backgroundColor:liked? "red":"blue"}}
                >{liked?'Liked':'Like'}
                </button>
    </div>
  )
}

export default Likebutton;
