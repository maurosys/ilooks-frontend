import React, { Component } from "react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel3";

const options = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 2000,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
};

const BannerSlider = () => {
  const [display, setDisplay] = useState(false);
  const [panel, setPanel] = useState(true);
  

  useEffect(() => {
    setDisplay(true);
  },[])

    return (
      <>
        {display ? (
          <OwlCarousel
            className="home-slides-two owl-carousel owl-theme"
            {...options}
            style={{marginTop:65}}
          >
            <div className="banner-section item-bg5">
              <div className="d-table">
                <div className="d-table-cell">

                </div>
              </div>
            </div>

            <div className="banner-section item-bg6">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>

                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </>
    );
  }


export default BannerSlider;
