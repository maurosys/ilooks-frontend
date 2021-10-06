import React, { useState, useEffect } from "react";
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

//TYPES
import { ItemsProps } from "@components/orderItem";
interface ModalRequestDevolutionItemProps {
  modalIsOpen?: boolean;
  setModalIsOpen?: any;
  items?: ItemsProps[];
  itemsSelected?: string[];
}

const ModalRequestDevolutionItem = ({
  modalIsOpen,
  setModalIsOpen,
  items,
  itemsSelected,
}: ModalRequestDevolutionItemProps) => {
  const [itemsRendering, setItemsRendering] = useState<ItemsProps[]>([]);

  useEffect(() => {
    if (itemsSelected && items) {
      const newArray: ItemsProps[] = [];
      itemsSelected.map((itemSel) => {
        const object = items.find((item) => item.productDetailId === itemSel);
        if (object) {
          newArray.push(object);
        }
      });

      setItemsRendering([...newArray]);
    }
  }, [itemsSelected, items]);

  function closeModal() {
    setModalIsOpen(false);
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
            {itemsRendering.map((item) => (
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
                  <input type="number" min={1} max={item.quantity} />
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
            <ButtonPrimary style={{ marginRight: "10px" }}>
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
