import React, { Component } from "react";
import HeaderFixed from "../components/Layout/HeaderFixed";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";
import Details from "../components/Detalis";
import OrderItem, { OrderItemProps } from "../components/orderItem";
import FieldSearch from "../components/FieldSearch";

const Orders = () => {
  const orders: OrderItemProps[] = [
    {
      numberOrder: 123456789,
      orderStatus: "pagamento",
      items: [
        {
          title: "Vestido teste rosa - verão",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img1.jpg",
          quantity: 2,
        },
        {
          title: "Vestido teste rosa - verão",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img1.jpg",
          quantity: 2,
        },
      ],
    },
    ,
    {
      numberOrder: 123456789,
      orderStatus: "transportadora",
      items: [
        {
          title: "Vestido teste rosa - verão",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img1.jpg",
          quantity: 2,
        },
        {
          title: "Casaco teste bege - inverno",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img2.jpg",
          quantity: 3,
        },
        {
          title: "Camiseta teste vermelha - verão",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img3.jpg",
          quantity: 4,
        },
      ],
    },
    {
      numberOrder: 123456789,
      orderStatus: "entregue",
      items: [
        {
          title: "Vestido teste rosa - verão",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img1.jpg",
          quantity: 2,
        },
        {
          title: "Casaco teste bege - inverno",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img2.jpg",
          quantity: 3,
        },
        {
          title: "Camiseta teste vermelha - verão",
          imageUrl:
            "https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img3.jpg",
          quantity: 4,
        },
      ],
    },
  ];

  return (
    <>
      <HeaderFixed />
      <section className="login-area ptb-60">
        <div
          className="container"
          style={{
            marginTop: -35,
          }}
        >
          <h1>Meus pedidos</h1>
          <div className="container-order">
            <div className="container-order-options">
              <Details />
            </div>

            <div className="container-order-content">
              {/* <h5>Pedidos</h5> */}
              <div className="container-order-content-items">
                <FieldSearch />

                {orders &&
                  orders.length > 0 &&
                  orders.map((order, index) => (
                    <OrderItem
                      key={index}
                      orderStatus={order.orderStatus}
                      numberOrder={order.numberOrder}
                      items={order.items}
                    />
                  ))}

                <button
                  className="btn-primary-br"
                  style={{
                    marginTop: 20,
                  }}
                >
                  ver mais pedidos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

export default Orders;
