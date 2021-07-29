import React, { useEffect } from "react";
import Link from "next/link";

import Header from "../components/Layout/Header";
import HeaderFixed from "../components/Layout/HeaderFixed";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";
import useLogin from "../hooks/pages/useLogin";

import ButtonPrimary from "../components/Button/Primary";

const Login = () => {
  const { loading, register, handleSubmit, onLogin, errors } = useLogin();

  return (
    <>
      <HeaderFixed />
      <section className="login-area ptb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="login-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> Login
                  </h2>
                </div>

                <form className="login-form" onSubmit={handleSubmit(onLogin)}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      id="email"
                      name="email"
                    />
                    {errors.email && errors.email.message ? (
                      <p>{errors.email.message}</p>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Senha</label>
                    <input
                      {...register("password")}
                      type="password"
                      className="form-control"
                      placeholder="Digite sua senha"
                      id="password"
                      name="password"
                    />
                    {errors.password && errors.password.message ? (
                      <p>{errors.password.message}</p>
                    ) : (
                      <></>
                    )}
                  </div>

                  <ButtonPrimary type="submit" loading={loading}>
                    Entrar
                  </ButtonPrimary>

                  <Link href="#">
                    <a className="forgot-password">Perdeu a senha ?</a>
                  </Link>
                </form>
              </div>
            </div>

            {/* <div className="col-lg-6 col-md-12">
                            <div className="new-customer-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> Cadastro</h2>
                                </div>

                  <Link href="#">
                    <a className="forgot-password">Perdeu a senha ?</a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility />

                                    <button type="submit" className="btn btn-primary">Criar Conta</button>                                 
                                                                     
                                </form>                                                                                           
                            </div>
                        </div> */}
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

export default Login;
