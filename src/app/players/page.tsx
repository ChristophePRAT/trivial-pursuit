"use client";
import { useGameContext, GameContext, Player } from '../../utils/playerContext.tsx';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Page() {
	const { gameContext, setGameContext }: GameContext = useGameContext();

	const [newPlayerName, setNewPlayerName] = useState("");

	const addPlayer = () => {
		const newPlayers = gameContext.players;
		newPlayers.push({ name: newPlayerName, id: newPlayers.length, score: 0 });
		setGameContext({ ...gameContext, players: newPlayers });
			
		setNewPlayerName("");
	}

	return (
		<div className="flex flex-col justify-center items-center w-screen text-center">
			<h1 className="text-5xl font-bold">Choix des joueurs</h1>
			<div className="flex flex-col">
				{
					gameContext.players.map((player: any, index: number) => {
						return (
							<div key={index} className="flex flex-row">
								<input type="text" placeholder={`Nom du joueur ${index + 1}`} className="text-black border-2 rounded-md outline-none focus:border-red-500 border-slate-200 p-2 m-2" name="name" id="name" value={player.name} onChange={(e) => {
									const newPlayers = gameContext.players;
									newPlayers[index].name = e.target.value;
									setGameContext({ ...gameContext, players: newPlayers });
								}} />
								<input type="button" name="remove" value="Enlever" className="m-4 cursor-pointer text-red-500" onClick={() => {
									const newPlayers = gameContext.players;
									newPlayers.splice(index, 1);
									setGameContext({ ...gameContext, players: newPlayers });
								}} />
							</div>
						);
					})
				}
				<div className="flex flex-row">
					<input type="text" placeholder={`Nom du joueur ${gameContext.players.length + 1}`} className="text-black border-2 rounded-md outline-none focus:border-red-500 border-slate-200 p-2 m-2" name="name" id="name" value={newPlayerName} onChange={(e) => {
						setNewPlayerName(e.target.value);
					}} onKeyPress={(e: any) => {
						if (e.key === "Enter") {
							addPlayer();
						}
					}} />
					<input type="submit" name="submit" value="Ajouter" className="rounded-lg p-2 m-2 border-red-500 border-2 cursor-pointer" onClick={addPlayer} />
				</div>
			</div>
			<Link href="/game" className="bg-red-500 rounded-lg text-white p-4 font-medium">Commencer la partie</Link>
		</div>
	);
}
