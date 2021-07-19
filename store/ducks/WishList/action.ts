import { action } from 'typesafe-actions';
import { WIshListTypes , Wishlist } from './types';

export const addToWishlist = (data: Wishlist) => action(WIshListTypes.ADD_TO_WISHLIST, data);
export const removeWishlist = (id: number) => action(WIshListTypes.REMOVE_WISHLIST, id);
