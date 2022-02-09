
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