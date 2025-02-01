import React from "react";

import { products } from "../../data/Data";
import "./Product.css";
import ProductCard from "./ProductCard";
function Products() {
  return (
    <section className="product-lists p-5">
      <div className="container">
        <div className="row">
          {products.map((product,index) => (
           <ProductCard key={index + 1} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
