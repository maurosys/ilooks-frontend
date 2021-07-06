import { action } from 'typesafe-actions';
import { ProductsTypes, Products } from './types';

export const loadResquestProduct = () => action(ProductsTypes.LOADE_RESQUEST_PRODUCT);
export const loadSuccessProduct = (data: Products) => action(ProductsTypes.LOADE_SUCCESS_PRODUCT, {data});
export const loadFailureProduct = () => action(ProductsTypes.LOADE_FAILURE_PRODUCT);

export const getSingleProductRequest = (id: number) => action(ProductsTypes.GET_SIGLE_PRODUCT_REQUEST, id);
export const getSingleProductSuccess = (data: Products) => action(ProductsTypes.GET_SIGLE_PRODUCT_REQUEST, data);
export const getSingleProductFailure = () => action(ProductsTypes.GET_SIGLE_PRODUCT_REQUEST);


