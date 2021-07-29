import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import { card } from "../../store/ducks/Card/types";
import { removeItem } from "../../store/ducks/Card/actions";

interface StateProps {
  card: card[];
  onClick: (display) => void;
}

const Cart = ({ card, onClick }: StateProps) => {
  const total = card?.reduce((acc, card) => {
    if (card.price) {
      return acc + card.total;
    }
    return acc;
  }, 0);

  const display = false;
  const dispatch = useDispatch();
  const closeCart = () => {
    onClick(display);
  };

  function removeitemCart(id) {
    dispatch(removeItem(id));
  }
  return (
    <div
      className="modal right fade show shoppingCartModal"
      style={{
        display: "block",
        paddingRight: "16px",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeCart}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div className="modal-body">
            <h3>Meu carrinho </h3>

            <div className="product-cart-content">
              {card?.length > 0
                ? card.map((card, idx) => (
                    <div className="product-cart" key={idx}>
                      <div className="product-image">
                        <img src={card.image} alt="image" />
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">
                            <a>{card.title}</a>
                          </Link>
                        </h3>
                        <span>Blue / XS</span>
                        <div className="product-price">
                          <span>{card.qty ? card.qty : 1}</span>
                          <span>x</span>
                          <span className="price">
                            {new Intl.NumberFormat("br-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(card.price)}
                          </span>
                          <i
                            className="fa fa-trash fa-1x"
                            style={{ marginLeft: "100px", cursor: "pointer" }}
                            onClick={() => removeitemCart(card.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                : "Carrinho esta vazio"}
            </div>

            <div className="product-cart-subtotal">
              <span>Subtotal</span>

              <span className="subtotal">
                {" "}
                {new Intl.NumberFormat("br-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </span>
            </div>

            <div className="product-cart-btn">
              <Link href="/checkout">
                <a className="btn btn-primary">Fazer o check-out</a>
              </Link>
              <Link href="/cart">
                <a className="btn btn-light">Ver carrinho de compras</a>
              </Link>
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

export default connect(mapStateToProps)(Cart);
