import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import  allReducers  from "./reducers/allReducers";
import {product} from "./data";

export const store = createStore(
    allReducers,

    devToolsEnhancer()
    );