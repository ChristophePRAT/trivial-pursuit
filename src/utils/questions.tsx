const questions = [
	// Institutions françaises et européennes
	{
		question : " Quand est instaurée la cinquième république française ?",
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
	// Guerre et paix
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
		question : "où est battu Vercingétorix par les Romains en 52 av J.-C.",
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
		question: "Qui est le créateur de la bombe nucléaire",
		answers: ["Oppenheimer", "Einstein", "Frederic Joliot", "Wernher von Braun"], correct: 0},
		{
			question: "Quand débute la guerre du Vietnam ?",
			answers: ["1950", "1959", "1955", "1962"], correct : 2},
			{
				question: "Quand fondé l’OTAN ?",
				answers: ["1945", "1950", "1918", "1949"], correct : 3},
				{
					question: "Combien de Pays sont dans l’OTAN",
					answers: ["6 pays", "40 pays", "31 pays", "48 pays"],correct : 2},
					{
						question: "Quelle pays est à l’origine de la création d’Israël ?",
						answers: ["Les Etats Unis" , "La Grande Bretagne" , "La France", "La Palestine"], correct : 1},
						{
							question: "En quelle année à lieu l’embargo sur le pétrole syrien",
							answers: ["2010", "2012", "2011", "2009"], correct : 2},
							// Les représentants politiques
							{
								question : "Qui a créé la IIIème république française ?",
								answers : [
									"Adolphe Thiers",
									"Donald Trump",
									"Barrack Obama",
									"Jules Grévy"
								],
								correct: 0
							},
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

							{ question : "Qui est actuellement le Président de la République française ?", answers : [ " François Hollande", "Emmanuel Macron" , "Nicolas Sarkozy" ], correct : 1},
							{ question : "Qui est le Premier Ministre de la France en 2023 ?", answers : [ "Jean Castex", "Édouard Philippe" , "Élisabeth Borne", "François Fillon" ], correct : 2 },
							{ question : "Qui est le Président de l'Assemblée nationale en France ?", answers : [ "Claude Bartolone", "Yaël Braun-Pivet" , "Laurent Fabius", "Bernard Accoyer" ], correct : 1},
							{ question : "Qui est le Président du Sénat en France ?", answers : [ "Gérard Larcher", "Jean-Pierre Bel" , "François de Rugy", "Philippe Bas" ], correct : 0 },
							{ question : "Qui est actuellement le Ministre de l'Intérieur en France ?", answers : [ "Jean-Yves Le Drian", "Florence Parly" , "Gérald Darmanin", "Éric Dupond-Moretti" ], correct : 2},
							{ question : "Qui est le Ministre de l'Économie, des Finances et de la Relance en France ?", answers : [ "Bruno Le Maire", "Jean-Yves Le Drian" , "Olivier Véran", "Jean-Michel Blanquer" ], correct : 0},  
							{ question : "Qui est le Garde des Sceaux, Ministre de la Justice en France ?", answers : [ "Nicole Belloubet", "Éric Dupond-Moretti" , "Roselyne Bachelot", "Barbara Pompili" ], correct :1 },  
							{ question : "Qui est le Ministre de l'Éducation nationale, de la Jeunesse et des Sports en France ?", answers : [ "Frédérique Vidal", "Jean-Michel Blanquer" , "Pap Ndiaye", "Nadine Morano" ], correct : 2},  
							{ question : "Qui est le Ministre des Affaires Étrangères en France ?", answers : [ "Catherine Colonna", "Élisabeth Borne" , "Bruno Le Maire", "Franck Riester" ], correct : 0 },  
							{ question : "Qui est le Ministre de la Transition Écologique en France ?", answers : [ "Barbara Pompili", "Élisabeth Borne" , "Agnès Pannier-Runacher", "Jean-Baptiste Djebbari" ], correct : 2},  
							{ question : "Qui est le Ministre de la Culture en France ?", answers : [ "Roselyne Bachelot", "Franck Riester" , "Jean-Michel Blanquer", "Rima Abdul-Malak" ], correct : 3},  
							{ question : "Qui est le Ministre de la Santé et des Solidarités en France ?", answers : [ "Jean-Christophe Combe", "Olivier Véran" , "Bruno Le Maire", "Jean-Yves Le Drian" ], correct : 0},  
							{ question : "Qui est le Ministre de l'Agriculture et de l'Alimentation en France ?", answers : [ "Julien Denormandie", "Marc Fesneau" , "Jean-Michel Blanquer", "Éric Dupond-Moretti" ], correct : 1},  

							// Les libertés
							{ question : "Quelle liberté garantit le droit de chaque individu à exprimer ses opinions librement ?", answers : [ "Liberté d'expression", "Liberté de religion" , "Liberté de circulation", " Liberté d'association" ], correct :0 },
							{ question : "Quelle liberté protège le droit de chaque individu à pratiquer la religion de son choix ?", answers : [ "Liberté de réunion", "Liberté de la presse" , "Liberté de culte", " Liberté de pensée" ], correct : 3},
							{ question : "Quelle liberté garantit le droit de chaque individu à la vie privée et à la protection de ses données personnelles ?", answers : [ "Liberté de conscience", "Liberté individuelle" , "Liberté de propriété", " Liberté de circulation" ], correct :1 },
							{ question : "Quelle liberté assure le droit de chaque individu à se déplacer et à choisir sa résidence ?", answers : [ "Liberté de circulation", "Liberté d'expression" , "Liberté syndicale", " Liberté de la presse" ], correct : 0},
							{ question : "Quelle liberté protège le droit de chaque individu à participer à des activités politiques et à former des associations ?", answers : [ "Liberté de réunion", "Liberté syndicale" , "Liberté d'association", " Liberté de pensée" ], correct :2 },
							{ question : "Quelle liberté garantit le droit de chaque individu à l'accès à l'information et à la liberté des médias ?", answers : [ "Liberté de la presse", "Liberté d'expression" , "Liberté de conscience", "Liberté de culte " ], correct : 0},
							{ question : "Quelle liberté protège le droit de chaque individu à être protégé contre la torture et les traitements inhumains ?", answers : [ "Liberté de circulation", "Liberté individuelle" , "Liberté de propriété", "Liberté de conscience " ], correct : 1},
							{ question : "Quelle liberté assure le droit de chaque individu à un procès équitable et à la présomption d'innocence ?", answers : [ "Liberté d'expression", "Liberté de la presse" , "Liberté syndicale", " Liberté individuelle" ], correct : 3},
							{ question : "Quelle liberté garantit le droit de chaque individu à la propriété et à la jouissance de ses biens ?", answers : [ "Liberté de circulation", "Liberté individuelle" , "Liberté de propriété", " Liberté de pensée" ], correct :2 },
							{ question : "Quelle liberté protège le droit de chaque individu à pratiquer la profession de son choix ?", answers : [ "Liberté d'expression", "Liberté de réunion" , "Liberté syndicale", "Liberté économique " ], correct : 3},
							{ question : "Quel est le pays où les libertés y sont les plus respectées ?", answers : [ "la Norvège", "la Suède" , "les États-Unis", " La France" ], correct : 0},
							{ question : "Quel est le classement mondial actuel de la France dans le respect des libertés fondamentales de l’Homme ?", answers : [ "5ème", "12ème" , "34ème", " 23ème" ], correct : 3},
							{ question : "Quelle est la liberté la moins respectée dans le monde démocratique ?", answers : [ "la liberté de presse", "la liberté d’expression" , "la liberté de culte", " la liberté de grèves" ], correct : 1},
							{ question : "Quel est le pays démocratique où les libertés fondamentales sont le moins respectée ?", answers : [ "Afghanistan", "République démocratique du Congo" , "Corée du Nord", "Chine " ], correct : 0},
							{ question : "Quelle est la région du monde où les libertés sont le plus respectées ?", answers : [ "Europe Occidentale", "Europe Orientale" , "Afrique Subsaharienne", " Amérique du Nord" ], correct : 3},
							{ question : "Quelle est la région du monde où les libertés fondamentales sont le moins respectées ?", answers : [ "Afrique Subsaharienne", "Moyen-Orient et Afrique du Nord" , "Asie", "Océanie " ], correct : 1},

							// Les valeurs
							{ question : "Quelle valeur est inscrite dans la devise de la République française?", answers : [ "Solidarité", "Solidarité" , "Égalité", " Tolérance" ], correct : 2},
							{ question : "Quel pays est souvent considéré comme la plus ancienne république du monde ?", answers : [ "France", "Grèce" , "Saint-Marin", " Royaume-Uni" ], correct : 2},
							{ question : "Quelle valeur représente le droit de vote universel dans une république démocratique ?", answers : [ "Participation", "Citoyenneté" , "Diversité", " Autonomie" ], correct : 1},
							{ question : "Quelle valeur est symbolisée par la Marianne en France ?", answers : [ "Justice", "Liberté" , "Égalité", " Solidarité" ], correct : 1},
							{ question : "Quelle valeur met l'accent sur l'unité et l'identité nationale dans une république ?", answers : [ "Fraternité", "Prospérité" , "Excellence", " Harmonie" ], correct :0 },
							{ question : "Quelle valeur est associée à la séparation des pouvoirs dans une république ?", answers : [ "Égalité", "Solidarité" , "Justice", "Tolérance " ], correct : 2},
							{ question : "Quelle valeur met l'accent sur la participation citoyenne et la prise de décision collective ?", answers : [ "Démocratie", "Liberté" , "Prospérité", "Excellence " ], correct : 0},
							{ question : "Quelle valeur met l'accent sur la protection des droits individuels et des libertés fondamentales dans une république ?", answers : [ "Égalité", "Solidarité" , "Liberté", "Tolérance " ], correct : 2},
							{ question : "Quelle valeur de la République française met l'accent sur la séparation de l'Église et de l'État ?", answers : [ "Égalité", "Fraternité" , "Laïcité", "Solidarité " ], correct : 2},
							{ question : "Quelle est la valeur prédominante dans la république américaine ?", answers : [ "L’économie", "L’indépendance et l’autonomie" , "l’égalité"], correct : 1},
							{ question : "Parmi ces 4 valeurs, laquelle n’apparait pas dans la devise allemande ?", answers : [ "Unité", "Égalité" , "Droit", "Liberté " ], correct : 1},
							{ question : "A qui appartient la devise suivante : L’union fait la force ?", answers : [ "L’Italie", "La France" , "La Belgique", " Le Royaume-Uni" ], correct : 2},
							{ question : "Parmi ces pays, qui ne possède pas de devise ?", answers : [ "L’Italie", "La France" , "L’Indonésie"], correct : 0},
							{ question : "Dans quelle langue est écrite la devise espagnole ?", answers : [ "en espagnol", "en anglais" , "en sénégalais", " en latin" ], correct :3 },
							{ question : "Dans quelle langue est écrite la devise anglaise ?", answers : [ "en anglais", "en américain" , "en italien", "en français " ], correct : 3},
							{ question : "Quel pays possède la même devise que les mousquetaires : un pour tous, tous pour un ?", answers : [ "la Belgique", "la Suède" , "la Suisse"], correct : 2},
							// Le pouvoir des médias / Fake News
							{
question : "Quel est le nom de la chaîne de télévision qui a été accusée d’avoir diffusé des informations erronées sur la guerre en Irak ?",
answers: ["ABC news", "Fox News", " CNN" , "MSNBC"], correct: 1},
{ 
question: "Quel est le nom du site web qui a publié des informations erronées sur les élections présidentielles américaines de 2020 ?",
answers : ["the huffington post", "the new York times", "the Washington post", "Breitbart News"], correct : 1},
{
question : "Quelle est la chaine TV la plus regardée de France ?",
answers : ["France 2", "France 3", "TF1", "France 5 "], correct : 2},
{
question :"Quel est le nom de la chaîne de télévision qui a été accusée de partialité en faveur de Donald Trump pendant les élections présidentielles américaines de 2016 ?",
answers: ["CNN", "MSNBC", "ABC News", "Fox News"], correct: 3},
{
question : "Quel est le nom du site web qui a publié des informations erronées sur les élections présidentielles américaines de 2016 ?",
answers: ["The Washington Post", "Breitbart News", "The Huffington Post", "The New York Times"], correct: 1},
{
question: "Combien de personnes (en moyenne) regardent le journal télévisé de TF1 à 20h chaque soir ?",
answers : ["2,5 millions", "10 millions", "5 millions " , "20 millions "], correct : 2},
{
question : "Quel est le média le plus influent en France ?",
answers : ["Instagram", "La télévisions", "le journal", "Facebook "], correct : 1},
{ 
question : "En quelle année le premier journal radio est-t-il diffusé ?",
answers : ["1892", "1902", "1912", "1922", "1932 "], correct : 0},
{
question : "Quel réseau social a été critiqué pour son rôle dans la diffusion de fake news ? ",
answers : ["facebook", "twitter", "instagram", "Instagram, twitter, facebook"], correct: 3},
{
question : "Quel pays a été accusé d'utiliser des \"fake news\" pour interférer dans des élections étrangères ?",
answers : ["Italie", "France", "Russie", "État-unis"], correct : 2},
{
question : "Quel pays a utilisé une intelligence artificielle pour influencer un vote de loi ? ",
answers : ["Grande bretagne", "France", "Etats Unis", "Chine "], correct : 0},
{
question : "Quel président Americain a propagé le plus de Fake news ?",
answers :["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"], correct : 1},
{
question: "Quelle est l’orientation politique de la chaine télévisé BFMTV ",
answers : ["extrême gauche", "centre", "droite", "extrême droite "], correct : 2},
{
question : "Quelle est l’orientation politique de la chaine télévisée France 2 ?",
answers : ["extreme gauche", "gauche", "centre " , "droite "], correct : 1},
{
question : "Quelle est l’orientation politique du jounal \"Le Monde \" ?",
answers : ["extreme gauche", "gauche" , "centre", "droite"], correct : 1},
{
question : "combien de chaine TV y a-t-il en France ?",
answers : ["157", "207", "307", "407 "], correct : 1},
{
question : "Quelle est le nom d’un journal contenant des images modifié ?",
answers : ["phishing", "appateur de clics", "faux papier", "deepfakes "], correct : 3},
{
question : "Comment appelle-t-on un article utilisant de faux faits ?",
answers : ["Deepfakes", "bot", "phishing", "contenu trompeur"], correct : 3},
]
export default questions
