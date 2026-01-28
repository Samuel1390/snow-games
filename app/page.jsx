"use client";
import Header from "./components/Header";
import GamesGrid from "./components/GamesGrid";
import FilterContext from "./components/context/filterContext";
import { useContext } from "react";
function Home() {
  const props = useContext(FilterContext);
  return (
    <>
      <Header />
      <GamesGrid props={props} />
    </>
  );
}
export default Home;
