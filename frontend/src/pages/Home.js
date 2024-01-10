import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Fragment>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}