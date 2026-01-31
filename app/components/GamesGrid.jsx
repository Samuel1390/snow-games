"use client";
import React from "react";
import GameCard from "./GameCard";
import { Spinner } from "@/components/ui/spinner";
const GamesGrid = ({ props }) => {
  const { filter, filteredGames, pageRange, platform, isLoading } = props;
  const { from, to } = pageRange;
  const gamesOnRange = filteredGames.slice(from, to);
  return (
    <div>
      {isLoading && (
        <div className="p-2.5 gap-4 mx-auto w-fit flex items-center justify-center my-5 rounded border border-neutral-50/50 text-neutral-50/90 bg-neutral-950/70">
          <Spinner data-icon="inline-start" />
          Loading games...
        </div>
      )}
      {gamesOnRange.length === 0 && !isLoading && (
        <div className="text-center">
          <h2 className="text-neutral-300 font-bold text-3xl m-auto my-4 w-fit">
            Games not found
          </h2>
          <p className="text-gray-400">
            Games not found with <span>"{filter.text}"</span>{" "}
          </p>
        </div>
      )}
      {gamesOnRange.length !== 0 && !isLoading && (
        <h2 className="first-letter:uppercase text-neutral-50 text-3xl m-auto my-4 w-fit">
          {platform} games
        </h2>
      )}
      <div className="p-2.5 max-xsm:grid-cols-1 max-w-240 mx-auto gap-2.5 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {!isLoading &&
          gamesOnRange.length !== 0 &&
          gamesOnRange.map((game) => {
            return <GameCard key={game.uuid} game={game} platform={platform} />;
          })}
      </div>
    </div>
  );
};

export default GamesGrid;
