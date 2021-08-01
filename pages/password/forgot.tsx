import React from "react";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";

import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputEmail from "@components/Form/Input/Email";
import ButtonPrimary from "@components/Button/Primary";

//HOOKS
import useForgotPassword from "@hooks/pages/useForgotPassword";

const PasswordForgot = () => {
  const { loading, register, handleSubmit, forgotPassword, errors } =
    useForgotPassword();

  return (
    <>
      <HeaderFixed />
      <ContainerCenterCol6>
        <div className="section-title">
          <h2>
            <span className="dot"></span> Recuperação de senha
          </h2>
        </div>

        <Form onSubmit={handleSubmit(forgotPassword)}>
          <InputEmail {...register("email")} errors={errors.email} />

          <ButtonPrimary type="submit" loading={loading}>
            Avançar
          </ButtonPrimary>
        </Form>
      </ContainerCenterCol6>

      <Facility />

      <Footer />
    </>
  );
};

export default PasswordForgot;
