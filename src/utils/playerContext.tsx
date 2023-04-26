"use client"
import { createContext, useContext } from "react"

interface GameContext {
	gameContext: {
		game: {
			currentPlayerID: number;
			// other properties of the game object
		};
		players: Player[];
		// other properties of the game context object
	};
	setGameContext: any;
}

interface Player {
	id: number;
	name: string;
	score: number;
}

const PlayerContext = createContext({} as any)

function useGameContext<T>() {
	const context = useContext(PlayerContext)
	if (!context) {
		throw new Error("useGameContext must be used within a GameProvider")
	}
	return context
}
export { PlayerContext, useGameContext }
export type { GameContext, Player }
