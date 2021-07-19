import { Reducer } from "redux";
import { CardState, CardTypes, card } from "./types";

const INITIAL_STATE: card[] = [
  
];

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CardTypes.ADD_TO_CART:
      const products0 = action.payload;
      const index0 = state.findIndex(e => e.id === products0.id);

      if (index0 < 0) {
        return [...state, action.payload]
      } else {
        state[index0].qty = state[index0].qty + 1
        state[index0].total = state[index0].price *  state[index0].qty        
      }
        
      return [ ...state]

    case CardTypes.REMOVE_ITEM:
      return state.filter((item) => item.id != action.payload);

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
