import React, {useEffect, useState} from 'react';
import Link                         from 'next/link';
import ButtonPrimary                from '@components/Button/Primary';

interface InfoParcelamentoProps {
	closeModal: (close) => void;
}

const InfoParcelamento = ({closeModal}: InfoParcelamentoProps) => {
	const [open, setOpen] = useState(false);
	const [aceito, setAceito] = useState(false);

	const modalClose = (close) => {
		if (aceito) {
			sessionStorage.setItem('@ilooksecommerce_aceiteparcelamento', 'aceitou');
		} else {
			sessionStorage.removeItem('@ilooksecommerce_aceiteparcelamento');
		}
		return closeModal(modalClose);
	};


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

					<p>
						<h1>ATENÇÃO - COMUNICADO IMPORTANTE!!!</h1>
					</p>
					<p style={{fontSize:'18px'}}><strong>INFORMAMOS QUE NÃO ACEITAMOS COMPRAS COM CARTÃO DE CRÉDITO VIRTUAL QUE SEJA TEMPORÁRIO, APENAS CARTÕES VIRTUAIS QUE SEJAM RECORRENTES.</strong>
						 No caso da utilização de um cartão virtual temporário, existindo o interesse em devolver qualquer produto, não será possível estornar valores parciais,
						 validaremos 100% do valor da pré-reserva.
					</p>

					<p>Para os demais tipos de cartões de crédito, faremos uma pré-reserva no cartão, no valor total do seu pedido.</p>

					<p>Após o recebimento do seu pedido, você terá 48 (quarenta e oito) horas para entrar na área do cliente e indicar
						 se haverá devolução de alguma peça. Fique atento, pois o prazo expira a partir do horário recebido, portanto,
						 caso tenha dúvidas quanto ao horário de recebimento, acesse a área do cliente disponível em www.ilooks.com.br e
						 confira exatamente quanto tempo ainda resta para manifestar interesse em devolução parcial ou total dos produtos.</p>

					<p>Caso contrário, o valor total da pré-reserva será debitado do seu cartão de crédito para o pagamento da sua compra.</p>

					<p>Você deve decidir ainda na pré-reserva, se deseja realizar o pagamento parcelado e indicar o número das parcelas. Sendo assim, caso decida ficar com o
						 pedido integral, não será necessário manifestar-se junto a área do cliente, pois seu processo de pagamento já será concluído automaticamente após as
						 48 (quarenta e oito) horas.</p>

					<p>Caso queira devolver parcialmente (um ou mais produtos), haverá nova atualização dos valores e você poderá decidir com base nesses novos valores,
						 em quantas parcelas deseja realizar sua compra.</p>

					<p>Caso queira devolver integralmente (todos os produtos), o estorno da pré-reserva será realizado após a retirada das peças e o devido
						 processo de triagem pela ILOOKS. </p>

					<p>REVISE OS DADOS DE PAGAMENTO, CERTIFIQUE-SE DA NOSSA POLÍTICA DE PAGAMENTO,
						 E CLIQUE NO BOTÃO ENVIAR NOVAMENTE PARA PROSSEGUIR COM A CONFIRMAÇÃO DE SEU PEDIDO.</p>

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