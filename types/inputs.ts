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
