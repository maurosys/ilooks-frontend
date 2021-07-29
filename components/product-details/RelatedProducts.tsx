import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import OwlCarousel from 'react-owl-carousel3';
import QuickView from '../Modal/QuickView';
import AddToCart from '../Shared/AddToCart';
import { useState } from 'react';
import { useEffect } from 'react';
import {Products } from '../../store/ducks/products/types';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

interface RelatedProps {
    products: Products[];
  }

const RelatedProducts = ({ products}: RelatedProps) => {
    const [display, setDisplay] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        setDisplay(true);
    },[])

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleModalData = (data) => {
        setModalData(data)
    }

        return (
            <>
                <div className="related-products-area">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Produtos Relacionados</h2>
                        </div>

                        <div className="row">
                            {display ? <OwlCarousel 
                                className="trending-products-slides-two owl-carousel owl-theme"
                                {...options}
                            >
                                {products.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                    <a>
                                                        <img src={data.image} alt="image" />
                                                        <img src={data.imageHover} alt="image" />
                                                    </a>
                                                </Link>

                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <a 
                                                                data-tip="Quick View" 
                                                                data-place="left" 
                                                                onClick={e => {
                                                                        e.preventDefault(); 
                                                                        openModal();
                                                                        handleModalData(data)
                                                                    }
                                                                }
                                                            >
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </Link>
                                                    </li>                                                                                                
                                                </ul>
                                            </div>

                                            <div className="product-content">
                                                <h3>
                                                    <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                        <a>{data.title}</a>
                                                    </Link>
                                                </h3>

                                                <div className="product-price">
                                                        <span className="new-price">{new Intl.NumberFormat("br-BR",{
                                                            style: "currency",
                                                            currency: "BRL"
                                                        }).format(data.price)}</span>
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <AddToCart data= {data} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
                
                { modalOpen ? <QuickView 
                    closeModal={closeModal} 
                    modalData={modalData}
                /> : '' }
            </>
        );
    }


export default RelatedProducts