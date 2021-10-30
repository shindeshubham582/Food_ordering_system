import CartContext from "./CartContext";
import { useReducer } from "react";

const cartReducer = (state, action) => {
  let updatedItems;
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
    } else {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const updatedAmount = state.totalAmount - action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  return defaultCart;
};

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, updateCartState] = useReducer(cartReducer, defaultCart);
  const addItemToCart = (item) => {
    updateCartState({ type: "ADD", item });
  };

 const clearCartHandler = () => {
  updateCartState({
    type: 'CLEAR'
  })
 }

  const removeItemToCart = (item) => {
    updateCartState({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      addItemToCart(item);
    },
    removeItem: item => {removeItemToCart(item)},
    clearCart: item => {clearCartHandler()}
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
