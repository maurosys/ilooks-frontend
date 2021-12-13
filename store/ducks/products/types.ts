/**
 * Actions Types
 */
export enum ProductsTypes {
  LOADE_RESQUEST_PRODUCT    = "@products/LOAD_REQUEST_PRODUCT",
  LOADE_SUCCESS_PRODUCT     = "@products/LOAD_SUCCESS_PRODUCT",
  LOADE_FAILURE_PRODUCT     = "@products/LOAD_FAILURE_PRODUCT",
  GET_SIGLE_PRODUCT_REQUEST = "@products/GET_SINGLE_PRODUCT_RESQUEST",
  GET_SIGLE_PRODUCT_SUCCESS = "@products/GET_SINGLE_PRODUCT_SUCCESS",
  GET_SIGLE_PRODUCT_Failure = "@products/GET_SINGLE_PRODUCT_Failure",
}

/**
 * Data types
 */

export interface ProductsDetails {
  id: string;
  size: string | number;
  color: string;
  quantity: number;
  photos: string[];
}

export interface Products {
  id: number;
  title: string;
  price: number;
  outletPrice?: number;
  image: string;
  imageHover: string;
  qty: number;
  provider: string;
  providerId?: string;
  materialType: string;
  details_product: ProductsDetails[];
  total: number;
  active?: boolean;
  slugy?: string;
  category?: any;
  subCategory?: any;
  providerSlugy?: any;
}

/**
 * State Type
 */

export interface ProductsState {
  readonly data: Products[];
  readonly loading: boolean;
  readonly error: boolean;
}
