import { combineReducers } from "redux";
import productReducer from "./_productReducer";
import cartReducer from "./_shoppingReducer";

const allReducers = combineReducers({
    productReducer: productReducer,
    cartReducer : cartReducer
})

export default allReducers;