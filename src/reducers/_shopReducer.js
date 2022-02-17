import * as actionTypes from '../actions/actiontypes';
import { product } from '../data';

const INITIAL_STATE = {
  products: [...product], // {id, title, price}
  cart: [], // {id, title, price, qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Dit zijn de variabelen de we meesturen in de payload
      // dit is in principe het ITEM dat mee sturen vanuit het Product scherm
      // uncomment deze om te kijken wat er binnen komt!
      // console.log('ITEM', action.payload)
      const { id, size, color } = action.payload;

      // ALS ER GEEN SIZE OF COLOR IS GESELECTEERD NIKS TOEVOEGEN METEEN
      // DE STATE RETURNEN ZOALS DIE IS!
      if (!size || !color) return state;

      // hier gebruiken we de id uit de action.payload om het juiste product te vinden
      // BELANGRIJK: JE MOET strings naar nummers casten anders komt er niks uit dit
      // soort zoekopdrachten.

      const foundItem = state.products.find(
        (item) => Number(item.id) === Number(id)
      );

      // uncomment console.log om te kijken wat hier uitkomt je hebt hier uit je products Array
      // die ook in de state zit het product gevonden wat de gebruiker wilde kopen
      // console.log('ITEM FOUND WITH ID FROM PAYLOAD in ADD_TO_CART', foundItem)

      // 1) Met het ITEM (foundItem) dat we gevonden hebben gaan we nu een CARTITEM object maken zodat we die terug kunnen geven in de state: { cart: [] }

      // 2) We voegen de informatie toe aan dit CART ITEM die we nodig hebben als we straks
      // op bijvoorbeeld een checkout scherm zitten.

      const cartItem = {
        id, // deze zat al in de payload
        productName: foundItem.name, // naam trekken we uit het foundItem die we met de id hebben opgehaald
        color: color, // de color zat in de payload
        size: size, // de size zat in de payload
        price: foundItem.price, // the price trekken we van het foundItem die we hebben opgehaald af
        qty: 1, // we voegen een item toe aan de cart dus qty is ZOIEZO 1
      };

      // Uiteindelijk hebben we alle informatie die we nodig hebben om straks te berekenen wat de gebruiker
      // moet betalen, en de juiste informatie om op het CHECKOUT SCHERM te laten zien.
      // uncomment dit om te zien wat er precies in dat item zit!
      console.log('ITEM TO ADD to CART', cartItem);

      // nu zijn we voorlopig! klaar dus we return {...state, cart: [...state.cart, itemToAddToCart]}
      // Dit is hetzelde als je de INITIAL_STATE totaal overscrhijft en dan de cart property
      // [...state.cart] ook volledig KOPIEERT en dan het item wat we heb aan gemaakt eraan toevoegt.
      // Zie het zo [...state.cart] = gewoon de HUIDIGE staat van de cart dus bijvoorbeeld als er twee producten inzitten:

      // [{id: 1, productName: 'Brown Nose', color: 'beige', size: 38, price: 65, qty: 1},
      //  {id: 2,   productName: 'Ander product', color: 'blue', size: 40, price: 12, qty: 2},
      //  cartItem
      // ]

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
