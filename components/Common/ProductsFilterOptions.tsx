import React, { Component } from "react";
import Link from "next/link";

interface ProductsFilterOptionsProps {
  onClick?: any;
  totalProductsLocated?: number;
  setTotalProductsLocated?: any;
  productForPage?: number;
  setProductForPage?: any;
  currentPage?: number;
  setCurrentPage?: any;
}

const limitsForPage = [20, 24, 28, 32];
// const limitsForPage = [1, 2, 3];

const ProductsFilterOptions = ({
  onClick,
  totalProductsLocated,
  productForPage,
  setProductForPage,
  setCurrentPage,
}: ProductsFilterOptionsProps) => {
  const handleGrid = (evt, e) => {
    onClick(e);
    let i, aLinks;

    aLinks = document.getElementsByTagName("a");
    for (i = 0; i < aLinks.length; i++) {
      aLinks[i].className = aLinks[i].className.replace("active", "");
    }

    evt.currentTarget.className += " active";
  };

  const handleUpdateItemForPage = (e) => {
    setProductForPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="products-filter-options">
      <div className="row align-items-center">
        <div className="col d-flex">
          <span>Modo de visualização:</span>

          <div className="view-list-row">
            <div className="view-column">
              <Link href="#">
                <a
                  className="icon-view-two"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGrid(e, "products-col-two");
                  }}
                >
                  <span></span>
                  <span></span>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="icon-view-three"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGrid(e, "");
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="icon-view-four"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGrid(e, "products-col-four");
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </Link>

              <Link href="#">
                <a
                  className="view-grid-switch active"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGrid(e, "products-row-view");
                  }}
                >
                  <span></span>
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <p>Total de produtos: {totalProductsLocated} </p>
        </div>

      </div>
    </div>
  );
};

export default ProductsFilterOptions;
