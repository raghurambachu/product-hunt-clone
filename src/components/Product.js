import React from "react";

class Product extends React.Component {
  render() {
    return (
      <li>
        <article
          className={
            this.props.childClassNam +
            " flex product align-center space-between"
          }
        >
          <div className="prod-ls">
            <img src={this.props.product.url} alt={this.props.product.title} />
          </div>
          <div className="prod-center flex flex-col space-between">
            <div className="prod-header">
              <h3>{this.props.product.title}</h3>
              <p className="prod-desc">{this.props.product.desc}</p>
            </div>
            <div className="prod-footer flex">
              <p className="comment">
                <span>
                  <i className="fas fa-comment"></i>
                </span>
                <span className="icon">{this.props.product.comments}</span>
              </p>
              <span className="tag">{this.props.product.tag}</span>
            </div>
          </div>
          <div className="prod-rs">
            <div className="upvotes flex flex-col justify-center align-center">
              <span>
                <i className="fas fa-caret-up"></i>
              </span>
              <p>{this.props.product.upvotes}</p>
            </div>
          </div>
        </article>
      </li>
    );
  }
}

export default Product;
