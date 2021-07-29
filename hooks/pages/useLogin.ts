import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "react-notifications-component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

import { validations } from "../../utils/index";
import { Inputs } from "../../types/index";
import { AuthState } from "../../store/ducks/Auth/types";

import api from "../../services/api";
import { addAuth, removeAuth } from "../../store/ducks/Auth/actions";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispach = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onLogout = () => {
    destroyCookie(undefined, "nextilooks.auth");
    dispach(removeAuth());
    Router.push("/");
  };

  const onLogin = (data: Inputs.LoginForm | SyntheticEvent) => {
    setLoading(true);
    api
      .post("users/session", data)
      .then((response) => {
        const dataResponse: AuthState = response.data;

        dispach(addAuth(dataResponse));
        setCookie(undefined, "nextilooks.auth", JSON.stringify(dataResponse), {
          maxAge: 60 * 60 * 1, //1 hour
        });

        api.defaults.headers["Authorization"] = `Bearer ${dataResponse.token}`;

        Router.push("/orders");
        setLoading(false);
      })
      .catch((err) => {
        store.addNotification({
          title: "Erro na autenticação",
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
    loading,
    errors,
    register,
    handleSubmit,
    onLogin,
    onLogout,
  };
};

const validationSchema = yup.object().shape({
  email: validations.email,
  password: validations.password,
});

export default useLogin;
