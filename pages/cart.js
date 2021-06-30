import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';
import CartContent from '../components/cart/CartContent';

class Index extends Component {
    render() {
        return (
            <>
                <Header />

                <CartContent />

                <Facility />
                
                <Footer />
            </>
        );
    }
}

export default Index;
