import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import  counterReducer  from "./reducers";


export const store = createStore(
    counterReducer,
    devToolsEnhancer()
    );