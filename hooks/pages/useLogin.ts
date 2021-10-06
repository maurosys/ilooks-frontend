import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "react-notifications-component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

//UTILS
import { validations } from "@utils/index";

//REDUX
import { AuthState } from "@store/ducks/Auth/types";
import { addAuth, removeAuth } from "@store/ducks/Auth/actions";

//SERVICES
import api from "@services/api";

//TYPES
import { Inputs } from "@type/index";

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
    destroyCookie(undefined, "nextilooks.auth", {
      path: "/",
    });
    // dispach(removeAuth());
    Router.push("/");
  };

  const onLogin = (data: Inputs.LoginForm | SyntheticEvent) => {
    setLoading(true);
    api
      .post("users/session", data)
      .then((response) => {
        const dataResponse: AuthState = response.data;

        if (dataResponse.status === "pending") {
          setCookie(
            undefined,
            "nextilooks.code",
            JSON.stringify({ ...dataResponse, source: "login" }),
            {
              maxAge: 60 * 2, //2 minutes
              path: "/",
            }
          );
          Router.push("/password/code");
          setLoading(false);
          return;
        }

        dispach(addAuth(dataResponse));
        setCookie(undefined, "nextilooks.auth", JSON.stringify(dataResponse), {
          maxAge: 60 * 60 * 1, //1 hour
          path: "/",
        });

        api.defaults.headers["Authorization"] = `Bearer ${dataResponse.token}`;
        console.log(Router.query);
        if (Router.query.redirect) {
          Router.push(`${Router.query.redirect}`);
        } else {
          Router.push("/orders");
        }
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
