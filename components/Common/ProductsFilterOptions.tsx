import React, { Component } from "react";
import Link from "next/link";

interface ProductsFilterOptionsProps {
  onClick: any;
  totalProductsLocated: number;
  setTotalProductsLocated: any;
  productForPage: number;
  setProductForPage: any;
  currentPage: number;
  setCurrentPage: any;
}

const limitsForPage = [12, 16, 20, 24, 28, 32];
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

        <div className="col d-flex">
          <span>Produtos por página:</span>

          <div className="show-products-number">
            <select value={productForPage} onChange={handleUpdateItemForPage}>
              {limitsForPage.map((value) => (
                <option key={`value${value}index${value}`} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          {/* <span>Sort:</span>

          <div className="products-ordering-list">
            <select>
              <option value="1">Featured</option>
              <option value="2">Best Selling</option>
              <option value="3">Price Ascending</option>
              <option value="4">Price Descending</option>
              <option value="5">Date Ascending</option>
              <option value="6">Date Descending</option>
              <option value="7">Name Ascending</option>
              <option value="8">Name Descending</option>
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilterOptions;
