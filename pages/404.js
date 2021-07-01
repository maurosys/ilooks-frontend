import React, { Component } from "react";
import Link from "next/link";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Custom404 = () => {
  return (
    <>
      <Header />

      <section className="error-area ptb-60">
        <div className="container">
          <div className="error-content">
            <img src={require("../images/404.png")} alt="error" />

            <h3> Página não encontrada</h3>
            <p>
              A página que você está procurando pode ter sido removida devido a
              mudança de nome ou está temporariamente indisponível.
            </p>

            <Link href="/">
              <a className="btn btn-light">Ir para Home</a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Custom404;
