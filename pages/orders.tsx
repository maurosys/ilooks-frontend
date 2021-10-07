import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../components/Button/Primary";
import Details from "../components/Detalis";
import FieldSearch from "../components/FieldSearch";
import Footer from "../components/Layout/Footer";

import Spinner from "@components/Spinner";

import HeaderFixed from "../components/Layout/HeaderFixed";
import OrderItem from "../components/orderItem";
import Facility from "../components/shop-style-five/Facility";
import useLogin from "../hooks/pages/useLogin";
import api, { getAPIClient } from "../services/api";
import OrderDetail from "@components/OrderDetail";

//TYPES
import { OrderReponse } from "@type/orders";

const Orders = () => {
  const dispatch = useDispatch();
  const { onLogout } = useLogin();

  const [orders, setOrders] = useState<OrderReponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setLoading(true);
    api
      .get("/request")
      .then((response) => {
        setOrders(response.data.orders);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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
                {loading ? (
                  <Spinner loading={loading} />
                ) : (
                  <>
                    <FieldSearch />

                    {orders &&
                      orders.length > 0 &&
                      orders.map((order, index) => (
                        <OrderItem
                          key={index}
                          orderStatus={order?.orderStatus.toLowerCase()}
                          numberOrder={order?.numberOrder}
                          statusHistory={order?.statusHistory}
                          items={order?.items}
                        />
                      ))}
                  </>
                )}

                <ButtonPrimary
                  type="button"
                  onClick={onLogout}
                  style={{
                    marginTop: 20,
                    width: "90%",
                  }}
                >
                  Sair
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />

      {showDetails && <OrderDetail></OrderDetail>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { "nextilooks.auth": auth } = parseCookies(ctx);

  if (!auth) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Orders;
