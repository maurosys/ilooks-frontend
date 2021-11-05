import React, {useState} from 'react';
import Link              from 'next/link';
import ButtonPrimary     from '@components/Button/Primary';

interface InfoParcelamentoProps {
	closeModal: (close) => void;
}

const InfoParcelamento = ({closeModal}: InfoParcelamentoProps) => {
	const [open, setOpen] = useState(false);
	const [aceito, setAceito] = useState(false);

	const modalClose = (close) => {
		if (aceito) {
			sessionStorage.setItem('@ilooksecommerce_aceiteparcelamento', 'aceitou');
		}
		return closeModal(modalClose);
	};

	return (
		<div
			className="modal fade productQuickView show"
			style={{marginTop: '20px', display: 'block', height: '80vh', overflow: 'auto'}}
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

					<p>
						<h1>ATENÇÃO!!!</h1>
					</p>
					<p>Vamos realizar uma pré reserva em seu cartão crédito no valor total do seu pedido.</p>
					<p>Após o recebimento do seu pedido, você terá 48h para entrar na área do cliente e indicar se haverá devolução de alguma peça.</p>
					<p>Caso contrário, o valor total será debitado do seu cartão para pagamento da compra.</p>
					<p>Você deve decidir ainda na pré reserva se deseja realizar o pagamento parcelado e indicar o número de parcelas. Assim se ficar com o pedido integral, seu processo de pagamento já será concluído automaticamente após as 48h.</p>
					<p>No caso de devoluções parciais haverá atualização de valores e você poderá decidir com base nos valores atualizados em quantas parcelas desejará realizar sua compra.</p>
					<p>No caso de devoluções integrais o estorno da pré reserva será realizado após retira das peças e triagem pela Ilooks.</p>

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
						Fechar
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default InfoParcelamento;