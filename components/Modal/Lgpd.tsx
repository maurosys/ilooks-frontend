import React, {useEffect, useState} from "react";
import Link                         from "next/link";
import ButtonPrimary                from "@components/Button/Primary";
import api                          from "@services/api";

interface LgpdModalProps {
	closeModal: (close) => void;
}

const LgpdModal = ({closeModal}: LgpdModalProps) => {
	const [open, setOpen] = useState(false);
	const [textoLgpd, setTextoLgpd] = useState('');

	useEffect(() => {
		api.get('system/texts/lgpd').then((resp: any) => {
			if (resp.data) {
				setTextoLgpd(resp.data.value);
			}
		}).catch((error: any) => {
			console.log(error);
		});
	}, []);

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

					<section className="faq-area ptb-60">
						<div className="container">
							<div dangerouslySetInnerHTML={{__html: textoLgpd}}/>
						</div>
					</section>

					<ButtonPrimary type="button" onClick={closeModal}>
						Fechar
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default LgpdModal;