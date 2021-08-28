import React, { useEffect, useState } from "react";
import Link from "next/link";
import OrderSummary from "./OrderSummary";
import useForm from "./userForm";
import { getUserFromId } from "@services/user.api";

function CheckoutForm() {
  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState(undefined);
  const [isDiffentetAddress, setIsDiffentetAddress] = useState(false);

  const INIT_STATE_STATESCHEMA = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    address: { value: "", error: "" },
    city: { value: "", error: "" },
    number: { value: "", error: "" },
    complement: { value: "", error: "" },
    state: { value: "", error: "" },
    zip: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: { value: "", error: "" },
    differentAddress: {
      address: { value: "", error: "" },
      city: { value: "", error: "" },
      number: { value: "", error: "" },
      complement: { value: "", error: "" },
      state: { value: "", error: "" },
      zip: { value: "", error: "" },
    },
  };
  const [stateSchema, setStateSchema] = useState(INIT_STATE_STATESCHEMA);

  useEffect(() => {
    if (process.browser) {
      const user_session = JSON.parse(
        window.localStorage.getItem("@ilooksecommerce_auth")
      );
      if (user_session) {
        setIsLoged(true);
        getUserFromId(user_session.userId, user_session.token)
          .then((user) => {
            const { data } = user;
            setUser(data);
            INIT_STATE_STATESCHEMA.firstName.value = data.fullName;
            INIT_STATE_STATESCHEMA.address.value =
              data.primaryAddres.address;
            INIT_STATE_STATESCHEMA.number.value = data.primaryAddres.number;
            INIT_STATE_STATESCHEMA.complement.value =
              data.primaryAddres.complement;
            INIT_STATE_STATESCHEMA.city.value = data.primaryAddres.city;
            INIT_STATE_STATESCHEMA.zip.value = data.primaryAddres.zipcode;
            INIT_STATE_STATESCHEMA.email.value = data.email;
            INIT_STATE_STATESCHEMA.phone.value = `(${data.primaryPhone.ddd}) ${data.primaryPhone.phone}`;
            setStateSchema(INIT_STATE_STATESCHEMA);
          })
          .catch((err) => console.error(err));
      }
    }
  }, []);

  function handleSubmit() {
    console.log("Form submitted.");
  }

  const validationStateSchema = {
    firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format.",
      },
    },

    lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format.",
      },
    },

    address: {
      required: true,
      validator: {
        error: "Invalid address format.",
      },
    },

    city: {
      required: true,
      validator: {
        error: "Invalid last name format.",
      },
    },

    number: {
      required: true,
      validator: {
        error: "Invalid last number format.",
      },
    },

    complement: {
      required: true,
      validator: {
        error: "Invalid last complement format.",
      },
    },

    state: {
      required: true,
      validator: {
        error: "Invalid last name format.",
      },
    },

    zip: {
      required: true,
      validator: {
        regEx: /^\d{5}$|^\d{5}-\d{4}$/,
        error: "Invalid zip format, use like 12345.",
      },
    },

    email: {
      required: true,
      validator: {
        regEx:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "Invalid email format.",
      },
    },

    phone: {
      required: true,
      validator: {
        regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        error: "Invalid phone number format use like +2923432432432.",
      },
    },
  };

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    handleSubmit
  );

  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };

  return (
    <section className="checkout-area ptb-60">
      <div className="container">
        <div className="row">
          {!isLoged && (
            <div className="col-lg-12 col-md-12">
              <div className="user-actions">
                <i className="fas fa-sign-in-alt"></i>
                <span>
                  Já é cadastrado(a)?{" "}
                  <Link
                    href={{
                      pathname: "/login",
                      query: { redirect: "checkout" },
                    }}
                  >
                    Click aqui e faça login
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleOnSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="billing-details">
                <h3 className="title">Detalhes de cobrança</h3>

                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Nome Completo <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.firstName.value}
                      />
                      {state.firstName.error && (
                        <p style={errorStyle}>{state.firstName.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>
                        Endereço <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.address.value}
                      />
                      {state.address.error && (
                        <p style={errorStyle}>{state.address.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Número <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.number.value}
                      />
                      {state.number.error && (
                        <p style={errorStyle}>{state.number.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Complemento <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.complement.value}
                      />
                      {state.complement.error && (
                        <p style={errorStyle}>{state.complement.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>
                        Cidade <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.city.value}
                      />
                      {state.city.error && (
                        <p style={errorStyle}>{state.city.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        CEP <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="zip"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.zip.value}
                      />
                      {state.zip.error && (
                        <p style={errorStyle}>{state.zip.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        E-mail <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.email.value}
                      />
                      {state.email.error && (
                        <p style={errorStyle}>{state.email.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Telefone <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        onChange={handleOnChange}
                        disabled={isLoged}
                        value={state.phone.value}
                      />
                      {state.phone.error && (
                        <p style={errorStyle}>{state.phone.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="ship-different-address"
                        onChange={(e) =>
                          setIsDiffentetAddress(e.target.checked)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="ship-different-address"
                      >
                        Enviar para um endereço diferente do seu cadastro?
                      </label>
                    </div>
                  </div>

                  {isDiffentetAddress && (
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Endereço <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            onChange={handleOnChange}
                            value={state.differentAddress.address.value}
                          />
                          {state.address.error && (
                            <p style={errorStyle}>
                              {state.differentAddress.address.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Número <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            onChange={handleOnChange}
                            value={state.differentAddress.number.value}
                          />
                          {state.number.error && (
                            <p style={errorStyle}>
                              {state.differentAddress.number.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Complemento <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            onChange={handleOnChange}
                            value={state.differentAddress.complement.value}
                          />
                          {state.complement.error && (
                            <p style={errorStyle}>
                              {state.differentAddress.complement.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Cidade <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            onChange={handleOnChange}
                            value={state.differentAddress.city.value}
                          />
                          {state.differentAddress.city.error && (
                            <p style={errorStyle}>
                              {state.differentAddress.city.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            CEP <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="zip"
                            className="form-control"
                            onChange={handleOnChange}
                            value={state.differentAddress.zip.value}
                          />
                          {state.differentAddress.zip.error && (
                            <p style={errorStyle}>
                              {state.differentAddress.zip.error}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="notes"
                        id="notes"
                        cols={30}
                        rows={6}
                        placeholder="Order Notes"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="order-details">
                <h3 className="title">Seu pedido</h3>

                <OrderSummary />

                <div className="payment-method row">
                  <h3 className="title">Detalhes Pagamento</h3>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Número do Cartão <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        name="number_token"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.differentAddress.zip.value}
                      />
                      {state.differentAddress.zip.error && (
                        <p style={errorStyle}>
                          {state.differentAddress.zip.error}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Nome escrito no cartão{" "}
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardholder_name"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.differentAddress.zip.value}
                      />
                      {state.differentAddress.zip.error && (
                        <p style={errorStyle}>
                          {state.differentAddress.zip.error}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="form-group">
                      <label>
                        Mês Expiração
                        <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        name="month"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.differentAddress.zip.value}
                      />
                      {state.differentAddress.zip.error && (
                        <p style={errorStyle}>
                          {state.differentAddress.zip.error}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="form-group">
                      <label>
                        Ano Expiração
                        <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        name="year"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.differentAddress.zip.value}
                      />
                      {state.differentAddress.zip.error && (
                        <p style={errorStyle}>
                          {state.differentAddress.zip.error}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CheckoutForm;
