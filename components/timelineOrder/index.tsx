
interface TimeLineOrderProps {
    orderStatus: string;
}

interface IActives {
    orderPlaced: boolean;
    reservedPayment: boolean;
    withCarrier: boolean;
    onCarriage: boolean;
    delivered: boolean;
}

export const rulesActives = {
    realizado: {
        label: 'Pedido realizado',
        orderPlaced: true,
        reservedPayment: false,
        withCarrier: false,
        onCarriage: false,
        delivered: false,
    },
    pagamento: {
        label: 'Pagamento pré-reservado',
        orderPlaced: true,
        reservedPayment: true,
        withCarrier: false,
        onCarriage: false,
        delivered: false,
    },
    transportadora: {
        label: 'Com transportadora',
        orderPlaced: true,
        reservedPayment: true,
        withCarrier: true,
        onCarriage: false,
        delivered: false,
    },
    transito: {
        label: 'Em trânsito',
        orderPlaced: true,
        reservedPayment: true,
        withCarrier: true,
        onCarriage: true,
        delivered: false,
    },
    entregue: {
        label: 'Entregue',
        orderPlaced: true,
        reservedPayment: true,
        withCarrier: true,
        onCarriage: true,
        delivered: true,
    }
}

const TimeLineOrder = ({ orderStatus }: TimeLineOrderProps) => {
    console.log('STATUS',orderStatus);
    return (
    <div className="timeline">

        <div className={`circle ${rulesActives[orderStatus].orderPlaced && 'active'}`}>
            <div className="icon"></div>
            <div className="labels">
                <span className="title-circle">Pedido<br />realizado</span>
                <span className="description-circle">17/abr 13:34</span>
            </div>
            <div className="line"></div>
        </div>

        <div className={`circle ${rulesActives[orderStatus].reservedPayment && 'active'}`}>
            <div className="icon"></div>
            <div className="labels">
                <span className="title-circle">Pagamento<br />pré-reservado</span>
                <span className="description-circle">17/abr 13:34</span>
            </div>
            <div className="line"></div>
        </div>

        <div className={`circle ${rulesActives[orderStatus].withCarrier && 'active'}`}>
            <div className="icon"></div>        
            <div className="labels">
                <span className="title-circle">Com transportadora</span>
                {/* <span className="description-circle">17/abr 13:34</span> */}
            </div>
            <div className="line"></div>
        </div>

        <div className={`circle ${rulesActives[orderStatus].onCarriage ? 'active': ''}`}>
            <div className="icon"></div>            
            <div className="labels">
                <span className="title-circle">em tranporte</span>
                {/* <span className="description-circle">17/abr 13:34</span> */}
            </div>
            <div className="line"></div>
        </div>

        <div className={`circle end ${rulesActives[orderStatus].delivered && 'active'}`}>
            <div className="icon"></div>
            
            <div className="labels">
                <span className="title-circle">entregue</span>
                <span className="description-circle">17/abr 13:34</span>
            </div>
        </div>

    </div>)
}

export default TimeLineOrder