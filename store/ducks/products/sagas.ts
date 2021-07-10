import { call, put } from 'redux-saga/effects';
import { apiProducts } from '../../../services/products.api';
import { loadSuccessProduct, loadFailureProduct } from '../products/actions';

export function* load() {
    try {
        const response = yield call(apiProducts.get, 'products');
        yield put(loadSuccessProduct(response.data));
    } catch (err) {
        yield put(loadFailureProduct());
    }
}


