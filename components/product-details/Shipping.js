import React, { Component } from 'react';

class Shipping extends Component {
    render() {
        const { closeShipModal } = this.props;
        return (
            <div 
                className="modal fade productShippingModal show" style={{paddingRight: '16px', display: 'block'}}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeShipModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i className="fas fa-times"></i>
                            </span>
                        </button>

                        <div className="shipping-content">
                            <h3>Entregas</h3>
                            <ul>
                                <li>Envio terrestre gratuito em 1 a 7 dias úteis</li>
                                <li>Coleta na loja disponível em 1 a 7 dias úteis</li>
                                <li>Opções de entrega expressa e no dia seguinte também disponíveis</li>
                                <li>As compras são entregues em uma caixa laranja amarrada com uma fita Bolduc, com exceção de alguns itens</li>
                                <li>Consulte as perguntas frequentes sobre entrega para obter detalhes sobre métodos de envio, custos e prazos de entrega</li>
                            </ul>

                            <h3>Devoluções e trocas</h3>
                            <ul>
                                <li>Fácil e gratuito, em 48 horas</li>
                                <li>Consulte as condições e o procedimento em nossas Perguntas frequentes sobre devolução</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shipping;
