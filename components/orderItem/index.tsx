import {useEffect, useState} from "react";
import Link from "next/link";
import TimeLineOrder from "../timelineOrder";
import TimelineOrderDevolution from "../timelineOrderDevolution";
import {formatToUggly} from "@utils/formatToUggly";
import {FiChevronsDown} from "@react-icons/all-files/fi/FiChevronsDown";
import {FiChevronsUp} from "@react-icons/all-files/fi/FiChevronsUp";

//TYPES
import {UserReponse} from "@type/global";
import {StatusHistoryItem, StatusRequest} from "@type/orders";

export interface ItemsProps {
	productDetailId?: string;
	title: string;
	imageUrl: string;
	quantity: number;
	unitPrice: number;
	color?: string;
	size?: string;
	productId?: string;
}

export interface OrderStatusProps {
	id: string;
	status_request: string;
	status_payment: string;
	action_date: string;
}

export interface OrderItemProps {
	id?: string;
	numberOrder: number | string;
	orderStatus: string;
	items: any[];
	statusHistory: any[];
	showButtomDetails?: boolean;
	freight?: number;
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
	const [timeToDevolution, setTimeToDevolution] = useState(0);
	const [timeLimitToDevolution, setTimeLimitToDevolution] = useState<Date | undefined>(null);
	const [hasDevolution,setHasDevolution] = useState(false);
	const dateOptions: any = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	};
	const currencyFormater = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL'
	});
	
	useEffect(() => {
		const deliveredIn = statusHistory.find((h: StatusHistoryItem) => h.status_request === StatusRequest.DELIVERED)?.action_date;
		const hadDevolution = statusHistory.find((h)=> h.status_request === StatusRequest.IN_BACK);
		if (hadDevolution) {
			setHasDevolution(true);
		}
		console.log(deliveredIn);
		if (deliveredIn) {
			const timeNow = new Date();
			const timeWas = new Date(deliveredIn);
			const timeUntil = new Date(new Date(timeWas).setHours(timeWas.getHours() + 48));
			const diff = timeUntil.valueOf() - timeNow.valueOf();
			setTimeLimitToDevolution(timeUntil);
			setTimeToDevolution(diff / 1000);
			setInterval(() => {
				if (diff <= 0) {
					setTimeLimitToDevolution(null);
					setTimeToDevolution(0);
					clearInterval();
				}
			}, 1000);
		}
		console.log(deliveredIn);
	}, []);
	
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
			<hr/>
			
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
										<br/>
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
										<br/>
									</div>
								</div>
							</Link>
						))}
				</div>
				
				<TimeLineOrder
					orderStatus={orderStatus}
					statusHistory={statusHistory}
				/>
				
				{hasDevolution && (
					<TimelineOrderDevolution
						orderStatus={orderStatus}
						statusHistory={statusHistory}
					/>
				)}
				
				<div className="accordion-footer">
					{timeToDevolution > 0 && orderStatus.toLowerCase() === StatusRequest.DELIVERED.toLowerCase() &&
						<Link
							href="/request/devolution/[id]"
							as={`/request/devolution/${numberOrder}`}
						>
							<button className="btn-primary-br">Devolver produtos até: {timeLimitToDevolution.toLocaleString("pt-BR", dateOptions)}</button>
						</Link>
					}
					
					{showButtomDetails && (
						<Link
							href="/request/detail/[id]"
							as={`/request/detail/${numberOrder}`}
						>
							<button className="btn-secondary-br" onClick={() => {
							}}>
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
