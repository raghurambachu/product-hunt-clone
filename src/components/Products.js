import React from "react";
import Product from "./Product";

function Products(props) {
  return (
    <div className="products">
      <h2>{props.header}</h2>
      <ul className="product-list">
        {props.list.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
