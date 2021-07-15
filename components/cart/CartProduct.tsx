import { useState } from "react";
import Link from "next/link";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import { card } from "../../store/ducks/Card/types";
import { addToCart, removeItem, getAll } from "../../store/ducks/Card/actions";
import { useEffect } from "react";

interface CartPorductProps {
  card: card[];
}

const CartProduct = ({ card }: CartPorductProps) => {
  const dispatch = useDispatch();
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(1);

  let teste = 0

  const deleteCard = (id: number) => {
    dispatch(removeItem(id));
  };

  const IncrementItem = (data: card) => {
    dispatch(removeItem(data.id))
    dispatch(addToCart({...data}))
  };

  const DecreaseItem = (data: card) => {
    
      dispatch(removeItem(data.id))
      dispatch(addToCart({...data}))
      return setQty(qty - 1);
    
  };

  let cartItems =
    card && card.length > 0 ? (
      card.map((data, idx) => {        
        return (          
          <tr key={idx}>            
            <td className="product-thumbnail">
              <Link href="#">
                <a>
                  <img src={data.image} alt="item" />
                </a>
              </Link>
            </td>

            <td className="product-name">
              <Link href="#">
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
              <span className="unit-amount">${data.price}</span>
            </td>

            <td className="product-quantity">
              <div className="input-number">
               
                <input
                  type="number"
                  value={data.qty}
                  min="1"
                  max={10}
                  onChange={(e) => IncrementItem({...data, total: data.price * Number(e.target.value) , qty: Number(e.target.value)}) }
                />
                
              </div>
            </td>

            <td className="product-subtotal">
              <span className="subtotal-amount">${data.price * data.qty}</span>

              <Link href="#">
                <a className="remove" onClick={() => deleteCard(data.id)}>
                  <i className="far fa-trash-alt"></i>
                </a>
              </Link>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td className="product-thumbnail" colSpan={5}>
          <p>Empty.</p>
        </td>
      </tr>
    );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps)(CartProduct);
