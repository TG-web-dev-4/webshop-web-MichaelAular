import { combineReducers } from "redux";
import productReducer from "./_productReducer";
import shopReducer from "./_shopReducer";

const rootReducer = combineReducers({
    productReducer: productReducer,
    shopReducer : shopReducer
})

export default rootReducer;