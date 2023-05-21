const questions = [
	{
		question : " Quand est instauré la cinquième république française ?",
		answers : [
			"1960",
			"1945",
			"1958",
			"1947"
		],
		correct : 2
	},
	{
		question : "Que signifie l’abréviation CRS ?",
		answers: [
			"Compagnie Régional de Secours",
			"Compagnie Républicaine de Sécurité",
			"Conseil Républicain de Sécurité",
			"Christophe Ronfle Souvent" 
		],
		correct : 1
	},
	{
		question : "Quelle est l’institution qui délivre les diplômes d’ingénieur ?",
		answers : [
			"DIGE",
			"CTI",
			"CDIE",
			"DGDI"
		],
		correct : 1
	},
	{
		question : "Qui est le président de la convention de l'avenir de l’Europe en 2005 ?", 
		answers : [  "Angela Merkel", " Jacques Chirac", "Valérie Giscard" , "José Luis Rodriguez Zapatero"] ,
		correct : 2
	},
	{
		question : "En quelle année est créée l’union européenne ?",
		answers : ["1990" , "1991", "1992", "1993"],  
		correct: 2
	},
	{
		question : "Quel président passe la présidence de 7 ans à 5 ans ?",
		answers : ["François Mitterrand", "Jacques Chirac", "Charles De Gaules", "Nicolas Sarkozy"],
		correct : 1
	},
	{
		question : "En quelle année est signé le traité de Lisbonne ?",
		answers : ["2005", "2007",  "2009", "2011" ], 
		correct : 1 
	},
	{
		question : "En quelle année est appliqué le traité de Lisbonne ?",
		answers : ["2005", "2007", "2009", "2011"], 
		correct : 2
	},
	{
		question : "Quelle institution vote le budget européen ?",
		answers : ["Le conseil européen" , "La commission européenne", "Le conseil de l’UE", "Le parlement européen"], 
		correct : 3
	},
	{
		question : "Qui a instauré l’école obligatoire ?",
		answers : ["Jules Ferry", "Napoléon 1er", "René Coty", "Charlemagne"], 
		correct : 0 
	},
	// Other topic
	{
		question : "Quel est le président français dont la présidence a duré le plus longtemps ?",
		answers : [
			"Jacques Chirac",
			"François Mitterrand" ,
			"Charles De Gaulle"
		],
		correct : 1
	},
	{
		question: " Combien de temps a duré la présidence de François Mitterrand ?",
		answers : [
			"8 ans",
			"100 ans",
			"4 ans",
			"13 ans"
		],
		correct : 3
	},
	{
		question : "Combien de temps dure la présidence du conseil européen ?",
		answers : ["6 mois", "1 an", "2 ans" , "4 ans"], 
		correct: 0
	}, 
	{ 
		question : "Quel traité instaure la communauté économique européenne (CEE) ?",
		answers : ["Traité de Versaille", "Traité de Maastricht" , "Traité de Rome", "Traité de Lisbonne"], 
		correct : 2
	}, 
	{ 
		question : "Qu’autorise l’espace Schengen ?",  
		answers : ["Le pouvoir d’achat à l’étranger", "Une monnaie commune", "La libre circulation" ], 
correct: 2
	},
	{
		question : "Quand la France devient-elle laïque ?",
		answers : ["1815", "1914", "1905", "1944"], 
correct: 2

	},
	{
		question : "Sous quelle république le suffrage universel est-il instauré ?",
		answers : ["II République", "III République", "IV République", "V République"],
		correct : 3
	},
	{ 
		question : "Quelle est la signification des couleurs bleue et rouge du drapeau français ?",
		answers : ["La paix et le sang", "L’espoir et la santé", "Couleur de la ville de Paris", "La liberté et la fraternité"], 
		correct : 2
	},
	{
		question : "Que représente la Marianne ?",
		answers : ["La justice", "Liberté, égalité, fraternité", "L’espoir", "La révolte"], 
		correct: 1
	},
	{ 
		question : "En quelle année la France perd-elle l’Alsace-Lorraine par suite de la guerre franco-prussienne ?",
		answers : ["1880", "1918", "1861", "1871"], 
		correct: 3

	},
	{
		question : "En quelle année est signé le traité de Versailles",
		answers : ["1917", "1918", "1919", "1920"], 
		correct: 2

	},
	{
		question : "où est battue Vercingétorix par les Romains en 52 av J.-C.",
		answers : ["Rome", "Lutèce", "Alésia", "Tolosa"], 
		correct:  2

	},
	{
		question : "Quelle surnom est donné aux ouvrières françaises durant la seconde guerre mondial",
		answers : ["les missionnettes", "les munitionnettes", "les riveteuse", "les héroïnes oubliées"], 
		correct: 1

	},
	{
		question : "Comment s’appelle le chef de la propagande nazie",
		answers : ["Himmler", "Eichmann", "Hitler", "Goebbels"],
		correct: 3

	},
	{
		question: "en quelle année Hitler est élue au pouvoir",
		answers : ["1931", "1932", "1933", "1934"], 
		correct: 3

	},
	{ 
		question : "quelle stratégie militaire qu’Hitler adopte-t-il au cours de la 2nd Guerre mondiale",
		answers : ["blitzkrieg", "guerre de position", "l’assiègement", "la dissuasion nucléaire"], 
		correct: 0
	},
	{
		question: "Comment se nomme l’opération militaire du débarquement de Normandie ?",
		answers: ["Opération Venus", "Opération Berlin", "Opération exporter", "Opération Overlord"], 
		correct: 3

	},
	{
		question : "Quand débute la guerre d’Algérie",
		answers : ["1954", "1953" , "1956", "1955"], 
		correct: 0
	},
	{
		question : "Que signifie FLN (partie impliquée dans la guerre d’Algérie)",
		answers : ["Front loyal nationaliste", "front de libération national", "force de libération national", "force libre neutre"], 
		correct: 1
	},
	{
		question : "Quelle pays le traité de Moscou réunifie-t-il ? (Fin du XXème siècle)",
		answers : ["L’Allemagne", "la Corée", "La Pologne", "La Hongrie"], 
		correct: 0
	},
	{
		question : "Combien de temps dure la guerre froide",
		answers: ["42 ans", "44 ans", "45 ans", "46 ans"], 
		correct: 1
	},
	{
		question : "Comment ce nomme l’empereur japonais durant la seconde guerre mondial",
		answers : ["Hirohito", "Sugiyama", "Tojo"],
		correct: 0
	},
	{
		question: "Quelle président Américain ordonne le bombardement de Hiroshima et Nagasaki",
		answers :["Eisenhower", "Truman", "Roosevelt", "Hoover"], 
		correct: 1
	},
	{
		question : "Qui a créé la IIIème république française ?",
		answers : [
			"Adolphe Thiers",
			"Donald Trump",
			"Barrack Obama",
			"Jules Grévy"
		],
		correct: 0
	}
]
export default questions
