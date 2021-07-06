import { createStore, applyMiddleware ,Store } from 'redux';
import { ProductsState } from './ducks/products/types';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
    products: ProductsState
}

import rootReducer from './ducks/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
) );

sagaMiddleware.run(rootSaga);

export default store;