import React, { Component } from 'react';
import HeaderFixed from '../components/Layout/HeaderFixed';
import Footer from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';
import Details from '../components/Detalis';
import OrderItem from '../components/orderItem';
import FieldSearch from '../components/FieldSearch';


const Orders = () => {
    return (
        <>
            <HeaderFixed />
            <section className="login-area ptb-60">
                <div className="container">
                    <h1>Minha conta</h1>
                    <div className="container-order">
                        <div className="container-order-options">
                            <Details />
                        </div>

                        <div className="container-order-content">
                            <h5>Pedidos</h5>
                            <div className="container-order-content-items">
                                <FieldSearch />
                                    


                                <OrderItem />
                                <OrderItem />
                                <OrderItem />
                                <OrderItem />
                            </div>
                        </div>
                        
    
                        

                    </div>
                </div>
            </section>
            
            <Facility />
            
            <Footer />
        </>
    );
}

export default Orders;
