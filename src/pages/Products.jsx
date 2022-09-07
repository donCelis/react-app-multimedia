import Card from "../components/Card";
import { products } from "../data";

function Products (){
  return (
    <section className="container">
      <div className="row gy-4 py-5">
        {products.map((item, index) => (
          <aside className="col-md-4" key={index}>
            <Card {...item} />
          </aside>
        ))}
      </div>
    </section>
  );
}

export default Products