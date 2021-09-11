import React, { useEffect, useState } from "react";
import Link from "next/link";
import OrderSummary from "./OrderSummary";
import useForm from "./userForm";
import { getUserFromId, createRequest, Request } from "@services/request.api";
import { AlertSuccess, AlertWarning } from "@utils/dialog";
import { useRouter } from "next/router";
import api from "@services/api";

function CheckoutForm() {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(false);
  const [isDiffentetAddress, setIsDiffentetAddress] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState<{}>();
  const [loading, setLoading] = useState(false);

  const INIT_STATE_VIEW = {
    name: { value: "", error: "" },
    address: { value: "", error: "" },
    city: { value: "", error: "" },
    number: { value: "", error: "" },
    complement: { value: "", error: "" },
    zip: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: { value: "", error: "" },
    differentAddress_address: { value: "", error: "" },
    differentAddress_district: { value: "", error: "" },
    differentAddress_city: { value: "", error: "" },
    differentAddress_number: { value: "", error: "" },
    differentAddress_complement: { value: "", error: "" },
    differentAddress_state: { value: "", error: "" },
    differentAddress_zipcode: { value: "", error: "" },
    number_token: { value: "", error: "" },
    cardholder_name: { value: "", error: "" },
    expiration_month: { value: "", error: "" },
    expiration_year: { value: "", error: "" },
  };
  const _REQUEST: Request = {
    credit_payment: {
      delayed: false,
      number_installments: 1,
      pre_authorization: true,
      save_card_data: false,
      transaction_type: "FULL",
    },
  } as Request;
  const [stateSchema, setStateSchema] = useState(INIT_STATE_VIEW);

  useEffect(() => {
    if (process.browser) {
      const user_session = JSON.parse(
        localStorage.getItem("@ilooksecommerce_auth")
      );
      if (user_session) {
        setIsLoged(true);
        setToken(user_session.token);
        getUserFromId(user_session.userId, user_session.token)
          .then((user) => {
            const { data } = user;
            INIT_STATE_VIEW.name.value = data.fullName;
            INIT_STATE_VIEW.address.value = data.primaryAddres.address;
            INIT_STATE_VIEW.number.value = data.primaryAddres.number;
            INIT_STATE_VIEW.complement.value = data.primaryAddres.complement;
            INIT_STATE_VIEW.city.value = data.primaryAddres.city;
            INIT_STATE_VIEW.zip.value = data.primaryAddres.zipcode;
            INIT_STATE_VIEW.email.value = data.email;
            INIT_STATE_VIEW.phone.value = `(${data.primaryPhone.ddd}) ${data.primaryPhone.phone}`;
            setUser(data);
            setStateSchema(INIT_STATE_VIEW);
          })
          .catch((err) => console.error(err));
      }
    }
  }, []);

  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format.",
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
        error: "Invalid city format.",
      },
    },

    number: {
      required: true,
      validator: {
        error: "Invalid number format.",
      },
    },

    complement: {
      required: true,
      validator: {
        error: "Invalid complement format.",
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

    number_token: {
      required: true,
      validator: {
        regEx:
          /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        error: "Invalid number_token",
      },
    },

    cardholder_name: {
      required: true,
      validator: {
        error: "Invalid cardholder_name format.",
      },
    },

    expiration_month: {
      required: true,
      validator: {
        regEx: /^[0-9]+$/,
        error: "Invalid expiration_month format use like 09",
      },
    },

    expiration_year: {
      required: true,
      validator: {
        regEx: /^[0-9]+$/,
        error: "Invalid number_token format use like 21",
      },
    },

    // differentAddress_address: {
    //   required: true,
    //   validator: {
    //     error: "Invalid address format.",
    //   },
    // },

    // differentAddress_district: {
    //   required: true,
    //   validator: {
    //     error: "Invalid district format.",
    //   },
    // },

    // differentAddress_city: {
    //   required: true,
    //   validator: {
    //     error: "Invalid city format.",
    //   },
    // },

    // differentAddress_number: {
    //   required: true,
    //   validator: {
    //     error: "Invalid number format.",
    //   },
    // },

    // differentAddress_complement: {
    //   required: true,
    //   validator: {
    //     error: "Invalid complement format.",
    //   },
    // },

    // differentAddress_state: {
    //   required: true,
    //   validator: {
    //     error: "Invalid state format.",
    //   },
    // },

    // differentAddress_zipcode: {
    //   required: true,
    //   validator: {
    //     error: "Invalid zipcode format.",
    //   },
    // },
  };

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    handleSubmit
  );

  async function handleSubmit() {
    setLoading(true);
    try {
      if (isDiffentetAddress) {
        const response = await api.post(
          "/address",
          {
            address: state.differentAddress_address,
            district: state.differentAddress_district,
            number: state.differentAddress_number,
            complement: state.differentAddress_complement,
            city: state.differentAddress_city,
            state: state.differentAddress_state,
            zipcode: state.differentAddress_zipcode,
            description: "Descricao",
            userId: user["id"],
            primary: false,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        _REQUEST.addressId = response.data.id;
      }

      _REQUEST.required_products = [
        {
          productDetailId: "3f87545f-8f90-4dc2-811a-e2c94512cec0",
          quantity: 2,
        },
      ];
      _REQUEST.credit_payment.card = {
        cardholder_name: state.cardholder_name.value,
        number_token: state.number_token.value,
        expiration_month: state.expiration_month.value,
        expiration_year: state.expiration_year.value,
      };
      _REQUEST.userId = user["id"];
      _REQUEST.addressId = user["primaryAddres"]["id"];
      _REQUEST.amount = "1000";
      await createRequest(_REQUEST, token);
      AlertSuccess({
        title: "Pedido",
        message: "Seu Pedido foi finalizado com sucesso!",
      });
      setTimeout(() => {
        router.push("/orders");
      }, 5000);
    } catch (error) {
      console.log(error);
      AlertWarning({
        title: "Pedido",
        message: "Ocorreu um erro, por favor tente novamente mais tarde =(",
      });
    } finally {
      setLoading(false);
    }
  }

  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };

  return (
    <>
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
                          name="name"
                          className="form-control"
                          onChange={handleOnChange}
                          disabled={isLoged}
                          value={state.name.value}
                        />
                        {state.name.error && (
                          <p style={errorStyle}>{state.name.error}</p>
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
                              name="differentAddress_address"
                              className="form-control"
                              onChange={handleOnChange}
                              value={state.differentAddress_address.value}
                            />
                            {state.differentAddress_address.error && (
                              <p style={errorStyle}>
                                {state.differentAddress_address.error}
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
                              name="differentAddress_number"
                              className="form-control"
                              onChange={handleOnChange}
                              value={state.differentAddress_number.value}
                            />
                            {state.differentAddress_number.error && (
                              <p style={errorStyle}>
                                {state.differentAddress_number.error}
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
                              name="differentAddress_complement"
                              className="form-control"
                              onChange={handleOnChange}
                              value={state.differentAddress_complement.value}
                            />
                            {state.differentAddress_complement.error && (
                              <p style={errorStyle}>
                                {state.differentAddress_complement.error}
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
                              name="differentAddress_city"
                              className="form-control"
                              onChange={handleOnChange}
                              value={state.differentAddress_city.value}
                            />
                            {state.differentAddress_city.error && (
                              <p style={errorStyle}>
                                {state.differentAddress_city.error}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Estado <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="differentAddress_state"
                              className="form-control"
                              onChange={handleOnChange}
                              value={state.differentAddress_state.value}
                            />
                            {state.differentAddress_state.error && (
                              <p style={errorStyle}>
                                {state.differentAddress_state.error}
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
                              name="differentAddress_zipcode"
                              className="form-control"
                              onChange={handleOnChange}
                              value={state.differentAddress_zipcode.value}
                            />
                            {state.differentAddress_zipcode.error && (
                              <p style={errorStyle}>
                                {state.differentAddress_zipcode.error}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* <div className="col-lg-12 col-md-12">
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
                  </div> */}
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
                          type="text"
                          name="number_token"
                          className="form-control"
                          onChange={handleOnChange}
                          maxLength={19}
                          value={state.number_token.value}
                        />
                        {state.number_token.error && (
                          <p style={errorStyle}>{state.number_token.error}</p>
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
                          style={{ textTransform: "uppercase" }}
                          onChange={handleOnChange}
                          value={state.cardholder_name.value}
                        />
                        {state.cardholder_name.error && (
                          <p style={errorStyle}>
                            {state.cardholder_name.error}
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
                          type="text"
                          name="expiration_month"
                          className="form-control"
                          onChange={handleOnChange}
                          maxLength={2}
                          value={state.expiration_month.value}
                        />
                        {state.expiration_month.error && (
                          <p style={errorStyle}>
                            {state.expiration_month.error}
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
                          type="text"
                          name="expiration_year"
                          className="form-control"
                          onChange={handleOnChange}
                          maxLength={2}
                          value={state.expiration_year.value}
                        />
                        {state.expiration_year.error && (
                          <p style={errorStyle}>
                            {state.expiration_year.error}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary mb-3"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="spinner-border" role="status"></div>
                      ) : (
                        <span>Enviar</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CheckoutForm;
