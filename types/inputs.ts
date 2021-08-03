export type LoginForm = {
  email: string;
  password: string;
};

export type ForgotPasswordForm = {
  email: string;
};

export type ConfirmationCode = {
  confirmationCode: string;
  hash: string;
  source: "login" | "forgot";
};

export type ResetPasswordNoLogged = {
  password: string;
  confirmPassword: string;
};

export type RegisterUser = {
  fullName: string;
  birthDate: string;
  document: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  typePhone: string;
  address: string;
  district?: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipcode: string;
};
