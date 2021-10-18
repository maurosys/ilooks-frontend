//SERVICE
import api, { getAPIClient } from "@services/api";
import { CategoryRequest, SubCategoryRequest } from "@type/request";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import InstagramPhoto from "../components/Common/InstagramPhoto";
import Partner from "../components/Common/Partner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import AddsModal from "../components/Modal/AddsModal";
import BannerSlider from "../components/shop-style-five/BannerSlider";
import CategoryTypes from "../components/shop-style-five/CategoryTypes";
import Facility from "../components/shop-style-five/Facility";
import Products from "../components/shop-style-five/Products";
import ProductsOffer from "../components/shop-style-five/ProductsOffer";

import { ApplicationState } from "../store";
import { Products as ProductsPros } from "../store/ducks/products/types";

//TYPES
interface StateProps {
  productss: ProductsPros[];
  categories: CategoryRequest[];
  subCategories: SubCategoryRequest[];
}

type Props = StateProps;

const Index = ({ productss, categories, subCategories }: Props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //dispatch(loadResquestProduct());
    loadProducts();
  }, []);

  const loadProducts = async () => {
    api
      .get("/product?stock=true&limit=16")
      .then((response) => {
        const _products: ProductsPros[] = response.data.products.map((prod) => {
          let imageUrl = "";

          if (
            prod.details_product &&
            prod.details_product.length > 0 &&
            prod.details_product[0].photos.length > 0
          ) {
            imageUrl = prod.details_product[0].photos[0];
          }

          return {
            id: prod.id,
            title: prod.name,
            price: prod.price,
            image: imageUrl,
            imageHover: imageUrl,
            qty: prod.quantity_all,
            provider: prod.provider.name,
            providerId: prod.provider.id,
            materialType: prod.materialType,
            details_product: prod.details_product,
            total: 0,
            active: true,
          };
        });
        setProducts(_products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title> Ilooks | Home </title>
      </Head>
      <Header categories={categories} subCategories={subCategories} />

      <BannerSlider />

      <Facility />

      <CategoryTypes />

      <Products products={products} />

      <ProductsOffer />

      <Partner />

      <Subscribe />

      <InstagramPhoto />

      <Footer />

      <AddsModal />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const api = getAPIClient(context);
  // const categories = await api.get("category");
  // const subCategories = await api.get("subcategory");

  return {
    props: {},
    revalidate: 10,
  };
};

// // const mapStateToProps = (state: ApplicationState) => ({
// //   productss: state.products.data,
// // });

// export default connect(mapStateToProps)(Index);

export default Index;
