import * as actionTypes from './actiontypes'

export const displayItem = (id) => {
    return {
        type: "DISPLAY_ITEM",
        payload: id
    }
}

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: item
        }
    }
}

export const adjustQty = (itemID, value) => {
    return{
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}