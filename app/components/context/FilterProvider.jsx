"use client";
import getGames from "../hooks/useFetchGames";
import FilterContext from "./filterContext";
import { useEffect } from "react";
import useFilters from "../hooks/useFilters";
import useStates from "../hooks/useStates";

function FilterProvider({ children }) {
  const {
    setGames,
    setIsLoading,
    setLetter,
    setPageRange,
    setPlatform,
    states,
  } = useStates();
  const { games, pageRange, platform, isLoading, letter } = states;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = await getGames(platform, letter);
        setGames(games);
        console.log("Games fetched:", games.length);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, [platform, letter, setGames, setIsLoading]);
  const { filteredGames, setFilter, filter } = useFilters(games);
  return (
    <FilterContext.Provider
      value={{
        games,
        filteredGames,
        setGames,
        setFilter,
        filter,
        pageRange,
        setPageRange,
        platform,
        setPlatform,
        isLoading,
        setIsLoading,
        letter,
        setLetter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
export default FilterProvider;
