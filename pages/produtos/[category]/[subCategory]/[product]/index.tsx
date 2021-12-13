import {useState}           from "react";
import Footer               from "../../../../../components/Layout/Footer";
import ProductImage         from "../../../../../components/product-details/ProductImage";
import ProductContent       from "../../../../../components/product-details/ProductContent";
import Facility             from "../../../../../components/shop-style-five/Facility";
import Header               from "../../../../../components/Layout/HeaderFixed";
import {GetServerSideProps} from "next";
import {getAPIClient}       from "@services/api";
import {ProductReponse}     from "@type/global";

interface StateProps {
  produto: ProductReponse;
}

type Props = StateProps;

export interface ImagesCarousel {
  id: any;
  image: any;
}

const Produto = ({produto}: StateProps) => {
  const [images, setImages] = useState<ImagesCarousel[]>([]);
  return (
    <>
      <Header/>

      <section className="products-details-area pt-60">
        <div className="container">
          <div className="row">
            <ProductImage images={images}/>

            <ProductContent product={produto} setImages={setImages}/>
          </div>

          {/*<DetailsTab />*/}
        </div>

        <br/>
        <br/>

        {/* <RelatedProducts products={products} /> */}

        <Facility/>
      </section>

      <Footer/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const {category, subCategory, product} = ctx.query;

  if (!product || !category || !subCategory) {
    return {
      redirect: {
        permanent:   false,
        destination: "/404",
      },
    };
  }

  var produto = undefined;

  try {
    console.log('URL:',`product/${category}/${subCategory}/${product}`);
    const response = await apiClient.get(`product/${category}/${subCategory}/${product}`);
    if (response.data.products.length > 0) {
      produto = response.data.products[0];
      if (produto) {
        return {
          props: {
            produto,
          },
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {
    redirect: {
      permanent:   false,
      destination: "/404",
    },
  };
};

export default Produto;
