"use client";
import { useGameContext, GameContext, Player } from '../../utils/playerContext.tsx';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Datalist from "./datalist.tsx"
import countries from "../../utils/third-world.ts"

export default function Page() {
	const { gameContext, setGameContext }: GameContext = useGameContext();

	const [newPlayerName, setNewPlayerName] = useState("");

	const [players, setPlayers] = useState<Player[]>([]);
	const alreadySelectedCountries = players.map((player) => { return player.name; });

	const addPlayer = () => {
		const newPlayers = gameContext.players;
		newPlayers.push({ name: newPlayerName, id: newPlayers.length, score: 0 });
		setGameContext({ ...gameContext, players: newPlayers });

		setNewPlayerName("");
	}

	useEffect(() => {
		setPlayers(gameContext.players);
	}, [gameContext.players]);

	if (!gameContext.players) {
		return <p>Loading...</p>
	}
	return (
		<div className="flex flex-col justify-center items-center w-screen text-center">
			<h1 className="text-5xl font-bold">Choisissez votre pays du tiers-monde</h1>
				<div className="flex flex-col rounded-xl border-2 border-slate-200 p-4 m-3">
					{
						players.map((player: any, index: number) => {
							return (
								<div key={index} className="flex flex-row items-center">
									<label htmlFor="name" className="m-2">{`Joueur ${index + 1}:`}</label>
									<Datalist onChange={(e: any) => {
										const newPlayers = gameContext.players;
										newPlayers[index].name = e.target.value;
										setGameContext({ ...gameContext, players: newPlayers });
									}} alreadySelectedCountries={alreadySelectedCountries} selected={player.name} />
									<input type="button" name="remove" value="Enlever" className="m-2 cursor-pointer text-red-500" onClick={() => {
										const newPlayers = gameContext.players;
										newPlayers.splice(index, 1);
										setGameContext({ ...gameContext, players: newPlayers });
									}} />
								</div>
							);
						})
					}
					<div className="flex flex-row items-center">
						<label htmlFor="name" className="m-2">{`Joueur ${players.length + 1}:`}</label>
						<Datalist onChange={(e: any) => {
							setNewPlayerName(e.target.value);
						}} alreadySelectedCountries={alreadySelectedCountries} selected={newPlayerName} />
						<input type="submit" name="submit" value="Ajouter" className="rounded-lg p-2 m-2 border-red-500 border-2 cursor-pointer" onClick={addPlayer} />
					</div>
					{ players.length < 2 ?
						<p className="text-red-500 m-2">Vous devez avoir au moins deux camarades pour commencer la partie</p>
						:
						<Link href="/game" className="bg-red-500 rounded-lg text-white p-4 font-medium m-2">Commencer la partie</Link>
					}
			</div>
		</div>
	);
}
