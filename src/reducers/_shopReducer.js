import * as actionTypes from '../actions/actiontypes'
import { product } from '../data'

const INITIAL_STATE = {
    products: [...product], // {id, title, price}
    cart: [], // {id, title, price, qty}
    currentItem: null,
}


const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
        const {id, size, color} = action.payload
        console.log(`ID: ${id} size: ${size} color: ${color}`)
        console.log('STATE PRODUCTS',state.products)
        const foundItem = state.products.filter(item => Number(item.id) === Number(id) )
       
        const itemToAddToCart = {...foundItem, colors: color, size: size}
        console.log('ITEM TO ADD to CART', itemToAddToCart)

            return   {
            ...state, cart: [...state.cart, itemToAddToCart ]

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