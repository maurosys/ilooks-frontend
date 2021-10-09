import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Header from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";
import LeftSidebar from "@components/Sidebar/LeftSidebar";
import ProductsFilterOptions from "@components/Common/ProductsFilterOptions";
import ProductsCard from "@components/products/ProductsCard";
import { ApplicationState } from "@store/index";
import { Products as ProductsPros } from "@store/ducks/products/types";
import { loadResquestProduct } from "@store/ducks/products/actions";
import { GetServerSideProps } from "next";
import { getAPIClient } from "@services/api";

//TYPES
interface StateProps {
  products: ProductsPros[];
}

// const hookClass = ({ products }: StateProps) => {
//   // const dispatch = useDispatch();
//   // useEffect(()=> {
//   //   dispatch(loadResquestProduct());
//   // },[])

//   return <Category {...products} products={products} />;
// };

const Products = ({ products }: StateProps) => {
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
              <span className="dot"></span> Produtos
            </h2>
          </div>

          <div className="row">
            <LeftSidebar col={3} />

            <div className="col-lg-9 col-md-12">
              <ProductsFilterOptions onClick={handleGrid} />

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

// const mapStateToProps = (state: ApplicationState) => ({
//   products: state.products.data,
// });

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category, sub_category, provider } = ctx.query;
  const apiClient = getAPIClient(ctx);
  let products = [];

  try {
    const response = await apiClient.get("/product", {
      params: {
        limit: 10,
        categoryId: category,
        subCategoryId: sub_category,
        providerId: provider,
      },
    });

    products = response.data.products.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      image: item.details_product[0].photos[0],
      imageHover: item.details_product[0].photos[0],
      qty: item.quantity_all,
      provider: item.provider.name,
      providerId: item.provider.id,
      materialType: item.materialType,
      details_product: item.details_product,
      total: item.quantity_all,
    }));

    // products = [...response.data.products];
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: {
      products,
    },
  };
};

export default Products;
