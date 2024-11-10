import React from 'react';

function ItemDetail({ byId, byCategoria }) {
  return (
    <div>
      {byId ? (
        <div>
          <h2>{byId.title}</h2>
          <img src={byId.pictureUrl} alt={byId.title} />
          <p>{byId.description}</p>
          <p>${byId.price}</p>
        </div>
      ) : (
        <div>
          <h3>El item no existe</h3>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;