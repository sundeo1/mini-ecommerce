import React from "react";
import Layout from "../hocs/Layout";
import { Link } from "react-router-dom";

import Groceries from "../assets/images/groceries.jpg";

const Home = () => {
  return (
    <Layout title="Home" content="">
      <h1 className="display-4 mt-5">Shop</h1>
      <h2 className="fs-4 fw-light fst-italic mt-3">
        Where you can buy the worlds greatest groceries...
      </h2>
      <div className="mt-5 bg-light p-5 rounded shadow">
        <h3 className="display-6">Check out Our Unreal Groceries box</h3>
        <p className="lead mt-3 mb-4">A box containing fresh items</p>
        <Link to="/checkout" className="btn btn-info shadow-sm">
          I WANT THESE GROCERIES
        </Link>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-3">
          <img className="img-fluid" src={Groceries} alt="Shop Groceries" />
        </div>
        <div className="offset-2 col-7">
          <p className="lead mt-3 mb-4">A box contains: </p>
          <ul className="list-group list-group-flush mt-5">
            <li className="list-group-item fs-4 lead">Matooke</li>
            <li className="list-group-item fs-4 lead">Sugar</li>
            <li className="list-group-item fs-4 lead">Irish</li>
            <li className="list-group-item fs-4 lead">Vegetables</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
