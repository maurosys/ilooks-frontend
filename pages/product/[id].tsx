import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Router, useRouter } from "next/router";
import Footer from "../../components/Layout/Footer";
import ProductImage from "../../components/product-details/ProductImage";
import ProductContent from "../../components/product-details/ProductContent";
import DetailsTab from "../../components/product-details/DetailsTab";
import RelatedProducts from "../../components/product-details/RelatedProducts";
import Facility from "../../components/shop-style-five/Facility";
import Header from "../../components/Layout/HeaderFixed";
import { ApplicationState } from "../../store";
import { Products as ProductsPros } from "../../store/ducks/products/types";
import { loadResquestProduct } from "../../store/ducks/products/actions";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "@services/api";
import { ProductReponse } from "@type/global";

interface StateProps {
  product: ProductReponse;
}

type Props = StateProps;

export interface ImagesCarousel {
  id: any;
  image: any;
}

const Product = ({ product }: StateProps) => {
  // const dispatch = useDispatch();
  const [images, setImages] = useState<ImagesCarousel[]>([]);

  // const product = products.find(item => item.id === Number(id))

  // useEffect(()=> {
  //     dispatch(loadResquestProduct())
  // }, [])

  return (
    <>
      <Header />

      <section className="products-details-area pt-60">
        <div className="container">
          <div className="row">
            <ProductImage images={images} />

            <ProductContent product={product} setImages={setImages} />
          </div>

          {/*<DetailsTab />*/}
        </div>

        <br />
        <br />

        {/* <RelatedProducts products={products} /> */}

        <Facility />
      </section>

      <Footer />
    </>
  );
};

// const mapStateToProps = (state: ApplicationState) => ({
//   products: state.products.data,
// });

// export default connect(mapStateToProps)(Product);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);

  const { id } = ctx.query;

  if (!id) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  const uuid = id.toString().split("id").pop();

  var product = undefined;

  try {
    const response = await apiClient.get(`product/${uuid}`);
    if (response.data.products.length > 0) {
      product = response.data.products[0];
    }
  } catch (error) {}

  if (!product) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default Product;
