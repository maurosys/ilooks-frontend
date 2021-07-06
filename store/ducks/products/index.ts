import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
    data: [],
    error: false,
    loading: false
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductsTypes.LOADE_RESQUEST_PRODUCT:
            return { ...state, loading: true}
        case ProductsTypes.LOADE_SUCCESS_PRODUCT:
            return {...state, loading: false, error: false, data: action.payload.data}
        case ProductsTypes.LOADE_FAILURE_PRODUCT:
            return { ... state, loading: false, error: true, data: []}
        case ProductsTypes.GET_SIGLE_PRODUCT_REQUEST:
            return {...state, loading: true}
        case ProductsTypes.GET_SIGLE_PRODUCT_SUCCESS:
            return {...state, loading: false, error: false, data: action.payload.data}
        case ProductsTypes.GET_SIGLE_PRODUCT_Failure:
            return {...state, loading: false, error: true, data:[]}
        default:
            return state;
    }
}

export default reducer;