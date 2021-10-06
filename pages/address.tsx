import {GetServerSideProps} from 'next';
import Link from 'next/link';
import {parseCookies} from 'nookies';
import React, {useEffect, useState} from 'react';
import CardsAdd from '../components/Cards/Add';
import CardAddress from '../components/Cards/Address';
import Details from '../components/Detalis';
import Footer from '../components/Layout/Footer';
import HeaderFixed from '../components/Layout/HeaderFixed';
import Facility from '../components/shop-style-five/Facility';
import api, {getAPIClient} from '../services/api';
import ButtonPrimary from "@components/Button/Primary";
import useLogin from "@hooks/pages/useLogin";

const Address = () => {
	const {onLogout} = useLogin();
	const [addresses, setAddresses] = useState([]);
	const [address, setAddress] = useState(null);
	const [canEditAddress, setCanEditAddress] = useState(false);
	
	useEffect(() => {
		loadAddresses();
	}, []);
	
	const loadAddresses = async () => {
		api.get('/address')
			.then((response) => {
				setAddresses(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	
	const handleChangePrimary = async (id) => {
		api.put(`/address/primary/${id}`)
			.then((response) => {
				const arrayAdress = addresses;
				arrayAdress.forEach((add) => {
					add.id === id ? (add.primary = true) : (add.primary = false);
				});
				setAddresses([...arrayAdress]);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	
	const handleEdit = async (id) => {
		addresses.forEach((item) => {
			if (item.id === id) {
				setAddress(item);
				setCanEditAddress(true);
			}
		});
	};
	
	const handleAdd = async () => {
		setAddress({id: null, primary: false, description: null, address: null, district: null, number: null, complement: null, city: null, state: null, zipcode: null});
		setCanEditAddress(true);
	};
	
	const handleDelete = async (id) => {
		api.delete(`/address/${id}`)
			.then((response) => {
				loadAddresses();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	
	const handleChange = (e, prop) => {
		const text = (e.target && e.target.value) || '';
		let _item = {...address};
		_item[`${prop}`] = text;
		setAddress(_item);
	};
	
	const handleSubmit = async () => {
		if (address.address && address.city && address.state && address.zipcode) {
			const {"nextilooks.auth": auth} = parseCookies();
			const user_session = auth ? JSON.parse(auth) : undefined;
			let addressData = {...address};
			addressData.userId = user_session.userId;
			if (address.id) {
				api.put(`/address/${address.id}`, addressData)
					.then((response) => {
						loadAddresses();
						setCanEditAddress(false);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				api.post('/address', addressData)
					.then((response) => {
						loadAddresses();
						setCanEditAddress(false);
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
					<h1>Meus endereços</h1>
					<div className="container-order">
						<div className="container-order-options">
							<Details/>
						</div>
						
						<div className="container-order-content">
							<div className="container-address-content">
								{addresses.map((add, index) => {
									return (
										<div className="card" key={index}>
											<CardAddress
												id={add.id}
												nickname={add.description}
												address={add.address}
												zipcode={add.zipcode}
												district={add.district}
												city={add.city}
												state={add.state}
												primary={add.primary}
												handleChangePrimary={handleChangePrimary}
												handleEdit={handleEdit}
												handleDelete={handleDelete}
											/>
										</div>
									);
								})}
								
								<div className="card">
									<CardsAdd handleAdd={handleAdd} label="novo endereço"/>
								</div>
							</div>
							<ButtonPrimary
								type="button"
								onClick={onLogout}
								style={{
									marginTop: 20,
									width:'100%'
								}}
							>
								Sair
							</ButtonPrimary>
						</div>
					</div>
				</div>
			</section>
			
			<Facility/>
			
			<Footer/>
			
			{canEditAddress &&
				<div className={'bts-popup is-visible'} role="alert">
					<div className="bts-popup-container">
						<h3>{address?.id ? 'Alterar' : 'Cadastrar'} endereço</h3>
						<form>
							<label>
								Tipo
								<span className="required">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Tipo"
								name="description"
								value={address.description}
								onChange={(e) => handleChange(e, 'description')}
								required={true}
							/>
							<label>
								Cep
								<span className="required">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Cep"
								name="description"
								value={address.zipcode}
								onChange={(e) => handleChange(e, 'zipcode')}
								required={true}
							/>
							<label>
								Endereço
								<span className="required">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Endereço"
								name="endereco"
								value={address.address}
								onChange={(e) => handleChange(e, 'address')}
								required={true}
							/>
							<label>
								Número
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Número"
								name="number"
								value={address.number}
								onChange={(e) => handleChange(e, 'number')}
								required={false}
							/>
							<label>
								Complemento
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Complemento"
								name="complement"
								value={address.complement}
								onChange={(e) => handleChange(e, 'complement')}
								required={false}
							/>
							<label>
								Estado
								<span className="required">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Estado"
								name="state"
								value={address.state}
								onChange={(e) => handleChange(e, 'state')}
								required={true}
							/>
							<label>
								Cidade
								<span className="required">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Cidade"
								name="city"
								value={address.city}
								onChange={(e) => handleChange(e, 'city')}
								required={true}
							/>
							<button type="button" onClick={handleSubmit} className="btn-signup" style={{position: 'relative'}}>
								SALVAR
							</button>
						</form>
						
						<Link href="#">
							<a onClick={() => setCanEditAddress(false)} className="bts-popup-close"></a>
						</Link>
					</div>
				</div>
			}
		</>
	);
};

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

export default Address;
