import {GetServerSideProps} from 'next';
import Link from 'next/link';
import {parseCookies} from 'nookies';
import React, {useEffect, useState} from 'react';
import CardsAdd from '../components/Cards/Add';
import CardPhones from '../components/Cards/Phones';
import Details from '../components/Detalis';
import Footer from '../components/Layout/Footer';
import HeaderFixed from '../components/Layout/HeaderFixed';
import Facility from '../components/shop-style-five/Facility';
import api, {getAPIClient} from '../services/api';
import ButtonPrimary from "@components/Button/Primary";
import useLogin from "@hooks/pages/useLogin";

const Phones = () => {
		const [phones, setPhones] = useState([]);
		const [canEditPhone, setCanEditPhone] = useState(false);
		const [phone, setPhone] = useState(null);
		
		const {onLogout} = useLogin();
		
		useEffect(() => {
			loadPhones();
		}, []);
		
		const loadPhones = async () => {
			api.get('/phone')
				.then((response) => {
					setPhones(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		
		const handleChangePrimary = async (id) => {
			api.put(`/phone/primary/${id}`)
				.then((response) => {
					const arrayPhones = phones;
					arrayPhones.forEach((add) => {
						add.id === id ? (add.primary = true) : (add.primary = false);
					});
					setPhones([...arrayPhones]);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		
		const handleEdit = async (id) => {
			phones.forEach((phone) => {
				if (phone.id === id) {
					console.log(phone);
					setPhone(phone);
					setCanEditPhone(true);
				}
			});
		};
		
		const handleAdd = async () => {
			setPhone({ddd: null, number: null, nickname: null, primary: false, description: null, id: null});
			setCanEditPhone(true);
		};
		
		const handleDelete = async (id) => {
			api.delete(`/phone/${id}`)
				.then((response) => {
					loadPhones();
				})
				.catch((error) => {
					console.log(error);
				});
		};
		
		const handleChange = (e, prop) => {
			const text = (e.target && e.target.value) || '';
			let _item = {...phone};
			_item[`${prop}`] = text;
			setPhone(_item);
		};
		
		const handleSubmit = async () => {
			if (phone.ddd && phone.number && phone.nickname) {
				const {"nextilooks.auth": auth} = parseCookies();
				const user_session = auth ? JSON.parse(auth) : undefined;
				const phoneData = {
					phone: `${phone.ddd}${phone.number}`,
					type: phone.nickname,
					primary: phone.primary,
					description: phone.description,
					userId: user_session.userId
				};
				if (phone.id) {
					api.put(`/phone/${phone.id}`, phoneData)
						.then((response) => {
							loadPhones();
							setCanEditPhone(false);
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					api.post('/phone', phoneData)
						.then((response) => {
							loadPhones();
							setCanEditPhone(false);
						})
						.catch((error) => {
							console.log(error);
						});
				}
			}
		};
		
		
		return (
			<>
				<HeaderFixed/>
				<section className="login-area ptb-60">
					<div
						className="container"
						style={{
							marginTop: -35,
						}}
					>
						<h1>Meus telefones</h1>
						<div className="container-order">
							<div className="container-order-options">
								<Details/>
							</div>
							
							<div className="container-order-content">
								{/* <h5>Endereços</h5> */}
								
								<div className="container-address-content">
									{phones.map((phone, index) => {
										return (
											<div className="card" key={index}>
												<CardPhones
													id={phone.id}
													nickname={phone.nickname}
													phone={phone.phone}
													description={phone.description}
													primary={phone.primary}
													handleChangePrimary={handleChangePrimary}
													handleEdit={handleEdit}
													handleDelete={handleDelete}
												/>
											</div>
										);
									})}
									
									<div className="card">
										<CardsAdd handleAdd={handleAdd} label="novo telefone"/>
									</div>
									
									<ButtonPrimary
										type="button"
										onClick={onLogout}
										style={{
											marginTop: 20,
											width: '100%'
										}}
									>
										Sair
									</ButtonPrimary>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<Facility/>
				
				<Footer/>
				
				{canEditPhone &&
					<div className={'bts-popup is-visible'} role="alert">
						<div className="bts-popup-container">
							<h3>{phone?.id ? 'Alterar' : 'Cadastrar'} telefone</h3>
							<form>
								<label>
									Tipo:
									<span className="required">*</span>
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Tipo"
									name="nickname"
									id="nickname"
									value={phone.nickname}
									onChange={(e) => handleChange(e, 'nickname')}
									required={true}
								/>
								<label>
									DDD
									<span className="required">*</span>
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="ddd"
									name="ddd"
									maxLength={2}
									value={phone.ddd}
									onChange={(e) => handleChange(e, 'ddd')}
									required={true}
								/>
								<label>
									Telefone
									<span className="required">*</span>
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Telefone"
									name="phone"
									value={phone.number}
									onChange={(e) => handleChange(e, 'number')}
									required={true}
								/>
								<label>
									Descrição
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Descrição"
									name="description"
									value={phone.description}
									onChange={(e) => handleChange(e, 'description')}
									required={false}
								/>
								<button type="button" onClick={handleSubmit} className="btn-signup" style={{position: 'relative'}}>
									SALVAR
								</button>
							</form>
							
							<Link href="#">
								<a onClick={() => setCanEditPhone(false)} className="bts-popup-close"></a>
							</Link>
						</div>
					</div>
				}
			</>
		);
	}
;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const apiClient = getAPIClient(ctx);
	const {'nextilooks.auth': auth} = parseCookies(ctx);
	
	if (!auth) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	
	return {
		props: {},
	};
};

export default Phones;
