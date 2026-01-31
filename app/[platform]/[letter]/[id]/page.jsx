"use client";
import React, { useEffect, useState } from "react";

import getGames from "@/app/components/hooks/useFetchGames";
import GameCard from "@/app/components/GameCard";
import { Spinner } from "@/components/ui/spinner";
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
        <section className="my-5 max-sm:mt-120 p-4">
          <div>
            <h2 className="text-4xl my-4 font-bold">
              About Snow Games: Your Unified Gateway to the Gaming Universe
            </h2>
            <h3 className="text-2xl my-4 ">Welcome to a New Era of Gaming</h3>
            <p className="max-w-200 text-pretty text-gray-300">
              In a world where digital landscapes are more vast and captivating
              than ever, gamers find themselves navigating a fragmented
              universe. Separate launchers, multiple accounts, divergent friends
              lists, and scattered libraries—the modern gaming experience, while
              rich in content, has become unnecessarily complicated. Snow Games
              was born from a simple yet revolutionary vision: to unify the
              gaming cosmos under one seamless, intuitive, and powerful
              platform. We are more than just another digital storefront. Snow
              Games is a holistic gaming ecosystem designed for the player who
              lives across worlds—from the epic narratives on PlayStation, the
              competitive arenas on Xbox, the innovative adventures on Nintendo,
              to the boundless modding communities and indie gems on Steam. We
              believe your passion shouldn't be limited by platform walls or
              launcher logistics. Your adventure should be seamless. Your
              community should be united. Your collection should be whole. This
              is the future we are building, one game at a time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default GamePage;
