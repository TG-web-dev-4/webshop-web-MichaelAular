import * as actionTypes from "../actions/actiontypes";
import { product } from "../data";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  products: [...product],
  cart: [],
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
        unique_id: uuidv4(),
        productName: foundItem.name,
        color: color,
        size: size,
        price: foundItem.price,
        name: foundItem.name,
        img: foundItem.imgName,
        qty: 1,
      };

      const cartItems = state.cart
      const isItemInCart = (item) => item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color
      const existingCartItem = cartItems.find(isItemInCart)

      if (existingCartItem) {
          const updatedCart = cartItems.map((item) => isItemInCart(item) ? {...existingCartItem, qty: existingCartItem.qty + 1} : item)

          return {
            ...state,
            cart: updatedCart
          }
      }
      return {
        ...state,
        cart: [...state.cart, cartItem],
      };

    case actionTypes.REMOVE_FROM_CART:
      const productId = action.payload.id;
      const filteredCart = state.cart.filter(
        (item) => {
          return item.unique_id !== productId
        }
      );

      return {
        ...state,
        cart: [...filteredCart],
      };

    case actionTypes.ADJUST_QTY:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
