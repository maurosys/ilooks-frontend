import { SyntheticEvent, useState } from "react";
import { store } from "react-notifications-component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

//UTILS
import { validations } from "@utils/index";

//SERVICES
import api from "@services/api";

//TYPES
import { Inputs } from "@type/index";
type ReponseData = {
  message: string;
  hash: string;
};

const useForgotPassowrd = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const forgotPassword = async (
    data: Inputs.ForgotPasswordForm | SyntheticEvent
  ) => {
    setLoading(true);
    api
      .post("password/forgot", data)
      .then((response) => {
        const dataResponse: ReponseData = response.data;

        setCookie(
          undefined,
          "nextilooks.code",
          JSON.stringify({ ...dataResponse, source: "forgot" }),
          {
            maxAge: 60 * 2, //2 minutes
            path: "/",
          }
        );

        Router.push("/password/code");
        setLoading(false);
      })
      .catch((err) => {
        store.addNotification({
          title: "Erro na recuperação de senha",
          message: err.response.data.message,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        setLoading(false);
      });
  };

  return {
    register,
    handleSubmit,
    loading,
    errors,
    forgotPassword,
  };
};

const validationSchema = yup.object().shape({
  email: validations.email,
});

export default useForgotPassowrd;
