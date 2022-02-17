import * as actionTypes from '../actions/actiontypes';
import { product } from '../data';

const INITIAL_STATE = {
  products: [...product], 
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const { id, size, color } = action.payload;
      if (!size || !color) return state;

      const foundItem = state.products.find(
        (item) => Number(item.id) === Number(id)
      );
      const cartItem = {
        id,
        productName: foundItem.name,
        color: color,
        size: size,
        price: foundItem.price,
        qty: 1,
      };

      return {
        ...state,
        cart: [...state.cart, cartItem],
      };
    case actionTypes.REMOVE_FROM_CART:
      const productId = 1;
      const filteredCart = state.cart.filter(
        (product) => product.id === productId
      );

      return {
        ...state,
        cart: [...filteredCart],
      };

    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
