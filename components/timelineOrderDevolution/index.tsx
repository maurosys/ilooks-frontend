import {StatusDevolution, StatusHistoryItem, StatusRequest} from '@type/orders';
import {useEffect, useState}                                from 'react';
import {useMediaQuery}                                      from 'react-responsive';

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

	const isDesktopOrLaptop = useMediaQuery({minWidth: 1024});
	const isBigScreen = useMediaQuery({minWidth: 1500});
	const isTabletOrMobile = useMediaQuery({maxWidth: 1024});
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

		let objectStatus: historyStatusProps = {
			inBack:          '',
			reservedPayment: '',
			withCarrier:     '',
			onCarriage:      '',
			delivered:       '',
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
		<>
			{isDesktopOrLaptop &&
			 <div className="timeline" style={{display: 'none'}}>
				 <div className={`circle ${history.inBack && 'active'}`}>
					 <div className="icon"></div>
					 <div className="labels">
						 <span className="title-circle">Devolução<br/>solicitada</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
            {history.inBack &&
             new Date(history.inBack).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
          </span>
					 </div>
					 <div className="line"></div>
				 </div>

				 <div className={`circle ${history.reservedPayment && 'active'}`}>
					 <div className="icon"></div>
					 <div className="labels">
						 <span className="title-circle">Com  <br/>transportadora</span>
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
						 <span className="title-circle">Validação <br/>Ilooks</span>
						 <span className="description-circle" style={{whiteSpace: 'nowrap'}}>
            {history.withCarrier &&
             new Date(history.withCarrier).toLocaleString('pt-BR', (isBigScreen ? dateOptions : dateOptionsSmall))}
          </span>
					 </div>
					 <div className="line"></div>
				 </div>

				 <div className={`circle end ${history.delivered && 'active'}`} style={{paddingRight: 40}}>
					 <div className="icon"></div>

					 <div className="labels">
						 <span className="title-circle">Devolução <br/>aprovada</span>
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
				 <hr />
				 <p>Acompanhamento da devolução</p>
				 <div className="labelContainer">
					 <div>
						 {history.inBack ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Devolução solicitada</span><br/>
						 <span className="description-circle">{history.inBack ? new Date(history.inBack).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.reservedPayment ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Com  transportadora</span><br/>
						 <span className="description-circle">{history.reservedPayment ? new Date(history.reservedPayment).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.withCarrier ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Validação Ilooks</span><br/>
						 <span className="description-circle">{history.withCarrier ? new Date(history.withCarrier).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>

				 <div className="labelContainer">
					 <div>
						 {history.delivered ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
					 </div>
					 <div className="smallLabel">
						 <span className="title-circle">Devolução aprovada</span><br/>
						 <span className="description-circle">{history.delivered ? new Date(history.delivered).toLocaleString('pt-BR', dateOptions) : '--'}</span>
					 </div>
				 </div>
			 </div>
			}
		</>
	);
};

export default timelineOrderDevolution;
