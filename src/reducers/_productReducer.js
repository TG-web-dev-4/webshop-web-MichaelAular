const productReducer = (state = [], action) => {
    const item =  (state.find)

    switch(action.type) {
        case "DISPLAY_ITEM":
            return {
                ...state, currentItem:item
            }
        default : return state;
    }
}

export default productReducer;