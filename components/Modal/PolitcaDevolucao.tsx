import React, {useEffect, useState} from "react";
import Link                         from "next/link";
import ButtonPrimary                from "@components/Button/Primary";
import api                          from "@services/api";

interface PoliticaDevolucaoProps {
	closeModal: (close) => void;
}

const PoliticaDevolucao = ({closeModal}: PoliticaDevolucaoProps) => {
	const [open, setOpen] = useState(false);
	const [textoDevolucao, setTextoDevolucao] = useState('');

	useEffect(() => {
		api.get('system/texts/devolution').then((resp: any) => {
			if (resp.data) {
				setTextoDevolucao(resp.data.value);
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

					<div dangerouslySetInnerHTML={{__html: textoDevolucao}}/>

					<ButtonPrimary type="button" onClick={closeModal}>
						Fechar
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default PoliticaDevolucao;