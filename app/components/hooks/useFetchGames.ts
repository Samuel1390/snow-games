import { ParamValue } from "next/dist/server/request/params";
import { State } from "./types";
import { notFound } from "next/navigation";
const getGames = async (
  platform: State["platform"] | ParamValue,
  letter: State["letter"] | ParamValue,
) => {
  await new Promise((resolve) => setTimeout(resolve, 200)); // for to improve performance
  try {
    const res = await fetch(`/game-store-catalog/${platform}/${letter}.json`);
    const catalog = await res.json();

    return catalog;
  } catch (e) {
    console.log(e);
    notFound();
    //window.location.reload();
  }
};
export default getGames;
