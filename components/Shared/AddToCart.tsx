import Link from "next/link";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import checkout from "../../pages/checkout";
import { addToCart, removeItem } from "../../store/ducks/Card/actions";
import { card } from "../../store/ducks/Card/types";

interface CardProps {
  card: card[];
}

const AddToCart = (data, { card }: CardProps) => {
  const dispatch = useDispatch();

  function checkIsExist(item) {
    const cartLocalStorage = localStorage.getItem("@ilooksecommerce_cart");
    if (typeof window !== "undefined" && cartLocalStorage !== null) {
      const cart = JSON.parse(cartLocalStorage);
      const productInCart = cart.find((item) => data.id === item.id);
      if (!productInCart) {
        handleAddToCart({ ...item, qty: 1 });
        return;
      } else {
        dispatch(removeItem(data.id));
        handleAddToCart({ ...item, qty: productInCart.qty + 1 });
      }
    } else {
      handleAddToCart({ ...item, qty: 1 });
    }
  }

  const handleAddToCart = (data) => {
    dispatch(addToCart({ ...data, total: data.price * 1 }));

    toast.success("Adicionado com sucesso", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <Link href="#">
      <a
        className="btn btn-light"
        onClick={(e) => {
          e.preventDefault();
          checkIsExist(data);
        }}
      >
        Adicionar ao Carrinho
      </a>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  card: state.card,
});

export default connect(mapStateToProps)(AddToCart);
