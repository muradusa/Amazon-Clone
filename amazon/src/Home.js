import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12325"
            title="The Lean StarUp"
            price={29.99}
            rating={5}
            image="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
          />
          <Product
            id="12325"
            title="Product 2"
            price={29.99}
            rating={5}
            image="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id="12325"
            title="Product 3"
            price={29.99}
            rating={5}
            image="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
          />
          <Product
            id="12325"
            title="Product 4"
            price={29.99}
            rating={5}
            image="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
          />

          <Product
            id="12325"
            title="Product 5"
            price={29.99}
            rating={5}
            image="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id="12325"
            title="Product 6"
            price={29.99}
            rating={5}
            image="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
