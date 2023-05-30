"use client";
import { useGameContext, GameContext } from '../../utils/playerContext.tsx';
import { useEffect, useState, useRef } from 'react';
import questions from '../../utils/questions.tsx';
import React from "react";
import Link from "next/link"

function randomFrom(array: any[]) {
	return array[Math.floor(Math.random() * array.length)];
}

function oneOutOf(number: number) {
	return Math.random() < 1/number;
}

export default function Page() {
	const { gameContext, setGameContext }: GameContext = useGameContext();

	const [currentQuestion, setCurrentQuestion] = useState<any>(null);
	const questionsRef = useRef<HTMLDivElement>(null);
	const [popup, setPopup] = useState<any>({});

	useEffect(() => {
		if (gameContext.players.length === 0) {
			return;
		}

		setCurrentQuestion(randomFrom(questions));
	}, [gameContext.players]);

	// Popup actions
	useEffect(() => {
		if (!gameContext.players[gameContext.game.currentPlayerIndex]) {
			return;
		}
		const playerName = gameContext.players[gameContext.game.currentPlayerIndex].name;
		if (oneOutOf(30)) {
			setPopup({
				title: "On vous apporte la démocratie 🇺🇸",
				description: `Les États-Unis aident ${playerName} à devenir une démocratie, en échange d'une contrepartie pécunière. Vous perdez la moitié des points.`,
				id: 1,
			})
		} else if (oneOutOf(30)) {
			setPopup({
				title: "On vous libère du capital ☭",
				description: "L'URSS décide de vous inciter fortement à rejoindre l'URSS en vous libérant du capital. Vous partagez vos points avec le joueur ayant le moins de points.",
				id: 2,
			})
		} else if (oneOutOf(30)) {
			setPopup({
				title: "Territoire contesté ⚡️",
				description: "Les États-Unis et l'URSS se disputent votre territoire. Vous perdez 2 points.",
				id: 3,
			})
		} else if (oneOutOf(30)) {
			setPopup({
				title: "Vous trouvez des matières premières !",
				description: `Des matières premières exportables sont découvertes au sein de ${playerName}. Vous gagnez 3 points.`,
				id: 4,
			})
		}
	}, [gameContext.game.currentPlayerIndex]);

	// This is to reset
	//useEffect(() => {
		//if (gameContext.game.currentPlayerID && gameContext.game.currentPlayerIndex === undefined) {
			//setGameContext({ ...gameContext, game: { currentPlayerIndex: 0 } });
		//}
	//}, [gameContext.game.currentPlayerID]);


	const answerSelected = (index: number) => {
		const correct = currentQuestion.correct === index;
		const currentPlayerIndex = gameContext.game.currentPlayerIndex;

		if (correct) {
			const successSound = new Audio("/success-sound-effect.mp3");
			// Set audio speed to 2x
			successSound.playbackRate = 2;
			successSound.play();
		} else {
			const failSound = new Audio("/error.mp3");
			failSound.play();
		}

		questionsRef.current?.childNodes.forEach((child: any, index: number) => {
			child.classList.remove("hover:border-4");
			if (index === currentQuestion.correct) {
				child.classList.remove("bg-slate-200");
				child.classList.add("text-white");
				child.classList.add("bg-red-500");
			} else {
				child.classList.add("opacity-20");
			}
		});
		window.setTimeout(() => {
			questionsRef.current?.childNodes.forEach((child: any, index: number) => {
				child.classList.add("hover:border-4");
				child.classList.add("bg-slate-200");
				child.classList.remove("text-white");
				child.classList.remove("bg-red-500");
				child.classList.remove("opacity-20");
			});
			if (gameContext.players[currentPlayerIndex].score >= 10) {
				alert(`${gameContext.players[currentPlayerIndex].name} a gagné !`);
				return;
			}

			const nextPlayerIndex = (currentPlayerIndex + 1) % gameContext.players.length;
			setGameContext({ ...gameContext, game: { currentPlayerIndex: nextPlayerIndex }, players: gameContext.players.map((player, index) => {
				if (index === currentPlayerIndex && correct) {
					player.score += 1;
				}
				return player;
			}) 
			});
		}, 1000);
	}
	if (gameContext.players && currentQuestion) {
	return (
		<div className="flex flex-col ">
			<div className="flex flex-row justify-between items-baseline">
				<div className="flex flex-row">
					{gameContext.players.map((player, index) => {
						return (
							<div key={index} className={`rounded-full border-red-500 border-2 p-2 m-2 inline-block w-fit text-black ${player.id === gameContext.players[gameContext.game.currentPlayerIndex].id && "bg-red-500 text-white"}`}>
								<h3>
									{player.name}: {player.score} points
								</h3>
							</div>
						)
					})
					}
				</div>
				<Link href="/players" onClick={() => {
					setGameContext({ ...gameContext, game: { currentPlayerIndex: 0 }, players: [] })
					}} className="m-2 text-sky-700">Recommencer</Link>
				<Link href="/questions" className="m-2 text-sky-700">Voir les questions</Link>
			</div>
			<div className="flex basis-full flex-col rounded-md border-2 border-red-500 m-2">
					<h2 className="font-medium text-4xl m-4 text-center">Question: {currentQuestion.question}</h2>
					<div className="grid grid-flow-row sm:grid-cols-2 h-fit" ref={questionsRef}>
						{ 
							currentQuestion.answers.map((answer: any, index: number) => {
								return (
									<button key={index} className="rounded-lg bg-slate-200 font-bold hover:border-4 hover:border-red-500 m-4 p-4 text-xl sm:text-4xl sm:h-52 transition-all" onClick={() => { answerSelected(index) }}>{answer}</button>
								);
							})

						}
					</div>
			</div>
			{ popup.title &&
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-white rounded-md p-4 flex justify-center items-center flex-col w-2/3">
						<h3 className="font-medium text-xl m-4 text-center">{gameContext.players[gameContext.game.currentPlayerIndex].name}</h3>
						<h2 className="font-medium text-4xl m-4 text-center">{popup.title}</h2>
						<p className="m-3 text-center">{popup.description}</p>
						<button className="m-3 border-2 border-slate-200 rounded-xl p-4 w-32 font-medium hover:text-slate-500 transition-all" onClick={() => { 
							const currentPlayerIndex = gameContext.game.currentPlayerIndex;
							switch (popup.id) {
								case 1:
									setGameContext({ ...gameContext, players: gameContext.players.map((player, index) => {
									if (player.id === gameContext.players[currentPlayerIndex].id) {
										player.score = Math.floor(player.score / 2);
									}
									return player;
								})
								});
									break;
								case 2:
									const playerWithLeastPoints = gameContext.players.reduce((acc, player) => {
										if (player.score < acc.score) {
											return player;
										} else {
											return acc;
										}
									}, gameContext.players[0]);
									const meanScore = (playerWithLeastPoints.score + gameContext.players[currentPlayerIndex].score) / 2

									setGameContext({ ...gameContext, players: gameContext.players.map((player, index) => {
										if (player.id === playerWithLeastPoints.id || player.id === gameContext.players[currentPlayerIndex].id) {
											player.score = meanScore;
										}
									})
									})
									case 3:
										setGameContext({ ...gameContext, players: gameContext.players.map((player, index) => {
										if (player.id === gameContext.players[currentPlayerIndex].id) {
												player.score = player.score - 2;
										}
										return player
									})
									})
									case 4:
										setGameContext({ ...gameContext, players: gameContext.players.map((player, index) => {
										if (player.id === gameContext.players[currentPlayerIndex].id) {
											player.score += 3;
										}
										return player
									})
									})
								default:
									break;
							}
							setPopup({})
						}}>OK</button>
					</div>
				</div>
			}
		</div>
	)
	} else {
		return (
			<p>Loading...</p>
		)
	}
}

