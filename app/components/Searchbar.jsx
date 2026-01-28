import { useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import FilterContext from "./context/filterContext";

function Searchbar({ className = "", display = true }) {
  const { filter, setFilter } = useContext(FilterContext);
  const handleTextInput = (e) => {
    const newText = e.target.value.toLowerCase();
    setFilter((prev) => ({ ...prev, text: newText }));
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
export function MobileSearchbar({ displayControls }) {
  const { filter, setFilter } = useContext(FilterContext);
  const handleTextInput = (e) => {
    const newText = e.target.value.toLowerCase();
    setFilter((prev) => ({ ...prev, text: newText }));
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
export default Searchbar;
