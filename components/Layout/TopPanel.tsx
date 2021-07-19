import React, { Component, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  items: 1,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
};

const TopPanel = () => {
  const [display, setDisplay] = useState(false);
  const [panel, setPanel] = useState(true);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className={`top-panel ${panel ? "" : "hide"}`}>
      <div className="container">
        <div className="panel-content">
          {display ? (
            <OwlCarousel
              className="top-panel-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-item-box">
                <p>
                  <strong>Vem conferir 20% off</strong> selecione estilos de
                  vendas{" "}
                  <Link href="#">
                    <a>Saiba Mais</a>
                  </Link>
                </p>
              </div>

              <div className="single-item-box">
                <p>
                  <strong>Enjoy an extra 20% off</strong> selecione estilos de
                  vendas{" "}
                  <Link href="#">
                    <a>Saiba Mais</a>
                  </Link>
                </p>
              </div>

              <div className="single-item-box">
                <p>
                  <strong>Enjoy an extra 20% off</strong> selecione estilos de
                  vendas{" "}
                  <Link href="#">
                    <a>Saiba Mais</a>
                  </Link>
                </p>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}

          <i
            onClick={() => setPanel(false)}
            className="fas fa-times panel-close-btn"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
