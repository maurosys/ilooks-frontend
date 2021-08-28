import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";
import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputEmail from "@components/Form/Input/Email";
import InputPassword from "@components/Form/Input/Password";
import ButtonPrimary from "@components/Button/Primary";
import ButtonSecondary from "@components/Button/Secondary";
import DivisorText from "@components/Divisor/Text";

//STYLES
import styles from "./login.module.css";

//HOOKS
import useLogin from "@hooks/pages/useLogin";

const Login = () => {
  const router = useRouter();
  const { loading, register, handleSubmit, onLogin, errors } = useLogin();

  const goRegister = () => {
    router.push("register");
  };


  return (
    <>
      <HeaderFixed />
      <ContainerCenterCol6>
        <div className="section-title">
          <h2>
            <span className="dot"></span> Realizar autenticação
          </h2>
        </div>

        <Form onSubmit={handleSubmit(onLogin)}>
          <InputEmail {...register("email")} errors={errors.email} />

          <InputPassword {...register("password")} errors={errors.password} />

          <ButtonPrimary type="submit" loading={loading}>
            Entrar
          </ButtonPrimary>

          <div className={styles.containerForgotPassword}>
            <Link href="/password/forgot">
              <a className="forgot-password">
                Esqueceu sua senha? Clique aqui para recuperar.
              </a>
            </Link>
          </div>

          <DivisorText text="OU" />
          <ButtonSecondary
            classNameOptional={styles.buttonRegister}
            onClick={goRegister}
          >
            Cadastre-se agora
          </ButtonSecondary>
        </Form>
      </ContainerCenterCol6>

      <Facility />

      <Footer />
    </>
  );
};

export default Login;
