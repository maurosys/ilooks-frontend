import { action } from 'typesafe-actions';
import { ProductsTypes, Products } from './types';

export const loadResquest = () => action(ProductsTypes.LOADE_RESQUEST);

export const loadSuccess = (data: Products) => action(ProductsTypes.LOADE_SUCCESS, {data});

export const loadFailure = () => action(ProductsTypes.LOADE_FAILURE);
