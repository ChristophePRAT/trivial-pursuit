'use client';
import { useState } from 'react'
import { PlayerContext } from '../utils/playerContext.tsx'
import useLocalStorage from '../utils/useLocalStorage.tsx'
import React from 'react'

interface GameContext {
	game: {
		currentPlayerID: number
	};
	players: {
		id: number;
		name: string;
		score: number;
	}[];
}

export default function Provider({
  children,
}: {
  children: React.ReactNode
}) {
	const [gameContext, setGameContext] = useLocalStorage<any>("game", { game: { currentPlayerID: 0 }, players: [] });
	return (
		<PlayerContext.Provider value={{ gameContext, setGameContext }}>
			{children}
		</PlayerContext.Provider>
	)
}
