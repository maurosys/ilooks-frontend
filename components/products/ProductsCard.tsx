import React, { Component, useState } from "react";
import Link from "next/link";
import QuickView from "../Modal/QuickView";
import AddToCart from "../Shared/AddToCart";
import { Products as ProductsPros } from '../../store/ducks/products/types';

interface StateProps {
  products: ProductsPros[]
}

const ProductsCard = ({products}: StateProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = () => {
    return setModalOpen(true);
  };

  const closeModal = () => {
    return setModalOpen(false);
  };

  const handleModalData = (data) => {
    return setModalData(data);
  };


  return (
    <>
      {products.map((data, idx) => (
        <div
          className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item"
          key={idx}
        >
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/product/[id]" as={`/product/${data.id}`}>
                <a>
                  <img src={data.image} alt="image" />
                  <img src={data.imageHover} alt="image" />
                </a>
              </Link>

              <ul>
                <li>
                  <Link href="#">
                    <a
                      data-tip="Quick View"
                      data-place="left"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                        handleModalData(data);
                      }}
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/product/[id]" as={`/product/${data.id}`}>
                  <a>{data.title}</a>
                </Link>
              </h3>

              <div className="product-price">
                <span className="new-price">{new Intl.NumberFormat('br-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(data.price)}</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <AddToCart data= {data} />
            </div>
          </div>
        </div>
      ))}
      {modalOpen ? (
        <QuickView
          closeModal={closeModal}
          modalData={modalData}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ProductsCard;
