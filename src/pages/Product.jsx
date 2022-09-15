import { products } from "../data";

function Product() {
  const {
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    images,
    brand,
  } = products[6];
  const newImages = images.slice(0, 4);
  const finalPrice = price - (price * discountPercentage) / 100;
  return (
    <section className="container bg-light my-4 p-4">
      <div className="row align-items-center gx-md-5 gx-0">
        <div className="col-12 col-md-6">
          <img className="img-fluid w-100" src={thumbnail} alt={title} />
          <div className="row mt-3">
            {newImages.map((img, index) => (
              <div className="col-3" key={index}>
                <img
                  style={{ objectFit: "cover", height: '5rem' }}
                  className="img-fluid w-100"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <strong className="m-0">{brand}</strong>
          <h3 className="fs-1">{title}</h3>
          <p>{description}</p>
          <div className="d-flex align-items-center gap-4">
            <strong className="m-0 fs-5">$ {finalPrice.toFixed(0)}</strong>
            <p className="m-0 bg-success text-white p-1 rounded-2">
              {discountPercentage} %
            </p>
          </div>
          <p className="m-0 text-decoration-line-through">$ {price}</p>
          <button className="btn btn-primary mt-3">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Product;
