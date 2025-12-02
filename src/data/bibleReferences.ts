// Bible references and explanations for each question
// Maps question ID to reference and explanation in all languages

export interface BibleReference {
  reference: string;
  explanations: {
    it: string;
    en: string;
    es: string;
    pt: string;
    fr: string;
  };
}

const defaultReference: BibleReference = {
  reference: "Holy Bible",
  explanations: {
    it: "La Bibbia contiene la Parola di Dio e ci insegna attraverso storie, insegnamenti e profezie. Continua a studiare per approfondire la tua conoscenza!",
    en: "The Bible contains God's Word and teaches us through stories, teachings, and prophecies. Keep studying to deepen your knowledge!",
    es: "La Biblia contiene la Palabra de Dios y nos enseña a través de historias, enseñanzas y profecías. ¡Sigue estudiando para profundizar tu conocimiento!",
    pt: "A Bíblia contém a Palavra de Deus e nos ensina através de histórias, ensinamentos e profecias. Continue estudando para aprofundar seu conhecimento!",
    fr: "La Bible contient la Parole de Dieu et nous enseigne à travers des histoires, des enseignements et des prophéties. Continuez à étudier pour approfondir vos connaissances!"
  }
};

export const bibleReferences: Record<number, BibleReference> = {
  // ANTICO TESTAMENTO
  1: {
    reference: "Genesis 2:7",
    explanations: {
      it: "Dio formò l'uomo dalla polvere della terra e soffiò nelle sue narici un alito di vita, e l'uomo divenne un essere vivente. Il primo uomo fu chiamato Adamo.",
      en: "God formed man from the dust of the ground and breathed into his nostrils the breath of life, and man became a living being. The first man was called Adam.",
      es: "Dios formó al hombre del polvo de la tierra y sopló en su nariz aliento de vida, y el hombre se convirtió en un ser viviente. El primer hombre se llamó Adán.",
      pt: "Deus formou o homem do pó da terra e soprou em suas narinas o fôlego de vida, e o homem tornou-se um ser vivente. O primeiro homem foi chamado Adão.",
      fr: "Dieu forma l'homme de la poussière de la terre et souffla dans ses narines un souffle de vie, et l'homme devint un être vivant. Le premier homme s'appelait Adam."
    }
  },
  2: {
    reference: "Genesis 7:12",
    explanations: {
      it: "La pioggia cadde sulla terra per quaranta giorni e quaranta notti. Questo fu il grande diluvio che Dio mandò per purificare la terra dalla malvagità.",
      en: "Rain fell on the earth for forty days and forty nights. This was the great flood that God sent to cleanse the earth of wickedness.",
      es: "La lluvia cayó sobre la tierra durante cuarenta días y cuarenta noches. Este fue el gran diluvio que Dios envió para limpiar la tierra de la maldad.",
      pt: "A chuva caiu sobre a terra por quarenta dias e quarenta noites. Este foi o grande dilúvio que Deus enviou para limpar a terra da maldade.",
      fr: "La pluie tomba sur la terre pendant quarante jours et quarante nuits. Ce fut le grand déluge que Dieu envoya pour purifier la terre de la méchanceté."
    }
  },
  3: {
    reference: "Exodus 31:18",
    explanations: {
      it: "Quando il Signore ebbe finito di parlare con Mosè sul monte Sinai, gli diede le due tavole della Testimonianza, tavole di pietra, scritte dal dito di Dio.",
      en: "When the Lord finished speaking with Moses on Mount Sinai, he gave him the two tablets of the Testimony, stone tablets inscribed by the finger of God.",
      es: "Cuando el Señor terminó de hablar con Moisés en el monte Sinaí, le dio las dos tablas del Testimonio, tablas de piedra escritas por el dedo de Dios.",
      pt: "Quando o Senhor terminou de falar com Moisés no monte Sinai, deu-lhe as duas tábuas do Testemunho, tábuas de pedra escritas pelo dedo de Deus.",
      fr: "Lorsque l'Éternel eut achevé de parler à Moïse sur le mont Sinaï, il lui donna les deux tables du témoignage, tables de pierre écrites du doigt de Dieu."
    }
  },
  4: {
    reference: "Song of Songs 1:1",
    explanations: {
      it: "Il Cantico dei Cantici è un poema d'amore attribuito a Salomone. Celebra l'amore tra uno sposo e una sposa, ed è interpretato anche come l'amore tra Dio e il suo popolo.",
      en: "The Song of Songs is a love poem attributed to Solomon. It celebrates the love between a bridegroom and a bride, and is also interpreted as the love between God and His people.",
      es: "El Cantar de los Cantares es un poema de amor atribuido a Salomón. Celebra el amor entre un esposo y una esposa, y también se interpreta como el amor entre Dios y su pueblo.",
      pt: "O Cântico dos Cânticos é um poema de amor atribuído a Salomão. Celebra o amor entre um noivo e uma noiva, e também é interpretado como o amor entre Deus e seu povo.",
      fr: "Le Cantique des Cantiques est un poème d'amour attribué à Salomon. Il célèbre l'amour entre un époux et une épouse, et est aussi interprété comme l'amour entre Dieu et son peuple."
    }
  },
  5: {
    reference: "Genesis 37:28",
    explanations: {
      it: "Giuseppe aveva 11 fratelli (figli di Giacobbe). Per invidia, dieci di loro lo vendettero a dei mercanti che lo portarono in Egitto. Beniamino, il più giovane, non partecipò.",
      en: "Joseph had 11 brothers (sons of Jacob). Out of envy, ten of them sold him to merchants who took him to Egypt. Benjamin, the youngest, did not participate.",
      es: "José tenía 11 hermanos (hijos de Jacob). Por envidia, diez de ellos lo vendieron a unos mercaderes que lo llevaron a Egipto. Benjamín, el más joven, no participó.",
      pt: "José tinha 11 irmãos (filhos de Jacó). Por inveja, dez deles o venderam a mercadores que o levaram para o Egito. Benjamim, o mais jovem, não participou.",
      fr: "Joseph avait 11 frères (fils de Jacob). Par jalousie, dix d'entre eux le vendirent à des marchands qui l'emmenèrent en Égypte. Benjamin, le plus jeune, n'y participa pas."
    }
  },
  6: {
    reference: "Genesis 11:4-9",
    explanations: {
      it: "La Torre di Babele fu costruita nella pianura di Sennaar, in quella che sarebbe diventata Babilonia. Gli uomini volevano costruire una torre fino al cielo, ma Dio confuse le loro lingue.",
      en: "The Tower of Babel was built in the plain of Shinar, in what would become Babylon. Men wanted to build a tower reaching heaven, but God confused their languages.",
      es: "La Torre de Babel fue construida en la llanura de Sinar, en lo que se convertiría en Babilonia. Los hombres querían construir una torre hasta el cielo, pero Dios confundió sus lenguas.",
      pt: "A Torre de Babel foi construída na planície de Sinear, no que se tornaria a Babilônia. Os homens queriam construir uma torre até o céu, mas Deus confundiu suas línguas.",
      fr: "La Tour de Babel fut construite dans la plaine de Shinéar, dans ce qui deviendrait Babylone. Les hommes voulaient construire une tour jusqu'au ciel, mais Dieu confondit leurs langues."
    }
  },
  7: {
    reference: "1 Samuel 17:49-50",
    explanations: {
      it: "Il giovane Davide, con una fionda e una pietra, colpì il gigante filisteo Golia in fronte e lo abbatté. Questa vittoria dimostrò che la fede in Dio supera ogni ostacolo.",
      en: "Young David, with a sling and a stone, struck the Philistine giant Goliath in the forehead and brought him down. This victory showed that faith in God overcomes all obstacles.",
      es: "El joven David, con una honda y una piedra, golpeó al gigante filisteo Goliat en la frente y lo derribó. Esta victoria demostró que la fe en Dios supera todos los obstáculos.",
      pt: "O jovem Davi, com uma funda e uma pedra, atingiu o gigante filisteu Golias na testa e o derrubou. Esta vitória mostrou que a fé em Deus supera todos os obstáculos.",
      fr: "Le jeune David, avec une fronde et une pierre, frappa le géant philistin Goliath au front et l'abattit. Cette victoire montra que la foi en Dieu surmonte tous les obstacles."
    }
  },
  8: {
    reference: "Jonah 1:17",
    explanations: {
      it: "Giona fu inghiottito da un grande pesce dopo aver tentato di fuggire dalla chiamata di Dio. Rimase nel ventre del pesce per tre giorni e tre notti prima di essere rigettato sulla terra.",
      en: "Jonah was swallowed by a great fish after trying to flee from God's call. He remained in the fish's belly for three days and three nights before being vomited onto dry land.",
      es: "Jonás fue tragado por un gran pez después de intentar huir de la llamada de Dios. Permaneció en el vientre del pez por tres días y tres noches antes de ser vomitado en tierra seca.",
      pt: "Jonas foi engolido por um grande peixe depois de tentar fugir do chamado de Deus. Ele permaneceu no ventre do peixe por três dias e três noites antes de ser vomitado em terra seca.",
      fr: "Jonas fut avalé par un grand poisson après avoir tenté de fuir l'appel de Dieu. Il resta dans le ventre du poisson pendant trois jours et trois nuits avant d'être rejeté sur la terre ferme."
    }
  },
  9: {
    reference: "1 Kings 4:29-30",
    explanations: {
      it: "Dio diede a Salomone una saggezza e un'intelligenza straordinarie. La sua saggezza superava quella di tutti gli orientali e di tutti gli egiziani.",
      en: "God gave Solomon extraordinary wisdom and understanding. His wisdom surpassed that of all the people of the East and all the wisdom of Egypt.",
      es: "Dios le dio a Salomón una sabiduría e inteligencia extraordinarias. Su sabiduría superaba la de todos los orientales y toda la sabiduría de Egipto.",
      pt: "Deus deu a Salomão uma sabedoria e inteligência extraordinárias. Sua sabedoria superava a de todos os orientais e toda a sabedoria do Egito.",
      fr: "Dieu donna à Salomon une sagesse et une intelligence extraordinaires. Sa sagesse surpassait celle de tous les Orientaux et toute la sagesse de l'Égypte."
    }
  },
  10: {
    reference: "Exodus 7-12",
    explanations: {
      it: "Dio mandò dieci piaghe sull'Egitto per convincere il faraone a liberare gli israeliti: acqua in sangue, rane, zanzare, mosche, peste del bestiame, ulcere, grandine, locuste, tenebre, morte dei primogeniti.",
      en: "God sent ten plagues upon Egypt to convince Pharaoh to free the Israelites: water to blood, frogs, gnats, flies, livestock disease, boils, hail, locusts, darkness, death of firstborn.",
      es: "Dios envió diez plagas sobre Egipto para convencer al faraón de liberar a los israelitas: agua en sangre, ranas, mosquitos, moscas, peste del ganado, úlceras, granizo, langostas, tinieblas, muerte de los primogénitos.",
      pt: "Deus enviou dez pragas sobre o Egito para convencer o faraó a libertar os israelitas: água em sangue, rãs, piolhos, moscas, peste no gado, úlceras, granizo, gafanhotos, trevas, morte dos primogênitos.",
      fr: "Dieu envoya dix plaies sur l'Égypte pour convaincre le Pharaon de libérer les Israélites: eau en sang, grenouilles, moustiques, mouches, peste du bétail, ulcères, grêle, sauterelles, ténèbres, mort des premiers-nés."
    }
  },
  // Continue with more references...
  11: {
    reference: "Genesis 29:23-25",
    explanations: {
      it: "Giacobbe lavorò sette anni per sposare Rachele, ma Labano lo ingannò dandogli Lia come prima moglie. Così Lia divenne la prima moglie di Giacobbe.",
      en: "Jacob worked seven years to marry Rachel, but Laban deceived him by giving him Leah as his first wife. Thus Leah became Jacob's first wife.",
      es: "Jacob trabajó siete años para casarse con Raquel, pero Labán lo engañó dándole a Lea como primera esposa. Así Lea se convirtió en la primera esposa de Jacob.",
      pt: "Jacó trabalhou sete anos para se casar com Raquel, mas Labão o enganou dando-lhe Lia como primeira esposa. Assim Lia tornou-se a primeira esposa de Jacó.",
      fr: "Jacob travailla sept ans pour épouser Rachel, mais Laban le trompa en lui donnant Léa comme première femme. Ainsi Léa devint la première femme de Jacob."
    }
  },
  12: {
    reference: "Esther 1:1",
    explanations: {
      it: "Il libro di Ester racconta la storia di una giovane ebrea che divenne regina di Persia e salvò il suo popolo dallo sterminio. La festa di Purim celebra questo evento.",
      en: "The book of Esther tells the story of a young Jewish woman who became queen of Persia and saved her people from annihilation. The feast of Purim celebrates this event.",
      es: "El libro de Ester cuenta la historia de una joven judía que se convirtió en reina de Persia y salvó a su pueblo del exterminio. La fiesta de Purim celebra este evento.",
      pt: "O livro de Ester conta a história de uma jovem judia que se tornou rainha da Pérsia e salvou seu povo do extermínio. A festa de Purim celebra este evento.",
      fr: "Le livre d'Esther raconte l'histoire d'une jeune Juive qui devint reine de Perse et sauva son peuple de l'extermination. La fête de Pourim célèbre cet événement."
    }
  },
  13: {
    reference: "Ezekiel 1:4-28",
    explanations: {
      it: "Ezechiele ebbe una visione straordinaria del trono di Dio, che includeva esseri viventi, ruote con ruote e un carro di fuoco. Questa visione è nota come il 'Carro di Dio' o Merkabah.",
      en: "Ezekiel had an extraordinary vision of God's throne, which included living creatures, wheels within wheels, and a chariot of fire. This vision is known as 'God's Chariot' or Merkabah.",
      es: "Ezequiel tuvo una visión extraordinaria del trono de Dios, que incluía seres vivientes, ruedas dentro de ruedas y un carro de fuego. Esta visión se conoce como el 'Carro de Dios' o Merkabah.",
      pt: "Ezequiel teve uma visão extraordinária do trono de Deus, que incluía seres viventes, rodas dentro de rodas e um carro de fogo. Esta visão é conhecida como 'Carro de Deus' ou Merkabah.",
      fr: "Ézéchiel eut une vision extraordinaire du trône de Dieu, qui comprenait des créatures vivantes, des roues dans des roues et un char de feu. Cette vision est connue comme le 'Char de Dieu' ou Merkabah."
    }
  },
  14: {
    reference: "Genesis through Deuteronomy",
    explanations: {
      it: "Il Pentateuco comprende i primi cinque libri della Bibbia: Genesi, Esodo, Levitico, Numeri e Deuteronomio. Questi libri sono anche chiamati Torah o Legge di Mosè.",
      en: "The Pentateuch comprises the first five books of the Bible: Genesis, Exodus, Leviticus, Numbers, and Deuteronomy. These books are also called the Torah or Law of Moses.",
      es: "El Pentateuco comprende los primeros cinco libros de la Biblia: Génesis, Éxodo, Levítico, Números y Deuteronomio. Estos libros también se llaman Torá o Ley de Moisés.",
      pt: "O Pentateuco compreende os primeiros cinco livros da Bíblia: Gênesis, Êxodo, Levítico, Números e Deuteronômio. Estes livros também são chamados de Torá ou Lei de Moisés.",
      fr: "Le Pentateuque comprend les cinq premiers livres de la Bible: Genèse, Exode, Lévitique, Nombres et Deutéronome. Ces livres sont aussi appelés Torah ou Loi de Moïse."
    }
  },
  15: {
    reference: "Genesis 6:14-22",
    explanations: {
      it: "Dio comandò a Noè di costruire un'arca per salvare la sua famiglia e gli animali dal diluvio imminente. Noè obbedì fedelmente alle istruzioni divine.",
      en: "God commanded Noah to build an ark to save his family and the animals from the coming flood. Noah faithfully obeyed God's instructions.",
      es: "Dios ordenó a Noé construir un arca para salvar a su familia y a los animales del diluvio inminente. Noé obedeció fielmente las instrucciones divinas.",
      pt: "Deus ordenou a Noé que construísse uma arca para salvar sua família e os animais do dilúvio iminente. Noé obedeceu fielmente às instruções divinas.",
      fr: "Dieu ordonna à Noé de construire une arche pour sauver sa famille et les animaux du déluge à venir. Noé obéit fidèlement aux instructions divines."
    }
  },
  16: {
    reference: "Genesis 19:24-25",
    explanations: {
      it: "Sodoma e Gomorra furono distrutte con fuoco e zolfo dal cielo a causa della loro grande malvagità. Solo Lot e le sue figlie si salvarono.",
      en: "Sodom and Gomorrah were destroyed with fire and brimstone from heaven because of their great wickedness. Only Lot and his daughters were saved.",
      es: "Sodoma y Gomorra fueron destruidas con fuego y azufre del cielo debido a su gran maldad. Solo Lot y sus hijas se salvaron.",
      pt: "Sodoma e Gomorra foram destruídas com fogo e enxofre do céu por causa de sua grande maldade. Apenas Ló e suas filhas foram salvos.",
      fr: "Sodome et Gomorrhe furent détruites par le feu et le soufre du ciel à cause de leur grande méchanceté. Seuls Lot et ses filles furent sauvés."
    }
  },
  17: {
    reference: "Genesis 21:1-3",
    explanations: {
      it: "Abramo fu il padre di Isacco, nato miracolosamente quando Abramo aveva cent'anni e Sara novanta. Il nome Isacco significa 'riso' o 'egli ride'.",
      en: "Abraham was the father of Isaac, born miraculously when Abraham was one hundred years old and Sarah was ninety. The name Isaac means 'laughter' or 'he laughs'.",
      es: "Abraham fue el padre de Isaac, nacido milagrosamente cuando Abraham tenía cien años y Sara noventa. El nombre Isaac significa 'risa' o 'él ríe'.",
      pt: "Abraão foi o pai de Isaque, nascido milagrosamente quando Abraão tinha cem anos e Sara noventa. O nome Isaque significa 'riso' ou 'ele ri'.",
      fr: "Abraham fut le père d'Isaac, né miraculeusement quand Abraham avait cent ans et Sara quatre-vingt-dix. Le nom Isaac signifie 'rire' ou 'il rit'."
    }
  },
  18: {
    reference: "1 Kings 6:1",
    explanations: {
      it: "Salomone costruì il primo tempio di Gerusalemme, realizzando il desiderio di suo padre Davide. La costruzione durò sette anni e fu un capolavoro di architettura.",
      en: "Solomon built the first temple in Jerusalem, fulfilling his father David's desire. The construction took seven years and was a masterpiece of architecture.",
      es: "Salomón construyó el primer templo en Jerusalén, cumpliendo el deseo de su padre David. La construcción duró siete años y fue una obra maestra de la arquitectura.",
      pt: "Salomão construiu o primeiro templo em Jerusalém, realizando o desejo de seu pai Davi. A construção levou sete anos e foi uma obra-prima da arquitetura.",
      fr: "Salomon construisit le premier temple à Jérusalem, réalisant le désir de son père David. La construction dura sept ans et fut un chef-d'œuvre d'architecture."
    }
  },
  19: {
    reference: "Exodus 20:1-17",
    explanations: {
      it: "Sul monte Sinai, Dio diede a Mosè i Dieci Comandamenti, le leggi fondamentali che guidano il comportamento morale del popolo di Dio.",
      en: "On Mount Sinai, God gave Moses the Ten Commandments, the fundamental laws that guide the moral behavior of God's people.",
      es: "En el monte Sinaí, Dios le dio a Moisés los Diez Mandamientos, las leyes fundamentales que guían el comportamiento moral del pueblo de Dios.",
      pt: "No monte Sinai, Deus deu a Moisés os Dez Mandamentos, as leis fundamentais que guiam o comportamento moral do povo de Deus.",
      fr: "Sur le mont Sinaï, Dieu donna à Moïse les Dix Commandements, les lois fondamentales qui guident le comportement moral du peuple de Dieu."
    }
  },
  20: {
    reference: "Genesis 41:14-36",
    explanations: {
      it: "Giuseppe interpretò i sogni del faraone sui sette anni di abbondanza seguiti da sette anni di carestia. Grazie a questa interpretazione, divenne viceré d'Egitto.",
      en: "Joseph interpreted Pharaoh's dreams about seven years of abundance followed by seven years of famine. Thanks to this interpretation, he became viceroy of Egypt.",
      es: "José interpretó los sueños del faraón sobre siete años de abundancia seguidos de siete años de hambruna. Gracias a esta interpretación, se convirtió en virrey de Egipto.",
      pt: "José interpretou os sonhos do faraó sobre sete anos de abundância seguidos de sete anos de fome. Graças a esta interpretação, tornou-se vice-rei do Egito.",
      fr: "Joseph interpréta les rêves du Pharaon sur sept années d'abondance suivies de sept années de famine. Grâce à cette interprétation, il devint vice-roi d'Égypte."
    }
  },
  // NUOVO TESTAMENTO
  21: {
    reference: "Matthew 2:1",
    explanations: {
      it: "Gesù nacque a Betlemme di Giudea, ai tempi del re Erode. Questa piccola città, anche conosciuta come 'Città di Davide', fu il luogo della nascita del Messia.",
      en: "Jesus was born in Bethlehem of Judea, in the days of King Herod. This small town, also known as the 'City of David', was the birthplace of the Messiah.",
      es: "Jesús nació en Belén de Judea, en tiempos del rey Herodes. Esta pequeña ciudad, también conocida como la 'Ciudad de David', fue el lugar de nacimiento del Mesías.",
      pt: "Jesus nasceu em Belém da Judeia, nos dias do rei Herodes. Esta pequena cidade, também conhecida como 'Cidade de Davi', foi o local de nascimento do Messias.",
      fr: "Jésus naquit à Bethléem de Judée, au temps du roi Hérode. Cette petite ville, aussi connue comme la 'Cité de David', fut le lieu de naissance du Messie."
    }
  },
  22: {
    reference: "Matthew 10:2-4",
    explanations: {
      it: "Gesù scelse dodici apostoli per essere i suoi discepoli più stretti: Pietro, Andrea, Giacomo, Giovanni, Filippo, Bartolomeo, Matteo, Tommaso, Giacomo di Alfeo, Taddeo, Simone e Giuda.",
      en: "Jesus chose twelve apostles to be his closest disciples: Peter, Andrew, James, John, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon, and Judas.",
      es: "Jesús eligió a doce apóstoles para ser sus discípulos más cercanos: Pedro, Andrés, Santiago, Juan, Felipe, Bartolomé, Mateo, Tomás, Santiago hijo de Alfeo, Tadeo, Simón y Judas.",
      pt: "Jesus escolheu doze apóstolos para serem seus discípulos mais próximos: Pedro, André, Tiago, João, Filipe, Bartolomeu, Mateus, Tomé, Tiago filho de Alfeu, Tadeu, Simão e Judas.",
      fr: "Jésus choisit douze apôtres pour être ses disciples les plus proches: Pierre, André, Jacques, Jean, Philippe, Barthélemy, Matthieu, Thomas, Jacques fils d'Alphée, Thaddée, Simon et Judas."
    }
  },
  23: {
    reference: "John 11:43-44",
    explanations: {
      it: "Gesù risuscitò Lazzaro dopo quattro giorni nella tomba, dimostrando il suo potere sulla morte. Questo miracolo prefigurava la sua stessa risurrezione.",
      en: "Jesus raised Lazarus after four days in the tomb, demonstrating his power over death. This miracle foreshadowed his own resurrection.",
      es: "Jesús resucitó a Lázaro después de cuatro días en la tumba, demostrando su poder sobre la muerte. Este milagro prefiguró su propia resurrección.",
      pt: "Jesus ressuscitou Lázaro após quatro dias no túmulo, demonstrando seu poder sobre a morte. Este milagre prefigurou sua própria ressurreição.",
      fr: "Jésus ressuscita Lazare après quatre jours dans le tombeau, démontrant son pouvoir sur la mort. Ce miracle préfigurait sa propre résurrection."
    }
  },
  24: {
    reference: "Matthew 26:14-16",
    explanations: {
      it: "Giuda Iscariota tradì Gesù per trenta monete d'argento. Questo compì la profezia di Zaccaria (11:12) sul prezzo del tradimento.",
      en: "Judas Iscariot betrayed Jesus for thirty pieces of silver. This fulfilled Zechariah's prophecy (11:12) about the price of betrayal.",
      es: "Judas Iscariote traicionó a Jesús por treinta monedas de plata. Esto cumplió la profecía de Zacarías (11:12) sobre el precio de la traición.",
      pt: "Judas Iscariotes traiu Jesus por trinta moedas de prata. Isso cumpriu a profecia de Zacarias (11:12) sobre o preço da traição.",
      fr: "Judas Iscariote trahit Jésus pour trente pièces d'argent. Cela accomplit la prophétie de Zacharie (11:12) sur le prix de la trahison."
    }
  },
  25: {
    reference: "Acts 9:1-19",
    explanations: {
      it: "Saulo (poi Paolo) si convertì sulla via di Damasco quando Gesù gli apparve in una luce accecante. Da persecutore dei cristiani divenne il più grande apostolo dei Gentili.",
      en: "Saul (later Paul) converted on the road to Damascus when Jesus appeared to him in a blinding light. From persecutor of Christians, he became the greatest apostle to the Gentiles.",
      es: "Saulo (luego Pablo) se convirtió en el camino a Damasco cuando Jesús se le apareció en una luz cegadora. De perseguidor de cristianos se convirtió en el mayor apóstol de los gentiles.",
      pt: "Saulo (depois Paulo) se converteu no caminho de Damasco quando Jesus lhe apareceu em uma luz ofuscante. De perseguidor dos cristãos, tornou-se o maior apóstolo dos gentios.",
      fr: "Saul (plus tard Paul) se convertit sur le chemin de Damas lorsque Jésus lui apparut dans une lumière aveuglante. De persécuteur des chrétiens, il devint le plus grand apôtre des Gentils."
    }
  },
  // Add more as needed - I'll add representative samples for each category
  26: {
    reference: "John 3:16",
    explanations: {
      it: "Giovanni 3:16 è considerato il versetto più famoso della Bibbia, riassumendo l'intero messaggio del Vangelo: l'amore di Dio per il mondo e il dono della vita eterna attraverso Gesù.",
      en: "John 3:16 is considered the most famous verse in the Bible, summarizing the entire Gospel message: God's love for the world and the gift of eternal life through Jesus.",
      es: "Juan 3:16 es considerado el versículo más famoso de la Biblia, resumiendo todo el mensaje del Evangelio: el amor de Dios por el mundo y el don de la vida eterna a través de Jesús.",
      pt: "João 3:16 é considerado o versículo mais famoso da Bíblia, resumindo toda a mensagem do Evangelho: o amor de Deus pelo mundo e o dom da vida eterna através de Jesus.",
      fr: "Jean 3:16 est considéré comme le verset le plus célèbre de la Bible, résumant tout le message de l'Évangile: l'amour de Dieu pour le monde et le don de la vie éternelle à travers Jésus."
    }
  },
};

export const getBibleReference = (questionId: number): BibleReference => {
  return bibleReferences[questionId] || defaultReference;
};

export const getTranslatedExplanation = (questionId: number, language: string): { reference: string; explanation: string } => {
  const ref = getBibleReference(questionId);
  const lang = language as keyof typeof ref.explanations;
  return {
    reference: ref.reference,
    explanation: ref.explanations[lang] || ref.explanations.en
  };
};
