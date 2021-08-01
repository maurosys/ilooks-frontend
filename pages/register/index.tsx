import React, { useState } from "react";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";
import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputEmail from "@components/Form/Input/Email";
import InputPassword from "@components/Form/Input/Password";
import InputText from "@components/Form/Input/Text";
import ButtonPrimary from "@components/Button/Primary";
import Radio from "@components/Form/Radio";

//STYLES
import styles from "./register.module.css";

//HOOKS
import useLogin from "@hooks/pages/useLogin";

const Register = () => {
  const { loading, register, handleSubmit, onLogin, errors } = useLogin();
  const [radioSelect, setRadioSelect] = useState();

  return (
    <>
      <HeaderFixed />
      <ContainerCenterCol6>
        <div className="section-title">
          <h2>
            <span className="dot"></span> Cadastro
          </h2>
        </div>

        <Form onSubmit={handleSubmit(onLogin)}>
          <InputEmail {...register("email")} errors={errors.email} />

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
            name="fullName"
            id="fullName"
            label="Nome completo"
            placeholder="Digite seu nome completo"
          />

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <InputText
                name="document"
                id="document"
                label="CPF"
                placeholder="Ex.: 123.456.789.12"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <InputText
                name="birthDate"
                id="birthDate"
                label="Data de Nascimento"
                placeholder="Ex.: 01/01/1999"
              />
            </div>
          </div>

          <label>SEXO</label>
          <div className={styles.containerRadio}>
            <Radio
              name="sexo"
              value="masculino"
              id="masculino"
              label="Masculino"
              radioSelect={radioSelect}
              setRadioSelect={setRadioSelect}
            />

            <Radio
              name="sexo"
              value="feminino"
              id="feminino"
              label="Feminino"
              setRadioSelect={setRadioSelect}
              radioSelect={radioSelect}
            />
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <InputText
                name="phone"
                id="phone"
                label="Número de Contato"
                placeholder="Ex.: (11) 99999-9999"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <InputText
                name="type"
                id="type"
                label="Tipo do contato"
                placeholder="Ex.: Celular"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-12">
              <InputText
                name="zipcode"
                id="zipcode"
                label="CEP"
                placeholder="00000-000"
              />
            </div>
            <div className="col-lg-9 col-md-12">
              <InputText
                name="address"
                id="address"
                label="Endereço"
                placeholder="Ex. Avenida Paulista"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-12">
              <InputText
                name="number"
                id="number"
                label="Número"
                placeholder="Ex.: 1000"
              />
            </div>
            <div className="col-lg-3 col-md-12">
              <InputText
                name="complement"
                id="complement"
                label="Complemento"
                placeholder="Ex.: Casa A"
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <InputText
                name="city"
                id="city"
                label="Cidade"
                placeholder="Ex.: São Paulo"
              />
            </div>
            <div className="col-lg-2 col-md-12">
              <InputText
                name="state"
                id="state"
                label="UF"
                placeholder="Ex.: SP"
              />
            </div>
          </div>

          <ButtonPrimary type="submit" loading={loading}>
            Realizar cadastro
          </ButtonPrimary>
        </Form>
      </ContainerCenterCol6>

      <Facility />

      <Footer />
    </>
  );
};

export default Register;
