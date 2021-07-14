import React, { Component } from "react";
import Link from "next/link";

const ProductsOffer = () => {
  return (
    <section className="products-offer-area bg-image2 ptb-60">
      <div className="container">
        <div className="products-offer-content">
          <span>O Tempo estar se esgotando</span>
          <h1>-40% Off</h1>
          <p>Ganhe um incríveis desconto de inaguração</p>

          <Link href="#">
            <a className="btn btn-primary">Discover Now</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsOffer;
