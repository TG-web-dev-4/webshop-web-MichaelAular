const productReducer = (state = [], action) => {
    console.log(state)
    const item =  (state.find)
    ((product) => product.id === action.payload
    )

    switch(action.type) {
        case "DISPLAY_ITEM":
            return {
                ...state, currentItem:item
            }
        default : return state;
    }
}

export default productReducer;