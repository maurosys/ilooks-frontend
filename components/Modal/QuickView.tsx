import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { Products } from '../../store/ducks/products/types';
import { addToCart, removeItem } from '../../store/ducks/Card/actions';
import { card } from '../../store/ducks/Card/types';

interface QuickViewProps {
  modalData: Products,
  closeModal: (close) => void,
  card: card[]
}




const QuickView = ({closeModal,modalData, card}: QuickViewProps) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(1);
  const modalOpen = false;
  console.table(qty)

  function addItemCart(item) {
    dispatch(addToCart(item));

    toast.success("Adicionado ao carrinho", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  const teste = card?.find((item) => modalData.id === item.id);

  function checkIsExist (item) {
    if (!teste) {
      addItemCart(item)
      return;
    } else {
      dispatch(removeItem(item.id))
      addItemCart({...item, qty})      
    }
    return
  }
  

  const modalClose = (close) => {
    return closeModal(modalClose);
  }

  const IncrementItem = ( ) => {
    if (qty < 10) {
      return setQty(qty + 1);
    } else {
      return null;
    }
  };

  const DecreaseItem = () => {
    if (qty > 1) {
      return setQty(qty - 1);
    }
  };

  return (
    <div
      className="modal fade productQuickView show"
      style={{ paddingRight: "16px", display: "block" }}
    >
      <ToastContainer />
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button
            type="button"
            onClick={modalClose}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="fas fa-times"></i>
            </span>
          </button>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="productQuickView-image">
                <img src={modalData?.image} alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="product-content">
                <h3>
                  <Link href="#">
                    <a>{modalData?.title}</a>
                  </Link>
                </h3>

                <div className="price">
                  <span className="new-price">${modalData?.price}</span>
                </div>

                <ul className="product-info">
                  <li>
                    <span>Vendedor:</span>{" "}
                    <Link href="#">
                      <a>Lereve</a>
                    </Link>
                  </li>
                  <li>
                    <span>Disponivel:</span>{" "}
                    <Link href="#">
                      <a>Em estoque (7 items)</a>
                    </Link>
                  </li>
                  <li>
                    <span>Tipo do produto:</span>{" "}
                    <Link href="#">
                      <a>Camiseta</a>
                    </Link>
                  </li>
                </ul>

                <div className="product-color-switch">
                  <h4>Cor:</h4>

                  <ul>
                    <li>
                      <Link href="#">
                        <a title="Black" className="color-black"></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a title="White" className="color-white"></a>
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="#">
                        <a title="Green" className="color-green"></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          title="Yellow Green"
                          className="color-yellowgreen"
                        ></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a title="Teal" className="color-teal"></a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="product-size-wrapper">
                  <h4>Tamanho:</h4>

                  <ul>
                    <li>
                      <Link href="#">
                        <a>PP</a>
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="#">
                        <a>P</a>
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="#">
                        <a>M</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>GG</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>GGG</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="product-add-to-cart">
                  <div className="input-counter">
                    <span className="minus-btn" onClick={DecreaseItem}>
                      <i className="fas fa-minus"></i>
                    </span>
                    <input
                      type="text"
                      value={qty}
                      min={min}
                      max={max}
                      onChange={e => setQty(Number(e.target.value))}
                    />
                    <span className="plus-btn" onClick={IncrementItem}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => checkIsExist(modalData)}
                  >
                    <i className="fas fa-cart-plus"></i> Adicionar ao Carrinho
                  </button>
                </div>

                <Link href={`/products/${modalData?.id}`}>
                  <a className="view-full-info">Ver mais detalheres</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps)(QuickView);
