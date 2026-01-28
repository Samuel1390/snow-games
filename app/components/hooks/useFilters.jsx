import { useState } from "react";
const useFilters = (games) => {
  const [filter, setFilter] = useState({
    minPrice: 0,
    text: "",
  });
  const filteredGames = games.filter((game) => {
    //00.00 float price format
    const price = parseFloat(game.price.slice(1));
    //basic validations por the input

    const name = game.name.toLowerCase().trim();
    const { text, minPrice } = filter;
    return price >= minPrice && name.includes(text.trim());
  });
  return { filteredGames, filter, setFilter };
};
export default useFilters;
