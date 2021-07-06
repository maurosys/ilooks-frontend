import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import { Products as ProductsPros } from "../../store/ducks/products/types";
import {removeItem } from '../../store/ducks/Card/actions';

interface StateProps {
  products: ProductsPros[];
  onClick: (display) => void;
}



const Cart = ({ products, onClick }: StateProps) => {
  const display = false;
  const dispatch = useDispatch();

  const closeCart = () => {
    onClick(display);
  };

  function removeitemCart(id) {
    dispatch(removeItem(id))
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
            <h3>Meu carrinho {products.length} </h3>

            <div className="product-cart-content">
              {products?.length > 0
                ? products.map((product, idx) => (
                    <div className="product-cart" key={idx}>
                      <div className="product-image">
                        <img src={product.image} alt="image" />
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">
                            <a>{product.title}</a>
                          </Link>
                        </h3>
                        <span>Blue / XS</span>
                        <div className="product-price">
                          <span>{product.qty}</span>
                          <span>x</span>
                          <span className="price">${product.price}</span>
                          <i 
                            className="fa fa-trash fa-1x" style={{marginLeft: '100px', cursor: 'pointer'}}
                            onClick={()=> removeitemCart(product.id)} 
                          />
                        </div>
                      </div>
                    </div>
                  ))
                : "Empty"}
            </div>

            <div className="product-cart-subtotal">
              <span>Subtotal</span>

              <span className="subtotal">total</span>
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
    products: state.card
    //addedItems: state.addedItems
  };
};

export default connect(mapStateToProps)(Cart);
