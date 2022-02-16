import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import  rootReducer  from "./reducers/rootReducer";
import product from "./data";
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    {productReducer:product},
    devToolsEnhancer()
    );