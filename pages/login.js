import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

const Login = () => {
    return (
        <>
            <Header />

            <Breadcrumb title="Login" />

            <section className="login-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> Login</h2>
                                </div>

                                <form className="login-form">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your name" id="name" name="name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                    
                                    <Link href="#">
                                        <a className="forgot-password">Perdeu a senha ?</a>
                                    </Link>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-customer-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> Novo Usuário</h2>
                                </div>

                                <span>Create a Account</span>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                <Link href="/signup">
                                    <a className="btn btn-light">Create A Account</a>
                                </Link>
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

export default Login;
