import React, { Component } from "react";
import Link from "next/link";
import { connect, useDispatch } from "react-redux";
import { addToWishlist, removeWishlist } from "../../store/ducks/WishList/action";
import { Wishlist as wishlistProps } from "../../store/ducks/WishList/types";

interface WishlistProps {
  closeWishlist: (item) => void;
  wishlists: wishlistProps[];
}

const Wishlist = ({ closeWishlist, wishlists }: WishlistProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className="modal right fade show shoppingWishlistModal"
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
            onClick={() => closeWishlist(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div className="modal-body">
            <h3> Lista de desejo {wishlists?.length}</h3>

            {wishlists.length > 0 ? 
              wishlists.map((data, index) => {
                return (
                  <div key={index} className="product-cart-content">
                    <div className="product-cart">
                      <div className="product-image">
                        <img src={data?.image} alt={data?.title} />
                      </div>
            
                      <div className="product-content">
                        <h3>
                          {/*ToDo: ajustar URL*/}
                          <Link href={`/product/${data.id}`}>
                            <a>{data?.title}</a>
                          </Link>
                        </h3>
                        <i
                          className="fa fa-trash fa-1x"
                          style={{ marginLeft: "200px", cursor: "pointer" }}
                          onClick={() => dispatch(removeWishlist(data.id))}
                        />
                        <div className="product-price">
                          <span className="price">
                            {new Intl.NumberFormat("br-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(data?.price)}
                          </span>                        
                        </div>                      
                      </div>
                    </div>
                  </div>
                );
              }) : <h4>Lista Vazia</h4> 
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlists: state.wishlist,
  };
};

export default connect(mapStateToProps)(Wishlist);
