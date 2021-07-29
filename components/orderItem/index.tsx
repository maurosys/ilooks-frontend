import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import TimeLineOrder, { rulesActives } from '../timelineOrder';


export interface ItemsProps {
    title: string;
    imageUrl: string;
    quantity: number;
}

export interface OrderItemProps {
    id?: string;
    numberOrder: number;
    orderStatus: string;
    items: ItemsProps[];
}

export default function OrderItem ({ id, numberOrder, orderStatus, items }: OrderItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

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
                    <span className="accordion-custom-header-span-status">Pedido: {numberOrder}</span>
                </div>
                <span>{rulesActives[orderStatus].label}</span>
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

                <TimeLineOrder orderStatus={orderStatus} />

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
    )
}
