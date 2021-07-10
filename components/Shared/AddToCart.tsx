import Link from "next/link";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import checkout from "../../pages/checkout";
import { addToCart } from "../../store/ducks/Card/actions";
import { card } from "../../store/ducks/Card/types";

interface CardProps {
  card: card[];
}

const AddToCart = (data, { card }: CardProps) => {
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));

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
          handleAddToCart(data);
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
