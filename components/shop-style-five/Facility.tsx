import React, { Component } from "react";

const Facility = () => {
  return (
    <section className="facility-area black-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="facility-box">
              <div className="icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Região de atendimento SP e grande SP</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="facility-box">
              <div className="icon">
                <i className="fas fa-money-check-alt"></i>
              </div>
              <h3>Até 48h Para devolver qualquer peça !</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="facility-box">
              <div className="icon">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <h3>Parcele suas compras em até 6x sem juros</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="facility-box">
              <div className="icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3>Reserve até 10 peças por pedido</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
