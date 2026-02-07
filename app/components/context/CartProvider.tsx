"use client";
import { ReactNode, useContext, useReducer } from "react";
import cartContext from "./cartContext";
import FilterContext from "./filterContext";
import reducer from "../hooks/useCartReducer";
import { CartItem, CART_METHODS } from "../hooks/types";
interface Props {
  children: ReactNode;
}

const ADD_TO_CART_EVENT = new Event("add to cart");
const REMOVE_FROM_CART_EVENT = new Event("remove from cart");

const CartProvider = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const { platform } = useContext(FilterContext);
  const isOnCart = (gameId: string, cart: CartItem[]) => {
    return cart.findIndex((game) => game.uuid === gameId);
  };
  const addToCart = (game: CartItem) => {
    const action = new ActionToDispatch(game, CART_METHODS.ADD, cart, platform);
    dispatch(action);
    window.dispatchEvent(ADD_TO_CART_EVENT);
  };
  const removeFromCart = (game: CartItem) => {
    const action = new ActionToDispatch(
      game,
      CART_METHODS.REMOVE,
      cart,
      platform,
    );
    dispatch(action);
    window.dispatchEvent(REMOVE_FROM_CART_EVENT);
  };

  const deleteToCart = (game: CartItem) => {
    const action = new ActionToDispatch(
      game,
      CART_METHODS.DELETE,
      cart,
      platform,
    );
    dispatch(action);
  };
  const clearCart = () => {
    dispatch({ type: CART_METHODS.CLEAR } as ActionToDispatch);
  };
  return (
    <cartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        deleteToCart,
        clearCart,
        isOnCart,
        cart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

class ActionToDispatch {
  game: CartItem;
  type: CART_METHODS;
  cart: CartItem[];
  platform: CartItem["platform"];

  constructor(
    game: CartItem,
    type: CART_METHODS,
    cart: CartItem[],
    platform: CartItem["platform"],
  ) {
    this.game = game;
    this.type = type;
    this.cart = cart;
    this.platform = platform;
  }
}
export default CartProvider;
