import { useState } from "react";
import Link from "next/link";
import TimeLineOrder from "../timelineOrder";
import TimelineOrderDevolution from "../timelineOrderDevolution";
import { formatToUggly } from "@utils/formatToUggly";
import { FiChevronsDown } from "@react-icons/all-files/fi/FiChevronsDown";
import { FiChevronsUp } from "@react-icons/all-files/fi/FiChevronsUp";
import api from "@services/api";

//TYPES
import { UserReponse } from "@type/global";
import { StatusHistoryItem, StatusRequest } from "@type/orders";
export interface ItemsProps {
  productDetailId?: string;
  title: string;
  imageUrl: string;
  quantity: number;
  color?: string;
  size?: string;
  productId?: string;
}

export interface OrderStatusProps {
  id: string;
  status_request: string;
  status_payment: string;
  change_date: string;
}

export interface OrderItemProps {
  id?: string;
  numberOrder: number | string;
  orderStatus: string;
  items: ItemsProps[];
  statusHistory: StatusHistoryItem[];
  showButtomDetails?: boolean;

  amount?: string;
  customer?: UserReponse;
}

export default function OrderItem({
  id,
  numberOrder,
  orderStatus,
  items,
  statusHistory,
  showButtomDetails = true,
}: OrderItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="accordion-custom">
      <div className="accordion-custom-header">
        <div>
          {!isExpanded ? (
            <FiChevronsDown
              size={20}
              style={{
                cursor: "pointer",
              }}
            />
          ) : (
            <FiChevronsUp
              size={20}
              style={{
                cursor: "pointer",
              }}
            />
          )}
          <span className="accordion-custom-header-span-status">
            Pedido: {numberOrder}
          </span>
        </div>
        <span>{orderStatus}</span>
      </div>
      <hr />

      <div>
        <div className="accordion-content-not-expanded">
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <Link
                href="/product/[id]"
                as={`/product/${formatToUggly({
                  name: item?.title,
                  id: item?.productId,
                })}`}
              >
                <div
                  className="item"
                  key={`orderItem${index}`}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={`imageProduct${index}`}
                    width={80}
                  />
                  <div>
                    <p>{item.title}</p>
                    <span>
                      {item.quantity}{" "}
                      {item.quantity > 1 ? "unidades" : "unidade"}
                    </span>
                    <br />
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Cor:{" "}
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
                      {`| Tamanho: ${item.size}`}
                    </span>
                    <br />
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <TimeLineOrder
          orderStatus={orderStatus}
          statusHistory={statusHistory}
        />

        {orderStatus === StatusRequest.IN_BACK.toLowerCase() && (
          <TimelineOrderDevolution
            orderStatus={orderStatus}
            statusHistory={statusHistory}
          />
        )}

        <div className="accordion-footer">
          <Link
            href="/request/devolution/[id]"
            as={`/request/devolution/${numberOrder}`}
          >
            <button className="btn-primary-br">Devolver produtos</button>
          </Link>

          {showButtomDetails && (
            <Link
              href="/request/detail/[id]"
              as={`/request/detail/${numberOrder}`}
            >
              <button className="btn-secondary-br" onClick={() => {}}>
                Detalhes do pedido
              </button>
            </Link>
          )}
        </div>

        {isExpanded && (
          <>
            <div className="accordion-content-expanded">
              <div className="item">
                <img
                  src="https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img1.jpg"
                  alt="imageProduct"
                  width={80}
                />
                <div>
                  <p>Vestido teste rosa - verão</p>
                  <span>1 unidade</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
