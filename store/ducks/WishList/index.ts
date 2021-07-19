import { Reducer } from "redux";
import { WishListState, WIshListTypes, Wishlist } from "./types";

const INITIAL_STATE: Wishlist[] = [
  
];

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case WIshListTypes.ADD_TO_WISHLIST:
      const products0 = action.payload;
      const index0 = state.findIndex(e => e.id === products0.id);
      if (index0 < 0) {
        return [...state, action.payload]
      } 
       return state.filter((item) => item.id != state[index0].id);     
        
      
      case WIshListTypes.REMOVE_WISHLIST:
        return state.filter((item) => item.id != action.payload);
    default:
      return state;
  }
};

export default reducer;
