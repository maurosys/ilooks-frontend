/**
 * Actions Types
 */
 export enum CardTypes {
    ADD_TO_CART = '@card/ADD_TO_CART',
    REMOVE_ITEM = '@card/REMOVE_ITEM',
    GET_ALL = '@card/GET_ALL',
};

export interface card {
    id: number,
    title: string,
    price: number,
    image: string,
    imageHover: string
    qty: number
    total: number
}

/**
 * State Type
 */

 export interface CardState {
    readonly data: card[];
    readonly loading: boolean;
    readonly error: boolean;
    total: number,
    shipping: number,
}