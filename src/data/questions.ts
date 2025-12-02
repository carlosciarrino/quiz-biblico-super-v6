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
