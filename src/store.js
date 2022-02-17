import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import  rootReducer  from "./reducers/rootReducer";
import product from "./data";

export const store = createStore(
    rootReducer,
    {productReducer:product},
    devToolsEnhancer()
    );