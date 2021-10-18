import { useState } from "react";
import Link from "next/link";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import { card } from "../../store/ducks/Card/types";
import {
  addToCart,
  removeItem,
  getAll,
  alterQuantity,
} from "../../store/ducks/Card/actions";
import { useEffect } from "react";

import { formatToUggly } from "@utils/formatToUggly";

interface CartPorductProps {
  card: card[];
}

const CartProduct = ({ card }: CartPorductProps) => {
  const dispatch = useDispatch();
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(1);

  let teste = 0;

  const deleteCard = (id: any) => {
    dispatch(removeItem(id));
  };

  const IncrementItem = (data: card) => {
    dispatch(alterQuantity(data));
  };

  let cartItems =
    card && card.length > 0 ? (
      card.map((data, idx) => {
        return (
          <tr key={idx}>
            <td className="product-thumbnail">
              <Link
                href="/product/[id]"
                as={`/product/${formatToUggly({
                  name: data.title,
                  id: data.id,
                })}`}
              >
                <a>
                  <img src={data.image} alt="item" />
                </a>
              </Link>
            </td>

            <td className="product-name">
              <Link
                href="/product/[id]"
                as={`/product/${formatToUggly({
                  name: data.title,
                  id: data.id,
                })}`}
              >
                <a>{data.title}</a>
              </Link>
              <ul>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Cor:
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      background: data.productDetail.color,
                      marginRight: 3,
                      marginLeft: 3,
                    }}
                  />
                </li>
                <li>
                  Tamanho: <strong>{data.productDetail.size}</strong>
                </li>
                <li>
                  Composição: <strong>{data.materialType}</strong>
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

            <td className="product-quantity">
              <div className="input-number">
                <input
                  type="number"
                  value={data.qty}
                  min="1"
                  max={15}
                  onChange={(e) => {
                      if (Number(e.target.value) > 15) {
                          e.target.value = '15';
                      }
                      IncrementItem({
                          ...data,
                          total: data.price * Number(e.target.value),
                          qty: Number(e.target.value),
                      })
                  }
                  }
                />
              </div>
            </td>

            <td className="product-subtotal">
              <span className="subtotal-amount">
                {new Intl.NumberFormat("br-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(data.price * data.qty)}
              </span>

              <Link href="#">
                <a
                  className="remove"
                  onClick={() => deleteCard(data.productDetail)}
                >
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
          <p>Nenhum produto foi adicionado ao carrinho.</p>
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
            <th scope="col">Valor Unitário</th>
            <th scope="col">Quantidade</th>
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
