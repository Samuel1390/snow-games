"use client";
import React, { useEffect, useState } from "react";

import getGames from "@/app/components/hooks/useFetchGames";
import GameCard from "@/app/components/GameCard";
import "./page.css";

import { useParams } from "next/navigation";
import { GameInfo } from "../../../my-cart/page";
import Header, { AdminLinks } from "@/app/components/Header";
const GamePage = () => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const { platform, letter, id } = params;
  useEffect(() => {
    const fetchGames = async () => {
      const games = await getGames(platform, letter);
      const specifycGame = games.filter((game) => game.uuid === id);
      setGame(specifycGame[0]);
      setIsLoading(false);
    };
    fetchGames();
  }, [platform, letter, id]);

  return (
    <>
      <Header displayControls={false} />
      <main className="w-screen max-w-800 mx-auto items flex-col items-center flex justify-center">
        <section className="max-h-170 flex flex-col sm:flex-row">
          {isLoading && <h2 className="text-3xl">Loading game...</h2>}
          {game && (
            <div
              className="game-bg"
              style={{
                backgroundImage: `
              url(${game.image})
              `,
              }}
            >
              <div className="game-bg-slayer">
                <GameCard
                  game={game}
                  liClassName="w-fit border border-white"
                  platform={platform}
                />
              </div>
            </div>
          )}
          <div className=" p-8 flex-col max-h-20 min-w-80 text-center flex">
            <GameInfo
              className="h-fit"
              game={game}
              platform={platform.toUpperCase()}
            />
          </div>
        </section>
        <section className="bg-neutral-900">
          IMPORTANT: Page on development
        </section>
      </main>
    </>
  );
};

export default GamePage;
