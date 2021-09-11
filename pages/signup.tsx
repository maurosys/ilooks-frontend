import React from "react";
import HeaderHtml from "next/head";
import Header from "../components/Layout/HeaderFixed";
import Footer from "../components/Layout/Footer";
import Facility from "../components/shop-style-five/Facility";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Checkbox from "@material-ui/core/Checkbox";

const Signup = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <HeaderHtml>
        <title> Ilooks | Signup</title>
      </HeaderHtml>
      <Header />
      <section className="signup-area ptb-60">
          <header className='header-signup'>
            <span></span>
            <p>Preencha o formulário a baixo</p>
            <span></span>
          </header>

        <div className="container-signup-0">
          <label className="label-signup">e-mail</label>
          <input
            type="text"
            placeholder="Ex. joaodasilva@gmail.com"
            className="input-signup"
          />
          <div className="senha-signup">
            <label className="label-signup">senha</label>
            <AiOutlineEyeInvisible
              color="#d7d7d7"
              size={17}
              className="icon-eyes"
            />
            <input type="password" className="input-signup" />
            <div className="senha-fraca">
              <span></span>
              <span className="senha-teste"></span>
              <p>fraca</p>
            </div>
          </div>

          <div className="cpf-signup">
            <label className="label-signup">CPF</label>
            <input
              type="text"
              placeholder="Ex. 123.456.789-12"
              className="input-signup"
            />
          </div>

          <label className="label-signup">Seu sobrenome</label>
          <input
            type="text"
            placeholder="Ex. Matheus Mesquita"
            className="input-signup"
          />
          <div className="data-singup">
            <label className="label-signup">data de nascimento</label>
            <input
              type="text"
              placeholder="Ex. 01/01/1999"
              className="input-signup"
            />
          </div>
          <label className="label-signup">Sexo</label>
          <div className="radio-signup">
            <input id="masculino" value="masculino" type="radio" checked />
            <label htmlFor="masculino">Masculino</label>
            <input id="femenino" value="femenino" type="radio" />
            <label htmlFor="femenino">Femenino</label>
          </div>
          <div className="telefone">
            <label className="label-signup">Telefone</label>
            <input
              type="text"
              placeholder="Ex. (11) 99999-9999"
              className="input-signup"
            />
          </div>
          <div className="check">
            <Checkbox
              defaultChecked
              inputProps={{ "aria-label": "secondary" }}
              className='check-select'
            />
            <label>Receber notificações pelo whatsApp</label>
          </div>
          <div className="check">
            <Checkbox
              defaultChecked
              inputProps={{ "aria-label": "secondary checkbox" }}
              className='check-select'
            />{" "}
            <label>Desejo receber ofertas por e-mail</label>
          </div>

          <button className='btn-signup'>Criar seu cadastro</button>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

export default Signup;
