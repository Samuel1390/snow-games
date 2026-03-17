"use client";

// general Customhook
import { LowerCaseLetter } from "./types";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Game, State } from "./types";

const useStates = () => {
  const params = useParams();
  const [states, setStates] = useState<State>({
    games: [],
    isLoading: true,
    platform: "ps4",
    letter: (params.letter as LowerCaseLetter) ?? "a",
    pageRange: {
      from: 0,
      to: 50,
    },
  });

  const setGames = (gameList: Game[]) => {
    setStates((prevState: State) => {
      return { ...prevState, games: gameList };
    });
  };
  const setIsLoading = (value: boolean) => {
    setStates((prevState: State) => {
      return { ...prevState, isLoading: value };
    });
  };
  const setPageRange = (newState: { from: number; to: number }) => {
    setStates((prevState: State) => {
      return { ...prevState, pageRange: newState };
    });
  };
  const setPlatform = (newPlatform: State["platform"]) => {
    setStates((prevState: State) => {
      return { ...prevState, platform: newPlatform };
    });
  };
  const setLetter = (newLetter: LowerCaseLetter) => {
    setStates((prevState: State) => {
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
