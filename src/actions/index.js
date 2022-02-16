
export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

export const displayItem = (id) => {
    return {
        type: "DISPLAY_ITEM",
        payload: id
    }
}

export const addShoppingBag = (id) => {
    return {
        type: "ADDSHOPPINGGBAG",
        payload: id
    }
}

export const removeShoppingBag = (id) => {
    return {
        type: "REMOVESHOPPINGGBAG",
        payload: id
    }
}