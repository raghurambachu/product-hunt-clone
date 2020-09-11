import React from "react";

class Modal extends React.Component {
  constructor() {
    super();
    this.escFunction = this.escFunction.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  escFunction(e) {
    if (e.keyCode === 27) {
      this.props.handleEscape();
    }
  }

  handleAddProduct(e) {
    e.preventDefault();
    const product = {
      url: e.target.elements["url"].value,
      title: e.target.elements["title"].value,
      desc: e.target.elements["desc"].value,
      comments: e.target.elements["comments"].value,
      tag: e.target.elements["tag"].value,
      upvotes: e.target.elements["upvotes"].value,
    };

    e.target.reset();

    this.props.handleAddProduct(product);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  render() {
    const visibility = this.props.visible;
    if (!visibility) return null;
    return (
      <div className="modal">
        <h2>Add Product</h2>
        <form
          className="modal-content flex flex-col justify-center "
          onSubmit={this.handleAddProduct}
          action="/"
        >
          <div className="form-group flex align-center">
            <label htmlFor="url">Avatar</label>
            <input id="url" type="text" placeholder="Url" />
          </div>
          <div className="form-group flex align-center">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" placeholder="Product Title" />
          </div>
          <div className="form-group flex align-center">
            <label htmlFor="desc">Desc</label>
            <textarea
              placeholder="description"
              name="description"
              id="desc"
            ></textarea>
          </div>
          <div className="form-group flex align-center">
            <label htmlFor="comments">Comments</label>
            <input id="comments" type="number" placeholder="Comment Count" />
          </div>
          <div className="form-group flex align-center">
            <label htmlFor="tag">Tag</label>
            <input id="tag" type="text" placeholder="Tag" />
          </div>
          <div className="form-group flex align-center">
            <label htmlFor="upvotes">Upvotes</label>
            <input id="upvotes" type="number" placeholder="Upvotes Count" />
          </div>
          <div className="actions flex justify-center align-center">
            <button className="btn btn-submit">Submit</button>
            <button onClick={this.onClose} className="btn btn-close-modal">
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
