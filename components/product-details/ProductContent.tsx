import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Link from "next/link";
import Head from "next/head";

//REDUX
import { card } from "../../store/ducks/Card/types";
import { addToCart, removeItem } from "../../store/ducks/Card/actions";

//COMPONENTS
import CircleColors from "@components/CircleColors";
import SizeGuide from "./SizeGuide";
import Shipping from "./Shipping";

//TYPES

import {
  Products as ProductsPros,
  ProductsDetails,
} from "../../store/ducks/products/types";
import { ProductReponse } from "@type/global";

interface StateProps {
  product?: ProductReponse;
  card?: card[];
  setImages?: any;
}

const ProductContent = ({ product, card, setImages }: StateProps) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [max, setMax] = useState(15);
  const [min, setMin] = useState(1);
  const [sizeGuide, setSizeGuide] = useState(false);
  const [shipModal, setShipModal] = useState(false);

  const [detailsProductAll, setDetailsProductAll] = useState<ProductsDetails[]>(
    []
  );

  const [allColors, setAllColors] = useState<string[]>([]);
  const [colorSelect, setColorSelected] = useState<string>();

  const [allSizes, setAllSizes] = useState<any[]>([]);
  const [sizeSelected, siteSizeSelected] = useState("");

  useEffect(() => {
    setDetailsProductAll(product.details_product);

    const allColorsWithRep = product.details_product.map(
      (detail) => detail.color
    );
    var allColorsWithoutRept = allColorsWithRep.filter(function (este, i) {
      return allColorsWithRep.indexOf(este) === i;
    });
    setAllColors(allColorsWithoutRept);
    setColorSelected(allColorsWithoutRept[0]);
  }, [product]);

  useEffect(() => {
    const detail = product.details_product.filter(
      (detail) => detail.color === colorSelect
    );

    if (detail.length > 0 && detail[0].photos.length > 0) {
      const photos = detail[0].photos.map((photo, index) => ({
        id: index,
        image: photo,
      }));

      setImages && setImages([...photos]);
    }

    siteSizeSelected("");
    const sizes = detail.map((size) => size.size);
    
    if (product.quantity_all > max) {
      setMax(max);
    } else {
      setMax(product.quantity_all);
    }

    setAllSizes(sizes);
  }, [colorSelect]);

  // const teste = card.find((item) => product.id === item.id);

  // function checkIsExist(item) {
  //   if (!teste) {
  //     addItemCart(item);
  //     return;
  //   } else {
  //     dispatch(removeItem(item.id));
  //     addItemCart({ ...item, qty });
  //   }
  // }

  function addItemCart(item) {
    if (!sizeSelected || sizeSelected.length === 0) {
      toast.warn("Por favor selecione ao menos um tamanho", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!colorSelect || colorSelect.length === 0) {
      toast.warn("Por favor selecione ao menos uma cor", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const detailSelected = detailsProductAll.find(
      (detail) => detail.size === sizeSelected && detail.color === colorSelect
    );

    if (!detailSelected) {
      toast.error(
        "Ocorreu um erro ao adicionar ao carrinho, por favor tente novamente mais tarde.",
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }


    dispatch(
      addToCart({
        ...item,
        total: item.price * qty,
        title: item.name,
        image: detailSelected.photos[0],
        imageHover: detailSelected.photos[0],
        productDetail: detailSelected,
      })
    );

    toast.success("Adicionado ao carrinho", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  const IncrementItem = () => {
    if (qty < max) {
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

  const openSizeGuide = () => {
    return setSizeGuide(true);
  };

  const closeSizeGuide = () => {
    return setSizeGuide(false);
  };

  const openShipModal = () => {
    setShipModal(true);
  };

  const closeShipModal = () => {
    setShipModal(false);
  };

  const handleActiveColor = (color: string) => {
    setColorSelected(color);
  };

  return (
    <>
      <Head>
        <title>{product?.name}</title>
      </Head>
      <div className="col-lg-6 col-md-6">
        <div className="product-details-content">
          <h3>{product?.name}</h3>

          <div className="price">
            <span className="new-price">
              {new Intl.NumberFormat("br-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product?.price)}
            </span>
          </div>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p> */}

          <ul className="product-info">
            <li>
              <span>Vendedor:</span>{" "}
              <Link href="#">
                <a>{product.provider.name}</a>
              </Link>
            </li>
            <li>
              <span>Em Estoque:</span>{" "}
              <Link href="#">
                <a>
                  {product.quantity_all} iten
                  {product.quantity_all > 0 ? "s" : ""}
                </a>
              </Link>
            </li>
            <li>
              <span>Tipo do Material:</span>{" "}
              <Link href="#">
                <a>{product.materialType}</a>
              </Link>
            </li>
          </ul>

          <div className="product-color-switch">
            <h4>Cor:</h4>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {allColors.map((color, index) => (
                <CircleColors
                  key={`${index}${color}color`}
                  color={color}
                  active={color === colorSelect}
                  onClick={() => {
                    handleActiveColor(color);
                  }}
                />
              ))}
            </div>

            {/* <ul>
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
                  <a title="Yellow Green" className="color-yellowgreen"></a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a title="Teal" className="color-teal"></a>
                </Link>
              </li>
            </ul> */}
          </div>

          <div className="product-size-wrapper">
            <h4>Tamanho:</h4>

            <ul>
              {allSizes.map((size, index) => (
                <>
                  {detailsProductAll.find(
                    (s) => s.size === size && s.color === colorSelect
                  ) &&
                  detailsProductAll.find(
                    (s) => s.size === size && s.color === colorSelect
                  ).quantity > 0 ? (
                    <li
                      key={`${index}${size}size`}
                      className={size === sizeSelected ? "active" : ""}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        siteSizeSelected(size);
                      }}
                    >
                      <a>{size}</a>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </ul>

            {/* <ul>
              <li>
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
                  <a>G</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>GG</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>XG</a>
                </Link>
              </li>
            </ul> */}
          </div>

          <div className="product-info-btn">
{/*            <Link href="#">
              <a onClick={openSizeGuide}>
                <i className="fas fa-crop"></i> Guia de Tamanhos
              </a>
            </Link>*/}
            <Link href="#">
              <a onClick={openShipModal}>
                <i className="fas fa-truck"></i> Entrega
              </a>
            </Link>
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
                onChange={(e) => setQty(Number(e.target.value)>max?max:Number(e.target.value)>product.quantity_all?product.quantity_all:Number(e.target.value))}
              />
              <span className="plus-btn" onClick={IncrementItem}>
                <i className="fas fa-plus"></i>
              </span>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => addItemCart({ ...product, qty })}
            >
              <i className="fas fa-cart-plus"></i> Adiconar ao Carrinho
            </button>
          </div>

          {/*<div className="buy-checkbox-btn">
            <div className="item">
              <Link href="#">
                <a className="btn btn-primary">Compre Agora</a>
              </Link>
            </div>
          </div>*/}

          <div className="custom-payment-options">
            <span>Check-out seguro garantido:</span>

            <div className="payment-methods">
              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/1.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/2.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/3.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/4.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/5.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/6.svg")}
                    alt="image"
                  />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img
                    src={require("../../images/payment-image/7.svg")}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {sizeGuide ? <SizeGuide closeSizeGuide={closeSizeGuide} /> : ""}
      {shipModal ? <Shipping closeShipModal={closeShipModal} /> : ""}
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     card: state.card,
//   };
// };

// export default connect(mapStateToProps)(ProductContent);
export default ProductContent;
