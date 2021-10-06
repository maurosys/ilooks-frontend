import React, { useEffect, useState } from "react";

//COMPONENT
import HeaderFixed from "@components/Layout/HeaderFixed";
import Footer from "@components/Layout/Footer";
import Facility from "@components/shop-style-five/Facility";
import ContainerCenterCol6 from "@components/Layout/Container/CenterCol6";
import Form from "@components/Form";
import InputEmail from "@components/Form/Input/Email";
import InputPassword from "@components/Form/Input/Password";
import InputText from "@components/Form/Input/Text";
import InputCPF from "@components/Form/Input/CPF";
import ButtonPrimary from "@components/Button/Primary";

//STYLES
// import styles from "./register.module.css";
//HOOKS
import useResgister from "@hooks/pages/useRegister";
import { parseCookies } from "nookies";
import { getUserFromId } from "@services/request.api";
import { useRouter } from "next/router";
import api from "@services/api";
import { AlertSuccess } from "@utils/dialog";
import Details from "@components/Detalis";
import CardPhones from "@components/Cards/Phones";
import CardsAdd from "@components/Cards/Add";
import useLogin from "@hooks/pages/useLogin";

const Account = () => {
  const dateOptions: any = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  //HOOKS INSTANCES
  const router = useRouter();
  const { loading } = useResgister();
  const { onLogout } = useLogin();

  //STATES
  const [userData, setUserData] = useState<any>({});
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorName, setErrorName] = useState<string>("");
  const [errorDocument, setErrorDocument] = useState<string>("");
  const [errorBithday, setErrorBirthday] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<string>("");

  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { "nextilooks.auth": auth } = parseCookies();
    const user_session = auth ? JSON.parse(auth) : undefined;
    if (user_session) {
      getUserFromId(user_session.userId, user_session.token)
        .then((user: any) => {
          user.data.birthday = new Date(user.data.birthDate).toLocaleString(
            "pt-BR",
            dateOptions
          );
          user.password = "";
          user.confirmPassword = "";
          setUserData(user.data);
        })
        .catch((err) => console.error(err));
    } else {
      router.push("/login");
    }
  };

  const handleChange = (e, propertyName) => {
    e.preventDefault();
    const text = (e.target && e.target.value) || "";
    let _item = { ...userData };
    _item[`${propertyName}`] = text;
    setUserData(_item);
  };

  const submitData = async () => {
    let anyError = false;
    let dateBirth: Date;
    if (!userData.email) {
      setErrorEmail("Campo obrigatório");
      anyError = true;
    }
    if (!userData.fullName) {
      setErrorName("Campo obrigatório");
      anyError = true;
    }
    if (!userData.document) {
      setErrorDocument("Campo obrigatório");
      anyError = true;
    }
    if (!userData.birthday) {
      setErrorBirthday("Campo obrigatório");
      anyError = true;
    }
    if (userData.birthday.length != 10) {
      setErrorBirthday("Data inválida");
      anyError = true;
    }
    try {
      const d = userData.birthday.split("/");
      d[0] = parseInt(d[0]) + 1;
      dateBirth = new Date(`${d[2]}-${d[1]}-${d[0]}`);
    } catch (e) {
      setErrorBirthday("Data inválida");
      anyError = true;
    }
    if (userData.password && userData.password.length < 6) {
      setErrorPassword("Senha precisa ter no mínimo 6 caracteres");
      anyError = true;
    }
    if (userData.password && userData.password != userData.confirmPassword) {
      setErrorConfirmPassword("Senhas não conferem");
      anyError = true;
    }

    if (anyError) {
      return;
    }

    const data = { ...userData };
    data.birthday = dateBirth;

    await api
      .put(`users/${userData.id}`, userData)
      .then((result: any) => {
        AlertSuccess({
          title: "Meu Cadastro",
          message: "Seus dados foram atualizados com sucesso!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <HeaderFixed />

      <section className="login-area ptb-60">
        <div
          className="container"
          style={{
            marginTop: -35,
          }}
        >
          <h1>Meu Cadastro</h1>
          <div className="container-order">
            <div className="container-order-options">
              <Details />
            </div>

            <div className="container-order-content">
              <Form>
                <InputEmail
                  onChange={(e) => {
                    handleChange(e, "email");
                    setErrorEmail("");
                  }}
                  value={userData.email}
                  name="email"
                  id="email"
                  label="Endereço de e-mail"
                />
                {errorEmail && <p style={errorStyle}>{errorEmail}</p>}

                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <InputPassword
                      aria-autocomplete="none"
                      label="Senha"
                      autoComplete="new-password"
                      onChange={(e) => {
                        handleChange(e, "password");
                        setErrorPassword("");
                      }}
                    />
                    {errorPassword && <p style={errorStyle}>{errorPassword}</p>}
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <InputPassword
                      label="Confirme sua senha"
                      onChange={(e) => {
                        handleChange(e, "confirmPassword");
                        setErrorConfirmPassword("");
                      }}
                    />
                    {errorConfirmPassword && (
                      <p style={errorStyle}>{errorConfirmPassword}</p>
                    )}
                  </div>
                </div>

                <InputText
                  onChange={(e) => {
                    handleChange(e, "fullName");
                    setErrorName("");
                  }}
                  value={userData.fullName}
                  label="Nome completo"
                  placeholder="Digite seu nome completo"
                />
                {errorName && <p style={errorStyle}>{errorName}</p>}

                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <InputCPF
                      onChange={(e) => {
                        handleChange(e, "document");
                        setErrorDocument("");
                      }}
                      value={userData.document}
                      name="document"
                      id="document"
                      label="CPF"
                      placeholder="Ex.: 123.456.789.12"
                    />
                    {errorDocument && <p style={errorStyle}>{errorDocument}</p>}
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <InputText
                      onChange={(e) => {
                        handleChange(e, "birthday");
                        setErrorBirthday("");
                      }}
                      value={userData.birthday}
                      label="Data de Nascimento"
                      maxlength={10}
                      placeholder="Ex.: 01/01/1999"
                    />
                    {errorBithday && <p style={errorStyle}>{errorBithday}</p>}
                  </div>
                </div>

                <ButtonPrimary
                  type="button"
                  loading={loading}
                  onClick={submitData}
                >
                  Atualizar meu cadastro
                </ButtonPrimary>

                <ButtonPrimary
                  type="button"
                  onClick={onLogout}
                  style={{
                    marginTop: 20,
                  }}
                >
                  Sair
                </ButtonPrimary>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

export default Account;
