import { useState } from "react";
import Link from "next/link";
import TimeLineOrder from "../timelineOrder";
import { formatToUggly } from "@utils/formatToUggly";

export interface ItemsProps {
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
	numberOrder: number;
	orderStatus: string;
	items: ItemsProps[];
	statusHistory: OrderStatusProps[];
}

export default function OrderItem({
	                                  id,
	                                  numberOrder,
	                                  orderStatus,
	                                  items,
	                                  statusHistory
                                  }: OrderItemProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	
	const handleExpanded = () => {
		setIsExpanded(!isExpanded);
	};
	
	return (
		<div className="accordion-custom">
			<div className="accordion-custom-header" onClick={handleExpanded}>
				<div>
					{/* {
                        !isExpanded ? (<FiChevronsDown size={20}  style={{
                            cursor: 'pointer'
                        }}/>) : (<FiChevronsUp size={20} style={{
                            cursor: 'pointer'
                        }}/>)
                    } */}
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
									name: item.title,
									id: item.productId,
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
									</div>
								</div>
							</Link>
						))}
				</div>
				
				<TimeLineOrder orderStatus={orderStatus} statusHistory={statusHistory} />
				
				<div className="accordion-footer">
					<button className="btn-primary-br">Trocar ou devolver</button>
					<button className="btn-secondary-br">Detalhes do pedido</button>
				</div>
				
				{/* {
                    isExpanded && (
                        <>

                            <div className="accordion-content-expanded">
                                <div className="item">
                                    <img src="https://raw.githubusercontent.com/victorsfp/ilooks-frontend/em/limpeza/images/img1.jpg" alt="imageProduct" width={80} />
                                    <div>
                                        <p>Vestido teste rosa - verão</p>
                                        <span>1 unidade</span>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                } */}
			</div>
		</div>
	);
}
