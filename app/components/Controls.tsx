import { ChangeEvent, useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import FilterContext from "./context/filterContext";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { Slider } from "@/components/ui/slider";
import "./styles/slider.css";
function Searchbar({ className = "", display = true }) {
  const { filter, setFilter } = useContext(FilterContext);
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value.toLowerCase();
    setFilter({ ...filter, text: newText });
  };
  return (
    <div
      hidden={!display}
      className={`${className} rounded outline-2 outline-slate-600 mx-10 max-w-120 grow hidden sm:flex bg-slate-50`}
    >
      <label
        htmlFor="search-bar"
        className="border-r-2 border-slate-600 bg-amber-400"
      >
        <MagnifyingGlassIcon className="icon  mx-2 my-1" fill="#000" />
      </label>
      <input
        value={filter.text}
        id="search-bar"
        className="px-2 w-full outline-none focus:-outline-offset-2 focus:outline-sky-300 outline-2 py-1 text-cyan-950"
        type="text"
        placeholder="Search Game"
        onChange={(e) => handleTextInput(e)}
      />
    </div>
  );
}
export function MobileSearchbar({
  displayControls,
}: {
  displayControls: boolean;
}) {
  const { filter, setFilter } = useContext(FilterContext);
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const newText = e.target.value.toLowerCase();
      setFilter({ ...filter, text: newText });
    }
  };
  return (
    <div
      hidden={!displayControls}
      className="flex sm:hidden shadow-md shadow-neutral-900/40 bg-neutral-100 p-2"
    >
      <input
        value={filter.text}
        className="px-2 w-full outline-none focus:-outline-offset-2 focus:outline-sky-300 outline-2 py-1 text-cyan-950"
        type="text"
        placeholder="Search Game"
        onChange={(e) => handleTextInput(e)}
      />
    </div>
  );
}
export function FilterControls() {
  const { filter, setFilter } = useContext(FilterContext);
  const { minPrice, maxPrice } = filter;
  function handleInputRange(value: number[]) {
    setFilter({ ...filter, minPrice: value[0], maxPrice: value[1] });
  }
  const min = 0;
  const max = 200;
  const initialMinValue = minPrice;
  const initialMaxValue = maxPrice;
  return (
    <div className="w-full bg-sky-900 my-4 flex flex-col">
      <div className="flex items-center p-2.5 gap-4 text-xl border-b border-amber-300 text-amber-300">
        <FunnelIcon className="icon hover-none" />
        <h2>Filters</h2>
      </div>

      <div className="w-[80%] mx-auto my-4">
        <h3 className="text-amber-300 text-center m-2">
          Price range: ${minPrice} - ${maxPrice}
        </h3>
        <div className="my-6">
          <Slider
            defaultValue={[initialMinValue, initialMaxValue]}
            value={[minPrice, maxPrice]}
            onValueChange={(value) => handleInputRange(value)}
            max={max}
            min={min}
            step={1}
            className="mx-auto w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;
export const LetterControl = ({ display }: { display: boolean }) => {
  const { letter, setLetter } = useContext(FilterContext);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLetter(e.target.value);
  };
  return (
    <>
      <div hidden={!display} className="flex mx-4 gap-2.5">
        <label tabIndex={1} htmlFor="index" className=" ">
          Index:
        </label>
        <select
          className=" bg-slate-700 px-2.5 outline outline-emerald-50 focus:outline-2 focus:outline-amber-400 rounded"
          id="index"
          onChange={(e) => handleSelect(e)}
        >
          {ALPHABET.map((currentLetter) => {
            return (
              <option
                className={`p-2.5 bg-teal-950 text-neutral-50 ${letter ? "bg-emerald-800" : ""}`}
                key={currentLetter}
                value={currentLetter}
              >
                {currentLetter.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default Searchbar;
