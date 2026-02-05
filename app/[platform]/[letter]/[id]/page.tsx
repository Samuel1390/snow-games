"use client";
import React, { useEffect, useState } from "react";
import { Game } from "@/app/components/hooks/types";

import getGames from "@/app/components/hooks/useFetchGames";
import GameCard from "@/app/components/GameCard";
import { Spinner } from "@/components/ui/spinner";
import "./page.css";

import { useParams } from "next/navigation";
import { GameInfo } from "../../../my-cart/page";
import Header, { AdminLinks } from "@/app/components/Header";

const GamePage = () => {
  const [game, setGame] = useState<Game>();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const { platform, letter, id } = params;
  useEffect(() => {
    const fetchGames = async () => {
      const games = await getGames(platform, letter);
      const specifycGame = games.filter((game: Game) => game.uuid === id);
      setGame(specifycGame[0]);
      setIsLoading(false);
    };
    fetchGames();
  }, [platform, letter, id]);

  return (
    <>
      <Header displayControls={false} />
      <main className="max-w-240 min-h-screen mx-auto items flex-col items-center flex ">
        {isLoading && (
          <div className="p-2.5 gap-4 mx-auto w-fit flex items-center justify-center my-5 rounded border border-neutral-50/50 text-neutral-50/90 bg-neutral-950/70">
            <Spinner data-icon="inline-start" />
            Loading game...
          </div>
        )}
        <section className="max-h-170 flex flex-col sm:flex-row">
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
                  liClassName="max-w-100 w-fit border border-white"
                  platform={platform as Game["platform"]}
                />
              </div>
            </div>
          )}
          <div className=" p-8 flex-col max-h-20 min-w-80 text-center flex">
            {game && (
              <GameInfo
                className="h-fit max-w-100"
                game={game}
                platform={platform as string}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default GamePage;
