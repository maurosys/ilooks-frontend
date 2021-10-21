import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { store } from "react-notifications-component";

//COMPONENTS
import HeaderFixed from "../../../components/Layout/HeaderFixed";
import Details from "../../../components/Detalis";
import Spinner from "@components/Spinner";
import CardRequestDetail from "@components/Cards/Request/Details";
import OrderItem, { OrderItemProps } from "../../../components/orderItem";
import ButtonPrimary from "../../../components/Button/Primary";
import CardRequestDevolutionItemsSelect from "@components/Cards/Request/Devolution/ItemsSelect";
import ModalRequestDevolutionItem from "@components/Modal/RequestDevolutionItem";

//HOOKS
import useLogin from "@hooks/pages/useLogin";
import useRequestDetail from "@hooks/pages/useRequestDetail";
import ButtonSecondary from "@components/Button/Secondary";

//STYLES
import styles from "./requestdevolution.module.css";

//SERVICES
import { getAPIClient } from "@services/api";

const RequestDevolution = () => {
  //STATES
  const [orders, setOrders] = useState<OrderItemProps[]>([]);
  const [itemsSelected, setItemsSelected] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //HOOKS INSTANCES
  const { getRequest, loading, error } = useRequestDetail();
  const { query } = useRouter();

  useEffect(() => {
    console.log(query.id);
    const getApi = async () => {
      const data = await getRequest(query.id);
      setOrders([data]);
    };
    if (query && query.id) {
      getApi();
    }
  }, [query]);

  //FUNCTIONS
  const handleShowModal = () => {
    if (itemsSelected.length <= 0) {
      store.addNotification({
        title: "Devolução de peças",
        message: "Selecione pelo menos 1 peça para devolução",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      return;
    }
    setModalIsOpen(true);
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
          <h3>
            Devolução de peças do Pedido:{" "}
            {orders.length > 0 && orders[0].numberOrder}
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

                    <div
                      style={{
                        width: "90%",
                        height: "1px",
                        backgroundColor: "#a2a2a2",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    ></div>

                    <h2>Selecione as peças que iram ser devolvidas:</h2>
                    <br />
                    <div className={styles.container}>
                      {orders.length > 0 &&
                        orders[0].items.map((item) => (
                          <CardRequestDevolutionItemsSelect
                            productDetailId={item.productDetailId}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            size={item.size}
                            color={item.color}
                            quantity={item.quantity}
                            unitPrice={item.unitPrice}
                            isSelected={itemsSelected.includes(
                              item.productDetailId
                            )}
                            itemsSelected={itemsSelected}
                            setItemsSelected={setItemsSelected}
                          />
                        ))}
                    </div>
                  </>
                )}

                <ButtonPrimary
                  type="button"
                  onClick={handleShowModal}
                  style={{
                    marginTop: 30,
                    width: "90%",
                  }}
                >
                  Realizar devolução
                </ButtonPrimary>
                <Link href="/orders">
                  <ButtonSecondary
                    style={{
                      marginTop: 10,
                      width: "90%",
                    }}
                  >
                    Voltar para página anterior
                  </ButtonSecondary>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalRequestDevolutionItem
        orderId={query.id}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        items={orders.length > 0 && orders[0].items}
        itemsSelected={itemsSelected}
        amount={orders[0]?.amount}
      />
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

export default RequestDevolution;
