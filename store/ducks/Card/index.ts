import { Reducer } from "redux";
import { CardState, CardTypes, card } from "./types";

const INITIAL_STATE: card[] = [
  
];

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CardTypes.ADD_TO_CART: 
      return [...state, action.payload]

    case CardTypes.REMOVE_ITEM:
      return state.filter((item) => item.id != action.payload);

    case CardTypes.GET_ALL:
      return [...state, action.payload]

    case CardTypes.ALTER_QUANTITY:
      const product = action.payload;
      const index = state.findIndex(e => e.id === product.id);
      if(index >= 0){
        state[index] = product
      }
      return [...state];

    default:
      return state;
  }
};

export default reducer;
