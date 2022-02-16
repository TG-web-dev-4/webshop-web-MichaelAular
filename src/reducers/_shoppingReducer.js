const cartReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADDSHOPPINGGBAG':
            return state +1;
        case 'REMOVESHOPPINGGBAG':
            if (state <= 0) state = 0;
            else return state -1;
        default:
            return state;
    }
}

export default cartReducer;