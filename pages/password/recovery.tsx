import React, { useEffect } from "react";
import Link from "next/link";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";

import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputPassword from "@components/Form/Input/Password";
import ButtonPrimary from "@components/Button/Primary";

//HOOKS
import useResetPasswordNoLogger from "@hooks/pages/useResetPasswordNoLogger";
import { getAPIClient } from "@services/api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const PasswordRecovery = () => {
  const { register, loading, handleSubmit, resetPassword, errors } =
    useResetPasswordNoLogger();

  return (
    <>
      <HeaderFixed />
      <ContainerCenterCol6>
        <div className="section-title">
          <h2>
            <span className="dot"></span> Recuperação de senha
          </h2>
        </div>

        <Form onSubmit={handleSubmit(resetPassword)}>
          <InputPassword
            label="Nova senha"
            placeholder="Digite sua nova senha"
            {...register("password")}
            errors={errors.password}
          />
          <InputPassword
            label="Repita sua nova senha"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
            errors={errors.confirmPassword}
          />

          <ButtonPrimary type="submit" loading={loading}>
            Resetar senha
          </ButtonPrimary>
        </Form>
      </ContainerCenterCol6>

      <Facility />

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { "nextilooks.rtk": code } = parseCookies(ctx);

  if (!code) {
    return {
      redirect: {
        destination: "/password/forgot",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default PasswordRecovery;
