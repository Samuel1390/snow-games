"use client";

import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import {
  ShoppingCartIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { MobileSearchbar } from "./Controls";

import Searchbar from "./Controls";
import Sidebar from "./Sidebar";
import "./styles/layout.css";
import Link from "next/link";
import { LetterControl } from "./Controls";

const Header = ({ displayControls = true, linkOptions = false }) => {
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
            <button className="open-menu-btn p-2">
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
            <AdminLinks className="max-sm:hidden gap-4 xsm:flex" />
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

export default Header;
