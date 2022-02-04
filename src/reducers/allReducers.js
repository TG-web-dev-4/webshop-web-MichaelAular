import { combineReducers } from "redux";
import counterReducer from "./_counterReducer";


const allReducers = combineReducers({
    counterReducer: counterReducer
})

export default allReducers;