import React, {useEffect, useState} from "react";
import Link                         from "next/link";
import OwlCarousel                  from "react-owl-carousel3";

const options = {
  loop:               true,
  nav:                false,
  dots:               false,
  autoplayHoverPause: true,
  autoplay:           true,
  navText:            [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive:         {
    0:    {
      items:  3,
      margin: 30,
    },
    576:  {
      items: 4,
    },
    768:  {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
};

const Partner = () => {
  const [display, setDisplay] = useState(false);
  const [panel, setPanel] = useState();

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="partner-area">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="partner-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="partner-item">
              <img src={require("../../images/partner1.png")} alt="image"/>
            </div>

            <div className="partner-item">
              <img src={require("../../images/partner2.png")} alt="image"/>
            </div>

            <div className="partner-item">
              <img src={require("../../images/partner3.png")} alt="image"/>
            </div>

            <div className="partner-item">
              <img src={require("../../images/partner4.png")} alt="image"/>
            </div>

            <div className="partner-item">
              <Link href="#">
                <a target="_blank">
                  <img src={require("../../images/partner5.png")} alt="image"/>
                </a>
              </Link>
            </div>
            {/*
            <div className="partner-item">
              <Link href="#">
                <a target="_blank">
                  <img src={require("../../images/partner6.png")} alt="image" />
                </a>
              </Link>
            </div>*/}
          </OwlCarousel>
        ) : (
           ""
         )}
      </div>
    </div>
  );
};

export default Partner;
