"use client";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import React, { useContext } from "react";
import GamesGrid from "@/app/components/GamesGrid";
import FilterContext from "@/app/components/context/filterContext";
const Page = () => {
  const { platform, letter } = useParams();
  const props = useContext(FilterContext);
  useEffect(() => {
    props.setPlatform(platform);
    props.setLetter(letter);
  }, []);
  return (
    <main>
      <Header linkOptions={true} />
      <GamesGrid props={props} />
    </main>
  );
};

export default Page;
