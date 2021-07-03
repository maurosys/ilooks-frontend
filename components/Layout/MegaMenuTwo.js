import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';

class MegaMenuTwo extends Component {

  state = {
    display: false,
    searchForm: false,
    collapsed: true
  };

  handleCart = () => {
    this.setState( prevState => {
      return {
        display: !prevState.display
      };
    });
  }

  handleSearchForm = () => {
    this.setState( prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

    render() {
      const { collapsed } = this.state;
      const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { products } = this.props;
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
                  onClick={this.toggleNavbar} 
                  className={classTwo}
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item p-relative">
                        <Link href="/">
                          <a className="nav-link active" >
                            Home
                          </a>
                        </Link>                                          
                      </li>                                                                           

                      <li className="nav-item megamenu">
                        <Link href="/about">
                          <a className="nav-link" >
                            Sobre nos 
                          </a>
                        </Link>                                          
                      </li>

                      <li className="nav-item megamenu">
                        <Link href="#">
                          <a className="nav-link" onClick={e => e.preventDefault()}>Compre por Departamento <i className="fas fa-chevron-down"></i></a>
                        </Link>
                          <ul className="dropdown-menu">
                              <li className="nav-item">
                                <div className="container">
                                  <div className="row">
                                    <div className="col">
                                      <h6 className="submenu-title">Roupas</h6>
                                      <ul className="megamenu-submenu">
                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Camisa</a>
                                          </Link>
                                        </li>

                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Camiseta</a>
                                          </Link>
                                        </li>
                                          
                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Jeans</a>
                                          </Link>
                                        </li>

                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Blusa,</a>
                                          </Link>
                                        </li>

                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Jaqueta</a>
                                          </Link>
                                        </li>

                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Blusa de Frio</a>
                                          </Link>
                                        </li>

                                        <li>
                                          <Link href="/category-sidebar-fullwidth">
                                            <a>Gravata</a>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="col">
                                        <h6 className="submenu-title">Calçados</h6>

                                        <ul className="megamenu-submenu">
                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Sapatilha</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Rasteirinha</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Tamanco</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Anabela</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Sandália </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Birkenstock</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Slipper</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/category-sidebar-fullwidth">
                                                  <a>Plataforma</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                      <h6 className="submenu-title">Acessórios</h6>

                                        <ul className="megamenu-submenu">
                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                              <a>Bolas</a>
                                            </Link>
                                          </li>

                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                              <a>Óculos</a>
                                            </Link>
                                          </li>
                                          
                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                              <a>Carteiras</a>
                                            </Link>
                                          </li>

                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                              <a>Pulseiras</a>
                                            </Link>
                                          </li>

                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                                <a>Colar</a>
                                              </Link>
                                        </li>

                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                              <a>Boné</a>
                                            </Link>
                                          </li>

                                          <li>
                                            <Link href="/category-sidebar-fullwidth">
                                              <a>Relógios</a>
                                            </Link>
                                          </li>
                                      </ul>
                                  </div>

                                    <div className="col">
                                      <ul className="megamenu-submenu">
                                        <li>
                                          <div className="aside-trending-products">
                                            <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                            <div className="category">
                                              <h4>Todos os produtos</h4>
                                            </div>
                                            <Link href="#">
                                              <a></a>
                                            </Link>
                                          </div>

                                          <div className="aside-trending-products">
                                            <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                            <div className="category">
                                              <h4>Últimos Produtos</h4>
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
                    </ul>

                      <div className="others-option">
                        <div className="option-item">
                          <i 
                            onClick={this.handleSearchForm} 
                            className="search-btn fas fa-search"
                            style={{
                              display: this.state.searchForm ? 'none' : 'block'
                            }}
                          ></i>

                          <i 
                            onClick={this.handleSearchForm} 
                            className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                          ></i>
                          
                          <div 
                            className="search-overlay search-popup"
                            style={{
                              display: this.state.searchForm ? 'block' : 'none'
                            }}
                          >
                            <div className='search-box'>
                              <form className="search-form">
                                <input className="search-input" name="search" placeholder="Search" type="text" />
                                <button className="search-button" type="submit">
                                  <i className="fas fa-search"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="option-item">
                          <Link href="/login">
                            <a>Login / Cadastro</a>
                          </Link>
                        </div>

                        <div className="option-item">
                            <Link href="#">
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    this.handleCart()
                                  }}
                                >
                                  {/* Carrinho({products.length}) <i className="fas fa-shopping-bag"></i> */}
                                </a>
                            </Link>
                        </div>
                    </div>
                  </div>
              </nav>
            </div>
          </div>
        </div>
            {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
        </>
        );
    }
}

const mapStateToProps = (state)=>{
  return{
    products: state.addedItems
  }
}

export default connect(mapStateToProps)(MegaMenuTwo)
