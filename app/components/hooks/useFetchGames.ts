import { ParamValue } from "next/dist/server/request/params";
import { State } from "./types";
const getGames = async (
  platform: State["platform"] | ParamValue,
  letter: State["letter"] | ParamValue,
) => {
  await new Promise((resolve) => setTimeout(resolve, 200)); // for improve performance
  try {
    const res = await fetch(`/game-store-catalog/${platform}/${letter}.json`);
    const catalog = await res.json();
    return catalog;
  } catch (e) {
    throw new Error("Error by get Games: " + e);
  }
};
export default getGames;
