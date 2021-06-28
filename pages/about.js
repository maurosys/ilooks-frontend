import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';

class Index extends Component {
    render() {
        return (
            <>
                <Header />

                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2>Sobre Nossa Loja</h2>
                                    <p>Atualmente no mercado da moda existem diversos fatores que causam insegurança dos consumidores nas compras virtuais de vestuário.</p>
                                    
                                    <p>Fatores como não termos uma tabela de medidas padronizada no Brasil, processos para devoluções extremamente burocráticos e fretes com custos elevados.</p>
                                    
                                    <p>A história da Ilook’s nasceu justamente com propósito de quebrar todos esses paradigmas e oferecer um serviço diferenciado aos nossos consumidores garantindo uma experiência de compra on-line 100% satisfatória</p>

                                    <p>Com entregas rápidas, processos de devoluções facilitados, comodidade de experimentar, tocar e sentir o produto antes da efetivação de compra, nossa missão é levar aos nossos clientes conforto e praticidade para o dia o dia.</p>
                                  
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../images/about1.jpg")} className="about-img1" alt="image" />

                                    <img src={require("../images/about2.jpg")} className="about-img2" alt="image" />
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
}

export default Index;
