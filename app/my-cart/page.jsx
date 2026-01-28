"use client";
import styles from "./styles.module.css";
import React from "react";
import CartContext from "../components/context/cartContext";
import { useContext } from "react";
import GameCard from "../components/GameCard";
import {
  ShoppingCartIcon,
  MinusCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Header from "@/app/components/Header";
import Link from "next/link";
const Page = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Header displayControls={false} linkOptions={false} />
      <h2 className="my-5 text-center text-3xl">Your cart</h2>
      {!cart.length && (
        <>
          <h3 className="font-bold text-neutral-400 text-2xl text-center">
            Your cart is empty
          </h3>
          <p className="text-center text-neutral-500">
            Add some games to your cart
          </p>
        </>
      )}
      <div className="games-grid p-2.5 grid gap-2.5 grid-cols-1 lg:grid-cols-2">
        {cart.map((game) => {
          return (
            <div
              className="grid max-sm:grid-cols-1 p-4 bg-sky-800 shadow-2xl border border-neutral-300 place-content-center grid-cols-2 gap-2.5 p "
              key={`${game.name}_${game.uuid}`}
            >
              <GameCard
                className="hidden "
                game={game}
                platform={game.platform}
              />
              <GameInfo game={game} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export function GameInfo({ game, platform = "", className = "" }) {
  const { cart, addToCart, removeFromCart, deleteToCart } =
    useContext(CartContext);
  const gameOnCartIndex = cart.findIndex(
    (cartGame) => cartGame.uuid === game.uuid,
  );
  return (
    <>
      {game && (
        <div className={`${className}  grid h-full w-full p-2.5 max-sm:h-fit`}>
          <div className="self-end border border-neutral-50/50 p-2.5">
            <h2 className="text-3xl">{game.name}</h2>
            <h3 className="text-4xl text-emerald-400 font-bold">
              {game.price}
            </h3>
            <div className="flex items-center justify-center gap-2.5">
              <h3 className="text-2xl text-gray-200">
                Quantity:{" "}
                {gameOnCartIndex >= 0 ? cart[gameOnCartIndex].quantity : 0}
              </h3>
              <span className="text-amber-400">|</span>
              <h3 className="text-2xl text-sky-300">
                Platform:{" "}
                {gameOnCartIndex >= 0
                  ? cart[gameOnCartIndex].platform.toUpperCase()
                  : platform.toUpperCase()}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 my-4 self-end gap-3">
            <button className={styles.btn} onClick={() => addToCart(game)}>
              Add 1
              <ShoppingCartIcon className="icon hover-none" />
            </button>
            <button className={styles.btn} onClick={() => removeFromCart(game)}>
              Remove 1
              <ShoppingCartIcon className="icon hover-none" />
            </button>
            <button
              onClick={() => deleteToCart(game)}
              className={styles.deleteBtn}
            >
              Delete
              <MinusCircleIcon className="icon hover-none" />
            </button>
            <Link href={game.href} className={styles.buyBtn}>
              Buy now
              <ShoppingCartIcon className="icon" />
            </Link>
            <Link href={game.href} className={styles.buyBtn}>
              More information
              <InformationCircleIcon className="icon" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Page;
