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
type RequestData = {
  hash: string;
};
type ReponseData = {
  message: string;
  hash: string;
};

const useResendCode = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const resendCode = async (data: RequestData) => {
    setLoading(true);
    try {
      const response = await api.post("code/resend", data);
      const responseData: ReponseData = response.data;
      store.addNotification({
        title: "Confirmação de código",
        message: "O código foi reenviado com sucesso.",
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
      setLoading(false);
      return responseData;
    } catch (err) {
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
      return false;
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    resendCode,
  };
};

const validationSchema = yup.object().shape({
  hash: validations.hash,
});

export default useResendCode;
