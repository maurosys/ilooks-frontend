import { ProductsDetails } from "@store/ducks/products/types";

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

export type ProductReponse = {
  id: string;
  name: string;
  price: number;
  materialType: string;
  status: string;
  views: number;
  ordersFinished: number;
  created_at: Date;
  updated_ad: Date;
  category: {
    id: string;
    name: string;
  };
  subCategory: {
    id: string;
    name: string;
  };
  provider: {
    id: string;
    name: string;
  };
  quantity_all: number;
  details_product: ProductsDetails[];
};
