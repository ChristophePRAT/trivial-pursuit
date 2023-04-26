"use client";
import { useGameContext, GameContext, Player } from '../../utils/playerContext.tsx';
import { useContext } from 'react';
import { useState } from 'react';
import Link from "next/link";

export default function Page() {
	const { gameContext, setGameContext }: GameContext = useGameContext();

	const [newPlayerName, setNewPlayerName] = useState("");

	const addPlayer = () => {
		setGameContext({ ...gameContext, players: [...gameContext.players, { name: newPlayerName, score: 0 }] });
		setNewPlayerName("");
	}

	return (
		<div className="flex flex-col">
			<h1>Choix des joueurs</h1>
			{
				gameContext.players.map((player: any, index: number) => {
					return (
						<div key={index} className="flex flex-row">
								<label htmlFor="name">Nom du joueur {index + 1}</label>
								<input type="text" className="text-black" name="name" id="name" value={player.name} onChange={(e) => {
									const newPlayers = gameContext.players;
									newPlayers[index].name = e.target.value;
									setGameContext({ ...gameContext, players: newPlayers });
								}} />
							</div>
					);
				})
			}
			<div className="flex flex-row">
					<label htmlFor="name">Nom du joueur {gameContext.players.length + 1}</label>
					<input type="text" className="text-black" name="name" id="name" value={newPlayerName} onChange={(e) => {
						setNewPlayerName(e.target.value);
					}} onSubmit={addPlayer} />
				<input type="submit" name="submit" value="Ajouter" onClick={addPlayer} />
			</div>
			<Link href="/game">Commencer la partie</Link>
		</div>
	);
}
