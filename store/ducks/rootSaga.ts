import  { all, takeLatest} from 'redux-saga/effects';
import { ProductsTypes } from './products/types';
import { load } from './products/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(ProductsTypes.LOADE_RESQUEST, load),
    ]);
}