import React, { Fragment } from "react";
import EssayForm from "../components/EasyForm";
import SomeGrid from "../components/SomeGrid";
// import ProductGrid from "../components/products/ProductGrid";

const Home = () => {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Album example</h1>
          <p className="lead text-muted">
            Tell me the kind of product you want and I'll give you a
            recommendation.
          </p>
          <EssayForm/>
          <SomeGrid></SomeGrid>
        </div>
      </section>
    </main>
  );
};

export default Home;
