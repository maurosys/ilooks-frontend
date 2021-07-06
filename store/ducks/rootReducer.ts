import { combineReducers } from 'redux';

import products from './products';
import card from './Card';

export default  combineReducers({
    products,
    card,
});