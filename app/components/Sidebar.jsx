"use client";
import React, { useState } from "react";
import "@/app/components/styles/layout.css";
import { useContext } from "react";
import { XboxIcon, PsnIcon, NintendoIcon, SteamIcon } from "./Icons";
import FilterContext from "./context/filterContext";
import Link from "next/link";
import { FilterControls } from "./Controls";
import { AdminLinks } from "./Header";
export const options = [
  { platform: "ps4", icon: <PsnIcon /> },
  { platform: "ps5", icon: <PsnIcon /> },
  { platform: "xbox", icon: <XboxIcon /> },
  { platform: "nintendo", icon: <NintendoIcon /> },
  { platform: "steam", icon: <SteamIcon /> },
];

const Sidebar = ({ open, linkOptions }) => {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav className="w-full">
        <h2 className="text-3xl font-bold ml-3">Snow games</h2>
        <h2 className="pl-4 text-2xl text-amber-400 my-4 border-b border-amber-400">
          Platforms
        </h2>
        <ul className="sidebar-list">
          {options.map((op, index) => {
            return linkOptions ? (
              <BtnOptionBody key={index} option={op} />
            ) : (
              <LinkOptionBody key={index} option={op} />
            );
          })}
        </ul>
        <h2 className="pl-4 text-xl text-amber-400 my-4 border-b border-amber-400">
          You don&apos;t have an acount?
        </h2>
        <AdminLinks className="flex itemns-center w-fit mx-auto my-4 text-xl gap-4" />
      </nav>
      <FilterControls />
    </aside>
  );
};
export function LinkOptionBody({ option }) {
  const { platform, setPlatform, letter, setIsLoading } =
    useContext(FilterContext);
  const handleOptiopActive = (optionPlatform) => {
    if (optionPlatform !== platform) {
      setIsLoading(true);
      setPlatform(optionPlatform);
    }
  };
  return (
    <li onClick={() => handleOptiopActive(option.platform)}>
      <Link
        className={`${option.platform === platform ? " sidebar-option-active" : ""} sidebar-option`}
        href={`/${option.platform}/${letter}`}
      >
        {option.platform.toUpperCase()}
        {option.icon || ""}
      </Link>
    </li>
  );
}
export function BtnOptionBody({ option }) {
  const { platform, setPlatform, setIsLoading } = useContext(FilterContext);
  const handleOptiopActive = (optionPlatform) => {
    if (optionPlatform !== platform) {
      setIsLoading(true);
      setPlatform(optionPlatform);
    }
  };
  return (
    <li
      className={`${option.platform === platform ? " sidebar-option-active" : ""} sidebar-option`}
      onClick={() => handleOptiopActive(option.platform)}
    >
      {option.platform.toUpperCase()}
      {option.icon || ""}
    </li>
  );
}

export default Sidebar;
