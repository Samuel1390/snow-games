"use client";
import { ReactNode, useContext, useReducer } from "react";
import cartContext from "./cartContext";
import FilterContext from "./filterContext";
import reducer from "../hooks/useCartReducer";
import { CartItem } from "../hooks/types";
interface Props {
  children: ReactNode;
}
const CartProvider = ({ children }: Props) => {
  const addToCartEvent = new Event("add to cart");
  const removeFromCartEvent = new Event("remove from cart");

  const [cart, dispatch] = useReducer(reducer, []);
  const { platform } = useContext(FilterContext);
  const isOnCart = (gameId: string, cart: CartItem[]) => {
    return cart.findIndex((game) => game.uuid === gameId);
  };
  const addToCart = (game: CartItem) => {
    dispatch({ game: game, type: "ADD", cart: cart, platform: platform });
    window.dispatchEvent(addToCartEvent);
  };
  const removeFromCart = (game: CartItem) => {
    dispatch({ game: game, type: "REMOVE", cart: cart, platform: platform });
    window.dispatchEvent(removeFromCartEvent);
  };

  const deleteToCart = (game: CartItem) => {
    dispatch({ game: game, type: "DELETE", cart: cart, platform: platform });
  };
  return (
    <cartContext.Provider
      value={{ addToCart, removeFromCart, deleteToCart, isOnCart, cart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
