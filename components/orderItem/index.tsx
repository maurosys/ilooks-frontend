import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import TimeLineOrder, { rulesActives } from '../timelineOrder';
import {date} from "yup";


export interface ItemsProps {
    title: string;
    imageUrl: string;
    quantity: number;
}

export interface OrderStatusProps {
    id: string;
    status_request: string;
    status_payment: string;
    change_date: date;
}

export interface OrderItemProps {
    id?: string;
    numberOrder: number;
    orderStatus: string;
    items: ItemsProps[];
    statusHistory:OrderStatusProps[];
}

export default function OrderItem ({ id, numberOrder, orderStatus, items, statusHistory }: OrderItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="accordion-custom">
            <div className="accordion-custom-header" onClick={handleExpanded}>
                <div>
                    <span className="accordion-custom-header-span-status">Pedido: {numberOrder}</span>
                </div>
                <span>{orderStatus}</span>
            </div>
            <hr />

            <div>

                <div className="accordion-content-not-expanded">

                    {
                        items && items.length > 0 && items.map((item, index) => (
                            <div className="item" key={`orderItem${index}`}>
                                <img src={item.imageUrl} alt={`imageProduct${index}`} width={80} />
                                <div>
                                    <p>{item.title}</p>
                                    <span>{item.quantity} {item.quantity > 1 ? 'unidades' : 'unidade'}</span>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <TimeLineOrder orderStatus={orderStatus} statusHistory={statusHistory} />

                <div className="accordion-footer">
                        <button className="btn-primary-br">Trocar ou devolver</button>
                        <button className="btn-secondary-br">Detalhes do pedido</button>
                </div>
                
            </div>
        </div>
    )
}
