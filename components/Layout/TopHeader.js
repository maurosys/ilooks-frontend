import React, { Component } from 'react';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';

class TopHeader extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/about"><a>Sobre</a></Link></li>
                                    <li><Link href="/"><a>Nossa Loja</a></Link></li>
                                    <li><Link href="/faq"><a>FAQ's</a></Link></li>
                                    <li><Link href="/contact-us"><a>Contato</a></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li>
                                        <Link href="#">
                                            <a 
                                                data-toggle="modal" 
                                                data-target="#shoppingWishlistModal"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.handleWishlist()
                                                }}
                                            >
                                                Lista de desejo <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare">
                                            <a>Comparar <i className="fas fa-balance-scale"></i></a>
                                        </Link>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
            </>
        );
    }
}

export default TopHeader;