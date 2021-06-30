import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';
import CheckoutForm from '../components/checkout/CheckoutForm';

class Index extends Component {
    render() {
        return (
            <>
                <Header />

                <CheckoutForm />

                <Facility />

                <Footer />
            </>
        );
    }
}

export default Index;
