import {string} from "yup";

export const fullName = string().required(
  "Campo obrigatório, digite o seu nome completo"
);

export const howFindUs = string().required(
  "Por favor, deixe-nos saber como nos conheceu"
);

export const birthDate = string().required(
  "Campo obrigatório, por favor digite a data de nascimento"
);

export const document = string().required(
  "Campo obrigatório, por favor digite o CPF"
);

export const email = string()
  .test({
          name:    "email",
          message: "E-mail inválido",
          test:    async (value = "") => {
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

export const phone = string().required("Número de telefone requirido");

export const typePhone = string().required("Tipo do telefone requirido");

export const zipcode = string().required("O CEP é requerido");

export const address = string().required(
  "Campo obrigatório, por favor digite o endereço"
);

export const numberAndress = string().required(
  "Campo obrigatório, por favor digite o número do endereço"
);

export const city = string().required(
  "Campo obrigatório, por favor digite a cidade"
);

export const state = string()
  .max(2, "UF deve possuir apenas 2 dígitos")
  .required("Campo obrigatório, por favor digite a UF");
