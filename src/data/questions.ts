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
  // ============= ANTICO TESTAMENTO (20 questions) =============
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
    options: ["Salmi", "Cantico dei Cantici", "Proverbi", "Ecclesiaste"],
    optionsTranslated: {
      it: ["Salmi", "Cantico dei Cantici", "Proverbi", "Ecclesiaste"],
      en: ["Psalms", "Song of Songs", "Proverbs", "Ecclesiastes"],
      es: ["Salmos", "Cantar de los Cantares", "Proverbios", "Eclesiastés"],
      pt: ["Salmos", "Cântico dos Cânticos", "Provérbios", "Eclesiastes"],
      fr: ["Psaumes", "Cantique des Cantiques", "Proverbes", "Ecclésiaste"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "Quanti erano i fratelli di Giuseppe che lo vendettero come schiavo?",
    questions: {
      it: "Quanti erano i fratelli di Giuseppe che lo vendettero come schiavo?",
      en: "How many brothers did Joseph have who sold him into slavery?",
      es: "¿Cuántos hermanos tenía José que lo vendieron como esclavo?",
      pt: "Quantos irmãos José tinha que o venderam como escravo?",
      fr: "Combien de frères Joseph avait-il qui l'ont vendu comme esclave?"
    },
    options: ["8", "10", "11", "12"],
    optionsTranslated: {
      it: ["8", "10", "11", "12"],
      en: ["8", "10", "11", "12"],
      es: ["8", "10", "11", "12"],
      pt: ["8", "10", "11", "12"],
      fr: ["8", "10", "11", "12"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 6,
    question: "In quale città fu costruita la Torre di Babele?",
    questions: {
      it: "In quale città fu costruita la Torre di Babele?",
      en: "In which city was the Tower of Babel built?",
      es: "¿En qué ciudad se construyó la Torre de Babel?",
      pt: "Em que cidade foi construída a Torre de Babel?",
      fr: "Dans quelle ville la Tour de Babel a-t-elle été construite?"
    },
    options: ["Ur", "Babilonia", "Ninive", "Sodoma"],
    optionsTranslated: {
      it: ["Ur", "Babilonia", "Ninive", "Sodoma"],
      en: ["Ur", "Babylon", "Nineveh", "Sodom"],
      es: ["Ur", "Babilonia", "Nínive", "Sodoma"],
      pt: ["Ur", "Babilônia", "Nínive", "Sodoma"],
      fr: ["Ur", "Babylone", "Ninive", "Sodome"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "Chi sconfisse Golia con una fionda?",
    questions: {
      it: "Chi sconfisse Golia con una fionda?",
      en: "Who defeated Goliath with a sling?",
      es: "¿Quién derrotó a Goliat con una honda?",
      pt: "Quem derrotou Golias com uma funda?",
      fr: "Qui a vaincu Goliath avec une fronde?"
    },
    options: ["Samuele", "Saul", "Davide", "Giosuè"],
    optionsTranslated: {
      it: ["Samuele", "Saul", "Davide", "Giosuè"],
      en: ["Samuel", "Saul", "David", "Joshua"],
      es: ["Samuel", "Saúl", "David", "Josué"],
      pt: ["Samuel", "Saul", "Davi", "Josué"],
      fr: ["Samuel", "Saül", "David", "Josué"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 8,
    question: "Quale profeta fu inghiottito da un grande pesce?",
    questions: {
      it: "Quale profeta fu inghiottito da un grande pesce?",
      en: "Which prophet was swallowed by a great fish?",
      es: "¿Qué profeta fue tragado por un gran pez?",
      pt: "Qual profeta foi engolido por um grande peixe?",
      fr: "Quel prophète a été avalé par un grand poisson?"
    },
    options: ["Elia", "Eliseo", "Giona", "Isaia"],
    optionsTranslated: {
      it: ["Elia", "Eliseo", "Giona", "Isaia"],
      en: ["Elijah", "Elisha", "Jonah", "Isaiah"],
      es: ["Elías", "Eliseo", "Jonás", "Isaías"],
      pt: ["Elias", "Eliseu", "Jonas", "Isaías"],
      fr: ["Élie", "Élisée", "Jonas", "Isaïe"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 9,
    question: "Quale re d'Israele fu noto per la sua saggezza?",
    questions: {
      it: "Quale re d'Israele fu noto per la sua saggezza?",
      en: "Which king of Israel was known for his wisdom?",
      es: "¿Qué rey de Israel fue conocido por su sabiduría?",
      pt: "Qual rei de Israel foi conhecido por sua sabedoria?",
      fr: "Quel roi d'Israël était connu pour sa sagesse?"
    },
    options: ["Davide", "Salomone", "Giosia", "Ezechia"],
    optionsTranslated: {
      it: ["Davide", "Salomone", "Giosia", "Ezechia"],
      en: ["David", "Solomon", "Josiah", "Hezekiah"],
      es: ["David", "Salomón", "Josías", "Ezequías"],
      pt: ["Davi", "Salomão", "Josias", "Ezequias"],
      fr: ["David", "Salomon", "Josias", "Ézéchias"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 10,
    question: "Quante piaghe colpirono l'Egitto prima dell'Esodo?",
    questions: {
      it: "Quante piaghe colpirono l'Egitto prima dell'Esodo?",
      en: "How many plagues struck Egypt before the Exodus?",
      es: "¿Cuántas plagas azotaron Egipto antes del Éxodo?",
      pt: "Quantas pragas atingiram o Egito antes do Êxodo?",
      fr: "Combien de plaies ont frappé l'Égypte avant l'Exode?"
    },
    options: ["7", "10", "12", "15"],
    optionsTranslated: {
      it: ["7", "10", "12", "15"],
      en: ["7", "10", "12", "15"],
      es: ["7", "10", "12", "15"],
      pt: ["7", "10", "12", "15"],
      fr: ["7", "10", "12", "15"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 11,
    question: "Chi fu la prima moglie di Giacobbe?",
    questions: {
      it: "Chi fu la prima moglie di Giacobbe?",
      en: "Who was Jacob's first wife?",
      es: "¿Quién fue la primera esposa de Jacob?",
      pt: "Quem foi a primeira esposa de Jacó?",
      fr: "Qui était la première femme de Jacob?"
    },
    options: ["Rachele", "Lia", "Bilha", "Zilpa"],
    optionsTranslated: {
      it: ["Rachele", "Lia", "Bilha", "Zilpa"],
      en: ["Rachel", "Leah", "Bilhah", "Zilpah"],
      es: ["Raquel", "Lea", "Bilha", "Zilpa"],
      pt: ["Raquel", "Lia", "Bila", "Zilpa"],
      fr: ["Rachel", "Léa", "Bilha", "Zilpa"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 12,
    question: "In quale libro si trova il racconto di Ester?",
    questions: {
      it: "In quale libro si trova il racconto di Ester?",
      en: "In which book is the story of Esther found?",
      es: "¿En qué libro se encuentra la historia de Ester?",
      pt: "Em qual livro está a história de Ester?",
      fr: "Dans quel livre se trouve l'histoire d'Esther?"
    },
    options: ["Rut", "Ester", "Giuditta", "1 Samuele"],
    optionsTranslated: {
      it: ["Rut", "Ester", "Giuditta", "1 Samuele"],
      en: ["Ruth", "Esther", "Judith", "1 Samuel"],
      es: ["Rut", "Ester", "Judit", "1 Samuel"],
      pt: ["Rute", "Ester", "Judite", "1 Samuel"],
      fr: ["Ruth", "Esther", "Judith", "1 Samuel"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 13,
    question: "Quale profeta vide il carro di fuoco?",
    questions: {
      it: "Quale profeta vide il carro di fuoco?",
      en: "Which prophet saw the chariot of fire?",
      es: "¿Qué profeta vio el carro de fuego?",
      pt: "Qual profeta viu o carro de fogo?",
      fr: "Quel prophète a vu le char de feu?"
    },
    options: ["Isaia", "Geremia", "Ezechiele", "Daniele"],
    optionsTranslated: {
      it: ["Isaia", "Geremia", "Ezechiele", "Daniele"],
      en: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
      es: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
      pt: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
      fr: ["Isaïe", "Jérémie", "Ézéchiel", "Daniel"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "hard",
  },
  {
    id: 14,
    question: "Quanti libri compongono il Pentateuco?",
    questions: {
      it: "Quanti libri compongono il Pentateuco?",
      en: "How many books make up the Pentateuch?",
      es: "¿Cuántos libros componen el Pentateuco?",
      pt: "Quantos livros compõem o Pentateuco?",
      fr: "Combien de livres composent le Pentateuque?"
    },
    options: ["3", "5", "7", "10"],
    optionsTranslated: {
      it: ["3", "5", "7", "10"],
      en: ["3", "5", "7", "10"],
      es: ["3", "5", "7", "10"],
      pt: ["3", "5", "7", "10"],
      fr: ["3", "5", "7", "10"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 15,
    question: "Chi costruì l'arca secondo le istruzioni di Dio?",
    questions: {
      it: "Chi costruì l'arca secondo le istruzioni di Dio?",
      en: "Who built the ark according to God's instructions?",
      es: "¿Quién construyó el arca según las instrucciones de Dios?",
      pt: "Quem construiu a arca segundo as instruções de Deus?",
      fr: "Qui a construit l'arche selon les instructions de Dieu?"
    },
    options: ["Adamo", "Abramo", "Noè", "Mosè"],
    optionsTranslated: {
      it: ["Adamo", "Abramo", "Noè", "Mosè"],
      en: ["Adam", "Abraham", "Noah", "Moses"],
      es: ["Adán", "Abraham", "Noé", "Moisés"],
      pt: ["Adão", "Abraão", "Noé", "Moisés"],
      fr: ["Adam", "Abraham", "Noé", "Moïse"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 16,
    question: "Quale città fu distrutta con Sodoma?",
    questions: {
      it: "Quale città fu distrutta con Sodoma?",
      en: "Which city was destroyed with Sodom?",
      es: "¿Qué ciudad fue destruida con Sodoma?",
      pt: "Qual cidade foi destruída com Sodoma?",
      fr: "Quelle ville a été détruite avec Sodome?"
    },
    options: ["Gomorra", "Babilonia", "Ninive", "Gerico"],
    optionsTranslated: {
      it: ["Gomorra", "Babilonia", "Ninive", "Gerico"],
      en: ["Gomorrah", "Babylon", "Nineveh", "Jericho"],
      es: ["Gomorra", "Babilonia", "Nínive", "Jericó"],
      pt: ["Gomorra", "Babilônia", "Nínive", "Jericó"],
      fr: ["Gomorrhe", "Babylone", "Ninive", "Jéricho"]
    },
    correctAnswer: 0,
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 17,
    question: "Chi fu il padre di Isacco?",
    questions: {
      it: "Chi fu il padre di Isacco?",
      en: "Who was Isaac's father?",
      es: "¿Quién fue el padre de Isaac?",
      pt: "Quem foi o pai de Isaque?",
      fr: "Qui était le père d'Isaac?"
    },
    options: ["Noè", "Abramo", "Giacobbe", "Giuseppe"],
    optionsTranslated: {
      it: ["Noè", "Abramo", "Giacobbe", "Giuseppe"],
      en: ["Noah", "Abraham", "Jacob", "Joseph"],
      es: ["Noé", "Abraham", "Jacob", "José"],
      pt: ["Noé", "Abraão", "Jacó", "José"],
      fr: ["Noé", "Abraham", "Jacob", "Joseph"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 18,
    question: "Quale re costruì il tempio di Gerusalemme?",
    questions: {
      it: "Quale re costruì il tempio di Gerusalemme?",
      en: "Which king built the temple in Jerusalem?",
      es: "¿Qué rey construyó el templo en Jerusalén?",
      pt: "Qual rei construiu o templo em Jerusalém?",
      fr: "Quel roi a construit le temple à Jérusalem?"
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
    category: "Antico Testamento",
    difficulty: "medium",
  },
  {
    id: 19,
    question: "Quanti comandamenti ricevette Mosè sul Sinai?",
    questions: {
      it: "Quanti comandamenti ricevette Mosè sul Sinai?",
      en: "How many commandments did Moses receive on Sinai?",
      es: "¿Cuántos mandamientos recibió Moisés en el Sinaí?",
      pt: "Quantos mandamentos Moisés recebeu no Sinai?",
      fr: "Combien de commandements Moïse a-t-il reçus sur le Sinaï?"
    },
    options: ["5", "7", "10", "12"],
    optionsTranslated: {
      it: ["5", "7", "10", "12"],
      en: ["5", "7", "10", "12"],
      es: ["5", "7", "10", "12"],
      pt: ["5", "7", "10", "12"],
      fr: ["5", "7", "10", "12"]
    },
    correctAnswer: 2,
    category: "Antico Testamento",
    difficulty: "easy",
  },
  {
    id: 20,
    question: "Chi interpretò i sogni del faraone?",
    questions: {
      it: "Chi interpretò i sogni del faraone?",
      en: "Who interpreted Pharaoh's dreams?",
      es: "¿Quién interpretó los sueños del faraón?",
      pt: "Quem interpretou os sonhos do faraó?",
      fr: "Qui a interprété les rêves du Pharaon?"
    },
    options: ["Mosè", "Giuseppe", "Daniele", "Aronne"],
    optionsTranslated: {
      it: ["Mosè", "Giuseppe", "Daniele", "Aronne"],
      en: ["Moses", "Joseph", "Daniel", "Aaron"],
      es: ["Moisés", "José", "Daniel", "Aarón"],
      pt: ["Moisés", "José", "Daniel", "Arão"],
      fr: ["Moïse", "Joseph", "Daniel", "Aaron"]
    },
    correctAnswer: 1,
    category: "Antico Testamento",
    difficulty: "medium",
  },

  // ============= NUOVO TESTAMENTO (20 questions) =============
  {
    id: 21,
    question: "Dove nacque Gesù?",
    questions: {
      it: "Dove nacque Gesù?",
      en: "Where was Jesus born?",
      es: "¿Dónde nació Jesús?",
      pt: "Onde Jesus nasceu?",
      fr: "Où Jésus est-il né?"
    },
    options: ["Nazareth", "Betlemme", "Gerusalemme", "Cafarnao"],
    optionsTranslated: {
      it: ["Nazareth", "Betlemme", "Gerusalemme", "Cafarnao"],
      en: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"],
      es: ["Nazaret", "Belén", "Jerusalén", "Cafarnaúm"],
      pt: ["Nazaré", "Belém", "Jerusalém", "Cafarnaum"],
      fr: ["Nazareth", "Bethléem", "Jérusalem", "Capharnaüm"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 22,
    question: "Quanti apostoli scelse Gesù?",
    questions: {
      it: "Quanti apostoli scelse Gesù?",
      en: "How many apostles did Jesus choose?",
      es: "¿Cuántos apóstoles eligió Jesús?",
      pt: "Quantos apóstolos Jesus escolheu?",
      fr: "Combien d'apôtres Jésus a-t-il choisis?"
    },
    options: ["7", "10", "12", "15"],
    optionsTranslated: {
      it: ["7", "10", "12", "15"],
      en: ["7", "10", "12", "15"],
      es: ["7", "10", "12", "15"],
      pt: ["7", "10", "12", "15"],
      fr: ["7", "10", "12", "15"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 23,
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
    id: 24,
    question: "Quale apostolo negò Gesù tre volte?",
    questions: {
      it: "Quale apostolo negò Gesù tre volte?",
      en: "Which apostle denied Jesus three times?",
      es: "¿Qué apóstol negó a Jesús tres veces?",
      pt: "Qual apóstolo negou Jesus três vezes?",
      fr: "Quel apôtre a renié Jésus trois fois?"
    },
    options: ["Pietro", "Andrea", "Giacomo", "Filippo"],
    optionsTranslated: {
      it: ["Pietro", "Andrea", "Giacomo", "Filippo"],
      en: ["Peter", "Andrew", "James", "Philip"],
      es: ["Pedro", "Andrés", "Santiago", "Felipe"],
      pt: ["Pedro", "André", "Tiago", "Filipe"],
      fr: ["Pierre", "André", "Jacques", "Philippe"]
    },
    correctAnswer: 0,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 25,
    question: "Quale Giovanni battezzò Gesù?",
    questions: {
      it: "Quale Giovanni battezzò Gesù?",
      en: "Which John baptized Jesus?",
      es: "¿Qué Juan bautizó a Jesús?",
      pt: "Qual João batizou Jesus?",
      fr: "Quel Jean a baptisé Jésus?"
    },
    options: ["Giovanni Apostolo", "Giovanni Battista", "Giovanni Evangelista", "Giovanni di Patmos"],
    optionsTranslated: {
      it: ["Giovanni Apostolo", "Giovanni Battista", "Giovanni Evangelista", "Giovanni di Patmos"],
      en: ["John the Apostle", "John the Baptist", "John the Evangelist", "John of Patmos"],
      es: ["Juan Apóstol", "Juan Bautista", "Juan Evangelista", "Juan de Patmos"],
      pt: ["João Apóstolo", "João Batista", "João Evangelista", "João de Patmos"],
      fr: ["Jean l'Apôtre", "Jean le Baptiste", "Jean l'Évangéliste", "Jean de Patmos"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 26,
    question: "Su quale monte Gesù fu trasfigurato?",
    questions: {
      it: "Su quale monte Gesù fu trasfigurato?",
      en: "On which mountain was Jesus transfigured?",
      es: "¿En qué monte fue transfigurado Jesús?",
      pt: "Em qual monte Jesus foi transfigurado?",
      fr: "Sur quel mont Jésus a-t-il été transfiguré?"
    },
    options: ["Monte Sinai", "Monte degli Ulivi", "Monte Tabor", "Monte Carmelo"],
    optionsTranslated: {
      it: ["Monte Sinai", "Monte degli Ulivi", "Monte Tabor", "Monte Carmelo"],
      en: ["Mount Sinai", "Mount of Olives", "Mount Tabor", "Mount Carmel"],
      es: ["Monte Sinaí", "Monte de los Olivos", "Monte Tabor", "Monte Carmelo"],
      pt: ["Monte Sinai", "Monte das Oliveiras", "Monte Tabor", "Monte Carmelo"],
      fr: ["Mont Sinaï", "Mont des Oliviers", "Mont Tabor", "Mont Carmel"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "hard",
  },
  {
    id: 27,
    question: "Quanti giorni Gesù trascorse nel deserto?",
    questions: {
      it: "Quanti giorni Gesù trascorse nel deserto?",
      en: "How many days did Jesus spend in the desert?",
      es: "¿Cuántos días pasó Jesús en el desierto?",
      pt: "Quantos dias Jesus passou no deserto?",
      fr: "Combien de jours Jésus a-t-il passés dans le désert?"
    },
    options: ["7", "30", "40", "50"],
    optionsTranslated: {
      it: ["7", "30", "40", "50"],
      en: ["7", "30", "40", "50"],
      es: ["7", "30", "40", "50"],
      pt: ["7", "30", "40", "50"],
      fr: ["7", "30", "40", "50"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 28,
    question: "Quale miracolo fece Gesù a Cana?",
    questions: {
      it: "Quale miracolo fece Gesù a Cana?",
      en: "What miracle did Jesus perform at Cana?",
      es: "¿Qué milagro hizo Jesús en Caná?",
      pt: "Qual milagre Jesus fez em Caná?",
      fr: "Quel miracle Jésus a-t-il accompli à Cana?"
    },
    options: ["Moltiplicò i pani", "Trasformò l'acqua in vino", "Guarì un cieco", "Camminò sull'acqua"],
    optionsTranslated: {
      it: ["Moltiplicò i pani", "Trasformò l'acqua in vino", "Guarì un cieco", "Camminò sull'acqua"],
      en: ["Multiplied loaves", "Turned water into wine", "Healed a blind man", "Walked on water"],
      es: ["Multiplicó los panes", "Convirtió el agua en vino", "Curó a un ciego", "Caminó sobre el agua"],
      pt: ["Multiplicou os pães", "Transformou água em vinho", "Curou um cego", "Andou sobre a água"],
      fr: ["Multiplia les pains", "Transforma l'eau en vin", "Guérit un aveugle", "Marcha sur l'eau"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 29,
    question: "Chi scrisse l'Apocalisse?",
    questions: {
      it: "Chi scrisse l'Apocalisse?",
      en: "Who wrote Revelation?",
      es: "¿Quién escribió el Apocalipsis?",
      pt: "Quem escreveu o Apocalipse?",
      fr: "Qui a écrit l'Apocalypse?"
    },
    options: ["Paolo", "Pietro", "Giovanni", "Giacomo"],
    optionsTranslated: {
      it: ["Paolo", "Pietro", "Giovanni", "Giacomo"],
      en: ["Paul", "Peter", "John", "James"],
      es: ["Pablo", "Pedro", "Juan", "Santiago"],
      pt: ["Paulo", "Pedro", "João", "Tiago"],
      fr: ["Paul", "Pierre", "Jean", "Jacques"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 30,
    question: "Quale apostolo era un esattore delle tasse?",
    questions: {
      it: "Quale apostolo era un esattore delle tasse?",
      en: "Which apostle was a tax collector?",
      es: "¿Qué apóstol era recaudador de impuestos?",
      pt: "Qual apóstolo era coletor de impostos?",
      fr: "Quel apôtre était collecteur d'impôts?"
    },
    options: ["Luca", "Matteo", "Marco", "Tommaso"],
    optionsTranslated: {
      it: ["Luca", "Matteo", "Marco", "Tommaso"],
      en: ["Luke", "Matthew", "Mark", "Thomas"],
      es: ["Lucas", "Mateo", "Marcos", "Tomás"],
      pt: ["Lucas", "Mateus", "Marcos", "Tomé"],
      fr: ["Luc", "Matthieu", "Marc", "Thomas"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 31,
    question: "Chi chiese il corpo di Gesù dopo la crocifissione?",
    questions: {
      it: "Chi chiese il corpo di Gesù dopo la crocifissione?",
      en: "Who asked for Jesus' body after the crucifixion?",
      es: "¿Quién pidió el cuerpo de Jesús después de la crucifixión?",
      pt: "Quem pediu o corpo de Jesus após a crucificação?",
      fr: "Qui a demandé le corps de Jésus après la crucifixion?"
    },
    options: ["Nicodemo", "Giuseppe d'Arimatea", "Pietro", "Giovanni"],
    optionsTranslated: {
      it: ["Nicodemo", "Giuseppe d'Arimatea", "Pietro", "Giovanni"],
      en: ["Nicodemus", "Joseph of Arimathea", "Peter", "John"],
      es: ["Nicodemo", "José de Arimatea", "Pedro", "Juan"],
      pt: ["Nicodemos", "José de Arimateia", "Pedro", "João"],
      fr: ["Nicodème", "Joseph d'Arimathie", "Pierre", "Jean"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "hard",
  },
  {
    id: 32,
    question: "Quale Maria fu la prima a vedere Gesù risorto?",
    questions: {
      it: "Quale Maria fu la prima a vedere Gesù risorto?",
      en: "Which Mary was the first to see the risen Jesus?",
      es: "¿Qué María fue la primera en ver a Jesús resucitado?",
      pt: "Qual Maria foi a primeira a ver Jesus ressuscitado?",
      fr: "Quelle Marie a été la première à voir Jésus ressuscité?"
    },
    options: ["Maria madre di Gesù", "Maria Maddalena", "Maria di Betania", "Maria di Cleofa"],
    optionsTranslated: {
      it: ["Maria madre di Gesù", "Maria Maddalena", "Maria di Betania", "Maria di Cleofa"],
      en: ["Mary mother of Jesus", "Mary Magdalene", "Mary of Bethany", "Mary of Clopas"],
      es: ["María madre de Jesús", "María Magdalena", "María de Betania", "María de Cleofás"],
      pt: ["Maria mãe de Jesus", "Maria Madalena", "Maria de Betânia", "Maria de Clopas"],
      fr: ["Marie mère de Jésus", "Marie Madeleine", "Marie de Béthanie", "Marie de Clopas"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 33,
    question: "In quale città i discepoli furono chiamati 'cristiani' per la prima volta?",
    questions: {
      it: "In quale città i discepoli furono chiamati 'cristiani' per la prima volta?",
      en: "In which city were the disciples first called 'Christians'?",
      es: "¿En qué ciudad se llamó 'cristianos' a los discípulos por primera vez?",
      pt: "Em qual cidade os discípulos foram chamados 'cristãos' pela primeira vez?",
      fr: "Dans quelle ville les disciples ont-ils été appelés 'chrétiens' pour la première fois?"
    },
    options: ["Gerusalemme", "Roma", "Antiochia", "Efeso"],
    optionsTranslated: {
      it: ["Gerusalemme", "Roma", "Antiochia", "Efeso"],
      en: ["Jerusalem", "Rome", "Antioch", "Ephesus"],
      es: ["Jerusalén", "Roma", "Antioquía", "Éfeso"],
      pt: ["Jerusalém", "Roma", "Antioquia", "Éfeso"],
      fr: ["Jérusalem", "Rome", "Antioche", "Éphèse"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "hard",
  },
  {
    id: 34,
    question: "Quale apostolo dubitò della risurrezione di Gesù?",
    questions: {
      it: "Quale apostolo dubitò della risurrezione di Gesù?",
      en: "Which apostle doubted Jesus' resurrection?",
      es: "¿Qué apóstol dudó de la resurrección de Jesús?",
      pt: "Qual apóstolo duvidou da ressurreição de Jesus?",
      fr: "Quel apôtre a douté de la résurrection de Jésus?"
    },
    options: ["Pietro", "Giovanni", "Tommaso", "Filippo"],
    optionsTranslated: {
      it: ["Pietro", "Giovanni", "Tommaso", "Filippo"],
      en: ["Peter", "John", "Thomas", "Philip"],
      es: ["Pedro", "Juan", "Tomás", "Felipe"],
      pt: ["Pedro", "João", "Tomé", "Filipe"],
      fr: ["Pierre", "Jean", "Thomas", "Philippe"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "easy",
  },
  {
    id: 35,
    question: "Quanti furono i pani nella moltiplicazione?",
    questions: {
      it: "Quanti furono i pani nella moltiplicazione?",
      en: "How many loaves were in the multiplication?",
      es: "¿Cuántos panes hubo en la multiplicación?",
      pt: "Quantos pães havia na multiplicação?",
      fr: "Combien de pains y avait-il dans la multiplication?"
    },
    options: ["3", "5", "7", "12"],
    optionsTranslated: {
      it: ["3", "5", "7", "12"],
      en: ["3", "5", "7", "12"],
      es: ["3", "5", "7", "12"],
      pt: ["3", "5", "7", "12"],
      fr: ["3", "5", "7", "12"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 36,
    question: "Chi salì sul sicomoro per vedere Gesù?",
    questions: {
      it: "Chi salì sul sicomoro per vedere Gesù?",
      en: "Who climbed a sycamore tree to see Jesus?",
      es: "¿Quién subió a un sicómoro para ver a Jesús?",
      pt: "Quem subiu numa sicômoro para ver Jesus?",
      fr: "Qui a grimpé sur un sycomore pour voir Jésus?"
    },
    options: ["Zaccheo", "Nicodemo", "Bartimeo", "Lazzaro"],
    optionsTranslated: {
      it: ["Zaccheo", "Nicodemo", "Bartimeo", "Lazzaro"],
      en: ["Zacchaeus", "Nicodemus", "Bartimaeus", "Lazarus"],
      es: ["Zaqueo", "Nicodemo", "Bartimeo", "Lázaro"],
      pt: ["Zaqueu", "Nicodemos", "Bartimeu", "Lázaro"],
      fr: ["Zachée", "Nicodème", "Bartimée", "Lazare"]
    },
    correctAnswer: 0,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 37,
    question: "Quale festa celebravano quando Gesù entrò a Gerusalemme su un asino?",
    questions: {
      it: "Quale festa celebravano quando Gesù entrò a Gerusalemme su un asino?",
      en: "Which feast was being celebrated when Jesus entered Jerusalem on a donkey?",
      es: "¿Qué fiesta se celebraba cuando Jesús entró en Jerusalén sobre un burro?",
      pt: "Qual festa estava sendo celebrada quando Jesus entrou em Jerusalém sobre um jumento?",
      fr: "Quelle fête était célébrée quand Jésus est entré à Jérusalem sur un âne?"
    },
    options: ["Pentecoste", "Pasqua", "Purim", "Capanne"],
    optionsTranslated: {
      it: ["Pentecoste", "Pasqua", "Purim", "Capanne"],
      en: ["Pentecost", "Passover", "Purim", "Tabernacles"],
      es: ["Pentecostés", "Pascua", "Purim", "Tabernáculos"],
      pt: ["Pentecostes", "Páscoa", "Purim", "Tabernáculos"],
      fr: ["Pentecôte", "Pâque", "Pourim", "Tabernacles"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },
  {
    id: 38,
    question: "Chi riconobbe Gesù bambino come il Messia nel tempio?",
    questions: {
      it: "Chi riconobbe Gesù bambino come il Messia nel tempio?",
      en: "Who recognized baby Jesus as the Messiah in the temple?",
      es: "¿Quién reconoció al niño Jesús como el Mesías en el templo?",
      pt: "Quem reconheceu Jesus bebê como o Messias no templo?",
      fr: "Qui a reconnu l'enfant Jésus comme le Messie dans le temple?"
    },
    options: ["Anna", "Simeone", "Entrambi", "Nessuno"],
    optionsTranslated: {
      it: ["Anna", "Simeone", "Entrambi", "Nessuno"],
      en: ["Anna", "Simeon", "Both", "Neither"],
      es: ["Ana", "Simeón", "Ambos", "Ninguno"],
      pt: ["Ana", "Simeão", "Ambos", "Nenhum"],
      fr: ["Anne", "Siméon", "Les deux", "Aucun"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "hard",
  },
  {
    id: 39,
    question: "Quale discepolo portò Pietro a Gesù?",
    questions: {
      it: "Quale discepolo portò Pietro a Gesù?",
      en: "Which disciple brought Peter to Jesus?",
      es: "¿Qué discípulo llevó a Pedro a Jesús?",
      pt: "Qual discípulo trouxe Pedro a Jesus?",
      fr: "Quel disciple a amené Pierre à Jésus?"
    },
    options: ["Giovanni", "Andrea", "Giacomo", "Filippo"],
    optionsTranslated: {
      it: ["Giovanni", "Andrea", "Giacomo", "Filippo"],
      en: ["John", "Andrew", "James", "Philip"],
      es: ["Juan", "Andrés", "Santiago", "Felipe"],
      pt: ["João", "André", "Tiago", "Filipe"],
      fr: ["Jean", "André", "Jacques", "Philippe"]
    },
    correctAnswer: 1,
    category: "Nuovo Testamento",
    difficulty: "hard",
  },
  {
    id: 40,
    question: "Quanti giorni dopo la risurrezione Gesù ascese al cielo?",
    questions: {
      it: "Quanti giorni dopo la risurrezione Gesù ascese al cielo?",
      en: "How many days after the resurrection did Jesus ascend to heaven?",
      es: "¿Cuántos días después de la resurrección Jesús ascendió al cielo?",
      pt: "Quantos dias após a ressurreição Jesus ascendeu ao céu?",
      fr: "Combien de jours après la résurrection Jésus est-il monté au ciel?"
    },
    options: ["3", "7", "40", "50"],
    optionsTranslated: {
      it: ["3", "7", "40", "50"],
      en: ["3", "7", "40", "50"],
      es: ["3", "7", "40", "50"],
      pt: ["3", "7", "40", "50"],
      fr: ["3", "7", "40", "50"]
    },
    correctAnswer: 2,
    category: "Nuovo Testamento",
    difficulty: "medium",
  },

  // ============= PERSONAGGI BIBLICI (20 questions) =============
  {
    id: 41,
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
    difficulty: "medium",
  },
  {
    id: 42,
    question: "Quale re fu noto per aver scritto molti Salmi?",
    questions: {
      it: "Quale re fu noto per aver scritto molti Salmi?",
      en: "Which king was known for writing many Psalms?",
      es: "¿Qué rey fue conocido por escribir muchos Salmos?",
      pt: "Qual rei era conhecido por escrever muitos Salmos?",
      fr: "Quel roi était connu pour avoir écrit de nombreux Psaumes?"
    },
    options: ["Salomone", "Davide", "Saul", "Ezechia"],
    optionsTranslated: {
      it: ["Salomone", "Davide", "Saul", "Ezechia"],
      en: ["Solomon", "David", "Saul", "Hezekiah"],
      es: ["Salomón", "David", "Saúl", "Ezequías"],
      pt: ["Salomão", "Davi", "Saul", "Ezequias"],
      fr: ["Salomon", "David", "Saül", "Ézéchias"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 43,
    question: "Chi fu venduto dai suoi fratelli come schiavo?",
    questions: {
      it: "Chi fu venduto dai suoi fratelli come schiavo?",
      en: "Who was sold by his brothers as a slave?",
      es: "¿Quién fue vendido por sus hermanos como esclavo?",
      pt: "Quem foi vendido por seus irmãos como escravo?",
      fr: "Qui a été vendu par ses frères comme esclave?"
    },
    options: ["Isacco", "Giacobbe", "Giuseppe", "Beniamino"],
    optionsTranslated: {
      it: ["Isacco", "Giacobbe", "Giuseppe", "Beniamino"],
      en: ["Isaac", "Jacob", "Joseph", "Benjamin"],
      es: ["Isaac", "Jacob", "José", "Benjamín"],
      pt: ["Isaque", "Jacó", "José", "Benjamim"],
      fr: ["Isaac", "Jacob", "Joseph", "Benjamin"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 44,
    question: "Chi era la madre di Samuele?",
    questions: {
      it: "Chi era la madre di Samuele?",
      en: "Who was Samuel's mother?",
      es: "¿Quién era la madre de Samuel?",
      pt: "Quem era a mãe de Samuel?",
      fr: "Qui était la mère de Samuel?"
    },
    options: ["Anna", "Sara", "Rebecca", "Rachele"],
    optionsTranslated: {
      it: ["Anna", "Sara", "Rebecca", "Rachele"],
      en: ["Hannah", "Sarah", "Rebekah", "Rachel"],
      es: ["Ana", "Sara", "Rebeca", "Raquel"],
      pt: ["Ana", "Sara", "Rebeca", "Raquel"],
      fr: ["Anne", "Sara", "Rebecca", "Rachel"]
    },
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 45,
    question: "Chi costruì l'arca dell'alleanza?",
    questions: {
      it: "Chi costruì l'arca dell'alleanza?",
      en: "Who built the Ark of the Covenant?",
      es: "¿Quién construyó el Arca de la Alianza?",
      pt: "Quem construiu a Arca da Aliança?",
      fr: "Qui a construit l'Arche d'Alliance?"
    },
    options: ["Mosè", "Aronne", "Bezaleel", "Giosuè"],
    optionsTranslated: {
      it: ["Mosè", "Aronne", "Bezaleel", "Giosuè"],
      en: ["Moses", "Aaron", "Bezalel", "Joshua"],
      es: ["Moisés", "Aarón", "Bezaleel", "Josué"],
      pt: ["Moisés", "Arão", "Bezalel", "Josué"],
      fr: ["Moïse", "Aaron", "Betsaleel", "Josué"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "hard",
  },
  {
    id: 46,
    question: "Chi fu gettato nella fossa dei leoni?",
    questions: {
      it: "Chi fu gettato nella fossa dei leoni?",
      en: "Who was thrown into the lions' den?",
      es: "¿Quién fue arrojado al foso de los leones?",
      pt: "Quem foi jogado na cova dos leões?",
      fr: "Qui a été jeté dans la fosse aux lions?"
    },
    options: ["Daniele", "Davide", "Giuseppe", "Elia"],
    optionsTranslated: {
      it: ["Daniele", "Davide", "Giuseppe", "Elia"],
      en: ["Daniel", "David", "Joseph", "Elijah"],
      es: ["Daniel", "David", "José", "Elías"],
      pt: ["Daniel", "Davi", "José", "Elias"],
      fr: ["Daniel", "David", "Joseph", "Élie"]
    },
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 47,
    question: "Chi era il fratello di Mosè?",
    questions: {
      it: "Chi era il fratello di Mosè?",
      en: "Who was Moses' brother?",
      es: "¿Quién era el hermano de Moisés?",
      pt: "Quem era o irmão de Moisés?",
      fr: "Qui était le frère de Moïse?"
    },
    options: ["Giosuè", "Aronne", "Caleb", "Nadab"],
    optionsTranslated: {
      it: ["Giosuè", "Aronne", "Caleb", "Nadab"],
      en: ["Joshua", "Aaron", "Caleb", "Nadab"],
      es: ["Josué", "Aarón", "Caleb", "Nadab"],
      pt: ["Josué", "Arão", "Calebe", "Nadabe"],
      fr: ["Josué", "Aaron", "Caleb", "Nadab"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 48,
    question: "Chi era la moglie di Isacco?",
    questions: {
      it: "Chi era la moglie di Isacco?",
      en: "Who was Isaac's wife?",
      es: "¿Quién era la esposa de Isaac?",
      pt: "Quem era a esposa de Isaque?",
      fr: "Qui était la femme d'Isaac?"
    },
    options: ["Sara", "Rebecca", "Lia", "Rachele"],
    optionsTranslated: {
      it: ["Sara", "Rebecca", "Lia", "Rachele"],
      en: ["Sarah", "Rebekah", "Leah", "Rachel"],
      es: ["Sara", "Rebeca", "Lea", "Raquel"],
      pt: ["Sara", "Rebeca", "Lia", "Raquel"],
      fr: ["Sara", "Rebecca", "Léa", "Rachel"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 49,
    question: "Chi lottò con un angelo e fu chiamato Israele?",
    questions: {
      it: "Chi lottò con un angelo e fu chiamato Israele?",
      en: "Who wrestled with an angel and was called Israel?",
      es: "¿Quién luchó con un ángel y fue llamado Israel?",
      pt: "Quem lutou com um anjo e foi chamado Israel?",
      fr: "Qui a lutté avec un ange et a été appelé Israël?"
    },
    options: ["Abramo", "Isacco", "Giacobbe", "Giuseppe"],
    optionsTranslated: {
      it: ["Abramo", "Isacco", "Giacobbe", "Giuseppe"],
      en: ["Abraham", "Isaac", "Jacob", "Joseph"],
      es: ["Abraham", "Isaac", "Jacob", "José"],
      pt: ["Abraão", "Isaque", "Jacó", "José"],
      fr: ["Abraham", "Isaac", "Jacob", "Joseph"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 50,
    question: "Chi fu assunto in cielo su un carro di fuoco?",
    questions: {
      it: "Chi fu assunto in cielo su un carro di fuoco?",
      en: "Who was taken up to heaven in a chariot of fire?",
      es: "¿Quién fue llevado al cielo en un carro de fuego?",
      pt: "Quem foi levado ao céu em um carro de fogo?",
      fr: "Qui a été enlevé au ciel sur un char de feu?"
    },
    options: ["Mosè", "Elia", "Eliseo", "Enoch"],
    optionsTranslated: {
      it: ["Mosè", "Elia", "Eliseo", "Enoch"],
      en: ["Moses", "Elijah", "Elisha", "Enoch"],
      es: ["Moisés", "Elías", "Eliseo", "Enoc"],
      pt: ["Moisés", "Elias", "Eliseu", "Enoque"],
      fr: ["Moïse", "Élie", "Élisée", "Énoch"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 51,
    question: "Quale profeta fu chiamato da Dio da fanciullo?",
    questions: {
      it: "Quale profeta fu chiamato da Dio da fanciullo?",
      en: "Which prophet was called by God as a child?",
      es: "¿Qué profeta fue llamado por Dios siendo niño?",
      pt: "Qual profeta foi chamado por Deus quando criança?",
      fr: "Quel prophète a été appelé par Dieu enfant?"
    },
    options: ["Isaia", "Geremia", "Samuele", "Daniele"],
    optionsTranslated: {
      it: ["Isaia", "Geremia", "Samuele", "Daniele"],
      en: ["Isaiah", "Jeremiah", "Samuel", "Daniel"],
      es: ["Isaías", "Jeremías", "Samuel", "Daniel"],
      pt: ["Isaías", "Jeremias", "Samuel", "Daniel"],
      fr: ["Isaïe", "Jérémie", "Samuel", "Daniel"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 52,
    question: "Chi fu il suocero di Mosè?",
    questions: {
      it: "Chi fu il suocero di Mosè?",
      en: "Who was Moses' father-in-law?",
      es: "¿Quién fue el suegro de Moisés?",
      pt: "Quem foi o sogro de Moisés?",
      fr: "Qui était le beau-père de Moïse?"
    },
    options: ["Ietro", "Aronne", "Giosuè", "Caleb"],
    optionsTranslated: {
      it: ["Ietro", "Aronne", "Giosuè", "Caleb"],
      en: ["Jethro", "Aaron", "Joshua", "Caleb"],
      es: ["Jetro", "Aarón", "Josué", "Caleb"],
      pt: ["Jetro", "Arão", "Josué", "Calebe"],
      fr: ["Jéthro", "Aaron", "Josué", "Caleb"]
    },
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "hard",
  },
  {
    id: 53,
    question: "Chi era la nutrice di Esaù e Giacobbe?",
    questions: {
      it: "Chi era la nutrice di Esaù e Giacobbe?",
      en: "Who was the nurse of Esau and Jacob?",
      es: "¿Quién fue la nodriza de Esaú y Jacob?",
      pt: "Quem foi a ama de Esaú e Jacó?",
      fr: "Qui était la nourrice d'Ésaü et Jacob?"
    },
    options: ["Debora", "Anna", "Agar", "Sara"],
    optionsTranslated: {
      it: ["Debora", "Anna", "Agar", "Sara"],
      en: ["Deborah", "Hannah", "Hagar", "Sarah"],
      es: ["Débora", "Ana", "Agar", "Sara"],
      pt: ["Débora", "Ana", "Agar", "Sara"],
      fr: ["Débora", "Anne", "Agar", "Sara"]
    },
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "hard",
  },
  {
    id: 54,
    question: "Chi fu il successore di Mosè?",
    questions: {
      it: "Chi fu il successore di Mosè?",
      en: "Who was Moses' successor?",
      es: "¿Quién fue el sucesor de Moisés?",
      pt: "Quem foi o sucessor de Moisés?",
      fr: "Qui était le successeur de Moïse?"
    },
    options: ["Aronne", "Giosuè", "Caleb", "Eleazaro"],
    optionsTranslated: {
      it: ["Aronne", "Giosuè", "Caleb", "Eleazaro"],
      en: ["Aaron", "Joshua", "Caleb", "Eleazar"],
      es: ["Aarón", "Josué", "Caleb", "Eleazar"],
      pt: ["Arão", "Josué", "Calebe", "Eleazar"],
      fr: ["Aaron", "Josué", "Caleb", "Éléazar"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 55,
    question: "Chi fu la madre di Giovanni Battista?",
    questions: {
      it: "Chi fu la madre di Giovanni Battista?",
      en: "Who was John the Baptist's mother?",
      es: "¿Quién fue la madre de Juan Bautista?",
      pt: "Quem foi a mãe de João Batista?",
      fr: "Qui était la mère de Jean Baptiste?"
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
    id: 56,
    question: "Chi era il padre adottivo di Gesù?",
    questions: {
      it: "Chi era il padre adottivo di Gesù?",
      en: "Who was Jesus' adoptive father?",
      es: "¿Quién era el padre adoptivo de Jesús?",
      pt: "Quem era o pai adotivo de Jesus?",
      fr: "Qui était le père adoptif de Jésus?"
    },
    options: ["Giuseppe", "Zaccaria", "Gioachino", "Simeone"],
    optionsTranslated: {
      it: ["Giuseppe", "Zaccaria", "Gioachino", "Simeone"],
      en: ["Joseph", "Zechariah", "Joachim", "Simeon"],
      es: ["José", "Zacarías", "Joaquín", "Simeón"],
      pt: ["José", "Zacarias", "Joaquim", "Simeão"],
      fr: ["Joseph", "Zacharie", "Joachim", "Siméon"]
    },
    correctAnswer: 0,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 57,
    question: "Chi perseguitò i cristiani prima di convertirsi?",
    questions: {
      it: "Chi perseguitò i cristiani prima di convertirsi?",
      en: "Who persecuted Christians before converting?",
      es: "¿Quién persiguió a los cristianos antes de convertirse?",
      pt: "Quem perseguiu os cristãos antes de se converter?",
      fr: "Qui a persécuté les chrétiens avant de se convertir?"
    },
    options: ["Pietro", "Paolo", "Barnaba", "Timoteo"],
    optionsTranslated: {
      it: ["Pietro", "Paolo", "Barnaba", "Timoteo"],
      en: ["Peter", "Paul", "Barnabas", "Timothy"],
      es: ["Pedro", "Pablo", "Bernabé", "Timoteo"],
      pt: ["Pedro", "Paulo", "Barnabé", "Timóteo"],
      fr: ["Pierre", "Paul", "Barnabas", "Timothée"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },
  {
    id: 58,
    question: "Chi era il sommo sacerdote che interrogò Gesù?",
    questions: {
      it: "Chi era il sommo sacerdote che interrogò Gesù?",
      en: "Who was the high priest who interrogated Jesus?",
      es: "¿Quién era el sumo sacerdote que interrogó a Jesús?",
      pt: "Quem era o sumo sacerdote que interrogou Jesus?",
      fr: "Qui était le grand prêtre qui a interrogé Jésus?"
    },
    options: ["Anania", "Caifa", "Gamaliele", "Anna"],
    optionsTranslated: {
      it: ["Anania", "Caifa", "Gamaliele", "Anna"],
      en: ["Ananias", "Caiaphas", "Gamaliel", "Annas"],
      es: ["Ananías", "Caifás", "Gamaliel", "Anás"],
      pt: ["Ananias", "Caifás", "Gamaliel", "Anás"],
      fr: ["Ananie", "Caïphe", "Gamaliel", "Anne"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 59,
    question: "Chi fu risuscitato da Gesù dopo quattro giorni?",
    questions: {
      it: "Chi fu risuscitato da Gesù dopo quattro giorni?",
      en: "Who was raised by Jesus after four days?",
      es: "¿Quién fue resucitado por Jesús después de cuatro días?",
      pt: "Quem foi ressuscitado por Jesus após quatro dias?",
      fr: "Qui a été ressuscité par Jésus après quatre jours?"
    },
    options: ["Il figlio della vedova", "La figlia di Giairo", "Lazzaro", "Tabita"],
    optionsTranslated: {
      it: ["Il figlio della vedova", "La figlia di Giairo", "Lazzaro", "Tabita"],
      en: ["The widow's son", "Jairus' daughter", "Lazarus", "Tabitha"],
      es: ["El hijo de la viuda", "La hija de Jairo", "Lázaro", "Tabita"],
      pt: ["O filho da viúva", "A filha de Jairo", "Lázaro", "Tabita"],
      fr: ["Le fils de la veuve", "La fille de Jaïre", "Lazare", "Tabitha"]
    },
    correctAnswer: 2,
    category: "Personaggi Biblici",
    difficulty: "medium",
  },
  {
    id: 60,
    question: "Chi tradì Sansone rivelando il segreto della sua forza?",
    questions: {
      it: "Chi tradì Sansone rivelando il segreto della sua forza?",
      en: "Who betrayed Samson by revealing the secret of his strength?",
      es: "¿Quién traicionó a Sansón revelando el secreto de su fuerza?",
      pt: "Quem traiu Sansão revelando o segredo de sua força?",
      fr: "Qui a trahi Samson en révélant le secret de sa force?"
    },
    options: ["Rut", "Dalila", "Debora", "Ester"],
    optionsTranslated: {
      it: ["Rut", "Dalila", "Debora", "Ester"],
      en: ["Ruth", "Delilah", "Deborah", "Esther"],
      es: ["Rut", "Dalila", "Débora", "Ester"],
      pt: ["Rute", "Dalila", "Débora", "Ester"],
      fr: ["Ruth", "Dalila", "Débora", "Esther"]
    },
    correctAnswer: 1,
    category: "Personaggi Biblici",
    difficulty: "easy",
  },

  // ============= PENTATEUCO (20 questions) =============
  {
    id: 61,
    question: "In quanti giorni Dio creò il mondo secondo la Genesi?",
    questions: {
      it: "In quanti giorni Dio creò il mondo secondo la Genesi?",
      en: "In how many days did God create the world according to Genesis?",
      es: "¿En cuántos días Dios creó el mundo según el Génesis?",
      pt: "Em quantos dias Deus criou o mundo segundo Gênesis?",
      fr: "En combien de jours Dieu a-t-il créé le monde selon la Genèse?"
    },
    options: ["5", "6", "7", "8"],
    optionsTranslated: {
      it: ["5", "6", "7", "8"],
      en: ["5", "6", "7", "8"],
      es: ["5", "6", "7", "8"],
      pt: ["5", "6", "7", "8"],
      fr: ["5", "6", "7", "8"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "easy",
  },
  {
    id: 62,
    question: "Quale fu il primo comandamento dato a Mosè?",
    questions: {
      it: "Quale fu il primo comandamento dato a Mosè?",
      en: "What was the first commandment given to Moses?",
      es: "¿Cuál fue el primer mandamiento dado a Moisés?",
      pt: "Qual foi o primeiro mandamento dado a Moisés?",
      fr: "Quel était le premier commandement donné à Moïse?"
    },
    options: ["Non uccidere", "Non avere altri dei", "Onora il padre e la madre", "Non rubare"],
    optionsTranslated: {
      it: ["Non uccidere", "Non avere altri dei", "Onora il padre e la madre", "Non rubare"],
      en: ["You shall not kill", "You shall have no other gods", "Honor your father and mother", "You shall not steal"],
      es: ["No matarás", "No tendrás otros dioses", "Honra a tu padre y madre", "No robarás"],
      pt: ["Não matarás", "Não terás outros deuses", "Honra teu pai e tua mãe", "Não roubarás"],
      fr: ["Tu ne tueras point", "Tu n'auras pas d'autres dieux", "Honore ton père et ta mère", "Tu ne voleras point"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 63,
    question: "Quale animale tentò Eva nel giardino dell'Eden?",
    questions: {
      it: "Quale animale tentò Eva nel giardino dell'Eden?",
      en: "Which animal tempted Eve in the Garden of Eden?",
      es: "¿Qué animal tentó a Eva en el jardín del Edén?",
      pt: "Qual animal tentou Eva no jardim do Éden?",
      fr: "Quel animal a tenté Ève dans le jardin d'Éden?"
    },
    options: ["Serpente", "Colomba", "Agnello", "Leone"],
    optionsTranslated: {
      it: ["Serpente", "Colomba", "Agnello", "Leone"],
      en: ["Serpent", "Dove", "Lamb", "Lion"],
      es: ["Serpiente", "Paloma", "Cordero", "León"],
      pt: ["Serpente", "Pomba", "Cordeiro", "Leão"],
      fr: ["Serpent", "Colombe", "Agneau", "Lion"]
    },
    correctAnswer: 0,
    category: "Pentateuco",
    difficulty: "easy",
  },
  {
    id: 64,
    question: "Quale segno diede Dio a Caino?",
    questions: {
      it: "Quale segno diede Dio a Caino?",
      en: "What sign did God give to Cain?",
      es: "¿Qué señal le dio Dios a Caín?",
      pt: "Que sinal Deus deu a Caim?",
      fr: "Quel signe Dieu a-t-il donné à Caïn?"
    },
    options: ["Un marchio", "Un arcobaleno", "Una stella", "Una pietra"],
    optionsTranslated: {
      it: ["Un marchio", "Un arcobaleno", "Una stella", "Una pietra"],
      en: ["A mark", "A rainbow", "A star", "A stone"],
      es: ["Una marca", "Un arcoíris", "Una estrella", "Una piedra"],
      pt: ["Uma marca", "Um arco-íris", "Uma estrela", "Uma pedra"],
      fr: ["Une marque", "Un arc-en-ciel", "Une étoile", "Une pierre"]
    },
    correctAnswer: 0,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 65,
    question: "Quanti anni aveva Abramo quando nacque Isacco?",
    questions: {
      it: "Quanti anni aveva Abramo quando nacque Isacco?",
      en: "How old was Abraham when Isaac was born?",
      es: "¿Cuántos años tenía Abraham cuando nació Isaac?",
      pt: "Quantos anos Abraão tinha quando Isaque nasceu?",
      fr: "Quel âge avait Abraham quand Isaac est né?"
    },
    options: ["75", "99", "100", "120"],
    optionsTranslated: {
      it: ["75", "99", "100", "120"],
      en: ["75", "99", "100", "120"],
      es: ["75", "99", "100", "120"],
      pt: ["75", "99", "100", "120"],
      fr: ["75", "99", "100", "120"]
    },
    correctAnswer: 2,
    category: "Pentateuco",
    difficulty: "hard",
  },
  {
    id: 66,
    question: "Dove Abramo doveva sacrificare Isacco?",
    questions: {
      it: "Dove Abramo doveva sacrificare Isacco?",
      en: "Where was Abraham to sacrifice Isaac?",
      es: "¿Dónde debía Abraham sacrificar a Isaac?",
      pt: "Onde Abraão deveria sacrificar Isaque?",
      fr: "Où Abraham devait-il sacrifier Isaac?"
    },
    options: ["Monte Sinai", "Monte Moria", "Monte Nebo", "Monte Horeb"],
    optionsTranslated: {
      it: ["Monte Sinai", "Monte Moria", "Monte Nebo", "Monte Horeb"],
      en: ["Mount Sinai", "Mount Moriah", "Mount Nebo", "Mount Horeb"],
      es: ["Monte Sinaí", "Monte Moria", "Monte Nebo", "Monte Horeb"],
      pt: ["Monte Sinai", "Monte Moriá", "Monte Nebo", "Monte Horebe"],
      fr: ["Mont Sinaï", "Mont Moriah", "Mont Nebo", "Mont Horeb"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 67,
    question: "Quale libro del Pentateuco contiene il censimento del popolo?",
    questions: {
      it: "Quale libro del Pentateuco contiene il censimento del popolo?",
      en: "Which book of the Pentateuch contains the census of the people?",
      es: "¿Qué libro del Pentateuco contiene el censo del pueblo?",
      pt: "Qual livro do Pentateuco contém o censo do povo?",
      fr: "Quel livre du Pentateuque contient le recensement du peuple?"
    },
    options: ["Genesi", "Esodo", "Levitico", "Numeri"],
    optionsTranslated: {
      it: ["Genesi", "Esodo", "Levitico", "Numeri"],
      en: ["Genesis", "Exodus", "Leviticus", "Numbers"],
      es: ["Génesis", "Éxodo", "Levítico", "Números"],
      pt: ["Gênesis", "Êxodo", "Levítico", "Números"],
      fr: ["Genèse", "Exode", "Lévitique", "Nombres"]
    },
    correctAnswer: 3,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 68,
    question: "Quale figlio di Adamo ed Eva sostituì Abele?",
    questions: {
      it: "Quale figlio di Adamo ed Eva sostituì Abele?",
      en: "Which son of Adam and Eve replaced Abel?",
      es: "¿Qué hijo de Adán y Eva reemplazó a Abel?",
      pt: "Qual filho de Adão e Eva substituiu Abel?",
      fr: "Quel fils d'Adam et Ève a remplacé Abel?"
    },
    options: ["Caino", "Set", "Enos", "Enoch"],
    optionsTranslated: {
      it: ["Caino", "Set", "Enos", "Enoch"],
      en: ["Cain", "Seth", "Enosh", "Enoch"],
      es: ["Caín", "Set", "Enós", "Enoc"],
      pt: ["Caim", "Sete", "Enos", "Enoque"],
      fr: ["Caïn", "Seth", "Énosh", "Énoch"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 69,
    question: "Quante spie Mosè mandò nella terra promessa?",
    questions: {
      it: "Quante spie Mosè mandò nella terra promessa?",
      en: "How many spies did Moses send to the promised land?",
      es: "¿Cuántos espías envió Moisés a la tierra prometida?",
      pt: "Quantos espiões Moisés enviou à terra prometida?",
      fr: "Combien d'espions Moïse a-t-il envoyés en terre promise?"
    },
    options: ["7", "10", "12", "40"],
    optionsTranslated: {
      it: ["7", "10", "12", "40"],
      en: ["7", "10", "12", "40"],
      es: ["7", "10", "12", "40"],
      pt: ["7", "10", "12", "40"],
      fr: ["7", "10", "12", "40"]
    },
    correctAnswer: 2,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 70,
    question: "In quale libro si trovano le leggi sulla purità?",
    questions: {
      it: "In quale libro si trovano le leggi sulla purità?",
      en: "In which book are the purity laws found?",
      es: "¿En qué libro se encuentran las leyes de pureza?",
      pt: "Em qual livro estão as leis de pureza?",
      fr: "Dans quel livre se trouvent les lois de pureté?"
    },
    options: ["Genesi", "Esodo", "Levitico", "Deuteronomio"],
    optionsTranslated: {
      it: ["Genesi", "Esodo", "Levitico", "Deuteronomio"],
      en: ["Genesis", "Exodus", "Leviticus", "Deuteronomy"],
      es: ["Génesis", "Éxodo", "Levítico", "Deuteronomio"],
      pt: ["Gênesis", "Êxodo", "Levítico", "Deuteronômio"],
      fr: ["Genèse", "Exode", "Lévitique", "Deutéronome"]
    },
    correctAnswer: 2,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 71,
    question: "Quanti anni vagò Israele nel deserto?",
    questions: {
      it: "Quanti anni vagò Israele nel deserto?",
      en: "How many years did Israel wander in the desert?",
      es: "¿Cuántos años vagó Israel en el desierto?",
      pt: "Quantos anos Israel perambulou no deserto?",
      fr: "Combien d'années Israël a-t-il erré dans le désert?"
    },
    options: ["7", "20", "40", "70"],
    optionsTranslated: {
      it: ["7", "20", "40", "70"],
      en: ["7", "20", "40", "70"],
      es: ["7", "20", "40", "70"],
      pt: ["7", "20", "40", "70"],
      fr: ["7", "20", "40", "70"]
    },
    correctAnswer: 2,
    category: "Pentateuco",
    difficulty: "easy",
  },
  {
    id: 72,
    question: "Quale monte non fu permesso a Mosè di superare?",
    questions: {
      it: "Quale monte non fu permesso a Mosè di superare?",
      en: "Which mountain was Moses not allowed to cross?",
      es: "¿Qué monte no se le permitió cruzar a Moisés?",
      pt: "Qual monte Moisés não teve permissão de cruzar?",
      fr: "Quel mont Moïse n'a-t-il pas été autorisé à franchir?"
    },
    options: ["Monte Sinai", "Monte Horeb", "Monte Nebo", "Monte Sion"],
    optionsTranslated: {
      it: ["Monte Sinai", "Monte Horeb", "Monte Nebo", "Monte Sion"],
      en: ["Mount Sinai", "Mount Horeb", "Mount Nebo", "Mount Zion"],
      es: ["Monte Sinaí", "Monte Horeb", "Monte Nebo", "Monte Sión"],
      pt: ["Monte Sinai", "Monte Horebe", "Monte Nebo", "Monte Sião"],
      fr: ["Mont Sinaï", "Mont Horeb", "Mont Nebo", "Mont Sion"]
    },
    correctAnswer: 2,
    category: "Pentateuco",
    difficulty: "hard",
  },
  {
    id: 73,
    question: "Quale figlio di Noè vide la nudità del padre?",
    questions: {
      it: "Quale figlio di Noè vide la nudità del padre?",
      en: "Which son of Noah saw his father's nakedness?",
      es: "¿Qué hijo de Noé vio la desnudez de su padre?",
      pt: "Qual filho de Noé viu a nudez de seu pai?",
      fr: "Quel fils de Noé a vu la nudité de son père?"
    },
    options: ["Sem", "Cam", "Iafet", "Nessuno"],
    optionsTranslated: {
      it: ["Sem", "Cam", "Iafet", "Nessuno"],
      en: ["Shem", "Ham", "Japheth", "None"],
      es: ["Sem", "Cam", "Jafet", "Ninguno"],
      pt: ["Sem", "Cam", "Jafé", "Nenhum"],
      fr: ["Sem", "Cham", "Japhet", "Aucun"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 74,
    question: "Quale fu il segno dell'alleanza tra Dio e Noè?",
    questions: {
      it: "Quale fu il segno dell'alleanza tra Dio e Noè?",
      en: "What was the sign of the covenant between God and Noah?",
      es: "¿Cuál fue la señal del pacto entre Dios y Noé?",
      pt: "Qual foi o sinal da aliança entre Deus e Noé?",
      fr: "Quel était le signe de l'alliance entre Dieu et Noé?"
    },
    options: ["L'arcobaleno", "La colomba", "L'arco", "Il diluvio"],
    optionsTranslated: {
      it: ["L'arcobaleno", "La colomba", "L'arco", "Il diluvio"],
      en: ["The rainbow", "The dove", "The bow", "The flood"],
      es: ["El arcoíris", "La paloma", "El arco", "El diluvio"],
      pt: ["O arco-íris", "A pomba", "O arco", "O dilúvio"],
      fr: ["L'arc-en-ciel", "La colombe", "L'arc", "Le déluge"]
    },
    correctAnswer: 0,
    category: "Pentateuco",
    difficulty: "easy",
  },
  {
    id: 75,
    question: "Quale fu l'ultimo libro scritto da Mosè?",
    questions: {
      it: "Quale fu l'ultimo libro scritto da Mosè?",
      en: "What was the last book written by Moses?",
      es: "¿Cuál fue el último libro escrito por Moisés?",
      pt: "Qual foi o último livro escrito por Moisés?",
      fr: "Quel a été le dernier livre écrit par Moïse?"
    },
    options: ["Numeri", "Levitico", "Esodo", "Deuteronomio"],
    optionsTranslated: {
      it: ["Numeri", "Levitico", "Esodo", "Deuteronomio"],
      en: ["Numbers", "Leviticus", "Exodus", "Deuteronomy"],
      es: ["Números", "Levítico", "Éxodo", "Deuteronomio"],
      pt: ["Números", "Levítico", "Êxodo", "Deuteronômio"],
      fr: ["Nombres", "Lévitique", "Exode", "Deutéronome"]
    },
    correctAnswer: 3,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 76,
    question: "Quale nome significa 'padre di una moltitudine'?",
    questions: {
      it: "Quale nome significa 'padre di una moltitudine'?",
      en: "Which name means 'father of a multitude'?",
      es: "¿Qué nombre significa 'padre de una multitud'?",
      pt: "Qual nome significa 'pai de uma multidão'?",
      fr: "Quel nom signifie 'père d'une multitude'?"
    },
    options: ["Abramo", "Isacco", "Giacobbe", "Giuseppe"],
    optionsTranslated: {
      it: ["Abramo", "Isacco", "Giacobbe", "Giuseppe"],
      en: ["Abraham", "Isaac", "Jacob", "Joseph"],
      es: ["Abraham", "Isaac", "Jacob", "José"],
      pt: ["Abraão", "Isaque", "Jacó", "José"],
      fr: ["Abraham", "Isaac", "Jacob", "Joseph"]
    },
    correctAnswer: 0,
    category: "Pentateuco",
    difficulty: "hard",
  },
  {
    id: 77,
    question: "Quale tribù non ricevette terra in eredità?",
    questions: {
      it: "Quale tribù non ricevette terra in eredità?",
      en: "Which tribe did not receive land as an inheritance?",
      es: "¿Qué tribu no recibió tierra como herencia?",
      pt: "Qual tribo não recebeu terra como herança?",
      fr: "Quelle tribu n'a pas reçu de terre en héritage?"
    },
    options: ["Giuda", "Levi", "Beniamino", "Dan"],
    optionsTranslated: {
      it: ["Giuda", "Levi", "Beniamino", "Dan"],
      en: ["Judah", "Levi", "Benjamin", "Dan"],
      es: ["Judá", "Leví", "Benjamín", "Dan"],
      pt: ["Judá", "Levi", "Benjamim", "Dã"],
      fr: ["Juda", "Lévi", "Benjamin", "Dan"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "hard",
  },
  {
    id: 78,
    question: "Dove morì Mosè?",
    questions: {
      it: "Dove morì Mosè?",
      en: "Where did Moses die?",
      es: "¿Dónde murió Moisés?",
      pt: "Onde Moisés morreu?",
      fr: "Où Moïse est-il mort?"
    },
    options: ["In Egitto", "Nel deserto", "Sul monte Nebo", "A Gerico"],
    optionsTranslated: {
      it: ["In Egitto", "Nel deserto", "Sul monte Nebo", "A Gerico"],
      en: ["In Egypt", "In the desert", "On Mount Nebo", "In Jericho"],
      es: ["En Egipto", "En el desierto", "En el monte Nebo", "En Jericó"],
      pt: ["No Egito", "No deserto", "No monte Nebo", "Em Jericó"],
      fr: ["En Égypte", "Dans le désert", "Sur le mont Nebo", "À Jéricho"]
    },
    correctAnswer: 2,
    category: "Pentateuco",
    difficulty: "medium",
  },
  {
    id: 79,
    question: "Quale fu la primogenita dei figli di Giacobbe?",
    questions: {
      it: "Quale fu la primogenita dei figli di Giacobbe?",
      en: "Who was the firstborn of Jacob's children?",
      es: "¿Quién fue el primogénito de los hijos de Jacob?",
      pt: "Quem foi o primogênito dos filhos de Jacó?",
      fr: "Qui était le premier-né des enfants de Jacob?"
    },
    options: ["Giuseppe", "Ruben", "Giuda", "Levi"],
    optionsTranslated: {
      it: ["Giuseppe", "Ruben", "Giuda", "Levi"],
      en: ["Joseph", "Reuben", "Judah", "Levi"],
      es: ["José", "Rubén", "Judá", "Leví"],
      pt: ["José", "Rúben", "Judá", "Levi"],
      fr: ["Joseph", "Ruben", "Juda", "Lévi"]
    },
    correctAnswer: 1,
    category: "Pentateuco",
    difficulty: "hard",
  },
  {
    id: 80,
    question: "Quale città Lot scelse per abitare?",
    questions: {
      it: "Quale città Lot scelse per abitare?",
      en: "Which city did Lot choose to live in?",
      es: "¿Qué ciudad eligió Lot para vivir?",
      pt: "Qual cidade Ló escolheu para viver?",
      fr: "Quelle ville Lot a-t-il choisie pour vivre?"
    },
    options: ["Sodoma", "Gomorra", "Babilonia", "Ninive"],
    optionsTranslated: {
      it: ["Sodoma", "Gomorra", "Babilonia", "Ninive"],
      en: ["Sodom", "Gomorrah", "Babylon", "Nineveh"],
      es: ["Sodoma", "Gomorra", "Babilonia", "Nínive"],
      pt: ["Sodoma", "Gomorra", "Babilônia", "Nínive"],
      fr: ["Sodome", "Gomorrhe", "Babylone", "Ninive"]
    },
    correctAnswer: 0,
    category: "Pentateuco",
    difficulty: "medium",
  },

  // ============= PROFETI MINORI (20 questions) =============
  {
    id: 81,
    question: "Quale profeta minore fu inghiottito da un grande pesce?",
    questions: {
      it: "Quale profeta minore fu inghiottito da un grande pesce?",
      en: "Which minor prophet was swallowed by a great fish?",
      es: "¿Qué profeta menor fue tragado por un gran pez?",
      pt: "Qual profeta menor foi engolido por um grande peixe?",
      fr: "Quel prophète mineur a été avalé par un grand poisson?"
    },
    options: ["Giona", "Osea", "Amos", "Michea"],
    optionsTranslated: {
      it: ["Giona", "Osea", "Amos", "Michea"],
      en: ["Jonah", "Hosea", "Amos", "Micah"],
      es: ["Jonás", "Oseas", "Amós", "Miqueas"],
      pt: ["Jonas", "Oseias", "Amós", "Miqueias"],
      fr: ["Jonas", "Osée", "Amos", "Michée"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "easy",
  },
  {
    id: 82,
    question: "Quale profeta minore predisse la nascita del Messia a Betlemme?",
    questions: {
      it: "Quale profeta minore predisse la nascita del Messia a Betlemme?",
      en: "Which minor prophet predicted the Messiah's birth in Bethlehem?",
      es: "¿Qué profeta menor predijo el nacimiento del Mesías en Belén?",
      pt: "Qual profeta menor predisse o nascimento do Messias em Belém?",
      fr: "Quel prophète mineur a prédit la naissance du Messie à Bethléem?"
    },
    options: ["Gioele", "Michea", "Naum", "Abacuc"],
    optionsTranslated: {
      it: ["Gioele", "Michea", "Naum", "Abacuc"],
      en: ["Joel", "Micah", "Nahum", "Habakkuk"],
      es: ["Joel", "Miqueas", "Nahúm", "Habacuc"],
      pt: ["Joel", "Miqueias", "Naum", "Habacuque"],
      fr: ["Joël", "Michée", "Nahum", "Habakuk"]
    },
    correctAnswer: 1,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 83,
    question: "Quale profeta sposò una donna infedele per volontà di Dio?",
    questions: {
      it: "Quale profeta sposò una donna infedele per volontà di Dio?",
      en: "Which prophet married an unfaithful woman by God's will?",
      es: "¿Qué profeta se casó con una mujer infiel por voluntad de Dios?",
      pt: "Qual profeta casou com uma mulher infiel por vontade de Deus?",
      fr: "Quel prophète a épousé une femme infidèle par la volonté de Dieu?"
    },
    options: ["Osea", "Amos", "Abdia", "Aggeo"],
    optionsTranslated: {
      it: ["Osea", "Amos", "Abdia", "Aggeo"],
      en: ["Hosea", "Amos", "Obadiah", "Haggai"],
      es: ["Oseas", "Amós", "Abdías", "Hageo"],
      pt: ["Oseias", "Amós", "Obadias", "Ageu"],
      fr: ["Osée", "Amos", "Abdias", "Aggée"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 84,
    question: "Quale profeta profetizzò l'effusione dello Spirito Santo?",
    questions: {
      it: "Quale profeta profetizzò l'effusione dello Spirito Santo?",
      en: "Which prophet prophesied the outpouring of the Holy Spirit?",
      es: "¿Qué profeta profetizó el derramamiento del Espíritu Santo?",
      pt: "Qual profeta profetizou o derramamento do Espírito Santo?",
      fr: "Quel prophète a prophétisé l'effusion de l'Esprit Saint?"
    },
    options: ["Gioele", "Sofonia", "Malachia", "Zaccaria"],
    optionsTranslated: {
      it: ["Gioele", "Sofonia", "Malachia", "Zaccaria"],
      en: ["Joel", "Zephaniah", "Malachi", "Zechariah"],
      es: ["Joel", "Sofonías", "Malaquías", "Zacarías"],
      pt: ["Joel", "Sofonias", "Malaquias", "Zacarias"],
      fr: ["Joël", "Sophonie", "Malachie", "Zacharie"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 85,
    question: "Quale profeta parlò contro la città di Ninive?",
    questions: {
      it: "Quale profeta parlò contro la città di Ninive?",
      en: "Which prophet spoke against the city of Nineveh?",
      es: "¿Qué profeta habló contra la ciudad de Nínive?",
      pt: "Qual profeta falou contra a cidade de Nínive?",
      fr: "Quel prophète a parlé contre la ville de Ninive?"
    },
    options: ["Naum", "Abdia", "Giona", "Entrambi A e C"],
    optionsTranslated: {
      it: ["Naum", "Abdia", "Giona", "Entrambi A e C"],
      en: ["Nahum", "Obadiah", "Jonah", "Both A and C"],
      es: ["Nahúm", "Abdías", "Jonás", "A y C"],
      pt: ["Naum", "Obadias", "Jonas", "A e C"],
      fr: ["Nahum", "Abdias", "Jonas", "A et C"]
    },
    correctAnswer: 3,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 86,
    question: "Quale profeta minore era un pastore di Tecoa?",
    questions: {
      it: "Quale profeta minore era un pastore di Tecoa?",
      en: "Which minor prophet was a shepherd from Tekoa?",
      es: "¿Qué profeta menor era pastor de Tecoa?",
      pt: "Qual profeta menor era pastor de Tecoa?",
      fr: "Quel prophète mineur était berger de Tekoa?"
    },
    options: ["Amos", "Osea", "Michea", "Sofonia"],
    optionsTranslated: {
      it: ["Amos", "Osea", "Michea", "Sofonia"],
      en: ["Amos", "Hosea", "Micah", "Zephaniah"],
      es: ["Amós", "Oseas", "Miqueas", "Sofonías"],
      pt: ["Amós", "Oseias", "Miqueias", "Sofonias"],
      fr: ["Amos", "Osée", "Michée", "Sophonie"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 87,
    question: "Quale profeta parlò contro Edom?",
    questions: {
      it: "Quale profeta parlò contro Edom?",
      en: "Which prophet spoke against Edom?",
      es: "¿Qué profeta habló contra Edom?",
      pt: "Qual profeta falou contra Edom?",
      fr: "Quel prophète a parlé contre Édom?"
    },
    options: ["Abdia", "Gioele", "Aggeo", "Abacuc"],
    optionsTranslated: {
      it: ["Abdia", "Gioele", "Aggeo", "Abacuc"],
      en: ["Obadiah", "Joel", "Haggai", "Habakkuk"],
      es: ["Abdías", "Joel", "Hageo", "Habacuc"],
      pt: ["Obadias", "Joel", "Ageu", "Habacuque"],
      fr: ["Abdias", "Joël", "Aggée", "Habakuk"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 88,
    question: "Quale profeta incoraggiò la ricostruzione del tempio?",
    questions: {
      it: "Quale profeta incoraggiò la ricostruzione del tempio?",
      en: "Which prophet encouraged the rebuilding of the temple?",
      es: "¿Qué profeta alentó la reconstrucción del templo?",
      pt: "Qual profeta encorajou a reconstrução do templo?",
      fr: "Quel prophète a encouragé la reconstruction du temple?"
    },
    options: ["Aggeo", "Malachia", "Sofonia", "Naum"],
    optionsTranslated: {
      it: ["Aggeo", "Malachia", "Sofonia", "Naum"],
      en: ["Haggai", "Malachi", "Zephaniah", "Nahum"],
      es: ["Hageo", "Malaquías", "Sofonías", "Nahúm"],
      pt: ["Ageu", "Malaquias", "Sofonias", "Naum"],
      fr: ["Aggée", "Malachie", "Sophonie", "Nahum"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 89,
    question: "Quale fu l'ultimo profeta dell'Antico Testamento?",
    questions: {
      it: "Quale fu l'ultimo profeta dell'Antico Testamento?",
      en: "Who was the last prophet of the Old Testament?",
      es: "¿Quién fue el último profeta del Antiguo Testamento?",
      pt: "Quem foi o último profeta do Antigo Testamento?",
      fr: "Qui était le dernier prophète de l'Ancien Testament?"
    },
    options: ["Zaccaria", "Malachia", "Aggeo", "Gioele"],
    optionsTranslated: {
      it: ["Zaccaria", "Malachia", "Aggeo", "Gioele"],
      en: ["Zechariah", "Malachi", "Haggai", "Joel"],
      es: ["Zacarías", "Malaquías", "Hageo", "Joel"],
      pt: ["Zacarias", "Malaquias", "Ageu", "Joel"],
      fr: ["Zacharie", "Malachie", "Aggée", "Joël"]
    },
    correctAnswer: 1,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 90,
    question: "Quale profeta vide visioni di candelabri e ulivi?",
    questions: {
      it: "Quale profeta vide visioni di candelabri e ulivi?",
      en: "Which prophet saw visions of lampstands and olive trees?",
      es: "¿Qué profeta vio visiones de candelabros y olivos?",
      pt: "Qual profeta viu visões de candelabros e oliveiras?",
      fr: "Quel prophète a vu des visions de chandeliers et d'oliviers?"
    },
    options: ["Zaccaria", "Abacuc", "Sofonia", "Malachia"],
    optionsTranslated: {
      it: ["Zaccaria", "Abacuc", "Sofonia", "Malachia"],
      en: ["Zechariah", "Habakkuk", "Zephaniah", "Malachi"],
      es: ["Zacarías", "Habacuc", "Sofonías", "Malaquías"],
      pt: ["Zacarias", "Habacuque", "Sofonias", "Malaquias"],
      fr: ["Zacharie", "Habakuk", "Sophonie", "Malachie"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 91,
    question: "Quale profeta parlò di 'cavallette' come piaga?",
    questions: {
      it: "Quale profeta parlò di 'cavallette' come piaga?",
      en: "Which prophet spoke of 'locusts' as a plague?",
      es: "¿Qué profeta habló de 'langostas' como plaga?",
      pt: "Qual profeta falou de 'gafanhotos' como praga?",
      fr: "Quel prophète a parlé de 'sauterelles' comme fléau?"
    },
    options: ["Gioele", "Amos", "Giona", "Michea"],
    optionsTranslated: {
      it: ["Gioele", "Amos", "Giona", "Michea"],
      en: ["Joel", "Amos", "Jonah", "Micah"],
      es: ["Joel", "Amós", "Jonás", "Miqueas"],
      pt: ["Joel", "Amós", "Jonas", "Miqueias"],
      fr: ["Joël", "Amos", "Jonas", "Michée"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 92,
    question: "Quanti sono i profeti minori?",
    questions: {
      it: "Quanti sono i profeti minori?",
      en: "How many are the minor prophets?",
      es: "¿Cuántos son los profetas menores?",
      pt: "Quantos são os profetas menores?",
      fr: "Combien sont les prophètes mineurs?"
    },
    options: ["10", "12", "15", "20"],
    optionsTranslated: {
      it: ["10", "12", "15", "20"],
      en: ["10", "12", "15", "20"],
      es: ["10", "12", "15", "20"],
      pt: ["10", "12", "15", "20"],
      fr: ["10", "12", "15", "20"]
    },
    correctAnswer: 1,
    category: "Profeti Minori",
    difficulty: "easy",
  },
  {
    id: 93,
    question: "Quale profeta profetizzò che 'il giusto vivrà per fede'?",
    questions: {
      it: "Quale profeta profetizzò che 'il giusto vivrà per fede'?",
      en: "Which prophet prophesied that 'the righteous will live by faith'?",
      es: "¿Qué profeta profetizó que 'el justo vivirá por la fe'?",
      pt: "Qual profeta profetizou que 'o justo viverá pela fé'?",
      fr: "Quel prophète a prophétisé que 'le juste vivra par la foi'?"
    },
    options: ["Abacuc", "Sofonia", "Aggeo", "Malachia"],
    optionsTranslated: {
      it: ["Abacuc", "Sofonia", "Aggeo", "Malachia"],
      en: ["Habakkuk", "Zephaniah", "Haggai", "Malachi"],
      es: ["Habacuc", "Sofonías", "Hageo", "Malaquías"],
      pt: ["Habacuque", "Sofonias", "Ageu", "Malaquias"],
      fr: ["Habakuk", "Sophonie", "Aggée", "Malachie"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 94,
    question: "Quale profeta fu contemporaneo di Aggeo?",
    questions: {
      it: "Quale profeta fu contemporaneo di Aggeo?",
      en: "Which prophet was contemporary with Haggai?",
      es: "¿Qué profeta fue contemporáneo de Hageo?",
      pt: "Qual profeta foi contemporâneo de Ageu?",
      fr: "Quel prophète était contemporain d'Aggée?"
    },
    options: ["Zaccaria", "Malachia", "Gioele", "Osea"],
    optionsTranslated: {
      it: ["Zaccaria", "Malachia", "Gioele", "Osea"],
      en: ["Zechariah", "Malachi", "Joel", "Hosea"],
      es: ["Zacarías", "Malaquías", "Joel", "Oseas"],
      pt: ["Zacarias", "Malaquias", "Joel", "Oseias"],
      fr: ["Zacharie", "Malachie", "Joël", "Osée"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 95,
    question: "Quale profeta menzionò 'la valle di Giosafat'?",
    questions: {
      it: "Quale profeta menzionò 'la valle di Giosafat'?",
      en: "Which prophet mentioned 'the valley of Jehoshaphat'?",
      es: "¿Qué profeta mencionó 'el valle de Josafat'?",
      pt: "Qual profeta mencionou 'o vale de Josafá'?",
      fr: "Quel prophète a mentionné 'la vallée de Josaphat'?"
    },
    options: ["Gioele", "Amos", "Abdia", "Naum"],
    optionsTranslated: {
      it: ["Gioele", "Amos", "Abdia", "Naum"],
      en: ["Joel", "Amos", "Obadiah", "Nahum"],
      es: ["Joel", "Amós", "Abdías", "Nahúm"],
      pt: ["Joel", "Amós", "Obadias", "Naum"],
      fr: ["Joël", "Amos", "Abdias", "Nahum"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 96,
    question: "Quale profeta disse 'Praticare la giustizia e amare la misericordia'?",
    questions: {
      it: "Quale profeta disse 'Praticare la giustizia e amare la misericordia'?",
      en: "Which prophet said 'Do justice and love mercy'?",
      es: "¿Qué profeta dijo 'Hacer justicia y amar la misericordia'?",
      pt: "Qual profeta disse 'Fazer justiça e amar a misericórdia'?",
      fr: "Quel prophète a dit 'Pratiquer la justice et aimer la miséricorde'?"
    },
    options: ["Michea", "Osea", "Sofonia", "Amos"],
    optionsTranslated: {
      it: ["Michea", "Osea", "Sofonia", "Amos"],
      en: ["Micah", "Hosea", "Zephaniah", "Amos"],
      es: ["Miqueas", "Oseas", "Sofonías", "Amós"],
      pt: ["Miqueias", "Oseias", "Sofonias", "Amós"],
      fr: ["Michée", "Osée", "Sophonie", "Amos"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 97,
    question: "Quale profeta minore ha solo un capitolo?",
    questions: {
      it: "Quale profeta minore ha solo un capitolo?",
      en: "Which minor prophet has only one chapter?",
      es: "¿Qué profeta menor tiene solo un capítulo?",
      pt: "Qual profeta menor tem apenas um capítulo?",
      fr: "Quel prophète mineur n'a qu'un seul chapitre?"
    },
    options: ["Abdia", "Giona", "Naum", "Aggeo"],
    optionsTranslated: {
      it: ["Abdia", "Giona", "Naum", "Aggeo"],
      en: ["Obadiah", "Jonah", "Nahum", "Haggai"],
      es: ["Abdías", "Jonás", "Nahúm", "Hageo"],
      pt: ["Obadias", "Jonas", "Naum", "Ageu"],
      fr: ["Abdias", "Jonas", "Nahum", "Aggée"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },
  {
    id: 98,
    question: "Quale profeta parlò del 'giorno del Signore'?",
    questions: {
      it: "Quale profeta parlò del 'giorno del Signore'?",
      en: "Which prophet spoke of 'the day of the Lord'?",
      es: "¿Qué profeta habló del 'día del Señor'?",
      pt: "Qual profeta falou do 'dia do Senhor'?",
      fr: "Quel prophète a parlé du 'jour du Seigneur'?"
    },
    options: ["Sofonia", "Tutti i profeti", "Gioele", "Malachia"],
    optionsTranslated: {
      it: ["Sofonia", "Tutti i profeti", "Gioele", "Malachia"],
      en: ["Zephaniah", "All prophets", "Joel", "Malachi"],
      es: ["Sofonías", "Todos los profetas", "Joel", "Malaquías"],
      pt: ["Sofonias", "Todos os profetas", "Joel", "Malaquias"],
      fr: ["Sophonie", "Tous les prophètes", "Joël", "Malachie"]
    },
    correctAnswer: 1,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 99,
    question: "Quanti capitoli ha il libro di Giona?",
    questions: {
      it: "Quanti capitoli ha il libro di Giona?",
      en: "How many chapters does the book of Jonah have?",
      es: "¿Cuántos capítulos tiene el libro de Jonás?",
      pt: "Quantos capítulos tem o livro de Jonas?",
      fr: "Combien de chapitres le livre de Jonas a-t-il?"
    },
    options: ["2", "3", "4", "5"],
    optionsTranslated: {
      it: ["2", "3", "4", "5"],
      en: ["2", "3", "4", "5"],
      es: ["2", "3", "4", "5"],
      pt: ["2", "3", "4", "5"],
      fr: ["2", "3", "4", "5"]
    },
    correctAnswer: 2,
    category: "Profeti Minori",
    difficulty: "medium",
  },
  {
    id: 100,
    question: "Quale profeta parlò della 'rugiada del mattino'?",
    questions: {
      it: "Quale profeta parlò della 'rugiada del mattino'?",
      en: "Which prophet spoke of 'the morning dew'?",
      es: "¿Qué profeta habló del 'rocío de la mañana'?",
      pt: "Qual profeta falou do 'orvalho da manhã'?",
      fr: "Quel prophète a parlé de 'la rosée du matin'?"
    },
    options: ["Osea", "Gioele", "Michea", "Sofonia"],
    optionsTranslated: {
      it: ["Osea", "Gioele", "Michea", "Sofonia"],
      en: ["Hosea", "Joel", "Micah", "Zephaniah"],
      es: ["Oseas", "Joel", "Miqueas", "Sofonías"],
      pt: ["Oseias", "Joel", "Miqueias", "Sofonias"],
      fr: ["Osée", "Joël", "Michée", "Sophonie"]
    },
    correctAnswer: 0,
    category: "Profeti Minori",
    difficulty: "hard",
  },

  // ============= QUATTRO VANGELI (20 questions) =============
  {
    id: 101,
    question: "Quale Vangelo inizia con 'In principio era il Verbo'?",
    questions: {
      it: "Quale Vangelo inizia con 'In principio era il Verbo'?",
      en: "Which Gospel begins with 'In the beginning was the Word'?",
      es: "¿Qué Evangelio comienza con 'En el principio era el Verbo'?",
      pt: "Qual Evangelho começa com 'No princípio era o Verbo'?",
      fr: "Quel Évangile commence par 'Au commencement était la Parole'?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 3,
    category: "Quattro Vangeli",
    difficulty: "easy",
  },
  {
    id: 102,
    question: "Quale Vangelo fu scritto da un medico?",
    questions: {
      it: "Quale Vangelo fu scritto da un medico?",
      en: "Which Gospel was written by a physician?",
      es: "¿Qué Evangelio fue escrito por un médico?",
      pt: "Qual Evangelho foi escrito por um médico?",
      fr: "Quel Évangile a été écrit par un médecin?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 103,
    question: "Quale Vangelo contiene il Discorso della Montagna?",
    questions: {
      it: "Quale Vangelo contiene il Discorso della Montagna?",
      en: "Which Gospel contains the Sermon on the Mount?",
      es: "¿Qué Evangelio contiene el Sermón del Monte?",
      pt: "Qual Evangelho contém o Sermão da Montanha?",
      fr: "Quel Évangile contient le Sermon sur la Montagne?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 0,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 104,
    question: "Quale Vangelo è il più breve?",
    questions: {
      it: "Quale Vangelo è il più breve?",
      en: "Which Gospel is the shortest?",
      es: "¿Qué Evangelio es el más breve?",
      pt: "Qual Evangelho é o mais breve?",
      fr: "Quel Évangile est le plus court?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 1,
    category: "Quattro Vangeli",
    difficulty: "easy",
  },
  {
    id: 105,
    question: "Quale Vangelo racconta la parabola del Buon Samaritano?",
    questions: {
      it: "Quale Vangelo racconta la parabola del Buon Samaritano?",
      en: "Which Gospel tells the parable of the Good Samaritan?",
      es: "¿Qué Evangelio cuenta la parábola del Buen Samaritano?",
      pt: "Qual Evangelho conta a parábola do Bom Samaritano?",
      fr: "Quel Évangile raconte la parabole du Bon Samaritain?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 106,
    question: "Quale Vangelo fu scritto per i Romani?",
    questions: {
      it: "Quale Vangelo fu scritto per i Romani?",
      en: "Which Gospel was written for the Romans?",
      es: "¿Qué Evangelio fue escrito para los romanos?",
      pt: "Qual Evangelho foi escrito para os romanos?",
      fr: "Quel Évangile a été écrit pour les Romains?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 1,
    category: "Quattro Vangeli",
    difficulty: "hard",
  },
  {
    id: 107,
    question: "Quale Vangelo contiene la genealogia di Gesù che risale ad Adamo?",
    questions: {
      it: "Quale Vangelo contiene la genealogia di Gesù che risale ad Adamo?",
      en: "Which Gospel contains Jesus' genealogy going back to Adam?",
      es: "¿Qué Evangelio contiene la genealogía de Jesús que se remonta a Adán?",
      pt: "Qual Evangelho contém a genealogia de Jesus que remonta a Adão?",
      fr: "Quel Évangile contient la généalogie de Jésus remontant à Adam?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "hard",
  },
  {
    id: 108,
    question: "Quale Vangelo contiene sette 'segni' di Gesù?",
    questions: {
      it: "Quale Vangelo contiene sette 'segni' di Gesù?",
      en: "Which Gospel contains seven 'signs' of Jesus?",
      es: "¿Qué Evangelio contiene siete 'señales' de Jesús?",
      pt: "Qual Evangelho contém sete 'sinais' de Jesus?",
      fr: "Quel Évangile contient sept 'signes' de Jésus?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 3,
    category: "Quattro Vangeli",
    difficulty: "hard",
  },
  {
    id: 109,
    question: "Quale Vangelo racconta la parabola del Figliol Prodigo?",
    questions: {
      it: "Quale Vangelo racconta la parabola del Figliol Prodigo?",
      en: "Which Gospel tells the parable of the Prodigal Son?",
      es: "¿Qué Evangelio cuenta la parábola del Hijo Pródigo?",
      pt: "Qual Evangelho conta a parábola do Filho Pródigo?",
      fr: "Quel Évangile raconte la parabole du Fils Prodigue?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 110,
    question: "Quale simbolo rappresenta l'evangelista Marco?",
    questions: {
      it: "Quale simbolo rappresenta l'evangelista Marco?",
      en: "Which symbol represents the evangelist Mark?",
      es: "¿Qué símbolo representa al evangelista Marcos?",
      pt: "Qual símbolo representa o evangelista Marcos?",
      fr: "Quel symbole représente l'évangéliste Marc?"
    },
    options: ["Angelo", "Leone", "Bue", "Aquila"],
    optionsTranslated: {
      it: ["Angelo", "Leone", "Bue", "Aquila"],
      en: ["Angel", "Lion", "Ox", "Eagle"],
      es: ["Ángel", "León", "Buey", "Águila"],
      pt: ["Anjo", "Leão", "Boi", "Águia"],
      fr: ["Ange", "Lion", "Bœuf", "Aigle"]
    },
    correctAnswer: 1,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 111,
    question: "Quale Vangelo presenta Gesù come re dei Giudei?",
    questions: {
      it: "Quale Vangelo presenta Gesù come re dei Giudei?",
      en: "Which Gospel presents Jesus as king of the Jews?",
      es: "¿Qué Evangelio presenta a Jesús como rey de los judíos?",
      pt: "Qual Evangelho apresenta Jesus como rei dos judeus?",
      fr: "Quel Évangile présente Jésus comme roi des Juifs?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 0,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 112,
    question: "Quale Vangelo menziona il Magnificat di Maria?",
    questions: {
      it: "Quale Vangelo menziona il Magnificat di Maria?",
      en: "Which Gospel mentions Mary's Magnificat?",
      es: "¿Qué Evangelio menciona el Magnificat de María?",
      pt: "Qual Evangelho menciona o Magnificat de Maria?",
      fr: "Quel Évangile mentionne le Magnificat de Marie?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 113,
    question: "Quale Vangelo racconta la risurrezione di Lazzaro?",
    questions: {
      it: "Quale Vangelo racconta la risurrezione di Lazzaro?",
      en: "Which Gospel tells of Lazarus' resurrection?",
      es: "¿Qué Evangelio cuenta la resurrección de Lázaro?",
      pt: "Qual Evangelho conta a ressurreição de Lázaro?",
      fr: "Quel Évangile raconte la résurrection de Lazare?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 3,
    category: "Quattro Vangeli",
    difficulty: "easy",
  },
  {
    id: 114,
    question: "Quale Vangelo usa più frequentemente la parola 'subito'?",
    questions: {
      it: "Quale Vangelo usa più frequentemente la parola 'subito'?",
      en: "Which Gospel most frequently uses the word 'immediately'?",
      es: "¿Qué Evangelio usa más frecuentemente la palabra 'inmediatamente'?",
      pt: "Qual Evangelho usa mais frequentemente a palavra 'imediatamente'?",
      fr: "Quel Évangile utilise le plus fréquemment le mot 'immédiatement'?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 1,
    category: "Quattro Vangeli",
    difficulty: "hard",
  },
  {
    id: 115,
    question: "Quale Vangelo contiene le beatitudini?",
    questions: {
      it: "Quale Vangelo contiene le beatitudini?",
      en: "Which Gospel contains the Beatitudes?",
      es: "¿Qué Evangelio contiene las bienaventuranzas?",
      pt: "Qual Evangelho contém as bem-aventuranças?",
      fr: "Quel Évangile contient les Béatitudes?"
    },
    options: ["Matteo e Luca", "Solo Matteo", "Solo Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo e Luca", "Solo Matteo", "Solo Luca", "Giovanni"],
      en: ["Matthew and Luke", "Only Matthew", "Only Luke", "John"],
      es: ["Mateo y Lucas", "Solo Mateo", "Solo Lucas", "Juan"],
      pt: ["Mateus e Lucas", "Apenas Mateus", "Apenas Lucas", "João"],
      fr: ["Matthieu et Luc", "Seulement Matthieu", "Seulement Luc", "Jean"]
    },
    correctAnswer: 0,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 116,
    question: "Quale Vangelo racconta dei Magi?",
    questions: {
      it: "Quale Vangelo racconta dei Magi?",
      en: "Which Gospel tells of the Magi?",
      es: "¿Qué Evangelio cuenta sobre los Magos?",
      pt: "Qual Evangelho conta sobre os Magos?",
      fr: "Quel Évangile raconte les Mages?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 0,
    category: "Quattro Vangeli",
    difficulty: "easy",
  },
  {
    id: 117,
    question: "Quale Vangelo menziona il Nunc Dimittis di Simeone?",
    questions: {
      it: "Quale Vangelo menziona il Nunc Dimittis di Simeone?",
      en: "Which Gospel mentions Simeon's Nunc Dimittis?",
      es: "¿Qué Evangelio menciona el Nunc Dimittis de Simeón?",
      pt: "Qual Evangelho menciona o Nunc Dimittis de Simeão?",
      fr: "Quel Évangile mentionne le Nunc Dimittis de Siméon?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "hard",
  },
  {
    id: 118,
    question: "Quale Vangelo presenta Gesù che lava i piedi ai discepoli?",
    questions: {
      it: "Quale Vangelo presenta Gesù che lava i piedi ai discepoli?",
      en: "Which Gospel shows Jesus washing the disciples' feet?",
      es: "¿Qué Evangelio muestra a Jesús lavando los pies de los discípulos?",
      pt: "Qual Evangelho mostra Jesus lavando os pés dos discípulos?",
      fr: "Quel Évangile montre Jésus lavant les pieds des disciples?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 3,
    category: "Quattro Vangeli",
    difficulty: "medium",
  },
  {
    id: 119,
    question: "Quale Vangelo racconta dei pastori alla nascita di Gesù?",
    questions: {
      it: "Quale Vangelo racconta dei pastori alla nascita di Gesù?",
      en: "Which Gospel tells of the shepherds at Jesus' birth?",
      es: "¿Qué Evangelio cuenta sobre los pastores en el nacimiento de Jesús?",
      pt: "Qual Evangelho conta sobre os pastores no nascimento de Jesus?",
      fr: "Quel Évangile raconte les bergers à la naissance de Jésus?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 2,
    category: "Quattro Vangeli",
    difficulty: "easy",
  },
  {
    id: 120,
    question: "Quale Vangelo usa il termine 'Io sono' sette volte?",
    questions: {
      it: "Quale Vangelo usa il termine 'Io sono' sette volte?",
      en: "Which Gospel uses 'I am' seven times?",
      es: "¿Qué Evangelio usa 'Yo soy' siete veces?",
      pt: "Qual Evangelho usa 'Eu sou' sete vezes?",
      fr: "Quel Évangile utilise 'Je suis' sept fois?"
    },
    options: ["Matteo", "Marco", "Luca", "Giovanni"],
    optionsTranslated: {
      it: ["Matteo", "Marco", "Luca", "Giovanni"],
      en: ["Matthew", "Mark", "Luke", "John"],
      es: ["Mateo", "Marcos", "Lucas", "Juan"],
      pt: ["Mateus", "Marcos", "Lucas", "João"],
      fr: ["Matthieu", "Marc", "Luc", "Jean"]
    },
    correctAnswer: 3,
    category: "Quattro Vangeli",
    difficulty: "hard",
  },

  // ============= LETTERE PAOLINE (20 questions) =============
  {
    id: 121,
    question: "Quale lettera paolina è la più lunga?",
    questions: {
      it: "Quale lettera paolina è la più lunga?",
      en: "Which Pauline letter is the longest?",
      es: "¿Qué carta paulina es la más larga?",
      pt: "Qual carta paulina é a mais longa?",
      fr: "Quelle lettre paulinienne est la plus longue?"
    },
    options: ["Romani", "1 Corinzi", "2 Corinzi", "Galati"],
    optionsTranslated: {
      it: ["Romani", "1 Corinzi", "2 Corinzi", "Galati"],
      en: ["Romans", "1 Corinthians", "2 Corinthians", "Galatians"],
      es: ["Romanos", "1 Corintios", "2 Corintios", "Gálatas"],
      pt: ["Romanos", "1 Coríntios", "2 Coríntios", "Gálatas"],
      fr: ["Romains", "1 Corinthiens", "2 Corinthiens", "Galates"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 122,
    question: "Quale lettera fu scritta dalla prigione?",
    questions: {
      it: "Quale lettera fu scritta dalla prigione?",
      en: "Which letter was written from prison?",
      es: "¿Qué carta fue escrita desde la prisión?",
      pt: "Qual carta foi escrita da prisão?",
      fr: "Quelle lettre a été écrite de prison?"
    },
    options: ["Efesini", "Colossesi", "Filemone", "Tutte e tre"],
    optionsTranslated: {
      it: ["Efesini", "Colossesi", "Filemone", "Tutte e tre"],
      en: ["Ephesians", "Colossians", "Philemon", "All three"],
      es: ["Efesios", "Colosenses", "Filemón", "Las tres"],
      pt: ["Efésios", "Colossenses", "Filemom", "Todas as três"],
      fr: ["Éphésiens", "Colossiens", "Philémon", "Les trois"]
    },
    correctAnswer: 3,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 123,
    question: "A chi Paolo scrisse due lettere?",
    questions: {
      it: "A chi Paolo scrisse due lettere?",
      en: "To whom did Paul write two letters?",
      es: "¿A quién Pablo escribió dos cartas?",
      pt: "Para quem Paulo escreveu duas cartas?",
      fr: "À qui Paul a-t-il écrit deux lettres?"
    },
    options: ["Timoteo e Corinzi", "Solo Corinzi", "Solo Timoteo", "Tessalonicesi e Timoteo"],
    optionsTranslated: {
      it: ["Timoteo e Corinzi", "Solo Corinzi", "Solo Timoteo", "Tessalonicesi e Timoteo"],
      en: ["Timothy and Corinthians", "Only Corinthians", "Only Timothy", "Thessalonians and Timothy"],
      es: ["Timoteo y Corintios", "Solo Corintios", "Solo Timoteo", "Tesalonicenses y Timoteo"],
      pt: ["Timóteo e Coríntios", "Apenas Coríntios", "Apenas Timóteo", "Tessalonicenses e Timóteo"],
      fr: ["Timothée et Corinthiens", "Seulement Corinthiens", "Seulement Timothée", "Thessaloniciens et Timothée"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 124,
    question: "Quale lettera contiene l'inno alla carità?",
    questions: {
      it: "Quale lettera contiene l'inno alla carità?",
      en: "Which letter contains the hymn to charity?",
      es: "¿Qué carta contiene el himno a la caridad?",
      pt: "Qual carta contém o hino à caridade?",
      fr: "Quelle lettre contient l'hymne à la charité?"
    },
    options: ["Romani", "1 Corinzi", "Efesini", "Filippesi"],
    optionsTranslated: {
      it: ["Romani", "1 Corinzi", "Efesini", "Filippesi"],
      en: ["Romans", "1 Corinthians", "Ephesians", "Philippians"],
      es: ["Romanos", "1 Corintios", "Efesios", "Filipenses"],
      pt: ["Romanos", "1 Coríntios", "Efésios", "Filipenses"],
      fr: ["Romains", "1 Corinthiens", "Éphésiens", "Philippiens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 125,
    question: "Quale lettera fu scritta a uno schiavo fuggitivo?",
    questions: {
      it: "Quale lettera fu scritta a uno schiavo fuggitivo?",
      en: "Which letter was written about a runaway slave?",
      es: "¿Qué carta fue escrita sobre un esclavo fugitivo?",
      pt: "Qual carta foi escrita sobre um escravo fugitivo?",
      fr: "Quelle lettre a été écrite au sujet d'un esclave fugitif?"
    },
    options: ["Tito", "Filemone", "Timoteo", "Colossesi"],
    optionsTranslated: {
      it: ["Tito", "Filemone", "Timoteo", "Colossesi"],
      en: ["Titus", "Philemon", "Timothy", "Colossians"],
      es: ["Tito", "Filemón", "Timoteo", "Colosenses"],
      pt: ["Tito", "Filemom", "Timóteo", "Colossenses"],
      fr: ["Tite", "Philémon", "Timothée", "Colossiens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 126,
    question: "Quale lettera inizia con 'Paolo, servo di Cristo Gesù'?",
    questions: {
      it: "Quale lettera inizia con 'Paolo, servo di Cristo Gesù'?",
      en: "Which letter begins with 'Paul, a servant of Christ Jesus'?",
      es: "¿Qué carta comienza con 'Pablo, siervo de Cristo Jesús'?",
      pt: "Qual carta começa com 'Paulo, servo de Cristo Jesus'?",
      fr: "Quelle lettre commence par 'Paul, serviteur du Christ Jésus'?"
    },
    options: ["Romani", "Filippesi", "Galati", "1 Tessalonicesi"],
    optionsTranslated: {
      it: ["Romani", "Filippesi", "Galati", "1 Tessalonicesi"],
      en: ["Romans", "Philippians", "Galatians", "1 Thessalonians"],
      es: ["Romanos", "Filipenses", "Gálatas", "1 Tesalonicenses"],
      pt: ["Romanos", "Filipenses", "Gálatas", "1 Tessalonicenses"],
      fr: ["Romains", "Philippiens", "Galates", "1 Thessaloniciens"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 127,
    question: "In quale lettera Paolo parla dell'armatura di Dio?",
    questions: {
      it: "In quale lettera Paolo parla dell'armatura di Dio?",
      en: "In which letter does Paul speak of the armor of God?",
      es: "¿En qué carta Pablo habla de la armadura de Dios?",
      pt: "Em qual carta Paulo fala da armadura de Deus?",
      fr: "Dans quelle lettre Paul parle-t-il de l'armure de Dieu?"
    },
    options: ["Romani", "Efesini", "Colossesi", "1 Tessalonicesi"],
    optionsTranslated: {
      it: ["Romani", "Efesini", "Colossesi", "1 Tessalonicesi"],
      en: ["Romans", "Ephesians", "Colossians", "1 Thessalonians"],
      es: ["Romanos", "Efesios", "Colosenses", "1 Tesalonicenses"],
      pt: ["Romanos", "Efésios", "Colossenses", "1 Tessalonicenses"],
      fr: ["Romains", "Éphésiens", "Colossiens", "1 Thessaloniciens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 128,
    question: "Quale lettera è chiamata 'lettera della gioia'?",
    questions: {
      it: "Quale lettera è chiamata 'lettera della gioia'?",
      en: "Which letter is called the 'letter of joy'?",
      es: "¿Qué carta se llama la 'carta de gozo'?",
      pt: "Qual carta é chamada de 'carta da alegria'?",
      fr: "Quelle lettre est appelée la 'lettre de joie'?"
    },
    options: ["Efesini", "Filippesi", "Colossesi", "1 Tessalonicesi"],
    optionsTranslated: {
      it: ["Efesini", "Filippesi", "Colossesi", "1 Tessalonicesi"],
      en: ["Ephesians", "Philippians", "Colossians", "1 Thessalonians"],
      es: ["Efesios", "Filipenses", "Colosenses", "1 Tesalonicenses"],
      pt: ["Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses"],
      fr: ["Éphésiens", "Philippiens", "Colossiens", "1 Thessaloniciens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 129,
    question: "Quale lettera contiene 'il frutto dello Spirito'?",
    questions: {
      it: "Quale lettera contiene 'il frutto dello Spirito'?",
      en: "Which letter contains 'the fruit of the Spirit'?",
      es: "¿Qué carta contiene 'el fruto del Espíritu'?",
      pt: "Qual carta contém 'o fruto do Espírito'?",
      fr: "Quelle lettre contient 'le fruit de l'Esprit'?"
    },
    options: ["Romani", "Galati", "Efesini", "Colossesi"],
    optionsTranslated: {
      it: ["Romani", "Galati", "Efesini", "Colossesi"],
      en: ["Romans", "Galatians", "Ephesians", "Colossians"],
      es: ["Romanos", "Gálatas", "Efesios", "Colosenses"],
      pt: ["Romanos", "Gálatas", "Efésios", "Colossenses"],
      fr: ["Romains", "Galates", "Éphésiens", "Colossiens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 130,
    question: "Quante sono le lettere pastorali?",
    questions: {
      it: "Quante sono le lettere pastorali?",
      en: "How many are the pastoral letters?",
      es: "¿Cuántas son las cartas pastorales?",
      pt: "Quantas são as cartas pastorais?",
      fr: "Combien sont les lettres pastorales?"
    },
    options: ["2", "3", "4", "5"],
    optionsTranslated: {
      it: ["2", "3", "4", "5"],
      en: ["2", "3", "4", "5"],
      es: ["2", "3", "4", "5"],
      pt: ["2", "3", "4", "5"],
      fr: ["2", "3", "4", "5"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 131,
    question: "In quale lettera si trova 'Cristo in voi, speranza della gloria'?",
    questions: {
      it: "In quale lettera si trova 'Cristo in voi, speranza della gloria'?",
      en: "In which letter is 'Christ in you, the hope of glory' found?",
      es: "¿En qué carta se encuentra 'Cristo en vosotros, esperanza de gloria'?",
      pt: "Em qual carta está 'Cristo em vós, esperança da glória'?",
      fr: "Dans quelle lettre trouve-t-on 'Christ en vous, l'espérance de la gloire'?"
    },
    options: ["Efesini", "Filippesi", "Colossesi", "1 Tessalonicesi"],
    optionsTranslated: {
      it: ["Efesini", "Filippesi", "Colossesi", "1 Tessalonicesi"],
      en: ["Ephesians", "Philippians", "Colossians", "1 Thessalonians"],
      es: ["Efesios", "Filipenses", "Colosenses", "1 Tesalonicenses"],
      pt: ["Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses"],
      fr: ["Éphésiens", "Philippiens", "Colossiens", "1 Thessaloniciens"]
    },
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 132,
    question: "Quale lettera fu probabilmente scritta per prima?",
    questions: {
      it: "Quale lettera fu probabilmente scritta per prima?",
      en: "Which letter was probably written first?",
      es: "¿Qué carta probablemente fue escrita primero?",
      pt: "Qual carta provavelmente foi escrita primeiro?",
      fr: "Quelle lettre a probablement été écrite en premier?"
    },
    options: ["Romani", "Galati", "1 Tessalonicesi", "1 Corinzi"],
    optionsTranslated: {
      it: ["Romani", "Galati", "1 Tessalonicesi", "1 Corinzi"],
      en: ["Romans", "Galatians", "1 Thessalonians", "1 Corinthians"],
      es: ["Romanos", "Gálatas", "1 Tesalonicenses", "1 Corintios"],
      pt: ["Romanos", "Gálatas", "1 Tessalonicenses", "1 Coríntios"],
      fr: ["Romains", "Galates", "1 Thessaloniciens", "1 Corinthiens"]
    },
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 133,
    question: "Quale lettera parla della risurrezione di Cristo più estesamente?",
    questions: {
      it: "Quale lettera parla della risurrezione di Cristo più estesamente?",
      en: "Which letter speaks most extensively about Christ's resurrection?",
      es: "¿Qué carta habla más extensamente sobre la resurrección de Cristo?",
      pt: "Qual carta fala mais extensivamente sobre a ressurreição de Cristo?",
      fr: "Quelle lettre parle le plus longuement de la résurrection du Christ?"
    },
    options: ["Romani", "1 Corinzi", "Efesini", "Colossesi"],
    optionsTranslated: {
      it: ["Romani", "1 Corinzi", "Efesini", "Colossesi"],
      en: ["Romans", "1 Corinthians", "Ephesians", "Colossians"],
      es: ["Romanos", "1 Corintios", "Efesios", "Colosenses"],
      pt: ["Romanos", "1 Coríntios", "Efésios", "Colossenses"],
      fr: ["Romains", "1 Corinthiens", "Éphésiens", "Colossiens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 134,
    question: "Quale lettera contiene 'Tutto posso in colui che mi dà forza'?",
    questions: {
      it: "Quale lettera contiene 'Tutto posso in colui che mi dà forza'?",
      en: "Which letter contains 'I can do all things through him who strengthens me'?",
      es: "¿Qué carta contiene 'Todo lo puedo en aquel que me fortalece'?",
      pt: "Qual carta contém 'Tudo posso naquele que me fortalece'?",
      fr: "Quelle lettre contient 'Je puis tout en celui qui me fortifie'?"
    },
    options: ["Romani", "1 Corinzi", "Filippesi", "Colossesi"],
    optionsTranslated: {
      it: ["Romani", "1 Corinzi", "Filippesi", "Colossesi"],
      en: ["Romans", "1 Corinthians", "Philippians", "Colossians"],
      es: ["Romanos", "1 Corintios", "Filipenses", "Colosenses"],
      pt: ["Romanos", "1 Coríntios", "Filipenses", "Colossenses"],
      fr: ["Romains", "1 Corinthiens", "Philippiens", "Colossiens"]
    },
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 135,
    question: "In quale lettera Paolo parla della 'spina nella carne'?",
    questions: {
      it: "In quale lettera Paolo parla della 'spina nella carne'?",
      en: "In which letter does Paul speak of the 'thorn in the flesh'?",
      es: "¿En qué carta Pablo habla del 'aguijón en la carne'?",
      pt: "Em qual carta Paulo fala do 'espinho na carne'?",
      fr: "Dans quelle lettre Paul parle-t-il de 'l'écharde dans la chair'?"
    },
    options: ["Romani", "1 Corinzi", "2 Corinzi", "Galati"],
    optionsTranslated: {
      it: ["Romani", "1 Corinzi", "2 Corinzi", "Galati"],
      en: ["Romans", "1 Corinthians", "2 Corinthians", "Galatians"],
      es: ["Romanos", "1 Corintios", "2 Corintios", "Gálatas"],
      pt: ["Romanos", "1 Coríntios", "2 Coríntios", "Gálatas"],
      fr: ["Romains", "1 Corinthiens", "2 Corinthiens", "Galates"]
    },
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 136,
    question: "Quale lettera è la più breve di Paolo?",
    questions: {
      it: "Quale lettera è la più breve di Paolo?",
      en: "Which is Paul's shortest letter?",
      es: "¿Cuál es la carta más breve de Pablo?",
      pt: "Qual é a carta mais breve de Paulo?",
      fr: "Quelle est la lettre la plus courte de Paul?"
    },
    options: ["Filemone", "Tito", "2 Timoteo", "2 Tessalonicesi"],
    optionsTranslated: {
      it: ["Filemone", "Tito", "2 Timoteo", "2 Tessalonicesi"],
      en: ["Philemon", "Titus", "2 Timothy", "2 Thessalonians"],
      es: ["Filemón", "Tito", "2 Timoteo", "2 Tesalonicenses"],
      pt: ["Filemom", "Tito", "2 Timóteo", "2 Tessalonicenses"],
      fr: ["Philémon", "Tite", "2 Timothée", "2 Thessaloniciens"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 137,
    question: "In quale lettera Paolo parla dei doni spirituali?",
    questions: {
      it: "In quale lettera Paolo parla dei doni spirituali?",
      en: "In which letter does Paul speak of spiritual gifts?",
      es: "¿En qué carta Pablo habla de los dones espirituales?",
      pt: "Em qual carta Paulo fala dos dons espirituais?",
      fr: "Dans quelle lettre Paul parle-t-il des dons spirituels?"
    },
    options: ["Romani e 1 Corinzi", "Solo Romani", "Solo 1 Corinzi", "Efesini"],
    optionsTranslated: {
      it: ["Romani e 1 Corinzi", "Solo Romani", "Solo 1 Corinzi", "Efesini"],
      en: ["Romans and 1 Corinthians", "Only Romans", "Only 1 Corinthians", "Ephesians"],
      es: ["Romanos y 1 Corintios", "Solo Romanos", "Solo 1 Corintios", "Efesios"],
      pt: ["Romanos e 1 Coríntios", "Apenas Romanos", "Apenas 1 Coríntios", "Efésios"],
      fr: ["Romains et 1 Corinthiens", "Seulement Romains", "Seulement 1 Corinthiens", "Éphésiens"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 138,
    question: "Quale lettera contiene il versetto 'Il salario del peccato è la morte'?",
    questions: {
      it: "Quale lettera contiene il versetto 'Il salario del peccato è la morte'?",
      en: "Which letter contains the verse 'The wages of sin is death'?",
      es: "¿Qué carta contiene el versículo 'La paga del pecado es muerte'?",
      pt: "Qual carta contém o versículo 'O salário do pecado é a morte'?",
      fr: "Quelle lettre contient le verset 'Le salaire du péché c'est la mort'?"
    },
    options: ["Romani", "1 Corinzi", "Galati", "Efesini"],
    optionsTranslated: {
      it: ["Romani", "1 Corinzi", "Galati", "Efesini"],
      en: ["Romans", "1 Corinthians", "Galatians", "Ephesians"],
      es: ["Romanos", "1 Corintios", "Gálatas", "Efesios"],
      pt: ["Romanos", "1 Coríntios", "Gálatas", "Efésios"],
      fr: ["Romains", "1 Corinthiens", "Galates", "Éphésiens"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 139,
    question: "A chi erano indirizzate le lettere pastorali?",
    questions: {
      it: "A chi erano indirizzate le lettere pastorali?",
      en: "To whom were the pastoral letters addressed?",
      es: "¿A quién se dirigían las cartas pastorales?",
      pt: "Para quem as cartas pastorais foram endereçadas?",
      fr: "À qui les lettres pastorales étaient-elles adressées?"
    },
    options: ["Timoteo e Tito", "Solo Timoteo", "Chiese", "Filippesi"],
    optionsTranslated: {
      it: ["Timoteo e Tito", "Solo Timoteo", "Chiese", "Filippesi"],
      en: ["Timothy and Titus", "Only Timothy", "Churches", "Philippians"],
      es: ["Timoteo y Tito", "Solo Timoteo", "Iglesias", "Filipenses"],
      pt: ["Timóteo e Tito", "Apenas Timóteo", "Igrejas", "Filipenses"],
      fr: ["Timothée et Tite", "Seulement Timothée", "Églises", "Philippiens"]
    },
    correctAnswer: 0,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 140,
    question: "Quale lettera è considerata il 'manifesto della libertà cristiana'?",
    questions: {
      it: "Quale lettera è considerata il 'manifesto della libertà cristiana'?",
      en: "Which letter is considered the 'manifesto of Christian freedom'?",
      es: "¿Qué carta se considera el 'manifiesto de la libertad cristiana'?",
      pt: "Qual carta é considerada o 'manifesto da liberdade cristã'?",
      fr: "Quelle lettre est considérée comme le 'manifeste de la liberté chrétienne'?"
    },
    options: ["Romani", "Galati", "Efesini", "Filippesi"],
    optionsTranslated: {
      it: ["Romani", "Galati", "Efesini", "Filippesi"],
      en: ["Romans", "Galatians", "Ephesians", "Philippians"],
      es: ["Romanos", "Gálatas", "Efesios", "Filipenses"],
      pt: ["Romanos", "Gálatas", "Efésios", "Filipenses"],
      fr: ["Romains", "Galates", "Éphésiens", "Philippiens"]
    },
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "hard",
  },

  // ============= LETTERATURA SAPIENZIALE (20 questions) =============
  {
    id: 141,
    question: "Chi scrisse la maggior parte del libro dei Proverbi?",
    questions: {
      it: "Chi scrisse la maggior parte del libro dei Proverbi?",
      en: "Who wrote most of the book of Proverbs?",
      es: "¿Quién escribió la mayor parte del libro de Proverbios?",
      pt: "Quem escreveu a maior parte do livro de Provérbios?",
      fr: "Qui a écrit la majeure partie du livre des Proverbes?"
    },
    options: ["Davide", "Salomone", "Mosè", "Samuele"],
    optionsTranslated: {
      it: ["Davide", "Salomone", "Mosè", "Samuele"],
      en: ["David", "Solomon", "Moses", "Samuel"],
      es: ["David", "Salomón", "Moisés", "Samuel"],
      pt: ["Davi", "Salomão", "Moisés", "Samuel"],
      fr: ["David", "Salomon", "Moïse", "Samuel"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 142,
    question: "Quale frase famosa inizia Ecclesiaste?",
    questions: {
      it: "Quale frase famosa inizia Ecclesiaste?",
      en: "What famous phrase begins Ecclesiastes?",
      es: "¿Qué frase famosa comienza Eclesiastés?",
      pt: "Qual frase famosa começa Eclesiastes?",
      fr: "Quelle phrase célèbre commence l'Ecclésiaste?"
    },
    options: ["In principio", "Vanità delle vanità", "Beato l'uomo", "Il Signore è il mio pastore"],
    optionsTranslated: {
      it: ["In principio", "Vanità delle vanità", "Beato l'uomo", "Il Signore è il mio pastore"],
      en: ["In the beginning", "Vanity of vanities", "Blessed is the man", "The Lord is my shepherd"],
      es: ["En el principio", "Vanidad de vanidades", "Bienaventurado el hombre", "El Señor es mi pastor"],
      pt: ["No princípio", "Vaidade de vaidades", "Bem-aventurado o homem", "O Senhor é meu pastor"],
      fr: ["Au commencement", "Vanité des vanités", "Heureux l'homme", "Le Seigneur est mon berger"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 143,
    question: "Chi è il protagonista del libro di Giobbe?",
    questions: {
      it: "Chi è il protagonista del libro di Giobbe?",
      en: "Who is the main character in the book of Job?",
      es: "¿Quién es el protagonista del libro de Job?",
      pt: "Quem é o protagonista do livro de Jó?",
      fr: "Qui est le protagoniste du livre de Job?"
    },
    options: ["Un re", "Un sacerdote", "Un uomo giusto", "Un profeta"],
    optionsTranslated: {
      it: ["Un re", "Un sacerdote", "Un uomo giusto", "Un profeta"],
      en: ["A king", "A priest", "A righteous man", "A prophet"],
      es: ["Un rey", "Un sacerdote", "Un hombre justo", "Un profeta"],
      pt: ["Um rei", "Um sacerdote", "Um homem justo", "Um profeta"],
      fr: ["Un roi", "Un prêtre", "Un homme juste", "Un prophète"]
    },
    correctAnswer: 2,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 144,
    question: "Quanti amici vennero a consolare Giobbe?",
    questions: {
      it: "Quanti amici vennero a consolare Giobbe?",
      en: "How many friends came to comfort Job?",
      es: "¿Cuántos amigos vinieron a consolar a Job?",
      pt: "Quantos amigos vieram consolar Jó?",
      fr: "Combien d'amis sont venus consoler Job?"
    },
    options: ["2", "3", "4", "5"],
    optionsTranslated: {
      it: ["2", "3", "4", "5"],
      en: ["2", "3", "4", "5"],
      es: ["2", "3", "4", "5"],
      pt: ["2", "3", "4", "5"],
      fr: ["2", "3", "4", "5"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 145,
    question: "Secondo Proverbi, qual è l'inizio della sapienza?",
    questions: {
      it: "Secondo Proverbi, qual è l'inizio della sapienza?",
      en: "According to Proverbs, what is the beginning of wisdom?",
      es: "Según Proverbios, ¿cuál es el principio de la sabiduría?",
      pt: "Segundo Provérbios, qual é o princípio da sabedoria?",
      fr: "Selon les Proverbes, quel est le commencement de la sagesse?"
    },
    options: ["Lo studio", "Il timore del Signore", "L'esperienza", "La preghiera"],
    optionsTranslated: {
      it: ["Lo studio", "Il timore del Signore", "L'esperienza", "La preghiera"],
      en: ["Study", "The fear of the Lord", "Experience", "Prayer"],
      es: ["El estudio", "El temor del Señor", "La experiencia", "La oración"],
      pt: ["O estudo", "O temor do Senhor", "A experiência", "A oração"],
      fr: ["L'étude", "La crainte du Seigneur", "L'expérience", "La prière"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 146,
    question: "Chi scrisse Ecclesiaste secondo la tradizione?",
    questions: {
      it: "Chi scrisse Ecclesiaste secondo la tradizione?",
      en: "Who wrote Ecclesiastes according to tradition?",
      es: "¿Quién escribió Eclesiastés según la tradición?",
      pt: "Quem escreveu Eclesiastes segundo a tradição?",
      fr: "Qui a écrit l'Ecclésiaste selon la tradition?"
    },
    options: ["Davide", "Salomone", "Isaia", "Geremia"],
    optionsTranslated: {
      it: ["Davide", "Salomone", "Isaia", "Geremia"],
      en: ["David", "Solomon", "Isaiah", "Jeremiah"],
      es: ["David", "Salomón", "Isaías", "Jeremías"],
      pt: ["Davi", "Salomão", "Isaías", "Jeremias"],
      fr: ["David", "Salomon", "Isaïe", "Jérémie"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 147,
    question: "Quale libro sapienziale parla di un tempo per ogni cosa?",
    questions: {
      it: "Quale libro sapienziale parla di un tempo per ogni cosa?",
      en: "Which wisdom book speaks of a time for everything?",
      es: "¿Qué libro sapiencial habla de un tiempo para cada cosa?",
      pt: "Qual livro sapiencial fala de um tempo para cada coisa?",
      fr: "Quel livre de sagesse parle d'un temps pour chaque chose?"
    },
    options: ["Proverbi", "Giobbe", "Ecclesiaste", "Siracide"],
    optionsTranslated: {
      it: ["Proverbi", "Giobbe", "Ecclesiaste", "Siracide"],
      en: ["Proverbs", "Job", "Ecclesiastes", "Sirach"],
      es: ["Proverbios", "Job", "Eclesiastés", "Sirácida"],
      pt: ["Provérbios", "Jó", "Eclesiastes", "Sirácida"],
      fr: ["Proverbes", "Job", "Ecclésiaste", "Siracide"]
    },
    correctAnswer: 2,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 148,
    question: "Cosa perse Giobbe all'inizio della sua prova?",
    questions: {
      it: "Cosa perse Giobbe all'inizio della sua prova?",
      en: "What did Job lose at the beginning of his trial?",
      es: "¿Qué perdió Job al comienzo de su prueba?",
      pt: "O que Jó perdeu no início de sua provação?",
      fr: "Qu'est-ce que Job a perdu au début de son épreuve?"
    },
    options: ["Solo i beni", "Solo i figli", "Tutto: beni, figli e salute", "Solo la salute"],
    optionsTranslated: {
      it: ["Solo i beni", "Solo i figli", "Tutto: beni, figli e salute", "Solo la salute"],
      en: ["Only possessions", "Only children", "Everything: possessions, children and health", "Only health"],
      es: ["Solo los bienes", "Solo los hijos", "Todo: bienes, hijos y salud", "Solo la salud"],
      pt: ["Apenas os bens", "Apenas os filhos", "Tudo: bens, filhos e saúde", "Apenas a saúde"],
      fr: ["Seulement les biens", "Seulement les enfants", "Tout: biens, enfants et santé", "Seulement la santé"]
    },
    correctAnswer: 2,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 149,
    question: "Come si chiama la donna virtuosa descritta in Proverbi 31?",
    questions: {
      it: "Come si chiama la donna virtuosa descritta in Proverbi 31?",
      en: "What is the virtuous woman described in Proverbs 31 called?",
      es: "¿Cómo se llama la mujer virtuosa descrita en Proverbios 31?",
      pt: "Como é chamada a mulher virtuosa descrita em Provérbios 31?",
      fr: "Comment s'appelle la femme vertueuse décrite dans Proverbes 31?"
    },
    options: ["Ruth", "Donna di valore", "Sara", "Debora"],
    optionsTranslated: {
      it: ["Ruth", "Donna di valore", "Sara", "Debora"],
      en: ["Ruth", "Woman of valor", "Sarah", "Deborah"],
      es: ["Rut", "Mujer virtuosa", "Sara", "Débora"],
      pt: ["Rute", "Mulher virtuosa", "Sara", "Débora"],
      fr: ["Ruth", "Femme vaillante", "Sara", "Débora"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 150,
    question: "Quanti capitoli ha il libro dei Proverbi?",
    questions: {
      it: "Quanti capitoli ha il libro dei Proverbi?",
      en: "How many chapters does the book of Proverbs have?",
      es: "¿Cuántos capítulos tiene el libro de Proverbios?",
      pt: "Quantos capítulos tem o livro de Provérbios?",
      fr: "Combien de chapitres le livre des Proverbes a-t-il?"
    },
    options: ["21", "31", "41", "51"],
    optionsTranslated: {
      it: ["21", "31", "41", "51"],
      en: ["21", "31", "41", "51"],
      es: ["21", "31", "41", "51"],
      pt: ["21", "31", "41", "51"],
      fr: ["21", "31", "41", "51"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "hard",
  },
  {
    id: 151,
    question: "Quale personaggio biblico chiese a Dio la sapienza invece della ricchezza?",
    questions: {
      it: "Quale personaggio biblico chiese a Dio la sapienza invece della ricchezza?",
      en: "Which biblical figure asked God for wisdom instead of riches?",
      es: "¿Qué personaje bíblico pidió a Dios sabiduría en lugar de riquezas?",
      pt: "Qual personagem bíblico pediu a Deus sabedoria em vez de riquezas?",
      fr: "Quel personnage biblique a demandé à Dieu la sagesse au lieu de la richesse?"
    },
    options: ["Davide", "Salomone", "Mosè", "Abramo"],
    optionsTranslated: {
      it: ["Davide", "Salomone", "Mosè", "Abramo"],
      en: ["David", "Solomon", "Moses", "Abraham"],
      es: ["David", "Salomón", "Moisés", "Abraham"],
      pt: ["Davi", "Salomão", "Moisés", "Abraão"],
      fr: ["David", "Salomon", "Moïse", "Abraham"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 152,
    question: "Secondo Ecclesiaste, cosa c'è sotto il sole?",
    questions: {
      it: "Secondo Ecclesiaste, cosa c'è sotto il sole?",
      en: "According to Ecclesiastes, what is there under the sun?",
      es: "Según Eclesiastés, ¿qué hay bajo el sol?",
      pt: "Segundo Eclesiastes, o que há debaixo do sol?",
      fr: "Selon l'Ecclésiaste, qu'y a-t-il sous le soleil?"
    },
    options: ["Solo gioia", "Niente di nuovo", "Eterna felicità", "Continuo progresso"],
    optionsTranslated: {
      it: ["Solo gioia", "Niente di nuovo", "Eterna felicità", "Continuo progresso"],
      en: ["Only joy", "Nothing new", "Eternal happiness", "Continuous progress"],
      es: ["Solo alegría", "Nada nuevo", "Felicidad eterna", "Progreso continuo"],
      pt: ["Apenas alegria", "Nada de novo", "Felicidade eterna", "Progresso contínuo"],
      fr: ["Seulement la joie", "Rien de nouveau", "Bonheur éternel", "Progrès continu"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 153,
    question: "Chi tentò Giobbe secondo il libro?",
    questions: {
      it: "Chi tentò Giobbe secondo il libro?",
      en: "Who tested Job according to the book?",
      es: "¿Quién probó a Job según el libro?",
      pt: "Quem provou Jó segundo o livro?",
      fr: "Qui a éprouvé Job selon le livre?"
    },
    options: ["Gli amici", "Satana", "Un angelo", "Un profeta"],
    optionsTranslated: {
      it: ["Gli amici", "Satana", "Un angelo", "Un profeta"],
      en: ["His friends", "Satan", "An angel", "A prophet"],
      es: ["Sus amigos", "Satanás", "Un ángel", "Un profeta"],
      pt: ["Os amigos", "Satanás", "Um anjo", "Um profeta"],
      fr: ["Ses amis", "Satan", "Un ange", "Un prophète"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 154,
    question: "Come termina il libro di Giobbe?",
    questions: {
      it: "Come termina il libro di Giobbe?",
      en: "How does the book of Job end?",
      es: "¿Cómo termina el libro de Job?",
      pt: "Como termina o livro de Jó?",
      fr: "Comment se termine le livre de Job?"
    },
    options: ["Con la morte di Giobbe", "Con la restaurazione di Giobbe", "Con la punizione degli amici", "Con una profezia"],
    optionsTranslated: {
      it: ["Con la morte di Giobbe", "Con la restaurazione di Giobbe", "Con la punizione degli amici", "Con una profezia"],
      en: ["With Job's death", "With Job's restoration", "With the punishment of his friends", "With a prophecy"],
      es: ["Con la muerte de Job", "Con la restauración de Job", "Con el castigo de sus amigos", "Con una profecía"],
      pt: ["Com a morte de Jó", "Com a restauração de Jó", "Com a punição dos amigos", "Com uma profecia"],
      fr: ["Avec la mort de Job", "Avec la restauration de Job", "Avec la punition de ses amis", "Avec une prophétie"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 155,
    question: "Quale libro sapienziale contiene il 'Cantico dei Cantici'?",
    questions: {
      it: "Quale libro sapienziale contiene il 'Cantico dei Cantici'?",
      en: "Which wisdom book is the 'Song of Songs'?",
      es: "¿Qué libro sapiencial es el 'Cantar de los Cantares'?",
      pt: "Qual livro sapiencial é o 'Cântico dos Cânticos'?",
      fr: "Quel livre de sagesse est le 'Cantique des Cantiques'?"
    },
    options: ["È un libro a sé", "Parte dei Proverbi", "Parte di Ecclesiaste", "Parte dei Salmi"],
    optionsTranslated: {
      it: ["È un libro a sé", "Parte dei Proverbi", "Parte di Ecclesiaste", "Parte dei Salmi"],
      en: ["It's a separate book", "Part of Proverbs", "Part of Ecclesiastes", "Part of Psalms"],
      es: ["Es un libro separado", "Parte de Proverbios", "Parte de Eclesiastés", "Parte de los Salmos"],
      pt: ["É um livro separado", "Parte de Provérbios", "Parte de Eclesiastes", "Parte dos Salmos"],
      fr: ["C'est un livre séparé", "Partie des Proverbes", "Partie de l'Ecclésiaste", "Partie des Psaumes"]
    },
    correctAnswer: 0,
    category: "Letteratura Sapienziale",
    difficulty: "hard",
  },
  {
    id: 156,
    question: "Qual è il tema principale di Ecclesiaste?",
    questions: {
      it: "Qual è il tema principale di Ecclesiaste?",
      en: "What is the main theme of Ecclesiastes?",
      es: "¿Cuál es el tema principal de Eclesiastés?",
      pt: "Qual é o tema principal de Eclesiastes?",
      fr: "Quel est le thème principal de l'Ecclésiaste?"
    },
    options: ["La guerra santa", "La vanità delle cose terrene", "L'amore romantico", "Le leggi cerimoniali"],
    optionsTranslated: {
      it: ["La guerra santa", "La vanità delle cose terrene", "L'amore romantico", "Le leggi cerimoniali"],
      en: ["Holy war", "The vanity of earthly things", "Romantic love", "Ceremonial laws"],
      es: ["La guerra santa", "La vanidad de las cosas terrenales", "El amor romántico", "Las leyes ceremoniales"],
      pt: ["A guerra santa", "A vaidade das coisas terrenas", "O amor romântico", "As leis cerimoniais"],
      fr: ["La guerre sainte", "La vanité des choses terrestres", "L'amour romantique", "Les lois cérémonielles"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "easy",
  },
  {
    id: 157,
    question: "Quanti figli ebbe Giobbe alla fine del libro?",
    questions: {
      it: "Quanti figli ebbe Giobbe alla fine del libro?",
      en: "How many children did Job have at the end of the book?",
      es: "¿Cuántos hijos tuvo Job al final del libro?",
      pt: "Quantos filhos Jó teve no final do livro?",
      fr: "Combien d'enfants Job a-t-il eu à la fin du livre?"
    },
    options: ["7", "10", "14", "20"],
    optionsTranslated: {
      it: ["7", "10", "14", "20"],
      en: ["7", "10", "14", "20"],
      es: ["7", "10", "14", "20"],
      pt: ["7", "10", "14", "20"],
      fr: ["7", "10", "14", "20"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "hard",
  },
  {
    id: 158,
    question: "Cosa rappresenta la 'sapienza' nei libri sapienziali?",
    questions: {
      it: "Cosa rappresenta la 'sapienza' nei libri sapienziali?",
      en: "What does 'wisdom' represent in the wisdom books?",
      es: "¿Qué representa la 'sabiduría' en los libros sapienciales?",
      pt: "O que a 'sabedoria' representa nos livros sapienciais?",
      fr: "Que représente la 'sagesse' dans les livres de sagesse?"
    },
    options: ["Solo intelligenza", "La capacità di vivere rettamente secondo Dio", "Conoscenza scientifica", "Potere politico"],
    optionsTranslated: {
      it: ["Solo intelligenza", "La capacità di vivere rettamente secondo Dio", "Conoscenza scientifica", "Potere politico"],
      en: ["Only intelligence", "The ability to live righteously according to God", "Scientific knowledge", "Political power"],
      es: ["Solo inteligencia", "La capacidad de vivir rectamente según Dios", "Conocimiento científico", "Poder político"],
      pt: ["Apenas inteligência", "A capacidade de viver retamente segundo Deus", "Conhecimento científico", "Poder político"],
      fr: ["Seulement l'intelligence", "La capacité de vivre selon Dieu", "Connaissance scientifique", "Pouvoir politique"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "medium",
  },
  {
    id: 159,
    question: "In quale libro si dice 'Mangia, bevi e stai allegro'?",
    questions: {
      it: "In quale libro si dice 'Mangia, bevi e stai allegro'?",
      en: "In which book is it said 'Eat, drink and be merry'?",
      es: "¿En qué libro se dice 'Come, bebe y alégrate'?",
      pt: "Em qual livro se diz 'Come, bebe e alegra-te'?",
      fr: "Dans quel livre est-il dit 'Mange, bois et réjouis-toi'?"
    },
    options: ["Proverbi", "Ecclesiaste", "Giobbe", "Siracide"],
    optionsTranslated: {
      it: ["Proverbi", "Ecclesiaste", "Giobbe", "Siracide"],
      en: ["Proverbs", "Ecclesiastes", "Job", "Sirach"],
      es: ["Proverbios", "Eclesiastés", "Job", "Sirácida"],
      pt: ["Provérbios", "Eclesiastes", "Jó", "Sirácida"],
      fr: ["Proverbes", "Ecclésiaste", "Job", "Siracide"]
    },
    correctAnswer: 1,
    category: "Letteratura Sapienziale",
    difficulty: "hard",
  },
  {
    id: 160,
    question: "Come si chiama il giovane che parla per ultimo a Giobbe?",
    questions: {
      it: "Come si chiama il giovane che parla per ultimo a Giobbe?",
      en: "What is the name of the young man who speaks last to Job?",
      es: "¿Cómo se llama el joven que habla último a Job?",
      pt: "Como se chama o jovem que fala por último a Jó?",
      fr: "Comment s'appelle le jeune homme qui parle en dernier à Job?"
    },
    options: ["Elifaz", "Bildad", "Zofar", "Eliu"],
    optionsTranslated: {
      it: ["Elifaz", "Bildad", "Zofar", "Eliu"],
      en: ["Eliphaz", "Bildad", "Zophar", "Elihu"],
      es: ["Elifaz", "Bildad", "Zofar", "Eliú"],
      pt: ["Elifaz", "Bildad", "Zofar", "Eliú"],
      fr: ["Éliphaz", "Bildad", "Tsophar", "Élihu"]
    },
    correctAnswer: 3,
    category: "Letteratura Sapienziale",
    difficulty: "hard",
  },

  // ============= ATTI DEGLI APOSTOLI (20 questions) =============
  {
    id: 161,
    question: "Chi scrisse il libro degli Atti degli Apostoli?",
    questions: {
      it: "Chi scrisse il libro degli Atti degli Apostoli?",
      en: "Who wrote the book of Acts of the Apostles?",
      es: "¿Quién escribió el libro de los Hechos de los Apóstoles?",
      pt: "Quem escreveu o livro dos Atos dos Apóstolos?",
      fr: "Qui a écrit le livre des Actes des Apôtres?"
    },
    options: ["Paolo", "Luca", "Pietro", "Giovanni"],
    optionsTranslated: {
      it: ["Paolo", "Luca", "Pietro", "Giovanni"],
      en: ["Paul", "Luke", "Peter", "John"],
      es: ["Pablo", "Lucas", "Pedro", "Juan"],
      pt: ["Paulo", "Lucas", "Pedro", "João"],
      fr: ["Paul", "Luc", "Pierre", "Jean"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "easy",
  },
  {
    id: 162,
    question: "Cosa accadde nel giorno di Pentecoste?",
    questions: {
      it: "Cosa accadde nel giorno di Pentecoste?",
      en: "What happened on the day of Pentecost?",
      es: "¿Qué sucedió el día de Pentecostés?",
      pt: "O que aconteceu no dia de Pentecostes?",
      fr: "Que s'est-il passé le jour de la Pentecôte?"
    },
    options: ["La crocifissione", "La discesa dello Spirito Santo", "L'ascensione", "La trasfigurazione"],
    optionsTranslated: {
      it: ["La crocifissione", "La discesa dello Spirito Santo", "L'ascensione", "La trasfigurazione"],
      en: ["The crucifixion", "The descent of the Holy Spirit", "The ascension", "The transfiguration"],
      es: ["La crucifixión", "El descenso del Espíritu Santo", "La ascensión", "La transfiguración"],
      pt: ["A crucificação", "A descida do Espírito Santo", "A ascensão", "A transfiguração"],
      fr: ["La crucifixion", "La descente du Saint-Esprit", "L'ascension", "La transfiguration"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "easy",
  },
  {
    id: 163,
    question: "Chi fu il primo martire cristiano?",
    questions: {
      it: "Chi fu il primo martire cristiano?",
      en: "Who was the first Christian martyr?",
      es: "¿Quién fue el primer mártir cristiano?",
      pt: "Quem foi o primeiro mártir cristão?",
      fr: "Qui fut le premier martyr chrétien?"
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
    category: "Atti degli Apostoli",
    difficulty: "easy",
  },
  {
    id: 164,
    question: "Qual era il nome di Paolo prima della conversione?",
    questions: {
      it: "Qual era il nome di Paolo prima della conversione?",
      en: "What was Paul's name before his conversion?",
      es: "¿Cuál era el nombre de Pablo antes de su conversión?",
      pt: "Qual era o nome de Paulo antes de sua conversão?",
      fr: "Quel était le nom de Paul avant sa conversion?"
    },
    options: ["Simone", "Saulo", "Barnaba", "Timoteo"],
    optionsTranslated: {
      it: ["Simone", "Saulo", "Barnaba", "Timoteo"],
      en: ["Simon", "Saul", "Barnabas", "Timothy"],
      es: ["Simón", "Saulo", "Bernabé", "Timoteo"],
      pt: ["Simão", "Saulo", "Barnabé", "Timóteo"],
      fr: ["Simon", "Saul", "Barnabé", "Timothée"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "easy",
  },
  {
    id: 165,
    question: "Sulla via di quale città Paolo fu convertito?",
    questions: {
      it: "Sulla via di quale città Paolo fu convertito?",
      en: "On the road to which city was Paul converted?",
      es: "¿En el camino a qué ciudad se convirtió Pablo?",
      pt: "No caminho para qual cidade Paulo se converteu?",
      fr: "Sur la route de quelle ville Paul s'est-il converti?"
    },
    options: ["Gerusalemme", "Damasco", "Antiochia", "Roma"],
    optionsTranslated: {
      it: ["Gerusalemme", "Damasco", "Antiochia", "Roma"],
      en: ["Jerusalem", "Damascus", "Antioch", "Rome"],
      es: ["Jerusalén", "Damasco", "Antioquía", "Roma"],
      pt: ["Jerusalém", "Damasco", "Antioquia", "Roma"],
      fr: ["Jérusalem", "Damas", "Antioche", "Rome"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "easy",
  },
  {
    id: 166,
    question: "Chi fu liberato miracolosamente dalla prigione da un angelo?",
    questions: {
      it: "Chi fu liberato miracolosamente dalla prigione da un angelo?",
      en: "Who was miraculously freed from prison by an angel?",
      es: "¿Quién fue liberado milagrosamente de la prisión por un ángel?",
      pt: "Quem foi libertado milagrosamente da prisão por um anjo?",
      fr: "Qui a été miraculeusement libéré de prison par un ange?"
    },
    options: ["Paolo", "Pietro", "Giovanni", "Barnaba"],
    optionsTranslated: {
      it: ["Paolo", "Pietro", "Giovanni", "Barnaba"],
      en: ["Paul", "Peter", "John", "Barnabas"],
      es: ["Pablo", "Pedro", "Juan", "Bernabé"],
      pt: ["Paulo", "Pedro", "João", "Barnabé"],
      fr: ["Paul", "Pierre", "Jean", "Barnabé"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 167,
    question: "Chi accompagnò Paolo nel primo viaggio missionario?",
    questions: {
      it: "Chi accompagnò Paolo nel primo viaggio missionario?",
      en: "Who accompanied Paul on his first missionary journey?",
      es: "¿Quién acompañó a Pablo en su primer viaje misionero?",
      pt: "Quem acompanhou Paulo em sua primeira viagem missionária?",
      fr: "Qui a accompagné Paul lors de son premier voyage missionnaire?"
    },
    options: ["Pietro", "Barnaba", "Timoteo", "Luca"],
    optionsTranslated: {
      it: ["Pietro", "Barnaba", "Timoteo", "Luca"],
      en: ["Peter", "Barnabas", "Timothy", "Luke"],
      es: ["Pedro", "Bernabé", "Timoteo", "Lucas"],
      pt: ["Pedro", "Barnabé", "Timóteo", "Lucas"],
      fr: ["Pierre", "Barnabé", "Timothée", "Luc"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 168,
    question: "In quale città i discepoli furono chiamati 'cristiani' per la prima volta?",
    questions: {
      it: "In quale città i discepoli furono chiamati 'cristiani' per la prima volta?",
      en: "In which city were the disciples first called 'Christians'?",
      es: "¿En qué ciudad los discípulos fueron llamados 'cristianos' por primera vez?",
      pt: "Em qual cidade os discípulos foram chamados de 'cristãos' pela primeira vez?",
      fr: "Dans quelle ville les disciples ont-ils été appelés 'chrétiens' pour la première fois?"
    },
    options: ["Gerusalemme", "Roma", "Antiochia", "Efeso"],
    optionsTranslated: {
      it: ["Gerusalemme", "Roma", "Antiochia", "Efeso"],
      en: ["Jerusalem", "Rome", "Antioch", "Ephesus"],
      es: ["Jerusalén", "Roma", "Antioquía", "Éfeso"],
      pt: ["Jerusalém", "Roma", "Antioquia", "Éfeso"],
      fr: ["Jérusalem", "Rome", "Antioche", "Éphèse"]
    },
    correctAnswer: 2,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 169,
    question: "Chi battezzò l'eunuco etiope?",
    questions: {
      it: "Chi battezzò l'eunuco etiope?",
      en: "Who baptized the Ethiopian eunuch?",
      es: "¿Quién bautizó al eunuco etíope?",
      pt: "Quem batizou o eunuco etíope?",
      fr: "Qui a baptisé l'eunuque éthiopien?"
    },
    options: ["Pietro", "Paolo", "Filippo", "Giovanni"],
    optionsTranslated: {
      it: ["Pietro", "Paolo", "Filippo", "Giovanni"],
      en: ["Peter", "Paul", "Philip", "John"],
      es: ["Pedro", "Pablo", "Felipe", "Juan"],
      pt: ["Pedro", "Paulo", "Filipe", "João"],
      fr: ["Pierre", "Paul", "Philippe", "Jean"]
    },
    correctAnswer: 2,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 170,
    question: "Quanti viaggi missionari fece Paolo?",
    questions: {
      it: "Quanti viaggi missionari fece Paolo?",
      en: "How many missionary journeys did Paul make?",
      es: "¿Cuántos viajes misioneros hizo Pablo?",
      pt: "Quantas viagens missionárias Paulo fez?",
      fr: "Combien de voyages missionnaires Paul a-t-il faits?"
    },
    options: ["2", "3", "4", "5"],
    optionsTranslated: {
      it: ["2", "3", "4", "5"],
      en: ["2", "3", "4", "5"],
      es: ["2", "3", "4", "5"],
      pt: ["2", "3", "4", "5"],
      fr: ["2", "3", "4", "5"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 171,
    question: "Chi era Anania che visitò Paolo a Damasco?",
    questions: {
      it: "Chi era Anania che visitò Paolo a Damasco?",
      en: "Who was Ananias who visited Paul in Damascus?",
      es: "¿Quién era Ananías que visitó a Pablo en Damasco?",
      pt: "Quem era Ananias que visitou Paulo em Damasco?",
      fr: "Qui était Ananias qui a visité Paul à Damas?"
    },
    options: ["Un apostolo", "Un discepolo", "Un fariseo", "Un sacerdote"],
    optionsTranslated: {
      it: ["Un apostolo", "Un discepolo", "Un fariseo", "Un sacerdote"],
      en: ["An apostle", "A disciple", "A Pharisee", "A priest"],
      es: ["Un apóstol", "Un discípulo", "Un fariseo", "Un sacerdote"],
      pt: ["Um apóstolo", "Um discípulo", "Um fariseu", "Um sacerdote"],
      fr: ["Un apôtre", "Un disciple", "Un pharisien", "Un prêtre"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "hard",
  },
  {
    id: 172,
    question: "Dove Paolo tenne il discorso all'Areopago?",
    questions: {
      it: "Dove Paolo tenne il discorso all'Areopago?",
      en: "Where did Paul give his speech at the Areopagus?",
      es: "¿Dónde dio Pablo su discurso en el Areópago?",
      pt: "Onde Paulo fez seu discurso no Areópago?",
      fr: "Où Paul a-t-il prononcé son discours à l'Aréopage?"
    },
    options: ["Roma", "Gerusalemme", "Atene", "Corinto"],
    optionsTranslated: {
      it: ["Roma", "Gerusalemme", "Atene", "Corinto"],
      en: ["Rome", "Jerusalem", "Athens", "Corinth"],
      es: ["Roma", "Jerusalén", "Atenas", "Corinto"],
      pt: ["Roma", "Jerusalém", "Atenas", "Corinto"],
      fr: ["Rome", "Jérusalem", "Athènes", "Corinthe"]
    },
    correctAnswer: 2,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 173,
    question: "Chi era Lidia negli Atti degli Apostoli?",
    questions: {
      it: "Chi era Lidia negli Atti degli Apostoli?",
      en: "Who was Lydia in the Acts of the Apostles?",
      es: "¿Quién era Lidia en los Hechos de los Apóstoles?",
      pt: "Quem era Lídia nos Atos dos Apóstolos?",
      fr: "Qui était Lydie dans les Actes des Apôtres?"
    },
    options: ["Una profetessa", "Una venditrice di porpora", "Una vedova", "Una regina"],
    optionsTranslated: {
      it: ["Una profetessa", "Una venditrice di porpora", "Una vedova", "Una regina"],
      en: ["A prophetess", "A seller of purple", "A widow", "A queen"],
      es: ["Una profetisa", "Una vendedora de púrpura", "Una viuda", "Una reina"],
      pt: ["Uma profetisa", "Uma vendedora de púrpura", "Uma viúva", "Uma rainha"],
      fr: ["Une prophétesse", "Une marchande de pourpre", "Une veuve", "Une reine"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "hard",
  },
  {
    id: 174,
    question: "Come terminò Paolo a Roma?",
    questions: {
      it: "Come terminò Paolo a Roma?",
      en: "How did Paul end up in Rome?",
      es: "¿Cómo terminó Pablo en Roma?",
      pt: "Como Paulo terminou em Roma?",
      fr: "Comment Paul s'est-il retrouvé à Rome?"
    },
    options: ["Come missionario libero", "Come prigioniero", "Come turista", "Come commerciante"],
    optionsTranslated: {
      it: ["Come missionario libero", "Come prigioniero", "Come turista", "Come commerciante"],
      en: ["As a free missionary", "As a prisoner", "As a tourist", "As a merchant"],
      es: ["Como misionero libre", "Como prisionero", "Como turista", "Como comerciante"],
      pt: ["Como missionário livre", "Como prisioneiro", "Como turista", "Como comerciante"],
      fr: ["Comme missionnaire libre", "Comme prisonnier", "Comme touriste", "Comme marchand"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "easy",
  },
  {
    id: 175,
    question: "Cosa decise il Concilio di Gerusalemme riguardo ai gentili?",
    questions: {
      it: "Cosa decise il Concilio di Gerusalemme riguardo ai gentili?",
      en: "What did the Council of Jerusalem decide regarding the Gentiles?",
      es: "¿Qué decidió el Concilio de Jerusalén sobre los gentiles?",
      pt: "O que o Concílio de Jerusalém decidiu sobre os gentios?",
      fr: "Qu'a décidé le Concile de Jérusalem concernant les Gentils?"
    },
    options: ["Dovevano essere circoncisi", "Non era necessaria la circoncisione", "Dovevano diventare ebrei", "Erano esclusi"],
    optionsTranslated: {
      it: ["Dovevano essere circoncisi", "Non era necessaria la circoncisione", "Dovevano diventare ebrei", "Erano esclusi"],
      en: ["They had to be circumcised", "Circumcision was not necessary", "They had to become Jews", "They were excluded"],
      es: ["Debían ser circuncidados", "La circuncisión no era necesaria", "Debían convertirse al judaísmo", "Fueron excluidos"],
      pt: ["Deveriam ser circuncidados", "A circuncisão não era necessária", "Deveriam se tornar judeus", "Foram excluídos"],
      fr: ["Ils devaient être circoncis", "La circoncision n'était pas nécessaire", "Ils devaient devenir juifs", "Ils étaient exclus"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "hard",
  },
  {
    id: 176,
    question: "Chi risuscitò la giovane Tabita?",
    questions: {
      it: "Chi risuscitò la giovane Tabita?",
      en: "Who raised the young woman Tabitha?",
      es: "¿Quién resucitó a la joven Tabita?",
      pt: "Quem ressuscitou a jovem Tabita?",
      fr: "Qui a ressuscité la jeune Tabitha?"
    },
    options: ["Paolo", "Pietro", "Giovanni", "Filippo"],
    optionsTranslated: {
      it: ["Paolo", "Pietro", "Giovanni", "Filippo"],
      en: ["Paul", "Peter", "John", "Philip"],
      es: ["Pablo", "Pedro", "Juan", "Felipe"],
      pt: ["Paulo", "Pedro", "João", "Filipe"],
      fr: ["Paul", "Pierre", "Jean", "Philippe"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "hard",
  },
  {
    id: 177,
    question: "Chi disse: 'È più beato dare che ricevere'?",
    questions: {
      it: "Chi disse: 'È più beato dare che ricevere'?",
      en: "Who said: 'It is more blessed to give than to receive'?",
      es: "¿Quién dijo: 'Es más dichoso dar que recibir'?",
      pt: "Quem disse: 'Mais bem-aventurado é dar que receber'?",
      fr: "Qui a dit: 'Il y a plus de bonheur à donner qu'à recevoir'?"
    },
    options: ["Pietro", "Paolo citando Gesù", "Giovanni", "Giacomo"],
    optionsTranslated: {
      it: ["Pietro", "Paolo citando Gesù", "Giovanni", "Giacomo"],
      en: ["Peter", "Paul quoting Jesus", "John", "James"],
      es: ["Pedro", "Pablo citando a Jesús", "Juan", "Santiago"],
      pt: ["Pedro", "Paulo citando Jesus", "João", "Tiago"],
      fr: ["Pierre", "Paul citant Jésus", "Jean", "Jacques"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "hard",
  },
  {
    id: 178,
    question: "Chi erano Aquila e Priscilla?",
    questions: {
      it: "Chi erano Aquila e Priscilla?",
      en: "Who were Aquila and Priscilla?",
      es: "¿Quiénes eran Aquila y Priscila?",
      pt: "Quem eram Áquila e Priscila?",
      fr: "Qui étaient Aquila et Priscille?"
    },
    options: ["Apostoli", "Una coppia di fabbricanti di tende", "Sacerdoti", "Fratelli di Paolo"],
    optionsTranslated: {
      it: ["Apostoli", "Una coppia di fabbricanti di tende", "Sacerdoti", "Fratelli di Paolo"],
      en: ["Apostles", "A couple of tentmakers", "Priests", "Paul's brothers"],
      es: ["Apóstoles", "Una pareja de fabricantes de tiendas", "Sacerdotes", "Hermanos de Pablo"],
      pt: ["Apóstolos", "Um casal de fabricantes de tendas", "Sacerdotes", "Irmãos de Paulo"],
      fr: ["Apôtres", "Un couple de fabricants de tentes", "Prêtres", "Frères de Paul"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 179,
    question: "Cosa accadde quando Paolo e Sila cantavano in prigione?",
    questions: {
      it: "Cosa accadde quando Paolo e Sila cantavano in prigione?",
      en: "What happened when Paul and Silas were singing in prison?",
      es: "¿Qué sucedió cuando Pablo y Silas cantaban en la cárcel?",
      pt: "O que aconteceu quando Paulo e Silas cantavam na prisão?",
      fr: "Que s'est-il passé quand Paul et Silas chantaient en prison?"
    },
    options: ["Furono liberati dalle guardie", "Un terremoto aprì le porte", "Furono giustiziati", "Furono trasferiti"],
    optionsTranslated: {
      it: ["Furono liberati dalle guardie", "Un terremoto aprì le porte", "Furono giustiziati", "Furono trasferiti"],
      en: ["They were freed by guards", "An earthquake opened the doors", "They were executed", "They were transferred"],
      es: ["Fueron liberados por los guardias", "Un terremoto abrió las puertas", "Fueron ejecutados", "Fueron transferidos"],
      pt: ["Foram libertados pelos guardas", "Um terremoto abriu as portas", "Foram executados", "Foram transferidos"],
      fr: ["Ils ont été libérés par les gardes", "Un tremblement de terre a ouvert les portes", "Ils ont été exécutés", "Ils ont été transférés"]
    },
    correctAnswer: 1,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },
  {
    id: 180,
    question: "Quante lingue parlarono gli apostoli a Pentecoste?",
    questions: {
      it: "Quante lingue parlarono gli apostoli a Pentecoste?",
      en: "How many languages did the apostles speak at Pentecost?",
      es: "¿Cuántos idiomas hablaron los apóstoles en Pentecostés?",
      pt: "Quantas línguas os apóstolos falaram em Pentecostes?",
      fr: "Combien de langues les apôtres ont-ils parlé à la Pentecôte?"
    },
    options: ["7", "12", "Tutte le lingue dei presenti", "3"],
    optionsTranslated: {
      it: ["7", "12", "Tutte le lingue dei presenti", "3"],
      en: ["7", "12", "All the languages of those present", "3"],
      es: ["7", "12", "Todos los idiomas de los presentes", "3"],
      pt: ["7", "12", "Todas as línguas dos presentes", "3"],
      fr: ["7", "12", "Toutes les langues des présents", "3"]
    },
    correctAnswer: 2,
    category: "Atti degli Apostoli",
    difficulty: "medium",
  },

  // ============= APOCALISSE (20 questions) =============
  {
    id: 181,
    question: "Chi scrisse il libro dell'Apocalisse?",
    questions: {
      it: "Chi scrisse il libro dell'Apocalisse?",
      en: "Who wrote the book of Revelation?",
      es: "¿Quién escribió el libro del Apocalipsis?",
      pt: "Quem escreveu o livro do Apocalipse?",
      fr: "Qui a écrit le livre de l'Apocalypse?"
    },
    options: ["Paolo", "Pietro", "Giovanni", "Luca"],
    optionsTranslated: {
      it: ["Paolo", "Pietro", "Giovanni", "Luca"],
      en: ["Paul", "Peter", "John", "Luke"],
      es: ["Pablo", "Pedro", "Juan", "Lucas"],
      pt: ["Paulo", "Pedro", "João", "Lucas"],
      fr: ["Paul", "Pierre", "Jean", "Luc"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 182,
    question: "Su quale isola Giovanni ebbe le visioni dell'Apocalisse?",
    questions: {
      it: "Su quale isola Giovanni ebbe le visioni dell'Apocalisse?",
      en: "On which island did John have the visions of Revelation?",
      es: "¿En qué isla tuvo Juan las visiones del Apocalipsis?",
      pt: "Em qual ilha João teve as visões do Apocalipse?",
      fr: "Sur quelle île Jean a-t-il eu les visions de l'Apocalypse?"
    },
    options: ["Cipro", "Creta", "Patmos", "Malta"],
    optionsTranslated: {
      it: ["Cipro", "Creta", "Patmos", "Malta"],
      en: ["Cyprus", "Crete", "Patmos", "Malta"],
      es: ["Chipre", "Creta", "Patmos", "Malta"],
      pt: ["Chipre", "Creta", "Patmos", "Malta"],
      fr: ["Chypre", "Crète", "Patmos", "Malte"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 183,
    question: "A quante chiese sono indirizzate le lettere dell'Apocalisse?",
    questions: {
      it: "A quante chiese sono indirizzate le lettere dell'Apocalisse?",
      en: "To how many churches are the letters of Revelation addressed?",
      es: "¿A cuántas iglesias están dirigidas las cartas del Apocalipsis?",
      pt: "Para quantas igrejas são endereçadas as cartas do Apocalipse?",
      fr: "À combien d'églises les lettres de l'Apocalypse sont-elles adressées?"
    },
    options: ["5", "7", "12", "10"],
    optionsTranslated: {
      it: ["5", "7", "12", "10"],
      en: ["5", "7", "12", "10"],
      es: ["5", "7", "12", "10"],
      pt: ["5", "7", "12", "10"],
      fr: ["5", "7", "12", "10"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 184,
    question: "Qual è il numero della bestia nell'Apocalisse?",
    questions: {
      it: "Qual è il numero della bestia nell'Apocalisse?",
      en: "What is the number of the beast in Revelation?",
      es: "¿Cuál es el número de la bestia en el Apocalipsis?",
      pt: "Qual é o número da besta no Apocalipse?",
      fr: "Quel est le nombre de la bête dans l'Apocalypse?"
    },
    options: ["333", "666", "777", "999"],
    optionsTranslated: {
      it: ["333", "666", "777", "999"],
      en: ["333", "666", "777", "999"],
      es: ["333", "666", "777", "999"],
      pt: ["333", "666", "777", "999"],
      fr: ["333", "666", "777", "999"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 185,
    question: "Quanti sigilli vengono aperti nell'Apocalisse?",
    questions: {
      it: "Quanti sigilli vengono aperti nell'Apocalisse?",
      en: "How many seals are opened in Revelation?",
      es: "¿Cuántos sellos se abren en el Apocalipsis?",
      pt: "Quantos selos são abertos no Apocalipse?",
      fr: "Combien de sceaux sont ouverts dans l'Apocalypse?"
    },
    options: ["5", "6", "7", "12"],
    optionsTranslated: {
      it: ["5", "6", "7", "12"],
      en: ["5", "6", "7", "12"],
      es: ["5", "6", "7", "12"],
      pt: ["5", "6", "7", "12"],
      fr: ["5", "6", "7", "12"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 186,
    question: "Chi è l'Agnello nell'Apocalisse?",
    questions: {
      it: "Chi è l'Agnello nell'Apocalisse?",
      en: "Who is the Lamb in Revelation?",
      es: "¿Quién es el Cordero en el Apocalipsis?",
      pt: "Quem é o Cordeiro no Apocalipse?",
      fr: "Qui est l'Agneau dans l'Apocalypse?"
    },
    options: ["Giovanni", "Mosè", "Cristo", "Un angelo"],
    optionsTranslated: {
      it: ["Giovanni", "Mosè", "Cristo", "Un angelo"],
      en: ["John", "Moses", "Christ", "An angel"],
      es: ["Juan", "Moisés", "Cristo", "Un ángel"],
      pt: ["João", "Moisés", "Cristo", "Um anjo"],
      fr: ["Jean", "Moïse", "Christ", "Un ange"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 187,
    question: "Quanti cavalieri dell'Apocalisse ci sono?",
    questions: {
      it: "Quanti cavalieri dell'Apocalisse ci sono?",
      en: "How many horsemen of the Apocalypse are there?",
      es: "¿Cuántos jinetes del Apocalipsis hay?",
      pt: "Quantos cavaleiros do Apocalipse existem?",
      fr: "Combien de cavaliers de l'Apocalypse y a-t-il?"
    },
    options: ["3", "4", "7", "12"],
    optionsTranslated: {
      it: ["3", "4", "7", "12"],
      en: ["3", "4", "7", "12"],
      es: ["3", "4", "7", "12"],
      pt: ["3", "4", "7", "12"],
      fr: ["3", "4", "7", "12"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 188,
    question: "Come si chiama la città celeste nell'Apocalisse?",
    questions: {
      it: "Come si chiama la città celeste nell'Apocalisse?",
      en: "What is the name of the heavenly city in Revelation?",
      es: "¿Cómo se llama la ciudad celestial en el Apocalipsis?",
      pt: "Como se chama a cidade celestial no Apocalipse?",
      fr: "Comment s'appelle la cité céleste dans l'Apocalypse?"
    },
    options: ["Babilonia", "La Nuova Gerusalemme", "Sion", "Il Paradiso"],
    optionsTranslated: {
      it: ["Babilonia", "La Nuova Gerusalemme", "Sion", "Il Paradiso"],
      en: ["Babylon", "The New Jerusalem", "Zion", "Paradise"],
      es: ["Babilonia", "La Nueva Jerusalén", "Sión", "El Paraíso"],
      pt: ["Babilônia", "A Nova Jerusalém", "Sião", "O Paraíso"],
      fr: ["Babylone", "La Nouvelle Jérusalem", "Sion", "Le Paradis"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 189,
    question: "Cosa rappresenta la 'grande prostituta' nell'Apocalisse?",
    questions: {
      it: "Cosa rappresenta la 'grande prostituta' nell'Apocalisse?",
      en: "What does the 'great prostitute' represent in Revelation?",
      es: "¿Qué representa la 'gran ramera' en el Apocalipsis?",
      pt: "O que a 'grande prostituta' representa no Apocalipse?",
      fr: "Que représente la 'grande prostituée' dans l'Apocalypse?"
    },
    options: ["Una persona", "Babilonia/Roma", "Gerusalemme", "L'Egitto"],
    optionsTranslated: {
      it: ["Una persona", "Babilonia/Roma", "Gerusalemme", "L'Egitto"],
      en: ["A person", "Babylon/Rome", "Jerusalem", "Egypt"],
      es: ["Una persona", "Babilonia/Roma", "Jerusalén", "Egipto"],
      pt: ["Uma pessoa", "Babilônia/Roma", "Jerusalém", "Egito"],
      fr: ["Une personne", "Babylone/Rome", "Jérusalem", "L'Égypte"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 190,
    question: "Quante trombe suonano gli angeli nell'Apocalisse?",
    questions: {
      it: "Quante trombe suonano gli angeli nell'Apocalisse?",
      en: "How many trumpets do the angels sound in Revelation?",
      es: "¿Cuántas trompetas tocan los ángeles en el Apocalipsis?",
      pt: "Quantas trombetas os anjos tocam no Apocalipse?",
      fr: "Combien de trompettes les anges sonnent-ils dans l'Apocalypse?"
    },
    options: ["5", "6", "7", "12"],
    optionsTranslated: {
      it: ["5", "6", "7", "12"],
      en: ["5", "6", "7", "12"],
      es: ["5", "6", "7", "12"],
      pt: ["5", "6", "7", "12"],
      fr: ["5", "6", "7", "12"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 191,
    question: "Cosa tiene l'Agnello nella visione celeste?",
    questions: {
      it: "Cosa tiene l'Agnello nella visione celeste?",
      en: "What does the Lamb hold in the heavenly vision?",
      es: "¿Qué sostiene el Cordero en la visión celestial?",
      pt: "O que o Cordeiro segura na visão celestial?",
      fr: "Que tient l'Agneau dans la vision céleste?"
    },
    options: ["Una spada", "Un libro con sette sigilli", "Una corona", "Un calice"],
    optionsTranslated: {
      it: ["Una spada", "Un libro con sette sigilli", "Una corona", "Un calice"],
      en: ["A sword", "A scroll with seven seals", "A crown", "A chalice"],
      es: ["Una espada", "Un libro con siete sellos", "Una corona", "Un cáliz"],
      pt: ["Uma espada", "Um livro com sete selos", "Uma coroa", "Um cálice"],
      fr: ["Une épée", "Un livre avec sept sceaux", "Une couronne", "Un calice"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 192,
    question: "Chi combatte contro il dragone nell'Apocalisse?",
    questions: {
      it: "Chi combatte contro il dragone nell'Apocalisse?",
      en: "Who fights against the dragon in Revelation?",
      es: "¿Quién lucha contra el dragón en el Apocalipsis?",
      pt: "Quem luta contra o dragão no Apocalipse?",
      fr: "Qui combat le dragon dans l'Apocalypse?"
    },
    options: ["Giovanni", "L'arcangelo Michele", "Pietro", "Gabriele"],
    optionsTranslated: {
      it: ["Giovanni", "L'arcangelo Michele", "Pietro", "Gabriele"],
      en: ["John", "The Archangel Michael", "Peter", "Gabriel"],
      es: ["Juan", "El arcángel Miguel", "Pedro", "Gabriel"],
      pt: ["João", "O arcanjo Miguel", "Pedro", "Gabriel"],
      fr: ["Jean", "L'archange Michel", "Pierre", "Gabriel"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 193,
    question: "Quanto durerà il regno millenario secondo l'Apocalisse?",
    questions: {
      it: "Quanto durerà il regno millenario secondo l'Apocalisse?",
      en: "How long will the millennial kingdom last according to Revelation?",
      es: "¿Cuánto durará el reino milenario según el Apocalipsis?",
      pt: "Quanto durará o reino milenar segundo o Apocalipse?",
      fr: "Combien de temps durera le règne millénaire selon l'Apocalypse?"
    },
    options: ["100 anni", "500 anni", "1000 anni", "Per sempre"],
    optionsTranslated: {
      it: ["100 anni", "500 anni", "1000 anni", "Per sempre"],
      en: ["100 years", "500 years", "1000 years", "Forever"],
      es: ["100 años", "500 años", "1000 años", "Para siempre"],
      pt: ["100 anos", "500 anos", "1000 anos", "Para sempre"],
      fr: ["100 ans", "500 ans", "1000 ans", "Pour toujours"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 194,
    question: "Di che colore è il cavallo della Morte nell'Apocalisse?",
    questions: {
      it: "Di che colore è il cavallo della Morte nell'Apocalisse?",
      en: "What color is the horse of Death in Revelation?",
      es: "¿De qué color es el caballo de la Muerte en el Apocalipsis?",
      pt: "De que cor é o cavalo da Morte no Apocalipse?",
      fr: "De quelle couleur est le cheval de la Mort dans l'Apocalypse?"
    },
    options: ["Bianco", "Rosso", "Nero", "Verdastro/Pallido"],
    optionsTranslated: {
      it: ["Bianco", "Rosso", "Nero", "Verdastro/Pallido"],
      en: ["White", "Red", "Black", "Pale/Green"],
      es: ["Blanco", "Rojo", "Negro", "Pálido/Verdoso"],
      pt: ["Branco", "Vermelho", "Preto", "Pálido/Esverdeado"],
      fr: ["Blanc", "Rouge", "Noir", "Pâle/Verdâtre"]
    },
    correctAnswer: 3,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 195,
    question: "Quante coppe dell'ira di Dio vengono versate?",
    questions: {
      it: "Quante coppe dell'ira di Dio vengono versate?",
      en: "How many bowls of God's wrath are poured out?",
      es: "¿Cuántas copas de la ira de Dios se derraman?",
      pt: "Quantas taças da ira de Deus são derramadas?",
      fr: "Combien de coupes de la colère de Dieu sont versées?"
    },
    options: ["5", "6", "7", "10"],
    optionsTranslated: {
      it: ["5", "6", "7", "10"],
      en: ["5", "6", "7", "10"],
      es: ["5", "6", "7", "10"],
      pt: ["5", "6", "7", "10"],
      fr: ["5", "6", "7", "10"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "hard",
  },
  {
    id: 196,
    question: "Chi sono i 144.000 segnati nell'Apocalisse?",
    questions: {
      it: "Chi sono i 144.000 segnati nell'Apocalisse?",
      en: "Who are the 144,000 sealed in Revelation?",
      es: "¿Quiénes son los 144.000 sellados en el Apocalipsis?",
      pt: "Quem são os 144.000 selados no Apocalipse?",
      fr: "Qui sont les 144 000 scellés dans l'Apocalypse?"
    },
    options: ["Angeli", "Servi di Dio dalle tribù d'Israele", "Martiri", "Profeti"],
    optionsTranslated: {
      it: ["Angeli", "Servi di Dio dalle tribù d'Israele", "Martiri", "Profeti"],
      en: ["Angels", "Servants of God from the tribes of Israel", "Martyrs", "Prophets"],
      es: ["Ángeles", "Siervos de Dios de las tribus de Israel", "Mártires", "Profetas"],
      pt: ["Anjos", "Servos de Deus das tribos de Israel", "Mártires", "Profetas"],
      fr: ["Anges", "Serviteurs de Dieu des tribus d'Israël", "Martyrs", "Prophètes"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 197,
    question: "Cosa avviene alla fine dell'Apocalisse?",
    questions: {
      it: "Cosa avviene alla fine dell'Apocalisse?",
      en: "What happens at the end of Revelation?",
      es: "¿Qué sucede al final del Apocalipsis?",
      pt: "O que acontece no final do Apocalipse?",
      fr: "Que se passe-t-il à la fin de l'Apocalypse?"
    },
    options: ["La distruzione totale", "Un nuovo cielo e una nuova terra", "Il ritorno in Eden", "Il silenzio eterno"],
    optionsTranslated: {
      it: ["La distruzione totale", "Un nuovo cielo e una nuova terra", "Il ritorno in Eden", "Il silenzio eterno"],
      en: ["Total destruction", "A new heaven and a new earth", "Return to Eden", "Eternal silence"],
      es: ["La destrucción total", "Un cielo nuevo y una tierra nueva", "El regreso al Edén", "El silencio eterno"],
      pt: ["A destruição total", "Um novo céu e uma nova terra", "O retorno ao Éden", "O silêncio eterno"],
      fr: ["La destruction totale", "Un nouveau ciel et une nouvelle terre", "Le retour à l'Éden", "Le silence éternel"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "easy",
  },
  {
    id: 198,
    question: "Quale albero si trova nella Nuova Gerusalemme?",
    questions: {
      it: "Quale albero si trova nella Nuova Gerusalemme?",
      en: "Which tree is found in the New Jerusalem?",
      es: "¿Qué árbol se encuentra en la Nueva Jerusalén?",
      pt: "Qual árvore é encontrada na Nova Jerusalém?",
      fr: "Quel arbre se trouve dans la Nouvelle Jérusalem?"
    },
    options: ["L'albero della conoscenza", "L'albero della vita", "L'albero di Davide", "L'ulivo"],
    optionsTranslated: {
      it: ["L'albero della conoscenza", "L'albero della vita", "L'albero di Davide", "L'ulivo"],
      en: ["The tree of knowledge", "The tree of life", "The tree of David", "The olive tree"],
      es: ["El árbol del conocimiento", "El árbol de la vida", "El árbol de David", "El olivo"],
      pt: ["A árvore do conhecimento", "A árvore da vida", "A árvore de Davi", "A oliveira"],
      fr: ["L'arbre de la connaissance", "L'arbre de vie", "L'arbre de David", "L'olivier"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 199,
    question: "Chi dice 'Ecco, io vengo presto' nell'Apocalisse?",
    questions: {
      it: "Chi dice 'Ecco, io vengo presto' nell'Apocalisse?",
      en: "Who says 'Behold, I am coming soon' in Revelation?",
      es: "¿Quién dice 'He aquí, yo vengo pronto' en el Apocalipsis?",
      pt: "Quem diz 'Eis que venho em breve' no Apocalipse?",
      fr: "Qui dit 'Voici, je viens bientôt' dans l'Apocalypse?"
    },
    options: ["Giovanni", "Un angelo", "Cristo", "Lo Spirito Santo"],
    optionsTranslated: {
      it: ["Giovanni", "Un angelo", "Cristo", "Lo Spirito Santo"],
      en: ["John", "An angel", "Christ", "The Holy Spirit"],
      es: ["Juan", "Un ángel", "Cristo", "El Espíritu Santo"],
      pt: ["João", "Um anjo", "Cristo", "O Espírito Santo"],
      fr: ["Jean", "Un ange", "Christ", "Le Saint-Esprit"]
    },
    correctAnswer: 2,
    category: "Apocalisse",
    difficulty: "medium",
  },
  {
    id: 200,
    question: "Qual è l'ultima parola dell'Apocalisse e della Bibbia?",
    questions: {
      it: "Qual è l'ultima parola dell'Apocalisse e della Bibbia?",
      en: "What is the last word of Revelation and the Bible?",
      es: "¿Cuál es la última palabra del Apocalipsis y de la Biblia?",
      pt: "Qual é a última palavra do Apocalipse e da Bíblia?",
      fr: "Quel est le dernier mot de l'Apocalypse et de la Bible?"
    },
    options: ["Gloria", "Amen", "Alleluia", "Pace"],
    optionsTranslated: {
      it: ["Gloria", "Amen", "Alleluia", "Pace"],
      en: ["Glory", "Amen", "Hallelujah", "Peace"],
      es: ["Gloria", "Amén", "Aleluya", "Paz"],
      pt: ["Glória", "Amém", "Aleluia", "Paz"],
      fr: ["Gloire", "Amen", "Alléluia", "Paix"]
    },
    correctAnswer: 1,
    category: "Apocalisse",
    difficulty: "hard",
  },

  // ============= CHIESA PRIMITIVA E LETTERE PAOLINE (50 questions) =============
  {
    id: 201,
    question: "Dove avvenne la discesa dello Spirito Santo sugli apostoli?",
    options: ["Nel tempio", "Nel cenacolo", "Sul monte degli Ulivi", "A Betania"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "easy",
  },
  {
    id: 202,
    question: "Quante persone si convertirono dopo il discorso di Pietro a Pentecoste?",
    options: ["500", "1000", "3000", "5000"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 203,
    question: "Chi fu scelto per sostituire Giuda tra i dodici apostoli?",
    options: ["Paolo", "Barnaba", "Mattia", "Timoteo"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 204,
    question: "Chi erano Anania e Saffira?",
    options: ["Due apostoli", "Una coppia che mentì allo Spirito Santo", "I genitori di Paolo", "Due profeti"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 205,
    question: "Chi fu il primo diacono martire?",
    options: ["Filippo", "Stefano", "Procoro", "Nicola"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "easy",
  },
  {
    id: 206,
    question: "Chi battezzò l'eunuco etiope?",
    options: ["Pietro", "Paolo", "Filippo", "Giovanni"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 207,
    question: "Sulla via di quale città Paolo ebbe la visione di Cristo?",
    options: ["Gerusalemme", "Damasco", "Antiochia", "Tarso"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "easy",
  },
  {
    id: 208,
    question: "Chi impose le mani a Paolo perché riacquistasse la vista?",
    options: ["Pietro", "Barnaba", "Anania", "Giacomo"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 209,
    question: "Qual era il nome di Paolo prima della conversione?",
    options: ["Simone", "Saulo", "Silvano", "Sila"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "easy",
  },
  {
    id: 210,
    question: "Chi fu il primo centurione romano a convertirsi?",
    options: ["Cornelio", "Sergio Paolo", "Giulio", "Longino"],
    correctAnswer: 0,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 211,
    question: "Chi accompagnò Paolo nel primo viaggio missionario?",
    options: ["Sila", "Timoteo", "Barnaba", "Luca"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 212,
    question: "In quale città Paolo e Sila furono imprigionati e liberati da un terremoto?",
    options: ["Tessalonica", "Filippi", "Corinto", "Efeso"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 213,
    question: "Chi era Lidia di cui si parla negli Atti?",
    options: ["Una profetessa", "Una venditrice di porpora", "Una diaconessa", "Una regina"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 214,
    question: "Dove Paolo predicò all'Areopago?",
    options: ["Roma", "Corinto", "Atene", "Efeso"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 215,
    question: "Su quale isola Paolo naufragò durante il viaggio verso Roma?",
    options: ["Creta", "Cipro", "Malta", "Sicilia"],
    correctAnswer: 2,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 216,
    question: "Quanti viaggi missionari fece Paolo?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 217,
    question: "A chi Paolo scrisse la Lettera ai Romani?",
    options: ["A una singola persona", "Alla chiesa di Roma", "All'imperatore", "Ai giudei di Roma"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 218,
    question: "Quante lettere scrisse Paolo ai Corinzi?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 219,
    question: "In quale lettera Paolo parla dell'inno all'amore?",
    options: ["Romani", "1 Corinzi", "Efesini", "Filippesi"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 220,
    question: "Quale capitolo di 1 Corinzi contiene l'inno all'amore?",
    options: ["Capitolo 10", "Capitolo 12", "Capitolo 13", "Capitolo 15"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 221,
    question: "Qual è il tema principale della Lettera ai Galati?",
    options: ["L'amore", "La libertà in Cristo dalla legge", "La preghiera", "Il matrimonio"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 222,
    question: "Qual è il frutto dello Spirito secondo Galati 5?",
    options: ["Ricchezza e potere", "Amore, gioia, pace...", "Saggezza e conoscenza", "Miracoli e prodigi"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 223,
    question: "Quale lettera Paolo scrisse dalla prigione chiamata 'lettera della gioia'?",
    options: ["Efesini", "Filippesi", "Colossesi", "Filemone"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 224,
    question: "In quale lettera Paolo parla dell'armatura di Dio?",
    options: ["Romani", "Galati", "Efesini", "Colossesi"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 225,
    question: "Chi era Filemone?",
    options: ["Un apostolo", "Un padrone di uno schiavo", "Un diacono", "Un profeta"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 226,
    question: "Chi era Onesimo nella Lettera a Filemone?",
    options: ["Un apostolo", "Uno schiavo fuggitivo convertito", "Un diacono", "Un profeta"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 227,
    question: "Quali sono le 'lettere pastorali' di Paolo?",
    options: ["Romani, Galati", "Efesini, Filippesi", "1-2 Timoteo, Tito", "1-2 Tessalonicesi"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 228,
    question: "Chi era Timoteo per Paolo?",
    options: ["Suo nemico", "Suo figlio spirituale e collaboratore", "Suo fratello carnale", "Suo persecutore"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 229,
    question: "Quale versetto dice 'Tutta la Scrittura è ispirata da Dio'?",
    options: ["Romani 1:16", "1 Corinzi 13:13", "2 Timoteo 3:16", "Galati 5:22"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 230,
    question: "Quale lettera parla del 'rapimento' dei credenti?",
    options: ["Romani", "1 Corinzi", "1 Tessalonicesi", "Efesini"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 231,
    question: "Quale concetto teologico è centrale in Romani?",
    options: ["La grazia per le opere", "La giustificazione per fede", "La salvezza per la legge", "Il giudizio immediato"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 232,
    question: "In quale lettera Paolo elenca i doni spirituali?",
    options: ["Romani", "1 Corinzi", "Galati", "Efesini"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 233,
    question: "Quale metafora usa Paolo per descrivere la chiesa?",
    options: ["Un edificio", "Un corpo", "Un gregge", "Tutte le precedenti"],
    correctAnswer: 3,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 234,
    question: "Quale lettera contiene l'insegnamento sulla risurrezione dei morti?",
    options: ["Romani 8", "1 Corinzi 15", "Galati 3", "Efesini 2"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 235,
    question: "Cosa significa 'grazia' nel pensiero paolino?",
    options: ["Merito umano", "Favore immeritato di Dio", "Obbedienza alla legge", "Sacrifici rituali"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 236,
    question: "Quale versetto dice 'Ho combattuto il buon combattimento'?",
    options: ["Romani 8:28", "1 Corinzi 13:13", "2 Timoteo 4:7", "Filippesi 4:13"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 237,
    question: "Quale versetto afferma 'Posso ogni cosa in colui che mi fortifica'?",
    options: ["Romani 8:28", "Efesini 2:8", "Filippesi 4:13", "Colossesi 3:17"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "easy",
  },
  {
    id: 238,
    question: "Quante lettere di Paolo sono nel Nuovo Testamento?",
    options: ["7", "10", "13", "15"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 239,
    question: "Dove si trovava Paolo quando scrisse le lettere dalla prigionia?",
    options: ["Gerusalemme", "Cesarea", "Roma", "Efeso"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 240,
    question: "Chi erano Aquila e Priscilla?",
    options: ["Due apostoli", "Una coppia di fabbricanti di tende", "Fratelli di Paolo", "Sacerdoti convertiti"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 241,
    question: "Quale giovane cadde dalla finestra mentre Paolo predicava?",
    options: ["Timoteo", "Eutico", "Tito", "Trofimo"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "hard",
  },
  {
    id: 242,
    question: "Davanti a quale re Paolo raccontò la sua conversione?",
    options: ["Erode", "Agrippa", "Nerone", "Cesare"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "medium",
  },
  {
    id: 243,
    question: "Quale decisione importante fu presa al Concilio di Gerusalemme?",
    options: ["I gentili dovevano circoncidersi", "I gentili non dovevano circoncidersi", "Solo gli ebrei potevano convertirsi", "Il sabato era obbligatorio"],
    correctAnswer: 1,
    category: "Chiesa Primitiva",
    difficulty: "hard",
  },
  {
    id: 244,
    question: "Quale famoso inno cristologico si trova in Filippesi 2?",
    options: ["L'inno all'amore", "L'inno della kenosi", "L'inno della creazione", "L'inno della risurrezione"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 245,
    question: "Quale lettera fu scritta per affrontare l'eresia proto-gnostica?",
    options: ["Romani", "Galati", "Colossesi", "Filemone"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 246,
    question: "Quale città era famosa per la sua immoralità e fu destinataria di due lettere?",
    options: ["Roma", "Efeso", "Corinto", "Tessalonica"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "medium",
  },
  {
    id: 247,
    question: "Quale lettera Paolo scrisse prima di tutte le altre?",
    options: ["Romani", "Galati", "1 Tessalonicesi", "1 Corinzi"],
    correctAnswer: 2,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 248,
    question: "A chi Paolo scrisse riguardo ai requisiti per vescovi e diaconi?",
    options: ["Filemone", "Tito", "Timoteo", "Tito e Timoteo"],
    correctAnswer: 3,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 249,
    question: "In quale lettera Paolo afferma la supremazia di Cristo su tutto?",
    options: ["Romani", "Efesini", "Colossesi", "Efesini e Colossesi"],
    correctAnswer: 3,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
  {
    id: 250,
    question: "Qual è il versetto più famoso di Romani sulla giustificazione?",
    options: ["Romani 1:1", "Romani 3:23-24", "Romani 8:28", "Romani 12:1"],
    correctAnswer: 1,
    category: "Lettere Paoline",
    difficulty: "hard",
  },
];

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

export const getQuestionsByCategory = (categoryName: string): Question[] => {
  return questions.filter(q => q.category === categoryName);
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
  {
    id: "pentateuco",
    name: "Pentateuco",
    description: "I primi cinque libri della Bibbia",
    icon: "scroll",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "profeti-minori",
    name: "Profeti Minori",
    description: "I dodici profeti minori",
    icon: "scroll",
    color: "from-red-500 to-rose-600",
  },
  {
    id: "quattro-vangeli",
    name: "Quattro Vangeli",
    description: "La vita di Gesù nei quattro Vangeli",
    icon: "book-open",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "lettere-paoline",
    name: "Lettere Paoline",
    description: "Le epistole di San Paolo",
    icon: "scroll",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "letteratura-sapienziale",
    name: "Letteratura Sapienziale",
    description: "Proverbi, Ecclesiaste e libri di saggezza",
    icon: "sparkles",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "atti-apostoli",
    name: "Atti degli Apostoli",
    description: "La nascita della Chiesa primitiva",
    icon: "flame",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "apocalisse",
    name: "Apocalisse",
    description: "Le visioni profetiche di Giovanni",
    icon: "eye",
    color: "from-violet-500 to-purple-600",
  },
];

// Get all questions for full Bible quiz (100 questions)
export const getFullBibleQuestions = (count: number = 100): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
};

// Get random questions from all categories
export const getRandomQuestions = (count: number = 100): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
};

// Get questions filtered by difficulty
export const getQuestionsByDifficulty = (
  categoryQuestions: Question[],
  difficulty: "easy" | "medium" | "hard"
): Question[] => {
  return categoryQuestions.filter(q => q.difficulty === difficulty);
};

// Get next question based on adaptive difficulty
export const getNextQuestionAdaptive = (
  availableQuestions: Question[],
  currentDifficulty: "easy" | "medium" | "hard",
  answeredIds: number[]
): Question | null => {
  const unanswered = availableQuestions.filter(q => !answeredIds.includes(q.id));
  
  // Try to get a question at current difficulty
  let candidates = unanswered.filter(q => q.difficulty === currentDifficulty);
  
  // If no questions at current difficulty, get any unanswered
  if (candidates.length === 0) {
    candidates = unanswered;
  }
  
  if (candidates.length === 0) return null;
  
  return candidates[Math.floor(Math.random() * candidates.length)];
};
