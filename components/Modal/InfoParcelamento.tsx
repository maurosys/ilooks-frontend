import React, {useEffect, useState} from 'react';
import ButtonPrimary                from '@components/Button/Primary';
import api                          from "@services/api";

interface InfoParcelamentoProps {
	closeModal: (close) => void;
}

const InfoParcelamento = ({closeModal}: InfoParcelamentoProps) => {
	const [open, setOpen] = useState(false);
	const [aceito, setAceito] = useState(false);
	const [textoComunicado, setTextoComunicadoo] = useState('');

	const modalClose = (close) => {
		if (aceito) {
			sessionStorage.setItem('@ilooksecommerce_aceiteparcelamento', 'aceitou');
		} else {
			sessionStorage.removeItem('@ilooksecommerce_aceiteparcelamento');
		}
		return closeModal(modalClose);
	};

	useEffect(() => {
		api.get('system/texts/payment').then((resp: any) => {
			if (resp.data) {
				setTextoComunicadoo(resp.data.value);
			}
		}).catch((error: any) => {
			console.log(error);
		});
	}, []);


	return (
		<div
			className="modal fade productQuickView show"
			style={{marginTop: '20px', display: 'block', overflow: 'auto'}}
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

					<div dangerouslySetInnerHTML={{__html: textoComunicado}}/>

					<p>
						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="aceito-parcelamento"
								onChange={(e) => {
									setAceito(e.target.checked);
									if (e.target.checked) {
										sessionStorage.setItem('@ilooksecommerce_aceiteparcelamento', 'aceitou');
									} else {
										sessionStorage.removeItem('@ilooksecommerce_aceiteparcelamento');
									}
								}}
							/>
							<label
								className="form-check-label"
								htmlFor="aceito-parcelamento">
								Confirmo que entendi e estou de acordo
							</label>
						</div>
					</p>
					<ButtonPrimary disabled={!aceito} type="button" onClick={closeModal}>
						Enviar meu pedido
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default InfoParcelamento;