import {useState}    from "react";
import {store}       from "react-notifications-component";
import * as yup      from "yup";
import {useForm}     from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {setCookie}   from "nookies";
import Router        from "next/router";

//UTILS
import {validations} from "@utils/index";

//REDUX
import {AuthState} from "@store/ducks/Auth/types";

//SERVICES
import api from "@services/api";

//TYPES
import {Inputs, Request} from "@type/index";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const {
          register,
          handleSubmit,
          setValue,
          watch,
          formState: {errors},
        } = useForm({
                      resolver: yupResolver(validationSchema),
                    });

  const onRegister = (data: Inputs.RegisterUser) => {
    const dBirth = data.birthDate.split('/');
    const dataRequest: Request.RegisterRequest = {
      fullName:        data.fullName,
      howFindUs:       data.howFindUs,
      birthDate:       `${dBirth[1]}/${dBirth[0]}/${dBirth[2]}`,
      document:        data.document,
      email:           data.email,
      password:        data.password,
      confirmPassword: data.confirmPassword,
      typeUser:        "client",
      phones:          [
        {
          phone:       data.phone.replace(/\D/g, ""),
          type:        data.typePhone,
          description: "Padrão",
          primary:     true,
        },
      ],
      address:         [
        {
          address:     data.address,
          district:    data.district,
          number:      data.number,
          complement:  data.complement,
          city:        data.city,
          state:       data.state,
          zipcode:     data.zipcode.replace(/\D/g, ""),
          primary:     true,
          description: "Padrão",
        },
      ],
    };

    setLoading(true);
    api
      .post("users", dataRequest)
      .then((response) => {
        const dataResponse: AuthState = response.data;

        setCookie(
          undefined,
          "nextilooks.code",
          JSON.stringify({...dataResponse, source: "login"}),
          {
            maxAge: 60 * 2, //2 minutes
            path:   "/",
          }
        );
        Router.push("/password/code");
        setLoading(false);
      })
      .catch((err) => {
        store.addNotification({
                                title:        "Erro na autenticação",
                                message:      err.response.data.message,
                                type:         "danger",
                                insert:       "top",
                                container:    "top-right",
                                animationIn:  ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss:      {
                                  duration: 5000,
                                  onScreen: true,
                                },
                              });
        setLoading(false);
      });
  };

  return {
    register,
    setValue,
    watch,
    handleSubmit,
    errors,
    loading,
    onRegister,
  };
};

const validationSchema = yup.object().shape({
                                              email:           validations.email,
                                              password:        validations.password,
                                              confirmPassword: validations.confirmPassword,
                                              fullName:        validations.fullName,
                                              howFindUs:       validations.howFindUs,
                                              document:        validations.document,
                                              birthDate:       validations.birthDate,
                                              typePhone:       validations.typePhone,
                                              phone:           validations.phone,
                                              zipcode:         validations.zipcode,
                                              address:         validations.address,
                                              number:          validations.numberAndress,
                                              city:            validations.city,
                                              state:           validations.state,
                                            });

export default useRegister;
