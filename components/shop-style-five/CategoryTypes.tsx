import React, { Component } from "react";
import Link from "next/link";

const CategoryTypes = () => {
  return (
    <section className="category-boxes-area pt-60">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-category-boxes">
              <img
                src={require("../../images/category-products-img5.jpg")}
                alt="image"
              />

              <h3>Bolsas</h3>

              <Link href="/category-sidebar-fullwidth">
                <a className="shop-now-btn">Compre agora</a>
              </Link>
              <Link href="/category-sidebar-fullwidth">
                <a className="link-btn"></a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-category-boxes">
              <img
                src={require("../../images/category-products-img6.jpg")}
                alt="image"
              />

              <h3>Calçados</h3>

              <Link href="/category-sidebar-fullwidth">
                <a className="shop-now-btn">Compre agora</a>
              </Link>

              <Link href="/category-sidebar-fullwidth">
                <a className="link-btn"></a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-category-boxes">
              <img
                src={require("../../images/category-products-img7.jpg")}
                alt="image"
              />

              <h3>Rélogios</h3>

              <Link href="/category-sidebar-fullwidth">
                <a className="shop-now-btn">Compre agora</a>
              </Link>

              <Link href="/category-sidebar-fullwidth">
                <a className="link-btn"></a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-category-boxes">
              <img
                src={require("../../images/category-products-img8.jpg")}
                alt="image"
              />

              <h3>Óculos</h3>

              <Link href="/category-sidebar-fullwidth">
                <a className="shop-now-btn">Compre agora</a>
              </Link>

              <Link href="/category-sidebar-fullwidth">
                <a className="link-btn"></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTypes;
