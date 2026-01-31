"use client";
import { useContext, useState } from "react";
import cartContext from "./context/cartContext";
import Image from "next/image";
import Link from "next/link";
import "./styles/layout.css";
import { options } from "./Sidebar";
const GameCard = ({ game, className = "", liClassName = "", platform }) => {
  const { name, type, price, image, uuid, rating } = game;
  const [optionObj] = options.filter((op) => op.platform === platform);
  return (
    <li key={uuid} className={`game-card ${liClassName}`}>
      <Link href={`/${platform}/${name[0].toLowerCase()}/${uuid}`}>
        <div className={`${platform}Tag platformTag`}>
          {optionObj.icon} {optionObj.platform.toLocaleUpperCase()}
        </div>
        <picture className="overflow-hidden flex">
          <Image
            className="card-image object-cover"
            src={image}
            alt={`image of ${name}`}
            width={600}
            height={300}
          />
        </picture>
        <div className="game-card-info">
          <h2 className="text-xl">{name}</h2>
          <div className="flex gap-2">
            <span className="font-bold">{platform.toUpperCase()}</span>|
            <h3>{type}</h3>
          </div>
          <h2 className="font-bold text-emerald-400 text-2xl">{price}</h2>
        </div>
      </Link>
      <AddToCartBtn game={game} className={className} />
    </li>
  );
};
const AddToCartBtn = ({ game, className }) => {
  const { addToCart, isOnCart, removeFromCart, cart } = useContext(cartContext);
  const gameOnCart = isOnCart(game.uuid, cart) === -1 ? false : true;
  const [onCart, setOnCart] = useState(gameOnCart);
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(game);
    setOnCart(!onCart);
  };
  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    removeFromCart(game);
    setOnCart(!onCart);
  };
  const textContent = onCart ? "Remove from Cart" : "Add to cart";
  const callback = onCart ? handleRemoveFromCart : handleAddToCart;
  const classIfOnCart = onCart
    ? "bg-red-500 text-white hover:bg-red-600"
    : "bg-amber-400 text-black hover:bg-amber-400";

  return (
    <button
      onClick={(e) => callback(e)}
      className={`${className} ${classIfOnCart} add-to-cart-btn`}
    >
      {textContent}
    </button>
  );
};

export default GameCard;
