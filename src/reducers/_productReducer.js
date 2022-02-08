const productReducer = (state = [], action) => {
    const item = (
        (product) => product.id === action.payload
    )

    switch(action.type) {
        case "DISPLAY_ITEM":
            console.log(state)
            return {
                ...state, currentItem:item
            }
        default : return state;
    }
}

export default productReducer;