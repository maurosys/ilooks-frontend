//STYLES
import {UserReponse} from "@type/global";

//TYPES
import styles from "./requestdetail.module.css";

interface CardRequestDetailProps {
	amount?: string;
	freight?: number;
	customer?: UserReponse;
}

const CardRequestDetail = ({
	                           amount = "0.00",
	                           freight = 0.00,
	                           customer,
                           }: CardRequestDetailProps) => {
	return (
		<div className={styles.containerDetail}>
			<div
				className={styles.cardContainer}
				style={{
					borderRight: "1px solid #a2a2a2",
				}}
			>
				<p className={styles.p}>total pago</p>
				<div className={styles.line}>
					<span>subtotal</span> <span>{new Intl.NumberFormat("br-BR", {
					style: "currency",
					currency: "BRL",
				}).format(Number(amount))}</span>
				</div>
				<div className={styles.line}>
					<span>desconto</span> <span>{new Intl.NumberFormat("br-BR", {
					style: "currency",
					currency: "BRL",
				}).format(0)}</span>
				</div>
				<div className={styles.line}>
					<span>frete</span> <span>{new Intl.NumberFormat("br-BR", {
					style: "currency",
					currency: "BRL",
				}).format(freight)}</span>
				</div>
				<hr/>
				<div className={styles.line}>
					<span>total</span> <span>{new Intl.NumberFormat("br-BR", {
					style: "currency",
					currency: "BRL",
				}).format(Number(amount) + freight)}</span>
				</div>
			</div>
			
			<div className={styles.cardContainer}>
				<p>endereço</p>
				<span>{customer.name}</span>
				
				<div className={styles.line}>
					<span>{customer.address}</span>
				</div>
				<div className={styles.line}>
					<span>{customer.complement}</span>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					{customer && customer.district && (
						<span>{`${customer.district} - `}</span>
					)}
					
					<span
						style={{
							marginLeft: "4px",
						}}
					>{`${customer.city},${customer.state}`}</span>
				</div>
				
				<div className={styles.line}>
					<span>CEP: {customer.zipcode}</span>
				</div>
			</div>
		</div>
	);
};

export default CardRequestDetail;
