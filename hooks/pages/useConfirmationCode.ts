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

//REDUX
import { addAuth } from "@store/ducks/Auth/actions";
import { useDispatch } from "react-redux";

//TYPES
import { Inputs } from "@type/index";
type ReponseData = {
  token: string;
};

const useForgotPassowrd = () => {
  const [loading, setLoading] = useState(false);
  const dispach = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const confirmationCode = async (data: Inputs.ConfirmationCode) => {
    api
      .post("code/confirmation", data)
      .then((response) => {
        const dataResponse: ReponseData = response.data;
        destroyCookie(undefined, "nextilooks.code");
        if (data.source === "login") {
          dispach(addAuth(dataResponse));
          setCookie(
            undefined,
            "nextilooks.auth",
            JSON.stringify(dataResponse),
            {
              maxAge: 60 * 60 * 1, //1 hour
              path: "/",
            }
          );
          api.defaults.headers[
            "Authorization"
          ] = `Bearer ${dataResponse.token}`;

          Router.push("/orders");
          setLoading(false);
        } else if (data.source === "forgot") {
          setCookie(undefined, "nextilooks.rtk", JSON.stringify(dataResponse), {
            maxAge: 60 * 10, //2 minutes
            path: "/",
          });

          api.defaults.headers[
            "Authorization"
          ] = `Bearer ${dataResponse.token}`;

          Router.push("/password/recovery");
        }
      })
      .catch((err) => {
        store.addNotification({
          title: "Confirmação de código",
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
    confirmationCode,
  };
};

const validationSchema = yup.object().shape({
  confirmationCode: validations.confirmationCode,
  hash: validations.hash,
});

export default useForgotPassowrd;
