import * as actionTypes from '../actions/actiontypes'
import { product } from '../data'

const INITIAL_STATE = {
    products: [], // {id, title, price}
    cart: [], // {id, title, price, qty}
    currentItem: null,
}


const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
        const {id} = action.payload

        const itemToAddToCart = product.find(item => Number(item.id) === id )
            return   {
            ...state, cart: [...state.cart, itemToAddToCart]

        };
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state;
    }
}

export default shopReducer;