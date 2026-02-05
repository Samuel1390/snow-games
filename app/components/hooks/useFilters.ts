import { useState } from "react";
import { Game } from "./types";
const useFilters = (games: Game[]) => {
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 200,
    text: "",
  });
  const filteredGames = games.filter((game: Game) => {
    //00.00 float price format
    const price = parseFloat(game.price.slice(1));
    //basic validations por the input

    const name = game.name.toLowerCase().trim();
    const { text, minPrice, maxPrice } = filter;
    return price >= minPrice && price <= maxPrice && name.includes(text.trim());
  });
  return { filteredGames, filter, setFilter };
};
export default useFilters;
