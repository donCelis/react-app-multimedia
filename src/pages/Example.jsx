import { useParams } from "react-router-dom"; // hooks
import { products } from "../data";

function Example() {
  const { id } = useParams();

  const { title, description, price, brand, thumbnail } = products.find(
    (item) => item.id === Number(id)
  );

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
