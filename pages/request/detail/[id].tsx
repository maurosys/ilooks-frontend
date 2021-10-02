import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

//COMPONENTS
import HeaderFixed from "../../../components/Layout/HeaderFixed";
import Details from "../../../components/Detalis";
import Spinner from "@components/Spinner";
import CardRequestDetail from "@components/Cards/Request/Details";
import OrderItem, { OrderItemProps } from "../../../components/orderItem";
import ButtonPrimary from "../../../components/Button/Primary";

//HOOKS
import useLogin from "@hooks/pages/useLogin";
import useRequestDetail from "@hooks/pages/useRequestDetail";
import ButtonSecondary from "@components/Button/Secondary";

//SERVICES
import { getAPIClient } from "@services/api";

const RequestDetail = () => {
  //STATES
  const [orders, setOrders] = useState<OrderItemProps[]>([]);

  //HOOKS INSTANCES
  const { onLogout } = useLogin();
  const { getRequest, loading, error } = useRequestDetail();
  const { query } = useRouter();

  useEffect(() => {
    const getApi = async () => {
      const data = await getRequest(query.id);
      setOrders([data]);
    };
    if (query && query.id) {
      getApi();
    }
  }, [query]);

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
          <h3>
            Detalhe do Pedido: {orders.length > 0 && orders[0].numberOrder}
          </h3>
          <div className="container-order">
            <div className="container-order-options">
              <Details />
            </div>

            <div className="container-order-content">
              <div className="container-order-content-items">
                {loading ? (
                  <Spinner loading={loading} />
                ) : (
                  <>
                    <CardRequestDetail
                      amount={orders.length > 0 && orders[0].amount}
                      customer={orders.length > 0 && orders[0].customer}
                    />
                    {orders &&
                      orders.length > 0 &&
                      orders.map((order, index) => (
                        <>
                          <OrderItem
                            key={index}
                            orderStatus={order?.orderStatus.toLowerCase()}
                            numberOrder={order?.numberOrder}
                            statusHistory={order?.statusHistory}
                            items={order?.items}
                            showButtomDetails={false}
                          />
                        </>
                      ))}
                  </>
                )}

                <Link href="/orders">
                  <ButtonSecondary
                    style={{
                      marginTop: 30,
                      width: "90%",
                    }}
                  >
                    Voltar para página anterior
                  </ButtonSecondary>
                </Link>
                <ButtonPrimary
                  type="button"
                  onClick={onLogout}
                  style={{
                    marginTop: 10,
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

export default RequestDetail;
