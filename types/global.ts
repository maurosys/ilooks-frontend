import {ProductsDetails}   from "@store/ducks/products/types";
import {StatusHistoryItem} from "./orders";

type Product = {
  productDetailsId: string;
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  unitPrice: number;
  provider: UserReponse;
  photos: string[];
};

export type UserReponse = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  complement?: string;
  district?: string;
  state: string;
  zipcode: any;
};

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
  slugy: string;
  name: string;
  price: number;
  outletPrice: number;
  materialType: string;
  status: string;
  views: number;
  ordersFinished: number;
  created_at: Date;
  updated_ad: Date;
  category: {
    id: string;
    name: string;
    slugy: string;
  };
  subCategory: {
    id: string;
    name: string;
    slugy: string;
  };
  provider: {
    id: string;
    name: string;
    slugy: string;
  };
  quantity_all: number;
  details_product: ProductsDetails[];
};

export type RequestDetailsResponse = {
  id: string;
  couponId: string;
  amount: string;
  freight: number;
  customer: UserReponse;
  products: Product[];
  request_date: Date;
  status_payment: string;
  status_request: string;
  statusHistory: StatusHistoryItem[];
};
