const getGames = async (platform, letter) => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const res = await fetch(`/game-store-catalog/${platform}/${letter}.json`);
  const catalog = await res.json();
  return catalog;
};
export default getGames;
