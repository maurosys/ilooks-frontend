import { call, put } from 'redux-saga/effects';
import { apiProducts } from '../../../services/products.api';
import { loadSuccess, loadFailure } from '../products/actions';

export function* load() {
    try {
        const response = yield call(apiProducts.get, 'products');
        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}