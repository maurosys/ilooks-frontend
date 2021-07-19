import { combineReducers } from 'redux';

import products from './products';
import card from './Card';
import wishlist from './WishList';

export default  combineReducers({
    products,
    card,
    wishlist,
});