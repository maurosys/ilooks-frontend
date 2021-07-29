import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";
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

interface StateProps {
  products: ProductsPros[];
}

type Props = StateProps;

const Product = ({ products }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    dispatch(loadResquestProduct());
  }, []);

  return (
    <>
      <Header />

      <section className="products-details-area pt-60">
        <div className="container">
          <div className="row">
            <ProductImage />

            <ProductContent product={product} />

            <DetailsTab />
          </div>
        </div>

        <RelatedProducts products={products} />

        <Facility />
      </section>

      <Footer />
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(Product);
