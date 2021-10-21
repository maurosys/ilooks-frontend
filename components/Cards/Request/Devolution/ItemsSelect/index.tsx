//STYLES
import styles from "./style.module.css";
import React from "react";

//TYPES
interface CardRequestDevolutionItemsSelectProps {
	productDetailId: string;
	title?: string;
	imageUrl?: string;
	size?: string | number;
	color?: string;
	quantity?: number | string;
	unitPrice: number;
	isSelected?: boolean;
	itemsSelected?: any;
	setItemsSelected?: any;
}

const CardRequestDevolutionItemsSelect = ({
	                                          productDetailId,
	                                          title,
	                                          imageUrl,
	                                          size,
	                                          color,
	                                          quantity,
	                                          unitPrice,
	                                          isSelected = false,
	                                          itemsSelected,
	                                          setItemsSelected,
                                          }: CardRequestDevolutionItemsSelectProps) => {
	const handleCheckedOrUncheked = (id: string) => {
		if (itemsSelected.includes(id)) {
			const newArray = itemsSelected.filter((item) => item !== id);
			setItemsSelected([...newArray]);
		} else {
			setItemsSelected([...itemsSelected, id]);
		}
	};
	const currencyFormater = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL'
	});
	
	return (
		<div
			className={styles.card}
			onClick={() => {
				handleCheckedOrUncheked(productDetailId);
			}}
		>
			<img src={imageUrl} alt="teste"/>
			<hr/>
			<p>{title}</p>
			
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					paddingBottom: "25px",
				}}
			>
        <span>
          <strong>Tamanho:</strong> {size}
        </span>
				<span
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
          <strong>Cor:</strong>{" "}
					<div
						style={{
							width: 10,
							height: 10,
							borderRadius: 5,
							background: color,
							marginRight: 3,
							marginLeft: 3,
						}}
					/>
        </span>
				<span>
          <strong>Quantidade:</strong> {quantity}<br/>
					<strong>Preço un.:</strong> {currencyFormater.format(unitPrice)}
        </span>
			</div>
			
			<footer>
				<input type="checkbox" checked={isSelected}/>
			</footer>
		</div>
	);
};

export default CardRequestDevolutionItemsSelect;
