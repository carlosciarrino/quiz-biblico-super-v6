export interface Question {
  id: number;
  question: string;
  questions?: {
    it: string;
    en: string;
    es: string;
    pt: string;
    fr: string;
  };
  options: string[];
  optionsTranslated?: {
    it: string[];
    en: string[];
    es: string[];
    pt: string[];
    fr: string[];
  };
  correctAnswer: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

export const questions: Question[] = [
  // Antico Testamento
  {
    id: 1,
    question: "Chi fu il primo uomo creato da Dio secondo la Bibbia?",
    questions: {
      it: "Chi fu il primo uomo creato da Dio secondo la Bibbia?",
      en: "Who was the first man created by God according to the Bible?",
      es: "¿Quién fue el primer hombre creado por Dios según la Biblia?",
      pt: "Quem foi o primeiro homem criado por Deus segundo a Bíblia?",
      fr: "Qui fut le premier homme créé par Dieu selon la Bible?"
    },
    options: ["Abramo", "Adamo", "Noè", "Mosè"],
    optionsTranslated: {
      it: ["Abramo", "Adamo", "Noè", "Mosè"],
      en: ["Abraham", "Adam", "Noah", "Moses"],
      es: ["Abraham", "Adán", "Noé", "Moisés"],
      pt: ["Abraão", "Adão", "Noé", "Moisés"],
      fr: ["Abraham", "Adam", "Noé", "Moïse"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "Quanti giorni e notti durò il diluvio universale?",
    questions: {
      it: "Quanti giorni e notti durò il diluvio universale?",
      en: "How many days and nights did the universal flood last?",
      es: "¿Cuántos días y noches duró el diluvio universal?",
      pt: "Quantos dias e noites durou o dilúvio universal?",
      fr: "Combien de jours et de nuits a duré le déluge universel?"
    },
    options: ["30 giorni", "40 giorni", "50 giorni", "60 giorni"],
    optionsTranslated: {
      it: ["30 giorni", "40 giorni", "50 giorni", "60 giorni"],
      en: ["30 days", "40 days", "50 days", "60 days"],
      es: ["30 días", "40 días", "50 días", "60 días"],
      pt: ["30 dias", "40 dias", "50 dias", "60 dias"],
      fr: ["30 jours", "40 jours", "50 jours", "60 jours"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "Chi ricevette le Tavole della Legge sul Monte Sinai?",
    questions: {
      it: "Chi ricevette le Tavole della Legge sul Monte Sinai?",
      en: "Who received the Tablets of the Law on Mount Sinai?",
      es: "¿Quién recibió las Tablas de la Ley en el Monte Sinaí?",
      pt: "Quem recebeu as Tábuas da Lei no Monte Sinai?",
      fr: "Qui a reçu les Tables de la Loi sur le Mont Sinaï?"
    },
    options: ["Abramo", "Davide", "Mosè", "Elia"],
    optionsTranslated: {
      it: ["Abramo", "Davide", "Mosè", "Elia"],
      en: ["Abraham", "David", "Moses", "Elijah"],
      es: ["Abraham", "David", "Moisés", "Elías"],
      pt: ["Abraão", "Davi", "Moisés", "Elias"],
      fr: ["Abraham", "David", "Moïse", "Élie"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "Quale libro dell'Antico Testamento è noto per la sua poesia d'amore?",
    questions: {
      it: "Quale libro dell'Antico Testamento è noto per la sua poesia d'amore?",
      en: "Which Old Testament book is known for its love poetry?",
      es: "¿Qué libro del Antiguo Testamento es conocido por su poesía de amor?",
      pt: "Qual livro do Antigo Testamento é conhecido por sua poesia de amor?",
      fr: "Quel livre de l'Ancien Testament est connu pour sa poésie d'amour?"
    },
    options: ["Proverbi", "Cantico dei Cantici", "Ecclesiaste", "Salmi"],
    optionsTranslated: {
      it: ["Proverbi", "Cantico dei Cantici", "Ecclesiaste", "Salmi"],
      en: ["Proverbs", "Song of Songs", "Ecclesiastes", "Psalms"],
      es: ["Proverbios", "Cantar de los Cantares", "Eclesiastés", "Salmos"],
      pt: ["Provérbios", "Cântico dos Cânticos", "Eclesiastes", "Salmos"],
      fr: ["Proverbes", "Cantique des Cantiques", "Ecclésiaste", "Psaumes"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "Chi sconfisse Golia con una fionda?",
    questions: {
      it: "Chi sconfisse Golia con una fionda?",
      en: "Who defeated Goliath with a sling?",
      es: "¿Quién derrotó a Goliat con una honda?",
      pt: "Quem derrotou Golias com uma funda?",
      fr: "Qui a vaincu Goliath avec une fronde?"
    },
    options: ["Samuele", "Saul", "Davide", "Gionata"],
    optionsTranslated: {
      it: ["Samuele", "Saul", "Davide", "Gionata"],
      en: ["Samuel", "Saul", "David", "Jonathan"],
      es: ["Samuel", "Saúl", "David", "Jonatán"],
      pt: ["Samuel", "Saul", "Davi", "Jônatas"],
      fr: ["Samuel", "Saül", "David", "Jonathan"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 6,
    question: "Quale profeta fu inghiottito da un grande pesce?",
    questions: {
      it: "Quale profeta fu inghiottito da un grande pesce?",
      en: "Which prophet was swallowed by a great fish?",
      es: "¿Qué profeta fue tragado por un gran pez?",
      pt: "Qual profeta foi engolido por um grande peixe?",
      fr: "Quel prophète a été avalé par un grand poisson?"
    },
    options: ["Isaia", "Geremia", "Ezechiele", "Giona"],
    optionsTranslated: {
      it: ["Isaia", "Geremia", "Ezechiele", "Giona"],
      en: ["Isaiah", "Jeremiah", "Ezekiel", "Jonah"],
      es: ["Isaías", "Jeremías", "Ezequiel", "Jonás"],
      pt: ["Isaías", "Jeremias", "Ezequiel", "Jonas"],
      fr: ["Ésaïe", "Jérémie", "Ézéchiel", "Jonas"]
    },
    correctAnswer: 3,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 7,
    question: "Quanti figli ebbe Giacobbe?",
    questions: {
      it: "Quanti figli ebbe Giacobbe?",
      en: "How many sons did Jacob have?",
      es: "¿Cuántos hijos tuvo Jacob?",
      pt: "Quantos filhos Jacó teve?",
      fr: "Combien de fils Jacob a-t-il eu?"
    },
    options: ["10", "12", "14", "7"],
    optionsTranslated: {
      it: ["10", "12", "14", "7"],
      en: ["10", "12", "14", "7"],
      es: ["10", "12", "14", "7"],
      pt: ["10", "12", "14", "7"],
      fr: ["10", "12", "14", "7"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 8,
    question: "Chi costruì l'arca secondo le istruzioni di Dio?",
    questions: {
      it: "Chi costruì l'arca secondo le istruzioni di Dio?",
      en: "Who built the ark according to God's instructions?",
      es: "¿Quién construyó el arca según las instrucciones de Dios?",
      pt: "Quem construiu a arca segundo as instruções de Deus?",
      fr: "Qui a construit l'arche selon les instructions de Dieu?"
    },
    options: ["Abramo", "Noè", "Mosè", "Giuseppe"],
    optionsTranslated: {
      it: ["Abramo", "Noè", "Mosè", "Giuseppe"],
      en: ["Abraham", "Noah", "Moses", "Joseph"],
      es: ["Abraham", "Noé", "Moisés", "José"],
      pt: ["Abraão", "Noé", "Moisés", "José"],
      fr: ["Abraham", "Noé", "Moïse", "Joseph"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },

  // Nuovo Testamento
  {
    id: 9,
    question: "Dove nacque Gesù?",
    questions: {
      it: "Dove nacque Gesù?",
      en: "Where was Jesus born?",
      es: "¿Dónde nació Jesús?",
      pt: "Onde Jesus nasceu?",
      fr: "Où est né Jésus?"
    },
    options: ["Nazareth", "Gerusalemme", "Betlemme", "Cafarnao"],
    optionsTranslated: {
      it: ["Nazareth", "Gerusalemme", "Betlemme", "Cafarnao"],
      en: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
      es: ["Nazaret", "Jerusalén", "Belén", "Cafarnaúm"],
      pt: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
      fr: ["Nazareth", "Jérusalem", "Bethléem", "Capharnaüm"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 10,
    question: "Quanti apostoli scelse Gesù?",
    questions: {
      it: "Quanti apostoli scelse Gesù?",
      en: "How many apostles did Jesus choose?",
      es: "¿Cuántos apóstoles eligió Jesús?",
      pt: "Quantos apóstolos Jesus escolheu?",
      fr: "Combien d'apôtres Jésus a-t-il choisis?"
    },
    options: ["10", "11", "12", "13"],
    optionsTranslated: {
      it: ["10", "11", "12", "13"],
      en: ["10", "11", "12", "13"],
      es: ["10", "11", "12", "13"],
      pt: ["10", "11", "12", "13"],
      fr: ["10", "11", "12", "13"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 11,
    question: "Chi tradì Gesù?",
    questions: {
      it: "Chi tradì Gesù?",
      en: "Who betrayed Jesus?",
      es: "¿Quién traicionó a Jesús?",
      pt: "Quem traiu Jesus?",
      fr: "Qui a trahi Jésus?"
    },
    options: ["Pietro", "Giovanni", "Giuda", "Tommaso"],
    optionsTranslated: {
      it: ["Pietro", "Giovanni", "Giuda", "Tommaso"],
      en: ["Peter", "John", "Judas", "Thomas"],
      es: ["Pedro", "Juan", "Judas", "Tomás"],
      pt: ["Pedro", "João", "Judas", "Tomé"],
      fr: ["Pierre", "Jean", "Judas", "Thomas"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 12,
    question: "Quale apostolo era un esattore delle tasse prima di seguire Gesù?",
    questions: {
      it: "Quale apostolo era un esattore delle tasse prima di seguire Gesù?",
      en: "Which apostle was a tax collector before following Jesus?",
      es: "¿Qué apóstol era recaudador de impuestos antes de seguir a Jesús?",
      pt: "Qual apóstolo era cobrador de impostos antes de seguir Jesus?",
      fr: "Quel apôtre était collecteur d'impôts avant de suivre Jésus?"
    },
    options: ["Pietro", "Matteo", "Giovanni", "Filippo"],
    optionsTranslated: {
      it: ["Pietro", "Matteo", "Giovanni", "Filippo"],
      en: ["Peter", "Matthew", "John", "Philip"],
      es: ["Pedro", "Mateo", "Juan", "Felipe"],
      pt: ["Pedro", "Mateus", "João", "Filipe"],
      fr: ["Pierre", "Matthieu", "Jean", "Philippe"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 13,
    question: "Chi battezzò Gesù nel fiume Giordano?",
    questions: {
      it: "Chi battezzò Gesù nel fiume Giordano?",
      en: "Who baptized Jesus in the Jordan River?",
      es: "¿Quién bautizó a Jesús en el río Jordán?",
      pt: "Quem batizou Jesus no rio Jordão?",
      fr: "Qui a baptisé Jésus dans le fleuve Jourdain?"
    },
    options: ["Pietro", "Giovanni Battista", "Andrea", "Giacomo"],
    optionsTranslated: {
      it: ["Pietro", "Giovanni Battista", "Andrea", "Giacomo"],
      en: ["Peter", "John the Baptist", "Andrew", "James"],
      es: ["Pedro", "Juan el Bautista", "Andrés", "Santiago"],
      pt: ["Pedro", "João Batista", "André", "Tiago"],
      fr: ["Pierre", "Jean le Baptiste", "André", "Jacques"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 14,
    question: "Quale discepolo negò Gesù tre volte?",
    questions: {
      it: "Quale discepolo negò Gesù tre volte?",
      en: "Which disciple denied Jesus three times?",
      es: "¿Qué discípulo negó a Jesús tres veces?",
      pt: "Qual discípulo negou Jesus três vezes?",
      fr: "Quel disciple a renié Jésus trois fois?"
    },
    options: ["Giovanni", "Giacomo", "Pietro", "Andrea"],
    optionsTranslated: {
      it: ["Giovanni", "Giacomo", "Pietro", "Andrea"],
      en: ["John", "James", "Peter", "Andrew"],
      es: ["Juan", "Santiago", "Pedro", "Andrés"],
      pt: ["João", "Tiago", "Pedro", "André"],
      fr: ["Jean", "Jacques", "Pierre", "André"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 15,
    question: "Chi scrisse il maggior numero di lettere nel Nuovo Testamento?",
    questions: {
      it: "Chi scrisse il maggior numero di lettere nel Nuovo Testamento?",
      en: "Who wrote the most letters in the New Testament?",
      es: "¿Quién escribió el mayor número de cartas en el Nuevo Testamento?",
      pt: "Quem escreveu o maior número de cartas no Novo Testamento?",
      fr: "Qui a écrit le plus de lettres dans le Nouveau Testament?"
    },
    options: ["Pietro", "Giovanni", "Paolo", "Giacomo"],
    optionsTranslated: {
      it: ["Pietro", "Giovanni", "Paolo", "Giacomo"],
      en: ["Peter", "John", "Paul", "James"],
      es: ["Pedro", "Juan", "Pablo", "Santiago"],
      pt: ["Pedro", "João", "Paulo", "Tiago"],
      fr: ["Pierre", "Jean", "Paul", "Jacques"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 16,
    question: "Quale fu il primo miracolo compiuto da Gesù?",
    questions: {
      it: "Quale fu il primo miracolo compiuto da Gesù?",
      en: "What was the first miracle performed by Jesus?",
      es: "¿Cuál fue el primer milagro realizado por Jesús?",
      pt: "Qual foi o primeiro milagre realizado por Jesus?",
      fr: "Quel fut le premier miracle accompli par Jésus?"
    },
    options: [
      "Moltiplicazione dei pani",
      "Guarigione di un cieco",
      "Trasformazione dell'acqua in vino",
      "Resurrezione di Lazzaro",
    ],
    optionsTranslated: {
      it: [
        "Moltiplicazione dei pani",
        "Guarigione di un cieco",
        "Trasformazione dell'acqua in vino",
        "Resurrezione di Lazzaro"
      ],
      en: [
        "Multiplication of loaves",
        "Healing of a blind man",
        "Turning water into wine",
        "Resurrection of Lazarus"
      ],
      es: [
        "Multiplicación de los panes",
        "Curación de un ciego",
        "Transformación del agua en vino",
        "Resurrección de Lázaro"
      ],
      pt: [
        "Multiplicação dos pães",
        "Cura de um cego",
        "Transformação da água em vinho",
        "Ressurreição de Lázaro"
      ],
      fr: [
        "Multiplication des pains",
        "Guérison d'un aveugle",
        "Transformation de l'eau en vin",
        "Résurrection de Lazare"
      ]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },

  // Personaggi Biblici
  {
    id: 17,
    question: "Chi fu venduto come schiavo dai suoi fratelli?",
    questions: {
      it: "Chi fu venduto come schiavo dai suoi fratelli?",
      en: "Who was sold as a slave by his brothers?",
      es: "¿Quién fue vendido como esclavo por sus hermanos?",
      pt: "Quem foi vendido como escravo por seus irmãos?",
      fr: "Qui a été vendu comme esclave par ses frères?"
    },
    options: ["Isacco", "Giuseppe", "Beniamino", "Ruben"],
    optionsTranslated: {
      it: ["Isacco", "Giuseppe", "Beniamino", "Ruben"],
      en: ["Isaac", "Joseph", "Benjamin", "Reuben"],
      es: ["Isaac", "José", "Benjamín", "Rubén"],
      pt: ["Isaque", "José", "Benjamim", "Rúben"],
      fr: ["Isaac", "Joseph", "Benjamin", "Ruben"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 18,
    question: "Quale donna divenne regina di Persia e salvò il suo popolo?",
    questions: {
      it: "Quale donna divenne regina di Persia e salvò il suo popolo?",
      en: "Which woman became queen of Persia and saved her people?",
      es: "¿Qué mujer se convirtió en reina de Persia y salvó a su pueblo?",
      pt: "Qual mulher se tornou rainha da Pérsia e salvou seu povo?",
      fr: "Quelle femme est devenue reine de Perse et a sauvé son peuple?"
    },
    options: ["Ruth", "Ester", "Debora", "Giuditta"],
    optionsTranslated: {
      it: ["Ruth", "Ester", "Debora", "Giuditta"],
      en: ["Ruth", "Esther", "Deborah", "Judith"],
      es: ["Rut", "Ester", "Débora", "Judit"],
      pt: ["Rute", "Ester", "Débora", "Judite"],
      fr: ["Ruth", "Esther", "Déborah", "Judith"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 19,
    question: "Chi fu il padre di Isacco?",
    questions: {
      it: "Chi fu il padre di Isacco?",
      en: "Who was Isaac's father?",
      es: "¿Quién fue el padre de Isaac?",
      pt: "Quem foi o pai de Isaque?",
      fr: "Qui était le père d'Isaac?"
    },
    options: ["Noè", "Abramo", "Giacobbe", "Ismaele"],
    optionsTranslated: {
      it: ["Noè", "Abramo", "Giacobbe", "Ismaele"],
      en: ["Noah", "Abraham", "Jacob", "Ishmael"],
      es: ["Noé", "Abraham", "Jacob", "Ismael"],
      pt: ["Noé", "Abraão", "Jacó", "Ismael"],
      fr: ["Noé", "Abraham", "Jacob", "Ismaël"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 20,
    question: "Chi era la moglie di Abramo?",
    questions: {
      it: "Chi era la moglie di Abramo?",
      en: "Who was Abraham's wife?",
      es: "¿Quién era la esposa de Abraham?",
      pt: "Quem era a esposa de Abraão?",
      fr: "Qui était la femme d'Abraham?"
    },
    options: ["Rebecca", "Rachele", "Sara", "Lia"],
    optionsTranslated: {
      it: ["Rebecca", "Rachele", "Sara", "Lia"],
      en: ["Rebecca", "Rachel", "Sarah", "Leah"],
      es: ["Rebeca", "Raquel", "Sara", "Lea"],
      pt: ["Rebeca", "Raquel", "Sara", "Lia"],
      fr: ["Rébecca", "Rachel", "Sarah", "Léa"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 21,
    question: "Quale re costruì il primo tempio di Gerusalemme?",
    questions: {
      it: "Quale re costruì il primo tempio di Gerusalemme?",
      en: "Which king built the first temple of Jerusalem?",
      es: "¿Qué rey construyó el primer templo de Jerusalén?",
      pt: "Qual rei construiu o primeiro templo de Jerusalém?",
      fr: "Quel roi a construit le premier temple de Jérusalem?"
    },
    options: ["Davide", "Salomone", "Ezechia", "Giosia"],
    optionsTranslated: {
      it: ["Davide", "Salomone", "Ezechia", "Giosia"],
      en: ["David", "Solomon", "Hezekiah", "Josiah"],
      es: ["David", "Salomón", "Ezequías", "Josías"],
      pt: ["Davi", "Salomão", "Ezequias", "Josias"],
      fr: ["David", "Salomon", "Ézéchias", "Josias"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 22,
    question: "Chi fu la madre di Giovanni Battista?",
    questions: {
      it: "Chi fu la madre di Giovanni Battista?",
      en: "Who was the mother of John the Baptist?",
      es: "¿Quién fue la madre de Juan el Bautista?",
      pt: "Quem foi a mãe de João Batista?",
      fr: "Qui était la mère de Jean le Baptiste?"
    },
    options: ["Maria", "Elisabetta", "Anna", "Marta"],
    optionsTranslated: {
      it: ["Maria", "Elisabetta", "Anna", "Marta"],
      en: ["Mary", "Elizabeth", "Anna", "Martha"],
      es: ["María", "Isabel", "Ana", "Marta"],
      pt: ["Maria", "Isabel", "Ana", "Marta"],
      fr: ["Marie", "Élisabeth", "Anne", "Marthe"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 23,
    question: "Quale profeta fu rapito in cielo su un carro di fuoco?",
    questions: {
      it: "Quale profeta fu rapito in cielo su un carro di fuoco?",
      en: "Which prophet was taken to heaven in a chariot of fire?",
      es: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
      pt: "Qual profeta foi levado ao céu em um carro de fogo?",
      fr: "Quel prophète a été enlevé au ciel dans un char de feu?"
    },
    options: ["Elia", "Eliseo", "Isaia", "Ezechiele"],
    optionsTranslated: {
      it: ["Elia", "Eliseo", "Isaia", "Ezechiele"],
      en: ["Elijah", "Elisha", "Isaiah", "Ezekiel"],
      es: ["Elías", "Eliseo", "Isaías", "Ezequiel"],
      pt: ["Elias", "Eliseu", "Isaías", "Ezequiel"],
      fr: ["Élie", "Élisée", "Ésaïe", "Ézéchiel"]
    },
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 24,
    question: "Chi fu il primo martire cristiano?",
    questions: {
      it: "Chi fu il primo martire cristiano?",
      en: "Who was the first Christian martyr?",
      es: "¿Quién fue el primer mártir cristiano?",
      pt: "Quem foi o primeiro mártir cristão?",
      fr: "Qui était le premier martyr chrétien?"
    },
    options: ["Pietro", "Paolo", "Stefano", "Giacomo"],
    optionsTranslated: {
      it: ["Pietro", "Paolo", "Stefano", "Giacomo"],
      en: ["Peter", "Paul", "Stephen", "James"],
      es: ["Pedro", "Pablo", "Esteban", "Santiago"],
      pt: ["Pedro", "Paulo", "Estêvão", "Tiago"],
      fr: ["Pierre", "Paul", "Étienne", "Jacques"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "hard",
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter((q) => q.category === category);
};

export const getTranslatedQuestion = (question: Question, lang: string): string => {
  if (question.questions && question.questions[lang as keyof typeof question.questions]) {
    return question.questions[lang as keyof typeof question.questions];
  }
  return question.question;
};

export const getTranslatedOptions = (question: Question, lang: string): string[] => {
  if (question.optionsTranslated && question.optionsTranslated[lang as keyof typeof question.optionsTranslated]) {
    return question.optionsTranslated[lang as keyof typeof question.optionsTranslated];
  }
  return question.options;
};

export const categories = [
  {
    id: "antico-testamento",
    name: "Antico Testamento",
    description: "Dalla creazione fino ai profeti",
    icon: "scroll",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "nuovo-testamento",
    name: "Nuovo Testamento",
    description: "La vita di Gesù e gli apostoli",
    icon: "book-open",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "personaggi-biblici",
    name: "Personaggi Biblici",
    description: "I grandi protagonisti della Bibbia",
    icon: "users",
    color: "from-green-500 to-teal-600",
  },
];
