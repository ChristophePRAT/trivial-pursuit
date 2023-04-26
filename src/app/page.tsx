"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PlayerContext } from "../utils/playerContext.ts";
import { useState } from "react";
import Link from "next/link"
import useLocalStorage from "../utils/useLocalStorage.ts";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [gameContext, setGameContext] = useLocalStorage<any>("game", {
    game: {
      currentPlayerID: 0
    },
    players: [
      {
        name: "Joueur 1",
        id: 0,
        score: 0,
      },
    ]
  });

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/players">Choisir les joueurs</Link>
      </main>
  )
}
