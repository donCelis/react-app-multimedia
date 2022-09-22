function Card({
  title = "Título de prueba",
  description = "Descripción de prueba",
  thumbnail,
  price,
  discountPercentage,
}) {

  const finalPrice = price - (price * discountPercentage / 100)

  return (
    <div className="card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex">
          <p className="me-2">price: {price}</p>
          <p className="me-2">disconunt: {discountPercentage}</p>
          <p className="me-2">total: {finalPrice}</p>
        </div>
        <a href="#" className="btn btn-primary me-3">
          Comprar
        </a>
        <a href="#" className="btn btn-success">
          Ver
        </a>
      </div>
    </div>
  );
}

export default Card;
