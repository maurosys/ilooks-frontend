import React, { Component } from "react";
import Link from "next/link";

const useTagFunc = () => {
  let useTag = '<use xlink:href="#star" />';
  return <svg className="star" dangerouslySetInnerHTML={{ __html: useTag }} />;
};

const DetailsTab = () => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

   tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  return (
    <div className="col-lg-12 col-md-12">
      <div className="tab products-details-tab">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="tabs">
              <li
                onClick={(e) => {
                  e.preventDefault();
                  openTabSection(e, "tab1");
                }}
                className="current"
              >
                <span className="tabs-nav-text">
                  <div className="dot"></div> Descrição
                </span>
              </li>    
            </ul>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <div className="products-details-tab-content">
                  <p>
                    Design inspiration lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Morbi commodo, ipsum sed pharetra gravida,
                    orci magna rhoncus neque, id pulvinar odio lorem non turpis.
                    Nullam sit amet enim. Suspendisse id velit vitae ligula
                    volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
                    Nulla facilisi. Nulla libero. Vivamus pharetra posuere
                    sapien. Nam consectetuer. Sed aliquam, nunc eget euismod
                    ullamcorper, lectus nunc ullamcorper orci, fermentum
                    bibendum enim nibh eget ipsum. Nam consectetuer. Sed
                    aliquam, nunc eget euismod ullamcorper, lectus nunc
                    ullamcorper orci, fermentum bibendum enim nibh eget ipsum.
                    Nulla libero. Vivamus pharetra posuere sapien.
                  </p>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>Fabric 1: 100% Polyester</li>
                        <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
                        <li>
                          Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <ol>
                        <li>
                          Fabric 1: 75% Polyester, 20% Viscose, 5% Elastane
                        </li>
                        <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
                        <li>Fabric 3: 100% Polyester</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>                                              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTab;
