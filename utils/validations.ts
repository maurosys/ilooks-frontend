import { string } from "yup";

export const email = string()
  .test({
    name: "email",
    message: "E-mail inválido",
    test: async (value = "") => {
      const valid = await Promise.all([
        string()
          .email()
          .validate(value)
          .then(() => true)
          .catch(() => false),
      ]);
      return valid.some((v) => v);
    },
  })
  .required("Por favor, prencha o campo e-mail");

export const password = string()
  .min(6, "Por favor, digite ao menos 6 dígitos")
  .required("Por favor, preencha o campo senha");

export const confirmPassword = string()
  .test("passwords-match", "Senhas não conferem", function (value) {
    return this.parent.password === value;
  })
  .min(6, "Por favor, digite ao menos 6 dígitos")
  .required("Por favor, preencha o campo senha");

export const confirmationCode = string()
  .min(6, "Por favor, digite ao menos 6 dígitos")
  .required("Campo obrigatório, por favor informe o código enviado");

export const hash = string()
  .min(6, "Por favor, digite ao menos 6 dígitos")
  .required("O has é requerido");
