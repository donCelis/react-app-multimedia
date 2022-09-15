function Example() {
  const { title, description, price, brand, thumbnail } = {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/2/1.jpg",
      "https://dummyjson.com/image/i/products/2/2.jpg",
      "https://dummyjson.com/image/i/products/2/3.jpg",
      "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    ],
  };

  return (
    <section className="container bg-light my-4">
      <div className="row px-2 py-4">
        <aside className="col-12 col-md-6">
          <figure className="m-0">
            <img className="w-100" src={thumbnail} alt="" />
          </figure>
        </aside>
        <aside className="col-12 col-md-6">
          <article>
            <strong>{brand}</strong>
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>precio final</h4>
            <p>{price}</p>
            <button>Add to cart</button>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default Example;
