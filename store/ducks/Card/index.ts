import { Reducer } from "redux";
import { CardState, CardTypes, card } from "./types";

const INITIAL_STATE: card[] = [];

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardTypes.ADD_TO_CART:
      const products0 = action.payload;
      const index0 = state.findIndex((e) => e.id === products0.id);

      if (index0 < 0) {
        localStorage.setItem(
          "@ilooksecommerce_cart",
          JSON.stringify([...state, action.payload])
        );
        return [...state, action.payload];
      } else {
        state[index0].qty = state[index0].qty + 1;
        state[index0].total = state[index0].price * state[index0].qty;
        localStorage.setItem(
          "@ilooksecommerce_cart",
          JSON.stringify([...state])
        );
      }

      return [...state];

    case CardTypes.CLEAR_CART:
      localStorage.removeItem("@ilooksecommerce_cart");
      return [];
      
    case CardTypes.REMOVE_ITEM:
      localStorage.setItem(
        "@ilooksecommerce_cart",
        JSON.stringify(state.filter((item) => item.id != action.payload))
      );
      return state.filter((item) => item.id != action.payload);

    case CardTypes.GET_ALL:
      if (
        typeof window !== "undefined" &&
        localStorage.getItem("@ilooksecommerce_cart") !== null
      ) {
        return JSON.parse(localStorage.getItem("@ilooksecommerce_cart"));
      } else {
        return [...state, action.payload];
      }

    case CardTypes.ALTER_QUANTITY:
      const product = action.payload;
      const index = state.findIndex((e) => e.id === product.id);
      if (index >= 0) {
        state[index] = product;
      }
      localStorage.setItem("@ilooksecommerce_cart", JSON.stringify([...state]));
      return [...state];

    default:
      if (
        typeof window !== "undefined" &&
        localStorage.getItem("@ilooksecommerce_cart") !== null
      ) {
        return JSON.parse(localStorage.getItem("@ilooksecommerce_cart"));
      } else {
        return state;
      }
  }
};

export default reducer;
