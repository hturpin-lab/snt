// Données complètes pour l'application SNT
const sntData = {
    chapters: [
        {
            id: 1,
            title: "Informatique et numérique",
            icon: "💻",
            questions: [
                {
                    id: "1.1",
                    question: "Selon les fondements de la science informatique, quel énoncé définit précisément cette discipline ?",
                    options: [
                        "A. L'étude exclusive de la fabrication et de la maintenance des composants matériels.",
                        "B. La science du traitement automatisé de l'information par l'exécution de programmes.",
                        "C. La simple utilisation d'applications bureautiques et de navigation internet.",
                        "D. L'ensemble des techniques de communication par ondes radio et hertziennes."
                    ],
                    correctAnswer: 1,
                    correction: "L'informatique est la science du traitement automatisé de l'information par l'exécution de programmes. Elle englobe l'étude des algorithmes, des langages de programmation et des systèmes informatiques."
                },
                {
                    id: "1.2",
                    question: "Quelle figure historique de l'informatique a conçu le premier compilateur et participé à la création du langage COBOL ?",
                    options: [
                        "A. Alan Turing.",
                        "B. Claude Shannon.",
                        "C. Grace Hopper.",
                        "D. Tim Berners-Lee."
                    ],
                    correctAnswer: 2,
                    correction: "Grace Hopper (1906-1992) était une informaticienne américaine qui a conçu le premier compilateur et a joué un rôle majeur dans la création du langage COBOL."
                },
                {
                    id: "1.3",
                    question: "Parmi les types de variables élémentaires en informatique, lequel est spécifiquement utilisé pour représenter un état logique (Vrai/Faux) ?",
                    options: [
                        "A. La chaîne de caractères (string).",
                        "B. Le nombre entier (integer).",
                        "C. Le nombre flottant (float).",
                        "D. Le booléen (boolean)."
                    ],
                    correctAnswer: 3,
                    correction: "Le booléen (boolean) est un type de variable qui ne peut prendre que deux valeurs : Vrai (True) ou Faux (False). Il est fondamental en programmation pour les conditions logiques."
                },
                {
                    id: "1.4",
                    question: "En langage Python, quel est le comportement exact de l'instruction for i in range(0, 10) ?",
                    options: [
                        "A. Elle répète une action 9 fois, de 0 à 8 inclus.",
                        "B. Elle répète une action 10 fois, de 0 à 9 inclus.",
                        "C. Elle répète une action 10 fois, de 0 à 10 inclus.",
                        "D. Elle crée une boucle non bornée qui s'arrête quand i est égal à 10."
                    ],
                    correctAnswer: 1,
                    correction: "range(0, 10) génère une séquence de 10 nombres : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. La borne supérieure (10) est exclue."
                },
                {
                    id: "1.5",
                    question: "Analysez le fragment de code Python suivant : a = 2 while a < 8: a = a * 2. Quelle sera la valeur finale de la variable a ?",
                    options: [
                        "A. 4",
                        "B. 8",
                        "C. 16",
                        "D. Le programme entre dans une boucle infinie."
                    ],
                    correctAnswer: 1,
                    correction: "Initialement a=2. Première itération : 2<8 donc a=4. Deuxième itération : 4<8 donc a=8. Troisième itération : 8 n'est pas <8, la boucle s'arrête. a=8."
                },
                {
                    id: "1.6",
                    question: "Quel composant matériel est spécifiquement chargé d'exécuter les instructions des programmes stockés en mémoire ?",
                    options: [
                        "A. Le disque dur.",
                        "B. Le processeur (CPU).",
                        "C. Le périphérique d'entrée.",
                        "D. La carte réseau."
                    ],
                    correctAnswer: 1,
                    correction: "Le processeur (CPU - Central Processing Unit) est le cerveau de l'ordinateur. Il exécute les instructions des programmes en les lisant depuis la mémoire vive (RAM)."
                }
            ],
flashcard: {
    title: "Informatique et numérique",
    icon: "💻",
    items: [
        { text: "L'informatique est la science qui étudie comment les machines traitent l'information toutes seules grâce à des <span class='keyword'>programmes</span>.", emoji: "🔬" },
        { text: "<span class='keyword'>Grace Hopper</span> est une femme célèbre qui a créé le premier <span class='highlight'>compilateur</span> et aidé à inventer le langage <span class='highlight'>COBOL</span>.", emoji: "👩‍💻" },
        { text: "Le type <span class='highlight'>booléen</span> sert à dire si une chose est <span class='keyword'>Vraie</span> ou <span class='keyword'>Fausse</span>.", emoji: "✅" },
        { text: "En Python, la commande <span class='highlight'>range(0, 10)</span> permet de répéter une action exactement <span class='keyword'>10 fois</span>.", emoji: "🐍" },
        { text: "La boucle <span class='highlight'>while</span> répète des ordres tant qu'une condition reste vraie.", emoji: "🔄" },
        { text: "Le <span class='keyword'>processeur (CPU)</span> est le cerveau de l'ordinateur qui exécute les ordres stockés dans la mémoire.", emoji: "🧠" }
    ]
}
        },
        {
            id: 2,
            title: "Le réseau internet",
            icon: "🌐",
            questions: [
                {
                    id: "2.1",
                    question: "Quel est le rôle spécifique du protocole TCP lors d'un transfert de données ?",
                    options: [
                        "A. Assurer l'adressage unique de chaque machine sur le réseau.",
                        "B. Gérer le découpage en paquets et garantir la fiabilité de la transmission.",
                        "C. Traduire les noms de domaines en adresses binaires.",
                        "D. Choisir le chemin physique le plus court entre deux routeurs."
                    ],
                    correctAnswer: 1,
                    correction: "TCP (Transmission Control Protocol) assure un transport fiable des données en les découpant en paquets, en vérifiant leur bonne réception et en les réassemblant dans l'ordre."
                },
                {
                    id: "2.2",
                    question: "Dans l'architecture d'Internet, à quoi sert le système DNS (Domain Name System) ?",
                    options: [
                        "A. À sécuriser la connexion par un chiffrement de bout en bout.",
                        "B. À établir la correspondance entre une adresse symbolique et une adresse IP.",
                        "C. À augmenter le débit de la bande passante sur les câbles sous-marins.",
                        "D. À filtrer les paquets malveillants via un pare-feu (firewall)."
                    ],
                    correctAnswer: 1,
                    correction: "Le DNS est comme un annuaire téléphonique d'Internet. Il traduit les noms de domaine lisibles par les humains (ex: google.com) en adresses IP numériques compréhensibles par les machines."
                },
                {
                    id: "2.3",
                    question: "Concernant les réseaux physiques, quelle technologie offre actuellement les débits les plus élevés (supérieurs au Gbit/s) ?",
                    options: [
                        "A. La paire de cuivre (technologie ADSL).",
                        "B. Le Bluetooth 4.0.",
                        "C. La fibre optique.",
                        "D. Le câble Ethernet de catégorie inférieure."
                    ],
                    correctAnswer: 2,
                    correction: "La fibre optique utilise la lumière pour transmettre les données, ce qui permet d'atteindre des débits très élevés, bien supérieurs au Gbit/s, contrairement aux technologies cuivre."
                },
                {
                    id: "2.4",
                    question: "Sur quel principe repose le routage des informations sur Internet ?",
                    options: [
                        "A. La commutation de circuits (établissement d'une ligne dédiée).",
                        "B. La commutation de paquets (orientation décentralisée des morceaux de message).",
                        "C. Le transfert direct de fichiers sans fragmentation.",
                        "D. La diffusion globale du message à toutes les machines du réseau."
                    ],
                    correctAnswer: 1,
                    correction: "Internet utilise la commutation de paquets : les données sont divisées en petits paquets qui peuvent emprunter différents chemins pour atteindre leur destination, où ils sont réassemblés."
                },
                {
                    id: "2.5",
                    question: "Quelle est la principale différence entre une structure client-serveur et un réseau pair-à-pair (P2P) ?",
                    options: [
                        "A. Le P2P nécessite obligatoirement une connexion satellite.",
                        "B. En P2P, chaque machine peut être alternativement cliente et serveuse.",
                        "C. Le mode client-serveur est plus lent que le P2P pour le streaming.",
                        "D. Le mode client-serveur ne permet pas l'utilisation du protocole IP."
                    ],
                    correctAnswer: 1,
                    correction: "Dans un réseau P2P, chaque participant peut à la fois fournir et consommer des ressources, contrairement au modèle client-serveur où les rôles sont distincts et fixes."
                },
                {
                    id: "2.6",
                    question: "Quel réseau, considéré comme l'ancêtre d'Internet, a réalisé ses premières connexions aux États-Unis entre 1969 et 1970 ?",
                    options: [
                        "A. Cyclades.",
                        "B. Minitel.",
                        "C. ArpaNet.",
                        "D. Ethernet."
                    ],
                    correctAnswer: 2,
                    correction: "ARPANET (Advanced Research Projects Agency Network) était un réseau expérimental créé par le département de la Défense américain. Il est considéré comme le précurseur d'Internet."
                }
            ],
            flashcard: {
    title: "Le réseau internet",
    icon: "🌐",
    items: [
        { text: "L'ancêtre d'Internet s'appelait <span class='keyword'>ArpaNet</span> et a été créé vers <span class='keyword'>1970</span> aux États-Unis.", emoji: "🏛️" },
        { text: "Le protocole <span class='highlight'>TCP</span> vérifie que les messages arrivent bien en entier et sans erreurs.", emoji: "📦" },
        { text: "Le <span class='highlight'>DNS</span> transforme un nom de site (comme google.fr) en une adresse de chiffres (<span class='keyword'>adresse IP</span>).", emoji: "📕" },
        { text: "La <span class='keyword'>fibre optique</span> est le moyen le plus rapide pour envoyer des données sur Internet.", emoji: "⚡" },
        { text: "Dans le <span class='keyword'>Pair-à-pair (P2P)</span>, chaque ordinateur est à la fois client et serveur.", emoji: "🔄" },
        { text: "Internet fonctionne par <span class='keyword'>commutation de paquets</span>, ce qui veut dire que les messages sont découpés en petits morceaux pour circuler.", emoji: "✂️" }
    ]
}
        },
        {
            id: 3,
            title: "Le World Wide Web",
            icon: "🕸️",
            questions: [
                {
                    id: "3.1",
                    question: "En quelle année Tim Berners-Lee a-t-il défini les principes du Web au CERN ?",
                    options: [
                        "A. 1965.",
                        "B. 1974.",
                        "C. 1989.",
                        "D. 1995."
                    ],
                    correctAnswer: 2,
                    correction: "Tim Berners-Lee a inventé le World Wide Web en 1989 au CERN (Organisation européenne pour la recherche nucléaire) en proposant un système de gestion de l'information basé sur l'hypertexte."
                },
                {
                    id: "3.2",
                    question: "Dans l'URL https://editions-bordas.fr/snt/index.html, quelle partie correspond au domaine ?",
                    options: [
                        "A. https",
                        "B. editions-bordas.fr",
                        "C. /snt/",
                        "D. index.html"
                    ],
                    correctAnswer: 1,
                    correction: "Le nom de domaine est 'editions-bordas.fr'. Il identifie de manière unique le serveur web sur Internet. 'https' est le protocole, '/snt/' est le chemin, et 'index.html' est le fichier."
                },
                {
                    id: "3.3",
                    question: "Quelle est la fonction principale du langage CSS dans la création d'une page web ?",
                    options: [
                        "A. Définir la structure hiérarchique et le contenu du texte.",
                        "B. Gérer les requêtes entre le navigateur et le serveur de base de données.",
                        "C. Définir le style graphique (couleurs, polices, mise en forme).",
                        "D. Chiffrer les données personnelles saisies dans un formulaire."
                    ],
                    correctAnswer: 2,
                    correction: "CSS (Cascading Style Sheets) est un langage de feuilles de style qui permet de définir l'apparence visuelle des pages web : couleurs, polices, dispositions, animations, etc."
                },
                {
                    id: "3.4",
                    question: "Qu'est-ce qu'un site web dynamique par opposition à un site statique ?",
                    options: [
                        "A. Un site qui contient des images animées et des vidéos.",
                        "B. Un site dont le contenu HTML est généré par un programme côté serveur (ex: PHP).",
                        "C. Un site qui s'affiche plus rapidement sur les terminaux mobiles.",
                        "D. Un site qui n'utilise pas le protocole HTTP."
                    ],
                    correctAnswer: 1,
                    correction: "Un site dynamique génère son contenu à la volée via des programmes exécutés côté serveur (PHP, Python, etc.), souvent en fonction des interactions de l'utilisateur ou de données stockées en base."
                },
                {
                    id: "3.5",
                    question: "Sur quel critère majeur repose l'algorithme PageRank pour classer les résultats de recherche ?",
                    options: [
                        "A. Le nombre de mots-clés présents dans le titre de la page.",
                        "B. La popularité d'une page basée sur le nombre et la qualité des liens pointant vers elle.",
                        "C. La date de la dernière mise à jour du contenu.",
                        "D. La taille du fichier HTML hébergé sur le serveur."
                    ],
                    correctAnswer: 1,
                    correction: "PageRank évalue l'importance d'une page web en fonction du nombre et de la qualité des liens hypertextes qui pointent vers elle, considérant chaque lien comme un 'vote' de confiance."
                },
                {
                    id: "3.6",
                    question: "Quel dispositif technique permet à un serveur web de mémoriser les préférences d'un utilisateur ou de tracer sa navigation ?",
                    options: [
                        "A. Le protocole SMTP.",
                        "B. La balise <title>.",
                        "C. Les cookies.",
                        "D. Le cache du processeur."
                    ],
                    correctAnswer: 2,
                    correction: "Les cookies sont de petits fichiers texte stockés sur l'ordinateur de l'utilisateur par le navigateur web, permettant aux sites de mémoriser des informations entre les visites."
                }
            ],
            flashcard: {
    title: "Le World Wide Web",
    icon: "🕸️",
    items: [
        { text: "<span class='keyword'>Tim Berners-Lee</span> a inventé le Web au CERN en <span class='keyword'>1989</span>.", emoji: "🎯" },
        { text: "Le langage <span class='highlight'>CSS</span> sert à choisir les couleurs, les polices et la décoration d'une page.", emoji: "🎨" },
        { text: "Le langage <span class='highlight'>PHP</span> est utilisé pour créer des sites qui changent de contenu automatiquement.", emoji: "⚙️" },
        { text: "L'algorithme <span class='keyword'>PageRank</span> classe les sites sur Google selon leur popularité.", emoji: "📊" },
        { text: "Les <span class='keyword'>cookies</span> sont des petits fichiers qui permettent aux sites de se souvenir de vous.", emoji: "🍪" },
        { text: "Une adresse de site s'appelle une <span class='keyword'>URL</span>.", emoji: "🔗" }
    ]
}
        },
        {
            id: 4,
            title: "Les réseaux sociaux",
            icon: "👥",
            questions: [
                {
                    id: "4.1",
                    question: "Dans la modélisation d'un réseau social par un graphe, que représentent les 'arêtes' ?",
                    options: [
                        "A. Les individus ou entités sociales (nœuds).",
                        "B. Les relations non orientées (ex: amitié réciproque).",
                        "C. Le nombre total d'abonnés d'une célébrité.",
                        "D. La vitesse de propagation d'une information."
                    ],
                    correctAnswer: 1,
                    correction: "Dans un graphe social, les arêtes représentent les relations entre les individus. Une arête non orientée symbolise une relation réciproque comme l'amitié sur Facebook."
                },
                {
                    id: "4.2",
                    question: "Comment définit-on le 'centre' d'un graphe social ?",
                    options: [
                        "A. C'est le nœud qui possède le plus grand nombre d'amis.",
                        "B. C'est le nœud dont la distance maximale aux autres nœuds est la plus petite.",
                        "C. C'est la distance la plus longue entre deux nœuds quelconques du graphe.",
                        "D. C'est le nœud par lequel passent toutes les informations du réseau."
                    ],
                    correctAnswer: 1,
                    correction: "Le centre d'un graphe est le nœud qui minimise la distance maximale vers tous les autres nœuds. C'est comme trouver la personne la plus 'centrale' dans un réseau social."
                },
                {
                    id: "4.3",
                    question: "Qu'indique le concept de 'petit monde' issu de l'expérience de Milgram (1967) ?",
                    options: [
                        "A. Que les réseaux sociaux numériques isolent les individus.",
                        "B. Que la distance moyenne entre deux individus sur Terre est d'environ 6 liens.",
                        "C. Que les graphes sociaux ont un diamètre tendant vers l'infini.",
                        "D. Que chaque individu ne peut connaître que 150 personnes maximum."
                    ],
                    correctAnswer: 1,
                    correction: "L'expérience de Milgram a démontré qu'en moyenne, deux personnes quelconques dans le monde sont reliées par une chaîne d'environ six relations sociales. C'est la théorie des 'six degrés de séparation'."
                },
                {
                    id: "4.4",
                    question: "Quel est le modèle économique prédominant de la plupart des réseaux sociaux gratuits ?",
                    options: [
                        "A. La vente de licences logicielles annuelles.",
                        "B. La publicité ciblée basée sur l'exploitation des données personnelles.",
                        "C. Les subventions publiques pour l'éducation au numérique.",
                        "D. La vente de matériel de connexion (routeurs, modems)."
                    ],
                    correctAnswer: 1,
                    correction: "Les réseaux sociaux gratuits financent leurs services principalement par la publicité ciblée, en exploitant les données personnelles des utilisateurs pour proposer des annonces personnalisées."
                },
                {
                    id: "4.5",
                    question: "Quel article du Code pénal réprime spécifiquement le harcèlement commis par l'utilisation d'un support numérique ?",
                    options: [
                        "A. Article 9 du Code civil.",
                        "B. Article 222-33-2-2 du Code pénal.",
                        "C. Article 1382 du Code civil.",
                        "D. Article L. 122-4 du Code de la propriété intellectuelle."
                    ],
                    correctAnswer: 1,
                    correction: "L'article 222-33-2-2 du Code pénal français réprime le cyberharcèlement, c'est-à-dire le harcèlement moral commis par l'intermédiaire d'un support numérique ou électronique."
                },
                {
                    id: "4.6",
                    question: "Lequel de ces réseaux sociaux est apparu en 2004, marquant un tournant dans l'usage du Web ?",
                    options: [
                        "A. LinkedIn.",
                        "B. Twitter.",
                        "C. Facebook.",
                        "D. Snapchat."
                    ],
                    correctAnswer: 2,
                    correction: "Facebook a été lancé en 2004 par Mark Zuckerberg à l'Université Harvard. Il est rapidement devenu le réseau social dominant, marquant le début du Web 2.0 participatif."
                }
            ],
            flashcard: {
    title: "Les réseaux sociaux",
    icon: "👥",
    items: [
        { text: "On modélise les relations sociales avec des <span class='keyword'>graphes</span> faits de points (<span class='keyword'>nœuds</span>) et de traits (<span class='keyword'>arêtes</span>).", emoji: "📐" },
        { text: "Le <span class='keyword'>centre</span> d'un réseau est la personne qui peut atteindre tout le monde le plus vite.", emoji: "🎯" },
        { text: "Le concept du <span class='keyword'>petit monde</span> dit que nous sommes tous séparés par seulement <span class='keyword'>6 personnes</span> environ.", emoji: "🌍" },
        { text: "Les réseaux gratuits gagnent de l'argent grâce à la <span class='keyword'>publicité ciblée</span> et vos données.", emoji: "💰" },
        { text: "La loi punit le harcèlement sur Internet (<span class='highlight'>article 222-33-2-2</span>).", emoji: "⚖️" },
        { text: "Le réseau <span class='keyword'>Facebook</span> a été lancé en <span class='keyword'>2004</span>.", emoji: "📅" }
    ]
}
        },
        {
            id: 5,
            title: "Données et traitements",
            icon: "📊",
            questions: [
                {
                    id: "5.1",
                    question: "Qu'est-ce qu'une 'donnée structurée' ?",
                    options: [
                        "A. Un texte narratif long sans mise en forme particulière.",
                        "B. Une donnée organisée dans une table avec des descripteurs (colonnes) et des objets (lignes).",
                        "C. Une image compressée au format JPEG.",
                        "D. Un enregistrement sonore brut."
                    ],
                    correctAnswer: 1,
                    correction: "Les données structurées sont organisées selon un modèle prédéfini, généralement sous forme de tables avec des colonnes (descripteurs/attributs) et des lignes (enregistrements/objets)."
                },
                {
                    id: "5.2",
                    question: "Quel format de fichier texte ouvert est privilégié pour l'échange de données structurées simples ?",
                    options: [
                        "A. .MP3",
                        "B. .DOCX",
                        "C. .CSV (Comma Separated Values)",
                        "D. .EXE"
                    ],
                    correctAnswer: 2,
                    correction: "Le format CSV (Comma Separated Values) est un format ouvert simple où les données sont séparées par des virgules ou des points-virgules, facilement lisible par les humains et les machines."
                },
                {
                    id: "5.3",
                    question: "Que désigne le terme 'métadonnées' dans la gestion des fichiers ?",
                    options: [
                        "A. Des données de très grande taille nécessitant un supercalculateur.",
                        "B. Des données décrivant d'autres données (auteur, date, format, géolocalisation).",
                        "C. Des données qui ont été supprimées mais restent présentes sur le disque.",
                        "D. Le code source des programmes de traitement de texte."
                    ],
                    correctAnswer: 1,
                    correction: "Les métadonnées sont littéralement des 'données sur les données'. Elles fournissent des informations contextuelles comme l'auteur, la date de création, le format, la géolocalisation d'une photo, etc."
                },
                {
                    id: "5.4",
                    question: "Quel est le principe fondamental de l'Open Data (données ouvertes) ?",
                    options: [
                        "A. Rendre payant l'accès aux statistiques gouvernementales.",
                        "B. Mettre des données publiques à disposition de tous, de manière libre et réutilisable.",
                        "C. Autoriser le piratage des données personnelles des entreprises.",
                        "D. Supprimer les serveurs de stockage pour protéger l'environnement."
                    ],
                    correctAnswer: 1,
                    correction: "L'Open Data vise à rendre les données publiques accessibles à tous, gratuitement et dans des formats ouverts, permettant leur réutilisation pour créer de nouveaux services ou analyses."
                },
                {
                    id: "5.5",
                    question: "Quel est l'impact environnemental majeur lié à l'usage massif des centres de données (Data Centers) ?",
                    options: [
                        "A. La déforestation due à la production de papier.",
                        "B. Une consommation électrique élevée pour le fonctionnement et le refroidissement.",
                        "C. La pollution sonore des zones rurales isolées.",
                        "D. La réduction de la biodiversité marine par les ondes Wi-Fi."
                    ],
                    correctAnswer: 1,
                    correction: "Les data centers consomment énormément d'électricité, non seulement pour faire fonctionner les serveurs mais surtout pour les refroidir, contribuant significativement à l'empreinte carbone du numérique."
                },
                {
                    id: "5.6",
                    question: "Quel règlement européen, entré en vigueur en 2018, encadre la protection des données personnelles ?",
                    options: [
                        "A. Le Règlement Général sur la Protection des Données (RGPD).",
                        "B. La Loi Informatique et Libertés de 1978.",
                        "C. Le règlement de gouvernance des pages dynamiques.",
                        "D. Le traité sur la neutralité du Net."
                    ],
                    correctAnswer: 0,
                    correction: "Le RGPD (Règlement Général sur la Protection des Données) est entré en application le 25 mai 2018. Il renforce les droits des citoyens européens sur leurs données personnelles."
                }
            ],
            flashcard: {
    title: "Données et traitements",
    icon: "📊",
    items: [
        { text: "Une <span class='keyword'>donnée structurée</span> est rangée proprement dans un tableau avec des lignes et des colonnes.", emoji: "📋" },
        { text: "Le format <span class='highlight'>CSV</span> est le plus utilisé pour échanger des tableaux de données simples.", emoji: "📄" },
        { text: "Les <span class='keyword'>métadonnées</span> sont des étiquettes qui donnent des détails sur un fichier (comme l'auteur ou la date).", emoji: "🏷️" },
        { text: "L'<span class='keyword'>Open Data</span> signifie que des données publiques sont gratuites et utilisables par tous.", emoji: "🔓" },
        { text: "Le <span class='highlight'>RGPD</span> est une loi européenne de <span class='keyword'>2018</span> qui protège votre vie privée en ligne.", emoji: "🛡️" },
        { text: "Les <span class='keyword'>centres de données</span> polluent car ils consomment énormément d'électricité.", emoji: "⚡" }
    ]
}
        },
        {
            id: 6,
            title: "Cartographie et localisation",
            icon: "🗺️",
            questions: [
                {
                    id: "6.1",
                    question: "Selon le principe de la trilatération, combien de satellites au minimum sont nécessaires pour une localisation précise en 3D (latitude, longitude, altitude) et en temps ?",
                    options: [
                        "A. 1 satellite.",
                        "B. 2 satellites.",
                        "C. 4 satellites.",
                        "D. 24 satellites."
                    ],
                    correctAnswer: 2,
                    correction: "Pour déterminer une position en 3D (latitude, longitude, altitude) et synchroniser l'horloge, un récepteur GPS a besoin d'au moins 4 satellites. Trois pour la position et un pour corriger l'erreur d'horloge."
                },
                {
                    id: "6.2",
                    question: "Quel est le nom du système de géolocalisation par satellites développé par l'Union Européenne ?",
                    options: [
                        "A. GPS.",
                        "B. Glonass.",
                        "C. Galileo.",
                        "D. Beidou."
                    ],
                    correctAnswer: 2,
                    correction: "Galileo est le système de navigation par satellites développé par l'Union européenne. GPS est américain, GLONASS est russe et Beidou est chinois."
                },
                {
                    id: "6.3",
                    question: "Dans le protocole NMEA 0183, que contient principalement une 'trame' de données envoyée par un récepteur GPS ?",
                    options: [
                        "A. La photo satellite de la zone actuelle.",
                        "B. Des coordonnées géographiques (latitude, longitude) et l'heure sous forme de texte.",
                        "C. L'adresse IP de la borne Wi-Fi la plus proche.",
                        "D. Le nom des rues et les limitations de vitesse."
                    ],
                    correctAnswer: 1,
                    correction: "Le protocole NMEA 0183 définit des trames de texte standardisées contenant les informations de position (latitude, longitude), l'heure GPS, l'altitude et d'autres données de navigation."
                },
                {
                    id: "6.4",
                    question: "Sur un service comme Géoportail, que permettent les 'couches d'information' ?",
                    options: [
                        "A. De masquer la publicité sur la carte.",
                        "B. De superposer différents types de données (cadastre, relief, photos aériennes).",
                        "C. D'augmenter la vitesse de téléchargement de la carte.",
                        "D. De modifier le nom des villes en temps réel."
                    ],
                    correctAnswer: 1,
                    correction: "Les couches d'information dans un SIG (Système d'Information Géographique) permettent de superposer différentes données thématiques sur un même fond de carte : cadastre, relief, photos aériennes, réseaux, etc."
                },
                {
                    id: "6.5",
                    question: "Quel outil mathématique est utilisé par les algorithmes de calcul d'itinéraire (type Dijkstra) ?",
                    options: [
                        "A. Les statistiques de fréquentation.",
                        "B. Les graphes (où les nœuds sont les intersections et les arêtes les routes).",
                        "C. La trigonométrie sphérique uniquement.",
                        "D. Les équations du second degré."
                    ],
                    correctAnswer: 1,
                    correction: "Les algorithmes de calcul d'itinéraire comme Dijkstra utilisent la théorie des graphes. Les intersections sont représentées par des nœuds et les routes par des arêtes pondérées par la distance ou le temps."
                },
                {
                    id: "6.6",
                    question: "Quel enjeu de confidentialité est lié à l'activation permanente de la géolocalisation sur smartphone ?",
                    options: [
                        "A. L'usure prématurée de l'écran tactile.",
                        "B. Le suivi des déplacements des individus à des fins de profilage publicitaire.",
                        "C. La suppression automatique des photos personnelles.",
                        "D. L'interdiction d'accéder aux réseaux sociaux."
                    ],
                    correctAnswer: 1,
                    correction: "La géolocalisation permanente permet de tracer les déplacements des utilisateurs, ce qui peut être exploité pour créer des profils détaillés utilisés à des fins publicitaires ou de surveillance."
                }
            ],
            flashcard: {
    title: "Cartographie et localisation",
    icon: "🗺️",
    items: [
        { text: "Il existe deux grands systèmes de satellites : le <span class='keyword'>GPS</span> (américain) et <span class='keyword'>Galileo</span> (européen).", emoji: "🛰️" },
        { text: "Pour vous localiser précisément, votre téléphone doit capter au moins <span class='keyword'>4 satellites</span>.", emoji: "📡" },
        { text: "La trame <span class='highlight'>NMEA</span> est un message de texte envoyé par le GPS contenant votre position.", emoji: "📨" },
        { text: "Les cartes numériques comme <span class='keyword'>Géoportail</span> utilisent des <span class='keyword'>couches</span> pour afficher les routes, les photos ou le relief.", emoji: "🗺️" },
        { text: "Le calcul d'un itinéraire utilise les maths des <span class='keyword'>graphes</span>.", emoji: "📐" }
    ]
}
        },
        {
            id: 7,
            title: "Informatique embarquée et objets connectés",
            icon: "🤖",
            questions: [
                {
                    id: "7.1",
                    question: "Quelle est la définition d'un 'système embarqué' ?",
                    options: [
                        "A. Un ordinateur de bureau relié à une imprimante.",
                        "B. Un système informatique autonome intégré dans un objet (voiture, stimulateur cardiaque).",
                        "C. Une application web consultable sur smartphone.",
                        "D. Un serveur de stockage de données massives (Big Data)."
                    ],
                    correctAnswer: 1,
                    correction: "Un système embarqué est un système informatique dédié, intégré dans un dispositif plus large (voiture, électroménager, dispositif médical) pour en contrôler les fonctions spécifiques."
                },
                {
                    id: "7.2",
                    question: "Dans un système embarqué, quel composant est chargé de transformer une grandeur physique en donnée numérique ?",
                    options: [
                        "A. L'actionneur (moteur, LED).",
                        "B. Le capteur.",
                        "C. Le microprocesseur.",
                        "D. L'interface Homme-Machine (IHM)."
                    ],
                    correctAnswer: 1,
                    correction: "Le capteur mesure une grandeur physique (température, pression, lumière) et la convertit en signal électrique puis en donnée numérique exploitable par le système."
                },
                {
                    id: "7.3",
                    question: "Quel événement historique de 1967 a marqué l'utilisation d'un système informatique embarqué pour le guidage ?",
                    options: [
                        "A. Le lancement du premier microprocesseur Intel.",
                        "B. La mission lunaire Apollo.",
                        "C. L'invention du premier smartphone.",
                        "D. La création du réseau Cyclades."
                    ],
                    correctAnswer: 1,
                    correction: "La mission Apollo a utilisé un ordinateur de guidage embarqué révolutionnaire pour l'époque, l'Apollo Guidance Computer (AGC), qui a permis les alunissages."
                },
                {
                    id: "7.4",
                    question: "Que signifie le terme 'IHM' dans la conception d'objets connectés ?",
                    options: [
                        "A. Informatique de Haute Mémoire.",
                        "B. Interface Homme-Machine (moyen d'interaction entre l'utilisateur et l'objet).",
                        "C. Interconnexion de Machines Hybrides.",
                        "D. Instruction de Hachage Matériel."
                    ],
                    correctAnswer: 1,
                    correction: "L'IHM (Interface Homme-Machine) désigne l'ensemble des moyens par lesquels l'utilisateur interagit avec le système : écrans tactiles, boutons, reconnaissance vocale, etc."
                },
                {
                    id: "7.5",
                    question: "Quelle est la différence entre 'sûreté' et 'sécurité' pour un système critique (ex: avionique) ?",
                    options: [
                        "A. Il n'y a aucune différence, ce sont des synonymes.",
                        "B. La sûreté traite des pannes accidentelles, la sécurité traite des attaques malveillantes.",
                        "C. La sûreté concerne le prix, la sécurité concerne la vitesse.",
                        "D. La sécurité est matérielle, la sûreté est logicielle."
                    ],
                    correctAnswer: 1,
                    correction: "La sûreté (safety) vise à prévenir les défaillances accidentelles pouvant causer des dommages. La sécurité (security) protège contre les actions malveillantes intentionnelles."
                },
                {
                    id: "7.6",
                    question: "Quel est l'un des défis environnementaux majeurs lié à la multiplication des objets connectés ?",
                    options: [
                        "A. Le manque de place dans les décharges pour le plastique.",
                        "B. L'utilisation de métaux rares et la difficulté de leur recyclage.",
                        "C. La surproduction de fer et d'acier.",
                        "D. La consommation excessive de bois pour les emballages."
                    ],
                    correctAnswer: 1,
                    correction: "Les objets connectés utilisent des métaux rares (terres rares, lithium, cobalt) dont l'extraction est polluante et le recyclage complexe, posant un défi environnemental majeur."
                }
            ],
            flashcard: {
    title: "Informatique embarquée et objets connectés",
    icon: "🤖",
    items: [
        { text: "Un <span class='keyword'>système embarqué</span> est un ordinateur caché à l'intérieur d'un objet, comme une voiture.", emoji: "🚗" },
        { text: "Un <span class='keyword'>capteur</span> transforme une information physique (chaleur, lumière) en chiffre.", emoji: "🌡️" },
        { text: "Un <span class='keyword'>actionneur</span> est la partie qui bouge ou agit (un moteur ou une lumière).", emoji: "⚙️" },
        { text: "L'<span class='highlight'>IHM</span> est l'écran ou les boutons qui permettent à l'humain de parler à la machine.", emoji: "🖥️" },
        { text: "La <span class='keyword'>sûreté</span> empêche les accidents, la <span class='keyword'>sécurité</span> empêche les attaques de pirates.", emoji: "🔒" }
    ]
}
        },
        {
            id: 8,
            title: "Photographie numérique",
            icon: "📸",
            questions: [
                {
                    id: "8.1",
                    question: "Sur le capteur d'un appareil photo, que sont les 'photosites' ?",
                    options: [
                        "A. Les points colorés affichés sur l'écran LCD.",
                        "B. Les composants physiques sensibles à la lumière qui génèrent un signal électrique.",
                        "C. Les algorithmes de compression de l'image.",
                        "D. Les métadonnées enregistrées dans le fichier."
                    ],
                    correctAnswer: 1,
                    correction: "Les photosites sont les éléments photosensibles du capteur. Chaque photosite capte la lumière et génère un signal électrique proportionnel à l'intensité lumineuse reçue."
                },
                {
                    id: "8.2",
                    question: "Quelle est la distinction exacte entre 'définition' et 'résolution' d'une image ?",
                    options: [
                        "A. La définition est la qualité de l'objectif, la résolution est la taille du capteur.",
                        "B. La définition est le nombre total de pixels (ex: 12 MP), la résolution est la densité de pixels (ex: 300 PPP).",
                        "C. La définition est le poids du fichier en Mo, la résolution est le format (JPEG ou PNG).",
                        "D. Il s'agit du même concept exprimé dans des unités différentes."
                    ],
                    correctAnswer: 1,
                    correction: "La définition correspond au nombre total de pixels de l'image (ex: 4000x3000 = 12 millions de pixels). La résolution indique la densité de pixels par unité de longueur (ex: 300 pixels par pouce)."
                },
                {
                    id: "8.3",
                    question: "Dans quel standard de métadonnées trouve-t-on les informations techniques (vitesse, ouverture, modèle d'appareil) d'une photo ?",
                    options: [
                        "A. HTML.",
                        "B. EXIF (Exchangeable Image File Format).",
                        "C. CSS.",
                        "D. NMEA."
                    ],
                    correctAnswer: 1,
                    correction: "Le format EXIF (Exchangeable Image File Format) est un standard de métadonnées intégré aux fichiers image, contenant les paramètres de prise de vue et les informations sur l'appareil."
                },
                {
                    id: "8.4",
                    question: "En quelle année les physiciens Boyle et Smith ont-ils inventé le capteur CCD ?",
                    options: [
                        "A. 1826.",
                        "B. 1900.",
                        "C. 1969.",
                        "D. 2007."
                    ],
                    correctAnswer: 2,
                    correction: "Willard Boyle et George Smith ont inventé le capteur CCD (Charge-Coupled Device) en 1969 aux laboratoires Bell. Cette invention leur a valu le prix Nobel de physique en 2009."
                },
                {
                    id: "8.5",
                    question: "Comment fonctionne un algorithme de passage en niveaux de gris pour une image couleur ?",
                    options: [
                        "A. En supprimant simplement les composantes Bleue et Verte.",
                        "B. En calculant une moyenne des trois composantes (RVB) pour chaque pixel.",
                        "C. En augmentant la luminosité de tous les pixels au maximum.",
                        "D. En inversant les couleurs (négatif)."
                    ],
                    correctAnswer: 1,
                    correction: "Pour convertir une image couleur en niveaux de gris, on calcule une moyenne pondérée des trois composantes Rouge, Vert et Bleu de chaque pixel. La formule courante est : 0.299×R + 0.587×V + 0.114×B."
                },
                {
                    id: "8.6",
                    question: "Quel principe juridique impose d'obtenir l'autorisation d'une personne avant de diffuser sa photographie ?",
                    options: [
                        "A. Le droit d'auteur.",
                        "B. Le droit à l'image.",
                        "C. Le règlement général sur la propriété.",
                        "D. La neutralité du Net."
                    ],
                    correctAnswer: 1,
                    correction: "Le droit à l'image permet à toute personne de s'opposer à la diffusion de son image sans son autorisation. Il est distinct du droit d'auteur qui protège le photographe."
                }
            ],
            flashcard: {
    title: "Photographie numérique",
    icon: "📸",
    items: [
        { text: "Le capteur d'un appareil photo contient des millions de <span class='keyword'>photosites</span> sensibles à la lumière.", emoji: "💡" },
        { text: "La <span class='keyword'>définition</span> est le nombre total de points (<span class='keyword'>pixels</span>) dans une image.", emoji: "🔢" },
        { text: "Le format <span class='highlight'>EXIF</span> garde en mémoire les réglages de la photo (vitesse, modèle d'appareil).", emoji: "📋" },
        { text: "Le capteur numérique <span class='highlight'>CCD</span> a été inventé en <span class='keyword'>1969</span>.", emoji: "📅" },
        { text: "On obtient du <span class='keyword'>gris</span> en faisant la moyenne des couleurs Rouge, Vert et Bleu d'un pixel.", emoji: "🎨" },
        { text: "Le <span class='keyword'>droit à l'image</span> veut dire qu'on doit demander la permission avant de publier la photo de quelqu'un.", emoji: "⚖️" }
    ]
}
        }
    ]
};

// Solutions de référence
const solutions = {
    "1.1": 1, "1.2": 2, "1.3": 3, "1.4": 1, "1.5": 1, "1.6": 1,
    "2.1": 1, "2.2": 1, "2.3": 2, "2.4": 1, "2.5": 1, "2.6": 2,
    "3.1": 2, "3.2": 1, "3.3": 2, "3.4": 1, "3.5": 1, "3.6": 2,
    "4.1": 1, "4.2": 1, "4.3": 1, "4.4": 1, "4.5": 1, "4.6": 2,
    "5.1": 1, "5.2": 2, "5.3": 1, "5.4": 1, "5.5": 1, "5.6": 0,
    "6.1": 2, "6.2": 2, "6.3": 1, "6.4": 1, "6.5": 1, "6.6": 1,
    "7.1": 1, "7.2": 1, "7.3": 1, "7.4": 1, "7.5": 1, "7.6": 1,
    "8.1": 1, "8.2": 1, "8.3": 1, "8.4": 2, "8.5": 1, "8.6": 1
};