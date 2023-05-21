"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PlayerContext } from "../utils/playerContext.tsx";
import { useState } from "react";
import Link from "next/link"
import Communism from "../../public/communism.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center content-center justify-between">
        <Image src={Communism} alt="Communism" className="w-screen h-screen absolute object-cover z-0" priority />
        <div className="flex flex-col justify-center items-center w-screen h-screen text-center z-50">
          <Link href="/players" className="bg-white/90 rounded-xl text-4xl p-8 font-medium align-middle hover:opacity-70 transition-all">Camarades, choisissez vos pays !</Link>
          <Link href="/questions" className="text-md text-blue-700 hover:underline">Ensemble des questions</Link>
          <button className="text-bold bg-white/30 p-2 rounded-3xl hover:opacity-60" onClick={() => {
            localStorage.clear()
          }}>Réinitialiser (appuyer ici si problème) ⚠️</button>
          <p className="font-medium text-xl">Créé par Julien Mauget, Simeon Soultanov et Christophe Prat grâce au soutien du peuple soviétique</p>
        </div>
      </main>
  )
}
