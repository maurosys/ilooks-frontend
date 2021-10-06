import React, {useState,} from "react";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";
import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputEmail from "@components/Form/Input/Email";
import InputPassword from "@components/Form/Input/Password";
import InputText from "@components/Form/Input/Text";
import InputCPF from "@components/Form/Input/CPF";
import InputDate from "@components/Form/Input/Date";
import InputSelect, {OptionSelectProps} from "@components/Form/Input/Select";
import InputPhone from "@components/Form/Input/Phone";
import InputCEP from "@components/Form/Input/CEP";
import ButtonPrimary from "@components/Button/Primary";
import Termo from "@components/Modal/Termo";

//STYLES
// import styles from "./register.module.css";
//HOOKS
import useResgister from "@hooks/pages/useRegister";



const Register = () => {
	//HOOKS INSTANCES
	const {loading, register, handleSubmit, onRegister, errors} = useResgister();
	
	//STATES
	const [termAccept, setTermAccept] = useState(false);
	const [openTerm, setOpenTerm] = useState(false);
	const [typePhone, setTypePhone] = useState("");
	const [optionsTypePhone, setOptionTypePhone] = useState<OptionSelectProps[]>([
		{
			label: "Celular",
			value: "Celular",
		},
		{
			label: "Telefone",
			value: "Telefone",
		},
	]);
	
	const closeTermo = () => {
		return setOpenTerm(false);
	};
	
	return (
		<>
			<HeaderFixed/>
			<ContainerCenterCol6>
				<div className="section-title">
					<h2>
						<span className="dot"></span> Cadastro
					</h2>
				</div>
				
				<Form onSubmit={handleSubmit(onRegister)}>
					<InputEmail {...register("email")} errors={errors.email}/>
					
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<InputPassword
								{...register("password")}
								errors={errors.password}
							/>
						</div>
						
						<div className="col-lg-6 col-md-12">
							<InputPassword
								label="Confirme sua senha"
								name="confirmPassword"
								id="confirmPassword"
								{...register("confirmPassword")}
								errors={errors.confirmPassword}
							/>
						</div>
					</div>
					
					<InputText
						{...register("fullName")}
						name="fullName"
						id="fullName"
						label="Nome completo"
						placeholder="Digite seu nome completo"
						errors={errors.fullName}
					/>
					
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<InputCPF
								{...register("document")}
								name="document"
								id="document"
								label="CPF"
								placeholder="Ex.: 123.456.789.12"
								errors={errors.document}
							/>
						</div>
						<div className="col-lg-6 col-md-12">
							<InputDate
								{...register("birthDate")}
								name="birthDate"
								id="birthDate"
								label="Data de Nascimento"
								placeholder="Ex.: 01/01/1999"
								errors={errors.birthDate}
							/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<InputSelect
								{...register("typePhone")}
								id="typePhone"
								name="typePhone"
								label="Tipo do contato"
								placeholder="Selecione o tipo do contato"
								errors={errors.typePhone}
								options={optionsTypePhone}
								onChange={(event: any) => {
									setTypePhone(event.target.value);
								}}
							/>
						</div>
						<div className="col-lg-6 col-md-12">
							{typePhone === "Celular" ? (
								<InputPhone
									{...register("phone")}
									name="phone"
									id="phone"
									label="Número de Contato"
									placeholder="Ex.: (11) 99999-9999"
									errors={errors.phone}
									maskFormat={9}
								/>
							) : (
								<InputPhone
									{...register("phone")}
									name="phone"
									id="phone"
									label="Número de Contato"
									placeholder="Ex.: (11) 99999-9999"
									errors={errors.phone}
								/>
							)}
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<InputCEP
								{...register("zipcode")}
								name="zipcode"
								id="zipcode"
								label="CEP"
								placeholder="00000-000"
								errors={errors.zipcode}
							/>
						</div>
						<div className="col-lg-6 col-md-12">
							<InputText
								{...register("address")}
								name="address"
								id="address"
								label="Endereço"
								placeholder="Ex. Avenida Paulista"
								errors={errors.address}
							/>
						</div>
						<div className="col-lg-3 col-md-12">
							<InputText
								{...register("number")}
								name="number"
								id="number"
								label="Número"
								placeholder="Ex.: 1000"
								errors={errors.number}
							/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<InputText
								{...register("complement")}
								name="complement"
								id="complement"
								label="Complemento"
								placeholder="Ex.: Casa A"
							/>
						</div>
						<div className="col-lg-3 col-md-12">
							<InputText
								{...register("district")}
								name="district"
								id="district"
								label="Bairro"
								placeholder="Ex.: Vila Maria"
							/>
						</div>
						<div className="col-lg-4 col-md-12">
							<InputText
								{...register("city")}
								name="city"
								id="city"
								label="Cidade"
								placeholder="Ex.: São Paulo"
								errors={errors.city}
							/>
						</div>
						<div className="col-lg-2 col-md-12">
							<InputText
								{...register("state")}
								name="state"
								id="state"
								label="UF"
								placeholder="Ex.: SP"
								maxlength="2"
								errors={errors.state}
							/>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="item">
							<input className="inp-cbx" id="cbx" type="checkbox" onChange={(e) => {
								setTermAccept(e.target.checked);
							}}/>&nbsp;&nbsp;<a href="#" onClick={(e) => {
								e.preventDefault();
								setOpenTerm(true);
							}}>
								<span className="pl-3">Eu concordo com os termos e condições</span>
							</a>
						</div>
						<br/>
					</div>
					
					<ButtonPrimary type="submit" loading={loading} disabled={!termAccept} title={!termAccept ? 'É necessário aceitar os termos e condições' : ''}>
						Realizar cadastro
					</ButtonPrimary>
				</Form>
			</ContainerCenterCol6>
			
			<Facility/>
			
			<Footer/>
			{openTerm &&
				<Termo closeModal={closeTermo}/>
			}
		</>
	);
};

export default Register;
