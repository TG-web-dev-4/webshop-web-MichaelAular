import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import  allReducers  from "./reducers/allReducers";

export const store = createStore(
    allReducers,
    devToolsEnhancer()
    );