'use client';
import { useState } from 'react'
import { PlayerContext } from '../utils/playerContext.tsx'
import useLocalStorage from '../utils/useLocalStorage.tsx'
import React from 'react'

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
