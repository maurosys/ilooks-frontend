import {StatusHistoryItem, StatusRequest} from "@type/orders";
import {useEffect, useState} from "react";

interface TimeLineOrderProps {
	orderStatus: string;
	statusHistory: StatusHistoryItem[];
}

interface historyStatusProps {
	orderPlaced?: Date | string;
	ready?: Date | string;
	reservedPayment?: Date | string;
	withCarrier?: Date | string;
	onCarriage?: Date | string;
	delivered?: Date | string;
}

const TimeLineOrder = ({orderStatus, statusHistory}: TimeLineOrderProps) => {
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
			ready: "",
			reservedPayment: "",
			withCarrier: "",
			onCarriage: "",
			delivered: "",
		};
		
		statusHistory.map((status) => {
			if (status.status_request === StatusRequest.ACCOMPLISHED) {
				objectStatus.orderPlaced = status.action_date;
			}
			
			if (status.status_request === StatusRequest.READY) {
				objectStatus.ready = status.action_date;
			}
			
			if (status.status_request === StatusRequest.RECEIVED_CARRIER) {
				objectStatus.withCarrier = status.action_date;
			}
			
			if (status.status_request === StatusRequest.IN_TRANSIT) {
				objectStatus.onCarriage = status.action_date;
			}
			
			if (status.status_request === StatusRequest.DELIVERED) {
				objectStatus.delivered = status.action_date;
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
            <br/>
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
			
			<div className={`circle ${history.ready && "active"}`}>
				<div className="icon"></div>
				<div className="labels">
          <span className="title-circle">
            Separado
            <br/>
            para entrega
          </span>
					<span className="description-circle">
            {history.ready &&
	            new Date(history.ready).toLocaleString("pt-BR", dateOptions)}
          </span>
				</div>
				<div className="line"></div>
			</div>
			
			<div className={`circle ${history.withCarrier && "active"}`}>
				<div className="icon"></div>
				<div className="labels">
					<span className="title-circle">Com transportadora<br/>&nbsp;</span>
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
					<span className="title-circle">Em transporte<br/>&nbsp;</span>
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
					<span className="title-circle">Entregue<br/>&nbsp;</span>
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
