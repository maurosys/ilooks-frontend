import { Address } from "./global";

type PhoneRequest = {
  phone: string;
  type: string;
  description: string;
  primary: boolean;
};

export type RegisterRequest = {
  fullName: string;
  birthDate: string;
  document: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  typeUser: string;
  address?: Address[];
  phones?: PhoneRequest[];
};
