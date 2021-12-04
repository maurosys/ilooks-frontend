import { Address } from "./global";

type PhoneRequest = {
  phone: string;
  type: string;
  description: string;
  primary: boolean;
};

export type RegisterRequest = {
  fullName: string;
  howFindUs?: string;
  birthDate: string;
  document: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  typeUser: string;
  address?: Address[];
  phones?: PhoneRequest[];
};

export type CategoryRequest = {
  id: string;
  name: string;
  created_at: Date;
};

export type SubCategoryRequest = {
  id: string;
  name: string;
  category: string;
  categoryId: string;
};
