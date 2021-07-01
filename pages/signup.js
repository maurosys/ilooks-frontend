import React from "react";
import Link from "next/link";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";

const Signup = () => {
  return (
    <>
      <Header />

      <section className="signup-area ptb-60">
        <div className="container">
          <div className="signup-content">
            <div className="section-title">
              <h2>
                <span className="dot"></span> Criar um conta
              </h2>
            </div>

            <form className="signup-form">
              <div className="form-group">
                <label>Primeiro Nome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="fname"
                  name="fname"
                />
              </div>

              <div className="form-group">
                <label>Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="lname"
                  name="lname"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  id="password"
                  name="password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              <Link href="/">
                <a className="return-store">Retorne para a loja</a>
              </Link>
            </form>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

export default Signup;
