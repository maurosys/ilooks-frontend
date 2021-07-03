/**
 * Actions Types
 */
export enum ProductsTypes {
    LOADE_RESQUEST = '@products/LOAD_REQUEST',
    LOADE_SUCCESS = '@products/LOAD_SUCCESS',
    LOADE_FAILURE = '@products/LOAD_FAILURE',
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
}

/**
 * State Type
 */

export interface ProductsState {
    readonly data: Products[],
    readonly loading: boolean,
    readonly error: boolean
}