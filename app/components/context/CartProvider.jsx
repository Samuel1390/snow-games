"use client";
import { useContext, useEffect, useReducer } from "react";
import cartContext from "./cartContext";
import FilterContext from "./filterContext";
import reducer from "../hooks/useCartReducer";
import React from "react";

const CartProvider = ({ children }) => {
  const addToCartEvent = new Event("add to cart");
  const removeFromCartEvent = new Event("remove from cart");
  const [cart, dispatch] = useReducer(reducer, []);
  const { platform } = useContext(FilterContext);
  const isOnCart = (gameId, cart) => {
    return cart.findIndex((game) => game.uuid === gameId);
  };
  const addToCart = (game) => {
    dispatch({ game: game, type: "ADD", cart: cart, platform: platform });
    window.dispatchEvent(addToCartEvent);
  };
  const removeFromCart = (game) => {
    dispatch({ game: game, type: "REMOVE", cart: cart, platform: platform });
    window.dispatchEvent(removeFromCartEvent);
  };

  const deleteToCart = (game) => {
    dispatch({ game: game, type: "DELETE", cart: cart, platform: platform });
  };
  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteToCart, isOnCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
