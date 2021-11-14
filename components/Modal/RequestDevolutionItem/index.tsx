import React, {useEffect, useState} from 'react';
import {useRouter}                  from 'next/router';
import Modal                        from 'react-modal';

import ButtonPrimary   from '@components/Button/Primary';
import ButtonSecondary from '@components/Button/Secondary';

//STYLES
import styles from './style.module.css';
//HOOKS
import useRequestDevolution, {
	ProductDevolutionProps,
}             from '@hooks/components/useRequestDevolution';

//TYPES
import {ItemsProps} from '@components/orderItem';

const customStyles = {
	content: {
		top:         '50%',
		left:        '50%',
		right:       'auto',
		bottom:      'auto',
		marginRight: '-50%',
		transform:   'translate(-50%, -50%)',
	},
};

interface ModalRequestDevolutionItemProps {
	orderId: any;
	modalIsOpen?: boolean;
	setModalIsOpen?: any;
	items?: ItemsProps[];
	itemsSelected?: string[];
	amount: string;
}

interface ItemPropsWihtQuantity extends ItemsProps {
	quantityDev: number;
}

const ModalRequestDevolutionItem = ({
	                                    orderId,
	                                    modalIsOpen,
	                                    setModalIsOpen,
	                                    items,
	                                    itemsSelected,
	                                    amount,
                                    }: ModalRequestDevolutionItemProps) => {
	//HOOKS INSTANCES
	const {handleSubmitDevolution, loading} = useRequestDevolution();
	const router = useRouter();
	const [devolutionMotive, setDevolutionMotive] = useState('');
	const [outros, setOutros] = useState(false);
	const [newTotal, setNewTotal] = useState(0);
	const [observation, setObservation] = useState('');
	const [installments, setInstallments] = useState(1);
	const [parcelas, setParcelas] = useState<string[]>([]);
	const [parcela, setParcela] = useState('à vista');
	const currencyFormater = new Intl.NumberFormat('pt-br', {
		style:    'currency',
		currency: 'BRL',
	});

	//STATES
	const [itemsRendering, setItemsRendering] = useState<ItemPropsWihtQuantity[]>(
		[]
	);

	useEffect(() => {
		if (itemsSelected && items) {
			const newArray: ItemPropsWihtQuantity[] = [];
			let subTotal = 0;
			itemsSelected.map((itemSel) => {
				const object = items.find((item) => item.productDetailId === itemSel);
				if (object) {
					newArray.push({
						              ...object,
						              quantityDev: 1,
					              });
					subTotal += object.unitPrice;
				}
			});

			setItemsRendering([...newArray]);

			setNewTotal(Number(amount) - subTotal);
			if (newTotal >= 1500) {
				setParcelas([
					            'à vista',
					            '2x sem juros',
					            '3x sem juros',
					            '4x sem juros',
					            '5x sem juros',
					            '6x sem juros',
				            ]);
			} else if (newTotal >= 900) {
				setParcelas([
					            'à vista',
					            '2x sem juros',
					            '3x sem juros',
					            '4x sem juros',
					            '5x sem juros',
				            ]);
			} else if (newTotal >= 600) {
				setParcelas([
					            'à vista',
					            '2x sem juros',
					            '3x sem juros',
					            '4x sem juros',
				            ]);
			} else if (newTotal >= 400) {
				setParcelas(['à vista', '2x sem juros', '3x sem juros']);
			} else if (newTotal >= 100) {
				setParcelas(['à vista', '2x sem juros']);
			} else {
				setParcelas(['à vista']);
			}
		}
	}, [itemsSelected, items]);

	function closeModal() {
		setNewTotal(Number(amount));
		setModalIsOpen(false);
	}

	async function submit() {
		const dataRequst: ProductDevolutionProps[] = itemsRendering.map((item) => ({
			productDetailId: item.productDetailId,
			quantity:        item.quantityDev,
		}));

		console.log('OBS:', observation);

		const response = await handleSubmitDevolution({
			                                              orderId,
			                                              devolutionMotive,
			                                              observation,
			                                              productsDevolutions: dataRequst,
			                                              installments,
		                                              });
		if (response) {
			router.push(`/request/detail/${orderId}`);
		}
	}

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div className={styles['container-modal']}>
					<h3>Informe a quantidade de devolução de cada peça:</h3>
					<hr/>

					<div
						style={{
							display:   'flex',
							maxWidth:  '900px',
							overflowX: 'scroll',
						}}
					>
						{itemsRendering.map((item, index) => (
							<div className={styles.card} onClick={() => {}}>
								<img src={item.imageUrl} alt="teste"/>
								<hr/>
								<p>{item.title}</p>

								<div
									style={{
										display:       'flex',
										flexDirection: 'column',
										paddingBottom: '2px',
									}}
								>
                  <span>
                    <strong>Tamanho:</strong> {item.size}
                  </span>
									<span
										style={{
											display:       'flex',
											flexDirection: 'row',
											alignItems:    'center',
										}}
									>
                    <strong>Cor:</strong>{' '}
										<div
											style={{
												width:        10,
												height:       10,
												borderRadius: 5,
												background:   item.color,
												marginRight:  3,
												marginLeft:   3,
											}}
										/>
                  </span>
									<span>
                    <strong>Qtde. Comprada:</strong> {item.quantity}
										<br/>
                    <strong>Preço un.:</strong>{' '}
										{currencyFormater.format(item.unitPrice)}
                  </span>

									<br/>
									<input
										type="number"
										min={1}
										max={item.quantity}
										value={item.quantityDev}
										onChange={(e: any) => {
											let array = itemsRendering;
											const value = e.target.value;

											if (value) {
												const numbersString: string = value.replace(
													/[^0-9]/g,
													''
												);
												if (numbersString.length <= 0) {
													array[index].quantityDev = 2;
													setItemsRendering([...array]);
												} else {
													const numberInt = parseInt(numbersString);
													if (numberInt === 0) {
														array[index].quantityDev = 1;
														setItemsRendering([...array]);
													} else if (numberInt <= item.quantity) {
														array[index].quantityDev = numberInt;
														setItemsRendering([...array]);
													}
												}
											} else {
												array[index].quantityDev = 1;
												setItemsRendering([...array]);
											}
											// calcular subtotal
											let subTotal = 0;
											itemsRendering.forEach((item) => {
												subTotal += item.quantityDev * item.unitPrice;
											});
											setNewTotal(Number(amount) - subTotal);
										}}
									/>
								</div>
							</div>
						))}
					</div>

					<hr/>
					<div>
						<fieldset>
							<h6>Motivo de devolução</h6>
							<table style={{width: '100%'}}>
								<tr>
									<td>
										<input
											type="radio"
											id="rdTamanho"
											name="rdMotivo"
											value="Tamanho"
											checked={devolutionMotive === 'Tamanho'}
											onChange={(e: any) => {
												e.preventDefault();
												setOutros(false);
												setDevolutionMotive(e.target.value);
											}}
										/>
										<label htmlFor="rdTamanho" style={{marginLeft: '10px'}}>
											Tamanho
										</label>
										<br/>
									</td>
									<td>
										<input
											type="radio"
											id="modelagem"
											name="rdMotivo"
											value="Modelagem"
											checked={devolutionMotive === 'Modelagem'}
											onChange={(e: any) => {
												e.preventDefault();
												setOutros(false);
												setDevolutionMotive(e.target.value);
											}}
										/>
										<label htmlFor="modelagem" style={{marginLeft: '10px'}}>
											Modelagem
										</label>
										<br/>
									</td>
								</tr>
								<tr>
									<td>
										<input
											type="radio"
											id="rdNaoGostei"
											name="rdMotivo"
											value="Não gostei da peça"
											checked={devolutionMotive === 'Não gostei da peça'}
											onChange={(e: any) => {
												e.preventDefault();
												setOutros(false);
												setDevolutionMotive(e.target.value);
											}}
										/>
										<label htmlFor="rdNaoGostei" style={{marginLeft: '10px'}}>
											Não gostei da peça
										</label>
										<br/>
									</td>
									<td>
										<input
											type="radio"
											id="rdOutros"
											name="rdMotivo"
											value="Outros"
											checked={outros}
											onChange={(e: any) => {
												e.preventDefault();
												setOutros(true);
												setDevolutionMotive('');
											}}
										/>
										<label htmlFor="rdOutros" style={{marginLeft: '10px'}}>
											Outros
										</label>
										<br/>
									</td>
								</tr>
								{outros && (
									<tr>
										<td colSpan={2}>
                      <textarea
	                      id="edtMotivo"
	                      maxLength={100}
	                      rows={1}
	                      style={{width: '100%'}}
	                      onChange={(e: any) => {
		                      e.preventDefault();
		                      setDevolutionMotive(e.target.value);
	                      }}
                      ></textarea>
										</td>
									</tr>
								)}
							</table>
						</fieldset>
					</div>
					<div>
						<label htmlFor="edtObservation">Observações para a coleta:</label>
						<textarea
							id="edtObservation"
							rows={2}
							style={{width: '100%'}}
							onChange={(e: any) => {
								e.preventDefault();
								setObservation(e.target.value);
							}}
						></textarea>
					</div>
					<div>
						<h6>Pagamento</h6>
						<table style={{width: '100%'}}>
							<tr>
								<td>
									<strong>Valor Original: </strong>
									{currencyFormater.format(Number(amount))}
									<br/>
									<strong>Novo Valor: </strong>
									{currencyFormater.format(newTotal)} <br/>
								</td>
								<td>
									<label htmlFor="cboParcelas">Parcelas: </label>&nbsp;
									<select
										id="cboParcelas"
										value={parcela}
										onChange={(e: any) => {
											e.preventDefault();
											if (e.target.value === 'à vista') {
												setInstallments(1);
											} else {
												setInstallments(e.target.value.substr(0, 1));
											}
											setParcela(e.target.value);
										}}
									>
										{parcelas.map((item) => {
											return <option value={item}>{item}</option>;
										})}
									</select>
								</td>
							</tr>
						</table>
					</div>

					<div
						style={{
							marginTop:      '30px',
							borderTop:      '1px solid #222',
							paddingTop:     '10px',
							paddingBottom:  '20px',
							display:        'flex',
							justifyContent: 'center',
							alignItems:     'center',
						}}
					>
						<ButtonPrimary
							style={{marginRight: '10px'}}
							loading={loading}
							onClick={submit}
						>
							Confirmar Devolução
						</ButtonPrimary>
						<ButtonSecondary
							onClick={() => {
								setModalIsOpen(false);
							}}
						>
							Cancelar Devolução
						</ButtonSecondary>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ModalRequestDevolutionItem;
