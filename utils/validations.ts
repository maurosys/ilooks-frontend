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
