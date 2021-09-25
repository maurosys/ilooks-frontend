import React, { useState, useEffect } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import Link from "next/link";
import { parseCookies } from "nookies";

import Cart from "../Modal/Cart";
import Wishlist from "../Modal/Wishlist";
import { Products as ProductsPros } from "../../store/ducks/products/types";
// import { ApplicationState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import { selectAuth } from "../../store/ducks/Auth";

//TYPES
import { CategoryRequest, SubCategoryRequest } from "@type/request";
import { getAPIClient } from "@services/api";

interface StateProps {
  products: ProductsPros[];
  card: ProductsPros[];
  categories?: CategoryRequest[];
  subCategories?: SubCategoryRequest[];
}

const MegaMenuTwo = ({
  products,
  card,
}: // categories,
// subCategories,
StateProps) => {
  const [display, setDisplay] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [searchForma, setSearchForma] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  // const authUser = useAppSelector(selectAuth);

  const { "nextilooks.auth": auth } = parseCookies();
  const authUser = auth ? JSON.parse(auth) : {};

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const api = getAPIClient();

  useEffect(() => {
    const getDatas = async () => {
      const categories = await api.get("category");
      const subCategories = await api.get("subcategory");
      setCategories(categories.data);
      setSubCategories(subCategories.data);
    };
    getDatas();
  }, []);

  const handleWishlist = () => {
    setOpenWishlist(true);
  };

  const handleCloseWishlist = () => {
    setOpenWishlist(false);
  };

  const handleCart = () => {
    return setDisplay(!display);
  };

  const handleSearchForm = () => {
    return setSearchForma(!searchForma);
  };

  const toggleNavbar = () => {
    return setCollapsed(!collapsed);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  return (
    <>
      <div className="navbar-area bg-black">
        <div id="navbar" className="comero-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("../../images/ilooks.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Compre por Departamento{" "}
                        <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            {categories &&
                              categories.map((category) => (
                                <div
                                  className="col"
                                  key={`${category.id}listheader`}
                                >
                                  <h6 className="submenu-title">
                                    {category.name}
                                  </h6>
                                  <ul className="megamenu-submenu">
                                    {subCategories
                                      .filter(
                                        (subCategory) =>
                                          subCategory.categoryId === category.id
                                      )
                                      .map((itemSubCategory) => (
                                        <li
                                          key={`${itemSubCategory.id}listheader`}
                                        >
                                          <Link href="#">
                                            <a>{itemSubCategory.name}</a>
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              ))}

                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <div className="aside-trending-products">
                                    <img
                                      src={require("../../images/category-products-img2.jpg")}
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Todos os produtos</h4>
                                    </div>
                                    <Link href="#">
                                      <a></a>
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item p-relative">
                    <Link href="/">
                      <a className="nav-link active">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="/about">
                      <a className="nav-link">Sobre nos</a>
                    </Link>
                  </li>
                </ul>

                <div className="others-option">
                  <div className="option-item">
                    <i
                      onClick={handleSearchForm}
                      className="search-btn fas fa-search"
                      style={{
                        display: searchForma ? "none" : "block",
                      }}
                    ></i>

                    <i
                      onClick={handleSearchForm}
                      className={`close-btn fas fa-times ${
                        searchForma ? "active" : ""
                      }`}
                    ></i>

                    <div
                      className="search-overlay search-popup"
                      style={{
                        display: searchForma ? "block" : "none",
                      }}
                    >
                      <div className="search-box">
                        <form className="search-form">
                          <input
                            className="search-input"
                            name="search"
                            placeholder="Search"
                            type="text"
                          />
                          <button className="search-button" type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="option-item">
                    {authUser.userId ? (
                      <Link href="/orders">
                        <a>Minha conta</a>
                      </Link>
                    ) : (
                      <Link href="/login">
                        <a>Login / Cadastro</a>
                      </Link>
                    )}
                  </div>
                  <div className="option-item">
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleWishlist();
                        }}
                      >
                        Lista de desejo <i className="far fa-heart"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="option-item">
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleCart();
                        }}
                      >
                        Carrinho({card.length}){" "}
                        <i className="fas fa-shopping-bag"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {display ? <Cart onClick={handleCart} /> : ""}
      {openWishlist ? <Wishlist closeWishlist={handleCloseWishlist} /> : ""}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    card: state.card,
  };
};

export default connect(mapStateToProps)(MegaMenuTwo);
