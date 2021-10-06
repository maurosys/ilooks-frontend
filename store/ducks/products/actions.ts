import { action } from 'typesafe-actions';
import { ProductsTypes, Products } from './types';

export const loadResquestProduct = async () => action(ProductsTypes.LOADE_RESQUEST_PRODUCT);
export const loadSuccessProduct = (data: Products) => action(ProductsTypes.LOADE_SUCCESS_PRODUCT, {data});
export const loadFailureProduct = () => action(ProductsTypes.LOADE_FAILURE_PRODUCT);
