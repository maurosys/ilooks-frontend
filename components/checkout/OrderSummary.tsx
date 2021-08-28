import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { card } from "../../store/ducks/Card/types";

interface OrderSummaryProps {
  card: card[];
}

const OrderSummary = ({ card }: OrderSummaryProps) => {
  const correios = 0;
  const total = card?.reduce((acc, card) => {
    if (card.price) {
      return acc + card.total;
    }
    return acc;
  }, 0);

  return (
    <div className="order-table table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nome Produto</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          {card.map((data, idx) => (
            <tr key={idx}>
              <td className="product-name">
                <Link href="#">
                  <a>{data.title}</a>
                </Link>
              </td>

              <td className="product-total">
                <span className="subtotal-amount">
                  {data.qty}
                </span>
              </td>

              <td className="product-total">
                <span className="subtotal-amount">
                  {new Intl.NumberFormat("br-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(data.price * data.qty)}
                </span>
              </td>
            </tr>
          ))}

          <tr>
            <td className="order-subtotal">
              <span>Carrinho Subtotal</span>
            </td>

            <td className="order-subtotal-price">
              <span className="order-subtotal-amount">
                {new Intl.NumberFormat("br-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </span>
            </td>
          </tr>

          

          <tr>
            <td className="order-shipping">
              <span>Frete</span>
            </td>

            <td className="shipping-price">
              <span>
                {new Intl.NumberFormat("br-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(correios)}
              </span>
            </td>
          </tr>

          <tr>
            <td className="total-price">
              <span>Pedido Total</span>
            </td>

            <td className="product-subtotal">
              <span className="subtotal-amount">
                {new Intl.NumberFormat("br-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total + correios)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps)(OrderSummary);
