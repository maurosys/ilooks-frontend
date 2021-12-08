import {OrderStatusProps}    from '@components/orderItem';
import {useEffect, useState} from 'react';
import {useMediaQuery}       from 'react-responsive';

interface TimeLineOrderProps {
	orderStatus: string;
	statusHistory: OrderStatusProps[];
}

interface historyStatusProps {
	orderPlaced?: string;
	reservedPayment?: string;
	withCarrier?: string;
	onCarriage?: string;
	delivered?: string;
}

const TimeLineOrder = ({orderStatus, statusHistory}: TimeLineOrderProps) => {

	const isDesktopOrLaptop = useMediaQuery({minWidth: 800});
	const isBigScreen = useMediaQuery({minWidth: 1500});
	const isTabletOrMobile = useMediaQuery({maxWidth: 800});
	const isPortrait = useMediaQuery({orientation: 'portrait'});

	const [history, setHistory] = useState<historyStatusProps | undefined>({});
	const dateOptions: any = {
		day:    '2-digit',
		month:  'short',
		year:   'numeric',
		hour:   '2-digit',
		minute: '2-digit',
		hour12: false,
	};
	const dateOptionsSmall: any = {
		day:    '2-digit',
		month:  '2-digit',
		year:   'numeric',
		hour:   '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	useEffect(() => {
		console.log('STA:', statusHistory);
		const tempHistory: historyStatusProps = {
			orderPlaced:
				statusHistory.filter((h) => {
					return h.status_request.toLowerCase() === 'realizado';
				})[0]?.action_date ?? '',
			reservedPayment:
				statusHistory.filter((h) => {
					return h.status_payment.toLowerCase() === 'pré reservado';
				})[0]?.action_date ?? '',
			withCarrier:
				statusHistory.filter((h) => {
					return (
						h.status_request.toLowerCase() === 'recebido transportadora' ||
						h.status_request.toLowerCase() === 'entregue'
					);
				})[0]?.action_date ?? '',
			onCarriage:
				statusHistory.filter((h) => {
					return (
						h.status_request.toLowerCase() === 'em trânsito' ||
						h.status_request.toLowerCase() === 'entregue'
					);
				})[0]?.action_date ?? '',
			delivered:
				statusHistory.filter((h) => {
					return h.status_request.toLowerCase() === 'entregue';
				})[0]?.action_date ?? '',
		};
		setHistory(tempHistory);

		console.log('HST', tempHistory);
	}, []);

	return (
		<>
			{isDesktopOrLaptop &&
			 <div className="timeline">
				 <div className={`circle ${history.orderPlaced && 'active'}`}>
					 <div className="icon"></div>
					 <div className="labels">
						 <span className="title-circle">Pedido<br/>realizado</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
            {history.orderPlaced &&
             new Date(history.orderPlaced).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
          </span>
					 </div>
					 <div className="line"></div>
				 </div>

				 <div className={`circle ${history.reservedPayment && 'active'}`}>
					 <div className="icon"></div>
					 <div className="labels">
						 <span className="title-circle">Pagamento<br/>pré-reservado</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
			{history.reservedPayment &&
			 new Date(history.reservedPayment).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
				</span>
					 </div>
					 <div className="line"></div>
				 </div>

				 <div className={`circle ${history.withCarrier && 'active'}`}>
					 <div className="icon"></div>
					 <div className="labels">
						 <span className="title-circle">Com  <br/>transportadora</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
			{history.withCarrier &&
			 new Date(history.withCarrier).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
				</span>
					 </div>
					 <div className="line"></div>
				 </div>

				 <div className={`circle ${history.onCarriage ? 'active' : ''}`}>
					 <div className="icon"></div>
					 <div className="labels">
						 <span className="title-circle">Em  <br/>transporte</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
			{history.onCarriage &&
			 new Date(history.onCarriage).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
				</span>
					 </div>
					 <div className="line"></div>
				 </div>

				 <div className={`circle end ${history.delivered && 'active'}`} style={{paddingRight: 40}}>
					 <div className="icon"></div>

					 <div className="labels">
						 <span className="title-circle">Pedido  <br/>entregue</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
			{history.delivered &&
			 new Date(history.delivered).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
				</span>
					 </div>
				 </div>
			 </div>
			}
			{isTabletOrMobile &&
			 <div className="timelineSmall">
				 <p>Acompanhamento do pedido</p>
				 <div className="labelContainer">
					 <div>
						 {history.orderPlaced ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Pedido realizado</span><br/>
						 <span className="description-circle">{history.orderPlaced ? new Date(history.orderPlaced).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.reservedPayment ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Pagamento pré-reservado</span><br/>
						 <span className="description-circle">{history.reservedPayment ? new Date(history.reservedPayment).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.withCarrier ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Com transportadora</span><br/>
						 <span className="description-circle">{history.withCarrier ? new Date(history.withCarrier).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.onCarriage ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Em transporte</span><br/>
						 <span className="description-circle">{history.onCarriage ? new Date(history.onCarriage).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.delivered ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Pedido entregue</span><br/>
						 <span className="description-circle">{history.delivered ? new Date(history.delivered).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>
			 </div>
			}
		</>
	);
};

export default TimeLineOrder;
