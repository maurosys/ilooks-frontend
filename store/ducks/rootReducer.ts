import { combineReducers } from "redux";

import products from "./products";
import card from "./Card";
import auth from "./Auth";

export default combineReducers({
  products,
  card,
  auth,
});
