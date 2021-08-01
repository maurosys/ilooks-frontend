import { useState } from "react";
import { store } from "react-notifications-component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { destroyCookie } from "nookies";

import Router from "next/router";

//UTILS
import { validations } from "@utils/index";

//SERVICES
import api from "@services/api";

//TYPES
import { Inputs } from "@type/index";

type ReponseData = {
  token: string;
};

const useResetPasswordNoLogger = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const resetPassword = (data: Inputs.ResetPasswordNoLogged) => {
    api
      .put("password", data)
      .then((response) => {
        destroyCookie(undefined, "nextilooks.rtk");
        store.addNotification({
          title: "Recuperação de senha",
          message: "Senha resetada com sucesso.",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        Router.push("/login");
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
    loading,
    handleSubmit,
    errors,
    resetPassword,
  };
};

const validationSchema = yup.object().shape({
  password: validations.password,
  confirmPassword: validations.confirmPassword,
});

export default useResetPasswordNoLogger;
