import React from "react";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        <h2>{this.props.header}</h2>
        <ul className="product-list">
          {this.props.list.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
