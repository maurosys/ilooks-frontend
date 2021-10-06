import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Header from "../components/Layout/HeaderFixed";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import ProductsFilterOptions from "../components/Common/ProductsFilterOptions";
import ProductsCard from "../components/products/ProductsCard";
import { ApplicationState } from "../store";
import { Products as ProductsPros } from "../store/ducks/products/types";
import { loadResquestProduct } from "../store/ducks/products/actions";

interface StateProps {
  products: ProductsPros[];
}

const hookClass = ({ products }: StateProps) => {
  // const dispatch = useDispatch();
  // useEffect(()=> {
  //   dispatch(loadResquestProduct());
  // },[])

  return <Category {...products} products={products} />;
};

const Category = ({ products }: StateProps) => {
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
              <ProductsFilterOptions
                onClick={(e) => handleGrid(e.target.value)}
              />

              <div
                id="products-filter"
                className={`products-collections-listing row ${gridClass}`}
              >
                <ProductsCard products={products} />
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

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(hookClass);
