"use client";

// general Customhook
import React from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
const useStates = () => {
  const params = useParams();
  const [states, setStates] = useState({
    games: [],
    isLoading: true,
    platform: "ps4",
    letter: params.letter ?? "a",
    pageRange: {
      from: 0,
      to: 50,
    },
  });

  const setGames = (gameList) => {
    setStates((prevState) => {
      return { ...prevState, games: gameList };
    });
  };
  const setIsLoading = (value) => {
    setStates((prevState) => {
      return { ...prevState, isLoading: value };
    });
  };
  const setPageRange = (newState) => {
    setStates((prevState) => {
      return { ...prevState, pageRange: newState };
    });
  };
  const setPlatform = (newPlatform) => {
    setStates((prevState) => {
      return { ...prevState, platform: newPlatform };
    });
  };
  const setLetter = (newLetter) => {
    setStates((prevState) => {
      return { ...prevState, letter: newLetter };
    });
  };
  return {
    setGames,
    setIsLoading,
    setLetter,
    setPageRange,
    setPlatform,
    states,
  };
};

export default useStates;
