"use client"
import { createContext, useContext } from "react"

const PlayerContext = createContext(null)
const useGameContext = () => {
	const context = useContext(PlayerContext)
	if (!context) {
		throw new Error("useGameContext must be used within a GameProvider")
	}
	return context
}
export { PlayerContext, useGameContext }
