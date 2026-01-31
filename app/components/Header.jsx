"use client";

import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { MobileSearchbar } from "./Controls";

import Searchbar from "./Controls";
import Sidebar from "./Sidebar";
import "./styles/layout.css";
import Link from "next/link";
import { useContext } from "react";
import FilterContext from "./context/filterContext";

const Header = ({ displayControls = true, linkOptions }) => {
  const [cartAnimation, setCartAnimation] = useState("");
  useEffect(() => {
    const handleAddToCartEvent = () => setCartAnimation("add-to-cart-event");
    const handleRemoveFromCartEvent = () =>
      setCartAnimation("remove-from-cart-event");

    window.addEventListener("add to cart", handleAddToCartEvent);
    window.addEventListener("remove from cart", handleRemoveFromCartEvent);

    return () => {
      window.removeEventListener("add to cart", handleAddToCartEvent);
      window.removeEventListener("remove from cart", handleRemoveFromCartEvent);
    };
  }, []);

  const [openNavbar, setOpenNavbar] = useState(false);
  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  return (
    <>
      <header className="header shadow-md shadow-neutral-900/50">
        <div className="header-container flex items-center w-full justify-between max-w-250 m-auto">
          <div className="flex items-center">
            <button htmlFor="open-menu-btn p-2">
              <Bars3Icon onClick={handleOpenNavbar} className="icon" />
            </button>
            <h2 className="text-3xl font-bold mx-2">SG</h2>
          </div>
          <Searchbar display={displayControls} />
          <LetterControl display={displayControls} />
          <div className="icons flex items-center gap-2.5">
            <Link
              href="/my-cart"
              className={`${cartAnimation} p-1 rounded-full`}
            >
              <ShoppingCartIcon className={`icon`} />
            </Link>
            <AdminLinks className="hidden gap-4 xsm:flex" />
          </div>
        </div>
      </header>
      <MobileSearchbar displayControls={displayControls} />
      <Sidebar open={openNavbar} linkOptions={linkOptions} />
    </>
  );
};

export function AdminLinks({ className = "" }) {
  return (
    <div className={className}>
      <Link
        href="/admin/login"
        className="group cursor-pointer flex gap-1 items-center"
      >
        <UserIcon className="icon group-hover:text-amber-400" />
        <h2 className="text-sm group-hover:text-amber-400 transition-colors">
          Log in
        </h2>
      </Link>
      <Link href="/admin/register" className="group flex gap-1 items-center">
        <UserPlusIcon className="icon group-hover:text-amber-400" />
        <h2 className="text-sm group-hover:text-amber-400 transition-colors">
          Register
        </h2>
      </Link>
    </div>
  );
}

const LetterControl = ({ display }) => {
  const { letter, setLetter } = useContext(FilterContext);
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const handleSelect = (e) => {
    setLetter(e.target.value);
  };
  return (
    <>
      <div hidden={!display} className="flex mx-4 gap-2.5">
        <label tabIndex={1} htmlFor="index" className=" ">
          Index:
        </label>
        <select
          className=" bg-slate-700 px-2.5 outline outline-emerald-50 focus:outline-2 focus:outline-amber-400 rounded"
          id="index"
          onChange={(e) => handleSelect(e)}
        >
          {alphabet.map((currentLetter) => {
            return (
              <option
                className={`p-2.5 bg-teal-950 text-neutral-50 ${letter ? "bg-emerald-800" : ""}`}
                key={currentLetter}
                value={currentLetter}
              >
                {currentLetter.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default Header;
