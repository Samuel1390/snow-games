"use client";
import getGames from "../hooks/useFetchGames";
import FilterContext from "./filterContext";
import { useEffect, useState } from "react";
import useFilters from "../hooks/useFilters";
import { useParams } from "next/navigation";

function FilterProvider({ children }) {
  const params = useParams();
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageRange, setPageRange] = useState({
    from: 0,
    to: 50,
  });
  const [platform, setPlatform] = useState("ps4");
  const [letter, setLetter] = useState(params.letter ?? "a");

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
  }, [platform, letter]);
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
