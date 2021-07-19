import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import { ToastContainer, toast, Slide } from "react-toastify";
import { card } from '../../store/ducks/Card/types';

interface CartContentProps {
  card: card[];
}

const CartContent = ({card} : CartContentProps) => {
  const total = card?.reduce((acc, card) => {
    if (card.price) {
      return acc + card.total;
    }
    return acc;
  }, 0)

  return (
    <section className="cart-area ptb-60">
      <ToastContainer transition={Slide} />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <form>
              <div className="cart-table table-responsive">
                <CartProduct />
              </div>

              <div className="cart-buttons">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-7">
                    <div className="continue-shopping-box">
                      <Link href="/">
                        <a className="btn btn-light">Continuar Comprando</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cart-totals">
                <h3>Carrinho Total</h3>

                <ul>
                  <li>
                    Subtotal <span>{new Intl.NumberFormat("br-BR", {
                      style: "currency",
                      currency: "BRL"
                    }).format(total)}</span>
                  </li>
                  <li>
                    Frete <span>0</span>
                  </li>
                  <li>
                    Total{" "}
                    <span>
                      <b>{new Intl.NumberFormat("br-BR", {
                      style: "currency",
                      currency: "BRL"
                    }).format(total)}</b>
                    </span>
                  </li>
                </ul>

                <Link href="/checkout">
                  <a className="btn btn-light">Fazer Checkout</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps)(CartContent);