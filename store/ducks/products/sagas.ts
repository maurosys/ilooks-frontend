import { call, put } from 'redux-saga/effects';
import { apiProducts } from '../../../services/products.api';
import { loadSuccessProduct, loadFailureProduct,getSingleProductSuccess, getSingleProductFailure } from '../products/actions';

export function* load() {
    try {
        const response = yield call(apiProducts.get, 'products');
        yield put(loadSuccessProduct(response.data));
    } catch (err) {
        yield put(loadFailureProduct());
    }
}

export function* getSingleProductResquest(id: number) {
    try {
        const response = yield call(apiProducts.get, `products/${id}`);
        yield put(getSingleProductSuccess(response.data));
    } catch(err) {
        yield put(getSingleProductFailure());
    }
}

