import React from "react";

function Product(props) {
  return (
    <li>
      <article
        className={
          props.childClassNam + " flex product align-center space-between"
        }
      >
        <div className="prod-ls">
          <img src={props.product.url} alt={props.product.title} />
        </div>
        <div className="prod-center flex flex-col space-between">
          <div className="prod-header">
            <h3>{props.product.title}</h3>
            <p className="prod-desc">{props.product.desc}</p>
          </div>
          <div className="prod-footer flex">
            <p className="comment">
              <span>
                <i className="fas fa-comment"></i>
              </span>
              <span className="icon">{props.product.comments}</span>
            </p>
            <span className="tag">{props.product.tag}</span>
          </div>
        </div>
        <div className="prod-rs">
          <div className="upvotes flex flex-col justify-center align-center">
            <span>
              <i className="fas fa-caret-up"></i>
            </span>
            <p>{props.product.upvotes}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Product;
