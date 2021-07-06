import  { all, takeLatest} from 'redux-saga/effects';
import { ProductsTypes } from './products/types';
import { load, getSingleProductResquest } from './products/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(ProductsTypes.LOADE_RESQUEST_PRODUCT, load),
        
        takeLatest(ProductsTypes.GET_SIGLE_PRODUCT_REQUEST, getSingleProductResquest),
    ]);
}