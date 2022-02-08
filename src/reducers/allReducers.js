import { combineReducers } from "redux";
import counterReducer from "./_counterReducer";
import productReducer from "./_productReducer";


const allReducers = combineReducers({
    counterReducer: counterReducer,
    productReducer: productReducer
})

export default allReducers;