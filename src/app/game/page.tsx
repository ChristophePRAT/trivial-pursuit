"use client";
import useLocalStorage from '../../utils/useLocalStorage.ts';
import { useEffect } from 'react';

export default function Page() {
	const [ gameContext, setGameContext ] = useLocalStorage("game", {});
	
	const currentPlayer = gameContext.players.find((player: any) => {
		player.id === gameContext.game.currentPlayerID;
	})
	useEffect(() => {
		console.log(gameContext);
	}, [gameContext])
	return (
		<div className="flex flex-col">
			<h2>Joueur {currentPlayer}</h2>

		</div>
	);
}

