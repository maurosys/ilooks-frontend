import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src={require("../../images/ilooks.png")} alt="logo" />
                  </a>
                </Link>
              </div>

              <p>
                RESERVE | EXPERIMENTE | COMPRE SOMENTE O QUE GOSTAR!
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Link rápidos</h3>

              <ul className="quick-links">
                <li>
                  <Link href="/about">
                    <a>Sobre nós</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>Faq's</a>
                  </Link>
                </li>
                <li>
                  <Link href="/lgpd">
                    <a>Política de LGPD</a>
                  </Link>
                </li>
                <li>
                  <Link href="/termo">
                    <a>Termos de uso</a>
                  </Link>
                </li>
                <li>
                  <Link href="/politica-devolution">
                    <a>Política de devolução</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-1 col-md-6">
            {/*<div className="single-footer-widget">
              <h3>Information</h3>

              <ul className="information-links">
                <li>
                  <Link href="/about">
                    <a>Sobre nós</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Nosso contato</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sizing-guide">
                    <a>Guia de Tamanhos</a>
                  </Link>
                </li>
              </ul>
            </div>*/}
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Contate-Nos</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  Localização: Rua da Graça, 201 SL 52<br/> Bom Retiro - SP
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  Ligue para nós:{" "}
                  <a href="tel:+5511972689781">(+55) 11 97268-9781</a>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  Email:{" "}
                  <a href="mailto:suporte@ilooks.com.br">atendimento@ilooks.com.br</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>Copyright &copy; 2021 Ilooks.</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul className="payment-card">
                <li>
                  <Link href="#">
                    <a target="_blank">
                      <img src={require("../../images/visa.png")} alt="image" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a target="_blank">
                      <img
                        src={require("../../images/mastercard.png")}
                        alt="image"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a target="_blank">
                      <img
                        src={require("../../images/mastercard2.png")}
                        alt="image"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a target="_blank">
                      <img
                        src={require("../../images/visa2.png")}
                        alt="image"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a target="_blank">
                      <img
                        src={require("../../images/expresscard.png")}
                        alt="image"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
