import { OrderStatusProps } from "@components/orderItem";
import { StatusHistoryItem, StatusRequest, StatusPayment } from "@type/orders";
import { useEffect, useState } from "react";

interface TimeLineOrderProps {
  orderStatus: string;
  statusHistory: StatusHistoryItem[];
}

interface historyStatusProps {
  orderPlaced?: Date | string;
  reservedPayment?: Date | string;
  withCarrier?: Date | string;
  onCarriage?: Date | string;
  delivered?: Date | string;
}

const TimeLineOrder = ({ orderStatus, statusHistory }: TimeLineOrderProps) => {
  const [history, setHistory] = useState<historyStatusProps | undefined>({});
  const dateOptions: any = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  useEffect(() => {
    console.log("STA:", statusHistory);

    let objectStatus: historyStatusProps = {
      orderPlaced: "",
      reservedPayment: "",
      withCarrier: "",
      onCarriage: "",
      delivered: "",
    };

    statusHistory.map((status) => {
      if (status.status_request === StatusRequest.ACCOMPLISHED) {
        objectStatus.orderPlaced = status.change_date;
      }

      if (
        status.status_request === StatusRequest.ACCOMPLISHED &&
        status.status_payment &&
        StatusPayment.RESERVE
      ) {
        objectStatus.reservedPayment = status.change_date;
      }

      if (status.status_request === StatusRequest.RECEIVED_CARRIER) {
        objectStatus.withCarrier = status.change_date;
      }

      if (status.status_request === StatusRequest.IN_TRANSIT) {
        objectStatus.onCarriage = status.change_date;
      }

      if (status.status_request === StatusRequest.DELIVERED) {
        objectStatus.delivered = status.change_date;
      }
    });

    setHistory(objectStatus);

    // const tempHistory: historyStatusProps = {
    //   orderPlaced:
    //     statusHistory.filter((h) => {
    //       return h.status_request.toLowerCase() == "realizado";
    //     })[0]?.change_date ?? "",
    //   reservedPayment:
    //     statusHistory.filter((h) => {
    //       return h.status_request.toLowerCase() == "pagamento";
    //     })[0]?.change_date ?? "",
    //   withCarrier:
    //     statusHistory.filter((h) => {
    //       return h.status_request.toLowerCase() == "transportadora";
    //     })[0]?.change_date ?? "",
    //   onCarriage:
    //     statusHistory.filter((h) => {
    //       return h.status_request.toLowerCase() == "transito";
    //     })[0]?.change_date ?? "",
    //   delivered:
    //     statusHistory.filter((h) => {
    //       return h.status_request.toLowerCase() == "entregue";
    //     })[0]?.change_date ?? "",
    // };
    // setHistory(tempHistory);

    // console.log("HST", tempHistory);
  }, []);

  return (
    <div className="timeline">
      <div className={`circle ${history.orderPlaced && "active"}`}>
        <div className="icon"></div>
        <div className="labels">
          <span className="title-circle">
            Pedido
            <br />
            realizado
          </span>
          <span className="description-circle">
            {history.orderPlaced &&
              new Date(history.orderPlaced).toLocaleString(
                "pt-BR",
                dateOptions
              )}
          </span>
        </div>
        <div className="line"></div>
      </div>

      <div className={`circle ${history.reservedPayment && "active"}`}>
        <div className="icon"></div>
        <div className="labels">
          <span className="title-circle">
            Pagamento
            <br />
            pré-reservado
          </span>
          <span className="description-circle">
            {history.reservedPayment &&
              new Date(history.reservedPayment).toLocaleString(
                "pt-BR",
                dateOptions
              )}
          </span>
        </div>
        <div className="line"></div>
      </div>

      <div className={`circle ${history.withCarrier && "active"}`}>
        <div className="icon"></div>
        <div className="labels">
          <span className="title-circle">Com transportadora</span>
          <span className="description-circle">
            {history.withCarrier &&
              new Date(history.withCarrier).toLocaleString(
                "pt-BR",
                dateOptions
              )}
          </span>
        </div>
        <div className="line"></div>
      </div>

      <div className={`circle ${history.onCarriage ? "active" : ""}`}>
        <div className="icon"></div>
        <div className="labels">
          <span className="title-circle">Em tranporte</span>
          <span className="description-circle">
            {history.onCarriage &&
              new Date(history.onCarriage).toLocaleString("pt-BR", dateOptions)}
          </span>
        </div>
        <div className="line"></div>
      </div>

      <div className={`circle end ${history.delivered && "active"}`}>
        <div className="icon"></div>

        <div className="labels">
          <span className="title-circle">Entregue</span>
          <span className="description-circle">
            {history.delivered &&
              new Date(history.delivered).toLocaleString("pt-BR", dateOptions)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeLineOrder;
