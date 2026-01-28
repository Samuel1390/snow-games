"use client";
import React from "react";
import GameCard from "./GameCard";
import PageRangeControl from "./PageRangeControl";

const GamesGrid = ({ props }) => {
  const { filteredGames, pageRange, platform, isLoading } = props;
  const { from, to } = pageRange;
  const gamesOnRange = filteredGames.slice(from, to);
  return (
    <>
      {isLoading && (
        <h2 className="text-3xl text-neutral-300 m-auto my-4 w-fit">
          Loading games...
        </h2>
      )}
      {gamesOnRange.length === 0 && !isLoading && (
        <h2 className="text-neutral-300 text-3xl m-auto my-4 w-fit">
          Games not found
        </h2>
      )}
      {gamesOnRange.length !== 0 && !isLoading && (
        <h2 className="first-letter:uppercase text-neutral-50 text-3xl m-auto my-4 w-fit">
          {platform} Games
        </h2>
      )}
      <div className="p-2.5 max-xsm:grid-cols-1 max-w-240 mx-auto gap-2.5 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {!isLoading &&
          gamesOnRange.length !== 0 &&
          gamesOnRange.map((game) => {
            return <GameCard key={game.uuid} game={game} platform={platform} />;
          })}
      </div>

      <PageRangeControl />
    </>
  );
};

export default GamesGrid;
