import Abrangencia from '@components/Modal/Abrangencia';
import {useState}  from 'react';

interface ShippingProps {
	closeShipModal: () => void;
}

const Shipping = ({closeShipModal}: ShippingProps) => {
	const [abrangencia, setAbrangencia] = useState(false);

	const closeAbrangencia = () => {
		return setAbrangencia(false);
	};

	return (
		<>
			<div
				className="modal fade productShippingModal show"
				style={{paddingRight: '16px', display: 'block'}}
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<button
							type="button"
							onClick={closeShipModal}
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
            <span aria-hidden="true">
              <i className="fas fa-times"></i>
            </span>
						</button>

						<div className="shipping-content">
							<h3>Entregas</h3>
							<ul>
								<li>Envio via transportadora em até 48h do recebimento do pedido.</li>
								<li>Consulte nossa região de atendimento. <a href="#" onClick={(e)=>setAbrangencia(true)}>Ver abrangência</a></li>
							</ul>

							<h3>Devolução</h3>
							<ul>
								<li>Consulte as condições e o procedimento em nossa FAQ e política de devolução.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{abrangencia &&
			<Abrangencia closeModal={closeAbrangencia} />
			}
		</>
	);
};

export default Shipping;
