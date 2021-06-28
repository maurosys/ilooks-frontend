import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Head from 'next/head';
import { addQuantityWithNumber } from '../../store/actions/actions';
import SizeGuide from './SizeGuide';
import Shipping from './Shipping';

class ProductContent extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1,
        sizeGuide: false,
        shipModal: false
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(this.props.product.id, this.state.qty); 

        toast.success('Adicionado ao carrinho', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    openSizeGuide = () => {
        this.setState({ sizeGuide: true });
    }

    closeSizeGuide = () => {
        this.setState({ sizeGuide: false });
    }

    openShipModal = () => {
        this.setState({ shipModal: true });
    }

    closeShipModal = () => {
        this.setState({ shipModal: false });    
    }

    render() {
        const { sizeGuide, shipModal } = this.state;
        return (
            <>
                <Head>
                    <title>Produto</title>
                </Head>
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-content">
                        <h3>Belted chino trousers polo</h3>

                        <div className="price">
                            <span className="new-price">R$80.00</span>
                        </div>                       

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                        <ul className="product-info">
                            <li><span>Vendedor:</span> <Link href="#"><a>Lereve</a></Link></li>
                            <li><span>Em Estoque:</span> <Link href="#"><a>7 itens</a></Link></li>
                            <li><span>Tipo do Produto:</span> <Link href="#"><a>T-Shirt</a></Link></li>
                        </ul>

                        <div className="product-color-switch">
                            <h4>Cor:</h4>

                            <ul>
                                <li>
                                    <Link href="#">
                                        <a title="Black" className="color-black"></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a title="White" className="color-white"></a>
                                    </Link>
                                </li>
                                <li className="active">
                                    <Link href="#">
                                        <a title="Green" className="color-green"></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a title="Yellow Green" className="color-yellowgreen"></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a title="Teal" className="color-teal"></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="product-size-wrapper">
                            <h4>Tamanho:</h4>

                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>P</a>
                                    </Link>
                                </li>
                                <li className="active">
                                    <Link href="#">
                                        <a>M</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>G</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>GG</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>XG</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="product-info-btn">
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        this.openSizeGuide();
                                    }}
                                >
                                    <i className="fas fa-crop"></i> Guia de Tamanhos
                                </a>
                            </Link>
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        this.openShipModal();
                                    }}
                                >
                                    <i className="fas fa-truck"></i> Entrega
                                </a>
                            </Link>
                         
                        </div>

                        <div className="product-add-to-cart">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={this.DecreaseItem}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={this.state.qty}
                                    min={this.state.min}
                                    max={this.state.max} 
                                    onChange={e => this.setState({ qty: e.target.value })}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={this.IncrementItem}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={this.handleAddToCartFromView}
                            >
                                <i className="fas fa-cart-plus"></i> Adiconar ao Carrinho
                            </button>
                        </div>        

                        <div className="buy-checkbox-btn">
                            <div className="item">
                                <input className="inp-cbx" id="cbx" type="checkbox" />
                                <label className="cbx" htmlFor="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>Eu concordo com os termos e condições</span>
                                </label>
                            </div>

                            <div className="item">
                                <Link href="#">
                                    <a className="btn btn-primary">Compre Agora</a>
                                </Link>
                            </div>
                        </div>

                        <div className="custom-payment-options">
                            <span>Check-out seguro garantido:</span>

                            <div className="payment-methods">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/1.svg")} alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/2.svg")} alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/3.svg")} alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/4.svg")} alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/5.svg")} alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/6.svg")} alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/payment-image/7.svg")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                { sizeGuide ? <SizeGuide 
                    closeSizeGuide={this.closeSizeGuide} 
                /> : '' }
                { shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : '' }
            </>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductContent)