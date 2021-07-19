import { useState } from "react";
import Link from "next/link";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import { Wishlist } from "../../store/ducks/WishList/types";
import { useEffect } from "react";

interface CartPorductProps {
  wishlist: Wishlist[];
}

const CartProduct = ({ wishlist }: CartPorductProps) => {
  const dispatch = useDispatch();
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(1);

  let cartItems =
    wishlist && wishlist.length > 0 ? (    
      wishlist.map((data, idx) => {
        return (
          <>          
            <tr key={idx}>
              <td className="product-thumbnail">
                <Link href={`/product/${data.id}`}>
                  <a>
                    <img src={data.image} alt="item" />
                  </a>
                </Link>
              </td>

              <td className="product-name">
                <Link href={`/product/${data.id}`}>
                  <a>{data.title}</a>
                </Link>
                <ul>
                  <li>
                    Color: <strong>Light Blue</strong>
                  </li>
                  <li>
                    Size: <strong>XL</strong>
                  </li>
                  <li>
                    Material: <strong>Cotton</strong>
                  </li>
                </ul>
              </td>

              <td className="product-price">
                <span className="unit-amount">
                  {new Intl.NumberFormat("br-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(data.price)}
                </span>
              </td>
            </tr>
          </>
        );
      })
    ) : (
      <tr>
        <td className="product-thumbnail" colSpan={5}>
          <p>Lista Vazia.</p>
        </td>
      </tr>
    );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Produto</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  };
};

export default connect(mapStateToProps)(CartProduct);
