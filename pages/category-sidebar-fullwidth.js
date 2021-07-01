import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import ProductsFilterOptions from "../components/Common/ProductsFilterOptions";
import ProductsCard from "../components/products/ProductsCard";

const hookClass = (props) => {
  const products  = useSelector((state) => state.products);
  return (
    <Category
      {...props}
      products={products}
    />
  );
};

const Category = (products,CompareProducts) => {
  const [gridClass, setGridClass] = useState("");

  function handleGrid(e) {
    setGridClass(e);
  }

  return (
    <>
      <Header />

      <section className="products-collections-area ptb-60">
        <div className="container-fluid">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Mulheres
            </h2>
          </div>

          <div className="row">
            <LeftSidebar col={3} />

            <div className="col-lg-9 col-md-12">
              <ProductsFilterOptions onClick={ (e) => handleGrid(e.target.value)} />

              <div
                id="products-filter"
                className={`products-collections-listing row ${gridClass}`}
              >
                <ProductsCard
                  products={products}
                  CompareProducts={CompareProducts}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

export default hookClass;
