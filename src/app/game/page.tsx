"use client";
import { useGameContext, GameContext } from '../../utils/playerContext.tsx';
import { useEffect, useState } from 'react';
import questions from '../../utils/questions.tsx';
import Link from "next/link"

function randomFrom(array: any[]) {
	return array[Math.floor(Math.random() * array.length)];
}


export default function Page() {
	const { gameContext, setGameContext }: GameContext = useGameContext();
	const currentPlayerID = gameContext.game.currentPlayerID;


	const [currentQuestion, setCurrentQuestion] = useState<any>(null);

	useEffect(() => {
		setCurrentQuestion(randomFrom(questions));
	}, [gameContext.players]);

	const answerSelected = (index: number) => {
		console.log(index);
		console.log(currentQuestion.correct);

		const nextPlayerID = (currentPlayerID + 1) % gameContext.players.length;
		const correct = currentQuestion.correct === index;
		if (correct) {
			const successSound = new Audio("/success-sound-effect.mp3");
			// Set audio speed to 2x
			successSound.playbackRate = 2;
			successSound.play();
		} else {
			const failSound = new Audio("/error.mp3");
			failSound.play();
		}

		setGameContext({ ...gameContext, game: { currentPlayerID: nextPlayerID }, players: gameContext.players.map((player, index) => {
			if (index === currentPlayerID && correct) {
				player.score += 1;
			}
			return player;
		}) 
		});
	}
	if (gameContext.players && currentQuestion) {
	return (
		<div className="flex flex-col ">
			<div className="flex flex-row justify-between items-baseline">
				<div className="flex flex-row">
					{gameContext.players.map((player, index) => {
						return (
							<div key={index} className={`rounded-full border-red-500 border-2 p-2 m-2 inline-block w-fit text-black ${player.id === currentPlayerID && "bg-red-500 text-white"}`}>
								<h3>
									{player.name}: {player.score} points
								</h3>
							</div>
						)
					})
					}
				</div>
				<Link href="/players" className="m-2 text-sky-700">Recommencer</Link>
			</div>
			<div className="flex basis-full flex-col rounded-md border-2 border-red-500 m-2">
					<h2 className="font-medium text-4xl m-4 text-center">Question: {currentQuestion.question}</h2>
					<div className="grid grid-flow-row sm:grid-cols-2 h-fit">
						{ 
							currentQuestion.answers.map((answer: any, index: number) => {
								return (
									<button key={index} className="rounded-lg bg-slate-200 font-bold hover:text-white hover:bg-red-600 m-4 p-4 text-xl sm:text-4xl sm:h-52" onClick={() => { answerSelected(index) }}>{answer}</button>
								);
							})

						}
					</div>
			</div>
		</div>
	)
	} else {
		return (
			<p>Loading...</p>
		)
	}
}

