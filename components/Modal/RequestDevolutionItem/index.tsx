import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";

import ButtonPrimary from "@components/Button/Primary";
import ButtonSecondary from "@components/Button/Secondary";

//STYLES
import styles from "./style.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//HOOKS
import useRequestDevolution, {
  ProductDevolutionProps,
} from "@hooks/components/useRequestDevolution";

//TYPES
import { ItemsProps } from "@components/orderItem";
interface ModalRequestDevolutionItemProps {
  orderId: any;
  modalIsOpen?: boolean;
  setModalIsOpen?: any;
  items?: ItemsProps[];
  itemsSelected?: string[];
}
interface ItemPropsWihtQuantity extends ItemsProps {
  quantityDev: number;
}

const ModalRequestDevolutionItem = ({
  orderId,
  modalIsOpen,
  setModalIsOpen,
  items,
  itemsSelected,
}: ModalRequestDevolutionItemProps) => {
  //HOOKS INSTANCES
  const { handleSubmitDevolution, loading } = useRequestDevolution();
  const router = useRouter();

  //STATES
  const [itemsRendering, setItemsRendering] = useState<ItemPropsWihtQuantity[]>(
    []
  );

  useEffect(() => {
    if (itemsSelected && items) {
      const newArray: ItemPropsWihtQuantity[] = [];
      itemsSelected.map((itemSel) => {
        const object = items.find((item) => item.productDetailId === itemSel);
        if (object) {
          newArray.push({
            ...object,
            quantityDev: 1,
          });
        }
      });

      setItemsRendering([...newArray]);
    }
  }, [itemsSelected, items]);

  function closeModal() {
    setModalIsOpen(false);
  }

  async function submit() {
    const dataRequst: ProductDevolutionProps[] = itemsRendering.map((item) => ({
      productDetailId: item.productDetailId,
      quantity: item.quantityDev,
    }));

    const response = await handleSubmitDevolution({
      orderId,
      productsDevolutions: dataRequst,
    });
    if (response) {
      router.push(`/request/detail/${orderId}`);
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h3>Informe a quantidade de devolução de cada peça:</h3>
          <hr />

          <div
            style={{
              display: "flex",
              maxWidth: "900px",
              overflowX: "scroll",
            }}
          >
            {itemsRendering.map((item, index) => (
              <div className={styles.card} onClick={() => {}}>
                <img src={item.imageUrl} alt="teste" />
                <hr />
                <p>{item.title}</p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "2px",
                  }}
                >
                  <span>
                    <strong>Tamanho:</strong> {item.size}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <strong>Cor:</strong>{" "}
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        background: item.color,
                        marginRight: 3,
                        marginLeft: 3,
                      }}
                    />
                  </span>
                  <span>
                    <strong>Qtde. Comprada:</strong> {item.quantity}
                  </span>

                  <br />
                  <input
                    type="number"
                    min={1}
                    max={item.quantity}
                    value={item.quantityDev}
                    onChange={(e: any) => {
                      let array = itemsRendering;
                      const value = e.target.value;

                      if (value) {
                        const numbersString: string = value.replace(
                          /[^0-9]/g,
                          ""
                        );
                        if (numbersString.length <= 0) {
                          array[index].quantityDev = 2;
                          setItemsRendering([...array]);
                        } else {
                          const numberInt = parseInt(numbersString);
                          if (numberInt === 0) {
                            array[index].quantityDev = 1;
                            setItemsRendering([...array]);
                          } else if (numberInt <= item.quantity) {
                            array[index].quantityDev = numberInt;
                            setItemsRendering([...array]);
                          }
                        }
                      } else {
                        array[index].quantityDev = 1;
                        setItemsRendering([...array]);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "30px",
              borderTop: "1px solid #222",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonPrimary
              style={{ marginRight: "10px" }}
              loading={loading}
              onClick={submit}
            >
              Confirmar Devolução
            </ButtonPrimary>
            <ButtonSecondary
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              Cancelar Devolução
            </ButtonSecondary>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRequestDevolutionItem;
