import React, {useEffect, useState} from "react";
import Link                         from "next/link";
import ButtonPrimary                from "@components/Button/Primary";
import api                          from "@services/api";

interface TermoProps {
	closeModal: (close) => void;
}

const Termo = ({closeModal}: TermoProps) => {
	const [open, setOpen] = useState(false);
	const [textoTermo, setTextoTermo] = useState('');

	useEffect(() => {
		api.get('system/texts/term').then((resp: any) => {
			if (resp.data) {
				setTextoTermo(resp.data.value);
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
					
					<div dangerouslySetInnerHTML={{__html: textoTermo}}/>
					
					<ButtonPrimary type="button" onClick={closeModal}>
						Fechar
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default Termo;