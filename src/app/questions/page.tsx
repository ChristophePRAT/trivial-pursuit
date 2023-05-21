import questions from '../../utils/questions.tsx';
import Link from "next/link"

function NSM(index: number) {
	switch (index) {
		case 0:
			return (<h2 className="text-2xl font-bold">Institutions françaises et européennes</h2>);
		case 17:
			return (<h2 className="text-2xl font-bold">Guerre et paix</h2>);
		case 37:
			return (<h2 className="text-2xl font-bold">Les représentants politiques</h2>);
		case 53:
			return (<h2 className="text-2xl font-bold">Les libertés</h2>);
		case 69:
			return (<h2 className="text-2xl font-bold">Les valeurs</h2>);
		case 85:
			return (<h2 className="text-2xl font-bold">Le pouvoir des médias / Fake News</h2>);
	}
}

export default function Questions() {
	return (
		<div className="m-3">
			<h1 className="text-6xl font-bold py-4">Questions & réponses</h1>
			<hr />
			<Link href="/" className="text-md text-blue-700 hover:underline">Accueil</Link>
			<div className="flex flex-col items-center">
				<ul className="w-2/3">
					{questions.map((question, questionIndex) => (
						<li key={questionIndex} className="text-md my-16 text-center">
							{NSM(questionIndex)}
							<h3 className="my-3 text-xl">{question.question}</h3>
							<div className="flex justify-around">
								{question.answers.map((answer, index) => (
									<span key={index} className={`${index == question.correct && "text-green-500"}`}>{answer}</span>
								))}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
