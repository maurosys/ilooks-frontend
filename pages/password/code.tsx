import React, { useEffect, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import dayjs from "@utils/dayjs";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";

import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputText from "@components/Form/Input/Text";
import ButtonPrimary from "@components/Button/Primary";
import ButtonLink from "@components/Button/Link";

//HOOKS
import useConfirmationCode from "@hooks/pages/useConfirmationCode";
import useResendCode from "@hooks/context/useResendCode";

//SECONDS DEFAULT EXPIRES CODE
const secondsDefault = 125;

const PasswordCode = (props) => {
  //PROPS DESTRUCTOR
  const { message, hash, source } = props;

  //HOOKS INSTANCES
  const { loading, register, handleSubmit, confirmationCode, errors } =
    useConfirmationCode();

  const {
    loading: loadingResend,
    register: registerResend,
    resendCode,
    errors: errorsResend,
  } = useResendCode();

  //STATES
  const [seconds, setSeconds] = useState(secondsDefault); //600 SECONDS = 10 MINUTES
  const [intervalSeconds, setInvervalSeconds] = useState(null);
  const [hashAndMessage, setHashAndMessage] = useState({
    hash,
    message,
  });

  //FUNCTIONS
  const intervalAlterSeconds = () => {
    const timer = window.setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds > 0 && prevSeconds - 1);
    }, 1000);
    return timer;
  };

  const handleResendCode = async () => {
    const method = await resendCode({
      hash: hashAndMessage.hash,
    });
    if (method) {
      destroyCookie(undefined, "nextilooks.code");
      setCookie(
        undefined,
        "nextilooks.code",
        JSON.stringify({ ...method, source }),
        {
          maxAge: 60 * 2, //2 minutes
          path: "/",
        }
      );
      setHashAndMessage({ ...method });
      setInvervalSeconds(clearInterval(intervalSeconds));
      setSeconds(secondsDefault);
      setInvervalSeconds(intervalAlterSeconds());
    }
  };

  //USE EFECT FOR INITIAL INTERVAL SECONDS
  useEffect(() => {
    setInvervalSeconds(intervalAlterSeconds());
  }, []);

  return (
    <>
      <HeaderFixed />
      <ContainerCenterCol6>
        <div className="section-title">
          <h2>
            <span className="dot"></span>{" "}
            {source === "forgot"
              ? "Recuperação de senha"
              : "Confirmação de e-mail"}
          </h2>
        </div>
        <p>{hashAndMessage.message}</p>O código enviado expira em{" "}
        {dayjs.duration(1000 * seconds).format("HH:mm:ss")}
        {seconds <= 120 && (
          <>
            {" - "}{" "}
            <ButtonLink onClick={handleResendCode} loading={loadingResend}>
              Reenviar código
            </ButtonLink>
          </>
        )}
        <br />
        <br />
        <Form onSubmit={handleSubmit(confirmationCode)}>
          <InputText
            {...register("confirmationCode")}
            label="Código de confirmação"
            placeholder="Digite o código que foi enviado para o seu e-mail"
            name="confirmationCode"
            id="confirmationCode"
            errors={errors.confirmationCode}
          />

          <input
            type="hidden"
            name="hash"
            id="hash"
            {...register("hash", {
              value: hashAndMessage.hash,
            })}
            {...registerResend("hash", {
              value: hashAndMessage.hash,
            })}
            value={hashAndMessage.hash}
          />

          <input
            type="hidden"
            name="source"
            id="source"
            {...register("source")}
            value={source}
          />

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "nextilooks.code": code } = parseCookies(ctx);

  if (!code) {
    return {
      redirect: {
        destination: "/password/forgot",
        permanent: false,
      },
    };
  }

  const { message, hash, source } = JSON.parse(code);

  return {
    props: {
      message,
      hash,
      source,
    },
  };
};

export default PasswordCode;
