/**
 * Actions Types
 */
 export enum WIshListTypes {
    ADD_TO_WISHLIST = '@wishList/ADD_TO_WISHLIST',
    REMOVE_WISHLIST = '@wishList/REMOVE_WISHLIST',
};

export interface Wishlist {
    id: number;
    title: string;
    price: number;
    image: string;
    active?: boolean;
}

/**
 * State Type
 */

 export interface WishListState {
    readonly data: Wishlist[];
    readonly loading: boolean;
    readonly error: boolean;
}