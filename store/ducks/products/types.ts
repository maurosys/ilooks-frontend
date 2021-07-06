/**
 * Actions Types
 */
export enum ProductsTypes {
    LOADE_RESQUEST_PRODUCT = '@products/LOAD_REQUEST_PRODUCT',
    LOADE_SUCCESS_PRODUCT = '@products/LOAD_SUCCESS_PRODUCT',
    LOADE_FAILURE_PRODUCT = '@products/LOAD_FAILURE_PRODUCT',
    GET_SIGLE_PRODUCT_REQUEST = '@products/GET_SINGLE_PRODUCT_RESQUEST',
    GET_SIGLE_PRODUCT_SUCCESS = '@products/GET_SINGLE_PRODUCT_SUCCESS',
    GET_SIGLE_PRODUCT_Failure = '@products/GET_SINGLE_PRODUCT_Failure',
    ADD_TO_CART = '@products/ADD_TO_CART',
    REMOVE_ITEM = '@products/REMOVE_ITEM',
    SUB_QUANTITY = '@products/SUB_QUANTITY',
    ADD_QUANTITY = '@products/ADD_QUANTITY',
    ADD_SHIPPING = '@products/ADD_SHIPPING',
    ADD_QUANTITY_WITH_NUMBER = '@products/ADD_QUANTITY_WITH_NUMBER',
    ORDER_FORM = '@products/ORDER_FORM',
    CHECKOUT_CHARGE = '@products/CHECKOUT_CHARGE',
    RESET_CART = '@products/RESET_CART',
};

/**
 * Data types
 */

export interface Products {
    id: number,
    title: string,
    price: number,
    image: string,
    imageHover: string
    qty: number
}

/**
 * State Type
 */

export interface ProductsState {
    readonly data: Products[],
    readonly loading: boolean,
    readonly error: boolean
}