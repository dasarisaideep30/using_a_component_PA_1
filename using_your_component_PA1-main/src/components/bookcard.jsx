import React from 'react';

function Bookcard({ image, name, genre, author }) {
  return (
    <>
      <div>
        <img src={image} />
        <h1>{name}</h1>
        <p>{genre}<br />
        Author: {author}</p>
      </div>
    </>
  );
}

export default Bookcard;
