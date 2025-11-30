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
    options: ["Abramo", "Adamo", "Noè", "Mosè"],
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "Quanti giorni e notti durò il diluvio universale?",
    options: ["30 giorni", "40 giorni", "50 giorni", "60 giorni"],
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "Chi ricevette le Tavole della Legge sul Monte Sinai?",
    options: ["Abramo", "Davide", "Mosè", "Elia"],
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "Quale libro dell'Antico Testamento è noto per la sua poesia d'amore?",
    options: ["Proverbi", "Cantico dei Cantici", "Ecclesiaste", "Salmi"],
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "Chi sconfisse Golia con una fionda?",
    options: ["Samuele", "Saul", "Davide", "Gionata"],
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 6,
    question: "Quale profeta fu inghiottito da un grande pesce?",
    options: ["Isaia", "Geremia", "Ezechiele", "Giona"],
    correctAnswer: 3,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 7,
    question: "Quanti figli ebbe Giacobbe?",
    options: ["10", "12", "14", "7"],
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 8,
    question: "Chi costruì l'arca secondo le istruzioni di Dio?",
    options: ["Abramo", "Noè", "Mosè", "Giuseppe"],
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },

  // Nuovo Testamento
  {
    id: 9,
    question: "Dove nacque Gesù?",
    options: ["Nazareth", "Gerusalemme", "Betlemme", "Cafarnao"],
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 10,
    question: "Quanti apostoli scelse Gesù?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 11,
    question: "Chi tradì Gesù?",
    options: ["Pietro", "Giovanni", "Giuda", "Tommaso"],
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 12,
    question: "Quale apostolo era un esattore delle tasse prima di seguire Gesù?",
    options: ["Pietro", "Matteo", "Giovanni", "Filippo"],
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 13,
    question: "Chi battezzò Gesù nel fiume Giordano?",
    options: ["Pietro", "Giovanni Battista", "Andrea", "Giacomo"],
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 14,
    question: "Quale discepolo negò Gesù tre volte?",
    options: ["Giovanni", "Giacomo", "Pietro", "Andrea"],
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 15,
    question: "Chi scrisse il maggior numero di lettere nel Nuovo Testamento?",
    options: ["Pietro", "Giovanni", "Paolo", "Giacomo"],
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 16,
    question: "Quale fu il primo miracolo compiuto da Gesù?",
    options: [
      "Moltiplicazione dei pani",
      "Guarigione di un cieco",
      "Trasformazione dell'acqua in vino",
      "Resurrezione di Lazzaro",
    ],
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },

  // Personaggi Biblici
  {
    id: 17,
    question: "Chi fu venduto come schiavo dai suoi fratelli?",
    options: ["Isacco", "Giuseppe", "Beniamino", "Ruben"],
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 18,
    question: "Quale donna divenne regina di Persia e salvò il suo popolo?",
    options: ["Ruth", "Ester", "Debora", "Giuditta"],
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 19,
    question: "Chi fu il padre di Isacco?",
    options: ["Noè", "Abramo", "Giacobbe", "Ismaele"],
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 20,
    question: "Chi era la moglie di Abramo?",
    options: ["Rebecca", "Rachele", "Sara", "Lia"],
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 21,
    question: "Quale re costruì il primo tempio di Gerusalemme?",
    options: ["Davide", "Salomone", "Ezechia", "Giosia"],
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 22,
    question: "Chi fu la madre di Giovanni Battista?",
    options: ["Maria", "Elisabetta", "Anna", "Marta"],
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 23,
    question: "Quale profeta fu rapito in cielo su un carro di fuoco?",
    options: ["Elia", "Eliseo", "Isaia", "Ezechiele"],
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 24,
    question: "Chi fu il primo martire cristiano?",
    options: ["Pietro", "Paolo", "Stefano", "Giacomo"],
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
