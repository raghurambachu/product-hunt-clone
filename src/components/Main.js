import React from "react";
import Products from "./Products";
import productsData from "../data/products";
import Card from "./Card";
import UpcomingProd from "./UpcomingProd";
import Company from "./Company";
import upcomingProdsData from "../data/upcomingProdsData";
import companies from "../data/companies";

function Main() {
  return (
    <div className="main-section container">
      <section className="content">
        <Products header="Today" list={productsData} />
      </section>
      <section className="sidebar">
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

export default Main;
