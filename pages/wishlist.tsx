import Header from "../components/Layout/HeaderFixed";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";
import WishList from "../components/cart/wishlist";

const Cart = () => {
  return (
    <>
      <Header />

      <WishList />

      <Facility />

      <Footer />
    </>
  );  
};

export default Cart;
