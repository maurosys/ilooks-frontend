import {GetServerSideProps}         from 'next';
import {parseCookies}               from 'nookies';
import React, {useEffect, useState} from 'react';
import {useDispatch}                from 'react-redux';
import ButtonPrimary                from '../components/Button/Primary';
import Details                      from '../components/Detalis';
import FieldSearch                  from '../components/FieldSearch';
import Footer                       from '../components/Layout/Footer';

import HeaderFixed         from '../components/Layout/HeaderFixed';
import OrderItem           from '../components/orderItem';
import Facility            from '../components/shop-style-five/Facility';
import useLogin            from '../hooks/pages/useLogin';
import api, {getAPIClient} from '../services/api';

const Orders = () => {
  const dispatch = useDispatch();
  const {onLogout} = useLogin();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log('CARREGANDO...')
    loadOrders();
  }, []);

  const loadOrders = async () => {
    api.get('/request')
       .then((response) => {
         setOrders(response.data.orders);
       })
       .catch((error) => {
         console.log(error);
       });
  };

  return (
    <>
      <HeaderFixed/>
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
              <Details/>
            </div>

            <div className="container-order-content">
              {/* <h5>Pedidos</h5> */}
              <div className="container-order-content-items">
                <FieldSearch/>

                {orders &&
                 orders.length > 0 &&
                 orders.map((order, index) => (
                   <OrderItem
                     key={index}
                     orderStatus={order.orderStatus.toLowerCase()}
                     numberOrder={order.numberOrder}
                     items={order.items}
                   />
                 ))}

                <ButtonPrimary type="button" onClick={onLogout} style={{
                  marginTop: 20,
                }}>
                  Sair
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility/>

      <Footer/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  console.log('API_CLIENT', apiClient);
  const {'nextilooks.auth': auth} = parseCookies(ctx);

  if (!auth) {
    return {
      redirect: {
        destination: '/',
        permanent:   false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Orders;
