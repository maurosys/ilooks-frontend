export type Address = {
  id?: string;
  address: string;
  district?: string;
  number?: string;
  complement?: string;
  city: string;
  state: string;
  zipcode: string;
  primary: boolean;
  description?: string;
  userId?: string;
};
