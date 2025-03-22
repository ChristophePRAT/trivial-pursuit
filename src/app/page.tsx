"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { PlayerContext } from "../utils/playerContext.tsx";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex-1 flex flex-col justify-center items-center w-screen text-center">
                <Link
                    href="/players"
                    className="bg-red-600/90 rounded-xl text-4xl p-6 m-4 text-white font-medium align-middle hover:opacity-60 hover:scale-90 shadow-xl transition-all"
                >
                    Commencer !
                </Link>
                <Link
                    href="/questions"
                    className="text-md text-blue-700 hover:underline m-4"
                >
                    Ensemble des questions
                </Link>
                <button
                    className="text-bold bg-gray-500/30 p-2 rounded-3xl hover:opacity-60 m-4"
                    onClick={() => {
                        localStorage.clear();
                    }}
                >
                    Réinitialiser (appuyer ici si problème) ⚠️
                </button>
            </div>
            <p className="font-medium text-md m-4">
                Créé par Julien Mauget, Simeon Soultanov et Christophe Prat
            </p>
        </main>
    );
}
