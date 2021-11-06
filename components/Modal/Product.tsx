import React, {useState} from "react";
import Link from "next/link";
import ButtonPrimary from "@components/Button/Primary";

interface ProductDetailProps {
	closeModal: (close) => void;
}

const ProductDetail = ({closeModal}: ProductDetailProps) => {
	const [open, setOpen] = useState(false);
	
	const modalClose = (close) => {
		return closeModal(modalClose);
	};
	
	return (
		<div
			className="modal fade productQuickView show"
			style={{marginTop:"20px", display: "block", height:"80vh", overflow:"auto"}}
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<button
						type="button"
						onClick={modalClose}
						className="close"
						data-dismiss="modal"
						aria-label="Close"
					>
			            <span aria-hidden="true">
			              <i className="fas fa-times"></i>
			            </span>
					</button>


					
					<ButtonPrimary type="button" onClick={closeModal}>
						Fechar
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;