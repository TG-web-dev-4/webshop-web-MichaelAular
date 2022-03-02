import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import  rootReducer  from "./reducers/rootReducer";
import product from "./data";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    {productReducer:product},
    devToolsEnhancer()
    );

    const persistor = persistStore(store);