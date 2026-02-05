"use client";
import React, { ReactNode, useState } from "react";
import "@/app/components/styles/layout.css";
import { useContext } from "react";
import { XboxIcon, PsnIcon, NintendoIcon, SteamIcon } from "./Icons";
import FilterContext from "./context/filterContext";
import Link from "next/link";
import { FilterControls } from "./Controls";
import { AdminLinks } from "./Header";
import AboutDev from "./AboutDev";
export const options: Options[] = [
  { platform: "ps4", icon: <PsnIcon /> },
  { platform: "ps5", icon: <PsnIcon /> },
  { platform: "xbox", icon: <XboxIcon /> },
  { platform: "nintendo", icon: <NintendoIcon /> },
  { platform: "steam", icon: <SteamIcon /> },
];

interface Props {
  open: true | false;
  linkOptions: true | false;
}
interface Options {
  platform: string;
  icon?: ReactNode;
}

const Sidebar = ({ open, linkOptions }: Props) => {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav className="w-full">
        <h2 className="text-3xl font-bold ml-3">Snow games</h2>
        <h2 className="pl-4 text-2xl text-amber-400 my-4 border-b border-amber-400">
          Platforms
        </h2>
        <ul className="sidebar-list">
          {options.map((op: Options, index: number) => {
            return linkOptions ? (
              <BtnOptionBody key={index} option={op} />
            ) : (
              <LinkOptionBody key={"link" + index} option={op} />
            );
          })}
        </ul>
        <AboutDev />
        <h2 className="pl-4 text-xl text-amber-400 my-4 border-b border-amber-400">
          You don&apos;t have an acount?
        </h2>
        <AdminLinks className="flex itemns-center w-fit mx-auto my-4 text-xl gap-4" />
      </nav>
      <FilterControls />
    </aside>
  );
};
type OptionBodyProps = {
  option: {
    platform: string;
    icon?: React.ReactNode;
  };
};
export function LinkOptionBody({ option }: OptionBodyProps) {
  const { platform, setPlatform, letter, setIsLoading } =
    useContext(FilterContext);
  const handleOptiopActive = (optionPlatform: string) => {
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
export function BtnOptionBody({ option }: OptionBodyProps) {
  const { platform, setPlatform, setIsLoading } = useContext(FilterContext);
  const handleOptiopActive = (optionPlatform: string) => {
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
