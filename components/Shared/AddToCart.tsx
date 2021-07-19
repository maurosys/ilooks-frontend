import Link from "next/link";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import checkout from "../../pages/checkout";
import { addToCart } from "../../store/ducks/Card/actions";
import { Products } from "../../store/ducks/products/types";

interface CardProps {
  data: Products;
}

const AddToCart = ({data}: CardProps) => {
  const qty = 1;
  const dispatch = useDispatch();
  const handleAddToCart = (data: Products) => {
    dispatch(addToCart({ ...data, total: data.price * qty, qty: qty }));

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
    <div>
      <a
        className="btn btn-light"
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart(data);
        }}
      >
        Adicionar ao Carrinho
      </a>
    </div>
  );
};



export default AddToCart;
