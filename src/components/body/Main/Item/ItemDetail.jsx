

function ItemDetail({ Id }) {
  return (
    <div>
      {byId ? (
        <div>
          <h2>{Id.title}</h2>
          <img src={Id.pictureUrl} alt={byId.title} />
          <p>{Id.description}</p>
          <p>${Id.price}</p>
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