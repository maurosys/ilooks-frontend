import {StatusDevolution, StatusHistoryItem, StatusRequest} from '@type/orders';
import {useEffect, useState}                                from 'react';

interface TimeLineOrderProps {
  orderStatus: string;
  statusHistory: StatusHistoryItem[];
}

interface historyStatusProps {
  inBack?: Date | string;
  reservedPayment?: Date | string;
  withCarrier?: Date | string;
  onCarriage?: Date | string;
  delivered?: Date | string;
}

const timelineOrderDevolution = ({
  orderStatus,
  statusHistory,
}: TimeLineOrderProps) => {
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
      inBack: "",
      reservedPayment: "",
      withCarrier: "",
      onCarriage: "",
      delivered: "",
    };

    statusHistory.map((status) => {
      if (status.status_request === StatusRequest.IN_BACK) {
        objectStatus.inBack = status.action_date;
      }

      if (status.status_devolution === StatusDevolution.IN_CARRIER) {
        objectStatus.reservedPayment = status.action_date;
      }

      if (status.status_devolution === StatusDevolution.VALIDATION) {
        objectStatus.withCarrier = status.action_date;
      }

      if (status.status_devolution === StatusDevolution.ACCEPTED) {
        objectStatus.delivered = status.action_date;
      }
    });

    setHistory(objectStatus);

  }, []);

  return (
    <div className="timeline">
      <div className={`circle ${history.inBack && "active"}`}>
        <div className="icon"></div>
        <div className="labels">
          <span className="title-circle">Devolução<br />solicitada</span>
          <span className="description-circle">
            {history.inBack &&
              new Date(history.inBack).toLocaleString("pt-BR", dateOptions)}
          </span>
        </div>
        <div className="line"></div>
      </div>

      <div className={`circle ${history.reservedPayment && "active"}`}>
        <div className="icon"></div>
        <div className="labels">
          <span className="title-circle">Com  <br />transportadora</span>
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
          <span className="title-circle">Validação <br />Ilooks</span>
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

      <div className={`circle end ${history.delivered && "active"}`}>
        <div className="icon"></div>

        <div className="labels">
          <span className="title-circle">Devolução <br />aprovada</span>
          <span className="description-circle">
            {history.delivered &&
              new Date(history.delivered).toLocaleString("pt-BR", dateOptions)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default timelineOrderDevolution;
