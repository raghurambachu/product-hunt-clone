import React from "react";
import Products from "./Products";
// import productsData from "../data/products";
import Card from "./Card";
import UpcomingProd from "./UpcomingProd";
import Company from "./Company";
import upcomingProdsData from "../data/upcomingProdsData";
import companies from "../data/companies";

import Modal from "./Modal";

class Main extends React.Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.state = {
      products: [],
      show: false,
    };
  }
  componentDidMount() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    this.setState(() => ({ products: products }));
  }
  showModal(e) {
    // Need to open a modal;
    this.setState(function (prevState) {
      return {
        show: !prevState.show,
      };
    });
  }
  handleEscape() {
    this.setState({ show: false });
  }
  handleAddProduct(product) {
    let products = [...this.state.products, product];
    this.setState(function (prevState) {
      return {
        products: prevState.products.concat(product),
      };
    });
    localStorage.setItem("products", JSON.stringify(products));
    this.setState(function (prevState) {
      return {
        show: false,
      };
    });
  }

  render() {
    return (
      <div className="main-section container">
        <section className="content">
          <button onClick={this.showModal} className="btn btn-add-prod">
            Add Product
          </button>
          <Modal
            onClose={this.showModal}
            handleEscape={this.handleEscape}
            visible={this.state.show}
            handleAddProduct={this.handleAddProduct}
          >
            Hello World I can see it.
          </Modal>

          <Products header="Today" list={this.state.products} />
        </section>
        <section className="sidebar ">
          <Card
            className="upcoming-products"
            childComponent={UpcomingProd}
            header="Upcoming Products"
            list={upcomingProdsData}
          />

          <Card
            className="hiring-now"
            childComponent={Company}
            header="Hiring Now"
            list={companies}
          />
        </section>
      </div>
    );
  }
}

export default Main;
