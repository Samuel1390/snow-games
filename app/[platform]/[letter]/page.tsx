"use client";
import Header from "@/app/components/Header";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";
import React, { useContext } from "react";
import GamesGrid from "@/app/components/GamesGrid";
import FilterContext from "@/app/components/context/filterContext";
import { LowerCaseLetter } from "@/app/components/hooks/types";

const LETTER_REGEX = /^[a-zA-Z]$/;
const PLATFORM_REGEX = /^(ps4|ps5|xbox|nintendo|steam)$/;

const Page = () => {
  const { platform, letter } = useParams();
  const { setPlatform, setLetter } = useContext(FilterContext);
  const props = useContext(FilterContext);
  useEffect(() => {
    if (
      LETTER_REGEX.test(letter as string) &&
      PLATFORM_REGEX.test(platform as string)
    ) {
      setPlatform(platform);
      setLetter(letter as LowerCaseLetter);
    } else {
      notFound();
    }
  }, [platform, letter]);

  useEffect(() => {
    // Effect para actualizar los parametros del href
    window.history.pushState(null, "", `/${props.platform}/${props.letter}`);
    // solo se entera el lado del cliente
  }, [props.letter, props.platform]);

  return (
    <main>
      <Header linkOptions={true} />
      <GamesGrid props={props} />
    </main>
  );
};

export default Page;
