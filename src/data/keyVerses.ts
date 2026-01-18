export interface KeyVerse {
  reference: string;
  text: {
    it: string;
    en: string;
    es: string;
    pt: string;
    fr: string;
  };
  theme: string;
}

export interface CategoryKeyVerses {
  categoryId: string;
  categoryName: string;
  verses: KeyVerse[];
}

export const keyVersesByCategory: CategoryKeyVerses[] = [
  {
    categoryId: "antico-testamento",
    categoryName: "Antico Testamento",
    verses: [
      {
        reference: "Genesi 1:1",
        text: {
          it: "Nel principio Dio creo i cieli e la terra.",
          en: "In the beginning God created the heavens and the earth.",
          es: "En el principio creo Dios los cielos y la tierra.",
          pt: "No principio Deus criou os ceus e a terra.",
          fr: "Au commencement, Dieu crea les cieux et la terre."
        },
        theme: "Creazione"
      },
      {
        reference: "Genesi 12:1-2",
        text: {
          it: "Il SIGNORE disse ad Abramo: Va via dal tuo paese, dai tuoi parenti e dalla casa di tuo padre, e va nel paese che io ti mostrero; io faro di te una grande nazione.",
          en: "The LORD had said to Abram, Go from your country, your people and your fathers household to the land I will show you. I will make you into a great nation.",
          es: "Jehova dijo a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostrare. Hare de ti una nacion grande.",
          pt: "Ora, o SENHOR disse a Abrao: Sai da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei. Farei de ti uma grande nacao.",
          fr: "L'Eternel dit a Abram: Va-t'en de ton pays, de ta patrie, et de la maison de ton pere, dans le pays que je te montrerai. Je ferai de toi une grande nation."
        },
        theme: "Vocazione di Abramo"
      },
      {
        reference: "Esodo 20:2-3",
        text: {
          it: "Io sono il SIGNORE, il tuo Dio, che ti ho fatto uscire dal paese d'Egitto, dalla casa di schiavitu. Non avere altri dei oltre a me.",
          en: "I am the LORD your God, who brought you out of Egypt, out of the land of slavery. You shall have no other gods before me.",
          es: "Yo soy Jehova tu Dios, que te saque de la tierra de Egipto, de casa de servidumbre. No tendras dioses ajenos delante de mi.",
          pt: "Eu sou o SENHOR, teu Deus, que te tirei da terra do Egito, da casa da servidao. Nao teras outros deuses diante de mim.",
          fr: "Je suis l'Eternel, ton Dieu, qui t'ai fait sortir du pays d'Egypte, de la maison de servitude. Tu n'auras pas d'autres dieux devant ma face."
        },
        theme: "I Dieci Comandamenti"
      },
      {
        reference: "Deuteronomio 6:4-5",
        text: {
          it: "Ascolta, Israele: Il SIGNORE, il nostro Dio, e l'unico SIGNORE. Tu amerai il SIGNORE tuo Dio con tutto il cuore, con tutta l'anima tua e con tutte le tue forze.",
          en: "Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart and with all your soul and with all your strength.",
          es: "Oye, Israel: Jehova nuestro Dios, Jehova uno es. Amaras a Jehova tu Dios de todo tu corazon, de toda tu alma y con todas tus fuerzas.",
          pt: "Ouve, o Israel: O SENHOR, nosso Deus, e o unico SENHOR. Amaras o SENHOR, teu Deus, de todo o teu coracao, de toda a tua alma e de todas as tuas forcas.",
          fr: "Ecoute, Israel! L'Eternel, notre Dieu, est le seul Eternel. Tu aimeras l'Eternel, ton Dieu, de tout ton coeur, de toute ton ame et de toute ta force."
        },
        theme: "Shema Israel"
      },
      {
        reference: "Isaia 53:5",
        text: {
          it: "Egli e stato trafitto a causa delle nostre trasgressioni, stroncato a causa delle nostre iniquita; il castigo, per cui abbiamo pace, e caduto su di lui e dalle sue lividure noi siamo stati guariti.",
          en: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
          es: "Mas el herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre el, y por su llaga fuimos nosotros curados.",
          pt: "Mas ele foi traspassado pelas nossas transgressoes e moido pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",
          fr: "Mais il etait blesse pour nos peches, brise pour nos iniquites; le chatiment qui nous donne la paix est tombe sur lui, et c'est par ses meurtrissures que nous sommes gueris."
        },
        theme: "Profezia Messianica"
      }
    ]
  },
  {
    categoryId: "nuovo-testamento",
    categoryName: "Nuovo Testamento",
    verses: [
      {
        reference: "Giovanni 3:16",
        text: {
          it: "Perche Dio ha tanto amato il mondo, che ha dato il suo unigenito Figlio, affinche chiunque crede in lui non perisca, ma abbia vita eterna.",
          en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
          es: "De tal manera amo Dios al mundo, que ha dado a su Hijo unigenito, para que todo aquel que en el cree no se pierda, sino que tenga vida eterna.",
          pt: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigenito, para que todo aquele que nele cre nao pereca, mas tenha a vida eterna.",
          fr: "Car Dieu a tant aime le monde qu'il a donne son Fils unique, afin que quiconque croit en lui ne perisse point, mais qu'il ait la vie eternelle."
        },
        theme: "Amore di Dio"
      },
      {
        reference: "Romani 8:28",
        text: {
          it: "Or sappiamo che tutte le cose cooperano al bene di quelli che amano Dio, i quali sono chiamati secondo il suo disegno.",
          en: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
          es: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su proposito son llamados.",
          pt: "E sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que sao chamados segundo o seu proposito.",
          fr: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appeles selon son dessein."
        },
        theme: "Provvidenza Divina"
      },
      {
        reference: "Filippesi 4:13",
        text: {
          it: "Io posso ogni cosa in colui che mi fortifica.",
          en: "I can do all this through him who gives me strength.",
          es: "Todo lo puedo en Cristo que me fortalece.",
          pt: "Tudo posso naquele que me fortalece.",
          fr: "Je puis tout par celui qui me fortifie."
        },
        theme: "Forza in Cristo"
      },
      {
        reference: "2 Timoteo 3:16",
        text: {
          it: "Ogni Scrittura e ispirata da Dio e utile a insegnare, a riprendere, a correggere, a educare alla giustizia.",
          en: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
          es: "Toda la Escritura es inspirada por Dios y util para ensenar, para redargüir, para corregir, para instruir en justicia.",
          pt: "Toda a Escritura e divinamente inspirada e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justica.",
          fr: "Toute Ecriture est inspiree de Dieu, et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice."
        },
        theme: "Ispirazione della Scrittura"
      },
      {
        reference: "Ebrei 11:1",
        text: {
          it: "Or la fede e certezza di cose che si sperano, dimostrazione di realta che non si vedono.",
          en: "Now faith is confidence in what we hope for and assurance about what we do not see.",
          es: "Es, pues, la fe la certeza de lo que se espera, la conviccion de lo que no se ve.",
          pt: "Ora, a fe e o firme fundamento das coisas que se esperam e a prova das coisas que se nao veem.",
          fr: "Or la foi est une ferme assurance des choses qu'on espere, une demonstration de celles qu'on ne voit pas."
        },
        theme: "Definizione della Fede"
      }
    ]
  },
  {
    categoryId: "personaggi-biblici",
    categoryName: "Personaggi Biblici",
    verses: [
      {
        reference: "Genesi 6:9",
        text: {
          it: "Noe fu uomo giusto, integro, ai suoi tempi; Noe cammino con Dio.",
          en: "Noah was a righteous man, blameless among the people of his time, and he walked faithfully with God.",
          es: "Noe era varon justo, era perfecto entre los hombres de su tiempo; con Dios camino Noe.",
          pt: "Noe era homem justo e perfeito em suas geracoes; Noe andava com Deus.",
          fr: "Noe etait un homme juste et integre dans son temps; Noe marchait avec Dieu."
        },
        theme: "Noe"
      },
      {
        reference: "1 Samuele 16:7",
        text: {
          it: "L'uomo guarda all'apparenza, ma il SIGNORE guarda al cuore.",
          en: "The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.",
          es: "El hombre mira lo que esta delante de sus ojos, pero Jehova mira el corazon.",
          pt: "O homem ve o exterior, porem o SENHOR ve o coracao.",
          fr: "L'homme regarde a ce qui frappe les yeux, mais l'Eternel regarde au coeur."
        },
        theme: "Davide"
      },
      {
        reference: "Daniele 3:17-18",
        text: {
          it: "Il nostro Dio, che noi serviamo, puo liberarci dalla fornace ardente, e ci liberera dalla tua mano, o re. Ma anche se non lo facesse, sappi, o re, che noi non serviremo i tuoi dei.",
          en: "The God we serve is able to deliver us from the blazing furnace, and he will deliver us from Your Majesty's hand. But even if he does not, we will not serve your gods.",
          es: "Nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo; y de tu mano, oh rey, nos librara. Y si no, has de saber, oh rey, que no serviremos a tus dioses.",
          pt: "O nosso Deus, a quem nos servimos, e que nos pode livrar da fornalha de fogo ardente; e ele nos livrara da tua mao, o rei. E, se nao, fica sabendo, o rei, que nao serviremos a teus deuses.",
          fr: "Notre Dieu que nous servons peut nous delivrer de la fournaise ardente, et il nous delivrera de ta main, o roi. Sinon, sache, o roi, que nous ne servirons pas tes dieux."
        },
        theme: "Sadrac, Mesac e Abed-Nego"
      },
      {
        reference: "Ester 4:14",
        text: {
          it: "Chi sa che tu non sia pervenuta alla dignita reale proprio per un tempo come questo?",
          en: "And who knows but that you have come to your royal position for such a time as this?",
          es: "Y quien sabe si para esta hora has llegado al reino?",
          pt: "E quem sabe se para tal tempo como este chegaste a este reino?",
          fr: "Et qui sait si ce n'est pas pour un temps comme celui-ci que tu es parvenue a la royaute?"
        },
        theme: "Ester"
      },
      {
        reference: "Giobbe 19:25",
        text: {
          it: "Ma io so che il mio Redentore vive e che alla fine si ergera sulla polvere.",
          en: "I know that my redeemer lives, and that in the end he will stand on the earth.",
          es: "Yo se que mi Redentor vive, y que al fin se levantara sobre el polvo.",
          pt: "Porque eu sei que o meu Redentor vive, e que por fim se levantara sobre a terra.",
          fr: "Mais je sais que mon redempteur est vivant, et qu'il se levera le dernier sur la terre."
        },
        theme: "Giobbe"
      }
    ]
  },
  {
    categoryId: "pentateuco",
    categoryName: "Pentateuco",
    verses: [
      {
        reference: "Genesi 1:27",
        text: {
          it: "Dio creo l'uomo a sua immagine; lo creo a immagine di Dio; li creo maschio e femmina.",
          en: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
          es: "Y creo Dios al hombre a su imagen, a imagen de Dios lo creo; varon y hembra los creo.",
          pt: "E criou Deus o homem a sua imagem; a imagem de Deus o criou; macho e femea os criou.",
          fr: "Dieu crea l'homme a son image, il le crea a l'image de Dieu, il crea l'homme et la femme."
        },
        theme: "Immagine di Dio"
      },
      {
        reference: "Esodo 3:14",
        text: {
          it: "Dio disse a Mose: IO SONO COLUI CHE SONO. Poi disse: Dirai cosi ai figli d'Israele: L'IO SONO mi ha mandato da voi.",
          en: "God said to Moses, I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you.",
          es: "Y respondio Dios a Moises: YO SOY EL QUE SOY. Y dijo: Asi diras a los hijos de Israel: YO SOY me envio a vosotros.",
          pt: "Disse Deus a Moises: EU SOU O QUE SOU. Disse mais: Assim diras aos filhos de Israel: EU SOU me enviou a vos.",
          fr: "Dieu dit a Moise: Je suis celui qui suis. Et il ajouta: C'est ainsi que tu repondras aux enfants d'Israel: Celui qui s'appelle Je suis m'a envoye vers vous."
        },
        theme: "Nome di Dio"
      },
      {
        reference: "Levitico 19:18",
        text: {
          it: "Ama il tuo prossimo come te stesso. Io sono il SIGNORE.",
          en: "Love your neighbor as yourself. I am the LORD.",
          es: "Amaras a tu projimo como a ti mismo. Yo Jehova.",
          pt: "Amaras o teu proximo como a ti mesmo. Eu sou o SENHOR.",
          fr: "Tu aimeras ton prochain comme toi-meme. Je suis l'Eternel."
        },
        theme: "Amore per il Prossimo"
      },
      {
        reference: "Numeri 6:24-26",
        text: {
          it: "Il SIGNORE ti benedica e ti protegga! Il SIGNORE faccia risplendere il suo volto su di te e ti sia propizio! Il SIGNORE rivolga verso di te il suo volto e ti dia la pace!",
          en: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
          es: "Jehova te bendiga y te guarde; Jehova haga resplandecer su rostro sobre ti, y tenga de ti misericordia; Jehova alce sobre ti su rostro, y ponga en ti paz.",
          pt: "O SENHOR te abencoe e te guarde; o SENHOR faca resplandecer o seu rosto sobre ti e tenha misericordia de ti; o SENHOR sobre ti levante o seu rosto e te de a paz.",
          fr: "Que l'Eternel te benisse et te garde! Que l'Eternel fasse luire sa face sur toi, et qu'il t'accorde sa grace! Que l'Eternel tourne sa face vers toi, et qu'il te donne la paix!"
        },
        theme: "Benedizione Sacerdotale"
      },
      {
        reference: "Deuteronomio 31:8",
        text: {
          it: "Il SIGNORE cammina egli stesso davanti a te; egli sara con te; non ti lascera e non ti abbandonera; non temere e non perderti d'animo.",
          en: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
          es: "Jehova va delante de ti; el estara contigo, no te dejara, ni te desamparara; no temas ni te intimides.",
          pt: "O SENHOR, pois, e aquele que vai adiante de ti; ele sera contigo, nao te deixara, nem te desamparara; nao temas, nem te espantes.",
          fr: "L'Eternel marchera lui-meme devant toi, il sera lui-meme avec toi, il ne te delaissera point, il ne t'abandonnera point; ne crains point, et ne t'effraie point."
        },
        theme: "Promessa di Presenza"
      }
    ]
  },
  {
    categoryId: "profeti-minori",
    categoryName: "Profeti Minori",
    verses: [
      {
        reference: "Michea 6:8",
        text: {
          it: "O uomo, egli ti ha fatto conoscere cio che e bene; che altro richiede da te il SIGNORE, se non che tu pratichi la giustizia, che tu ami la misericordia e cammini umilmente con il tuo Dio?",
          en: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.",
          es: "Oh hombre, el te ha declarado lo que es bueno, y que pide Jehova de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios.",
          pt: "Ele te declarou, o homem, o que e bom; e que e o que o SENHOR pede de ti, senao que pratiques a justica, e ames a beneficencia, e andes humildemente com o teu Deus?",
          fr: "On t'a fait connaitre, o homme, ce qui est bien; et ce que l'Eternel demande de toi, c'est que tu pratiques la justice, que tu aimes la misericorde, et que tu marches humblement avec ton Dieu."
        },
        theme: "Richieste di Dio"
      },
      {
        reference: "Habacuc 2:4",
        text: {
          it: "Ma il giusto per la sua fede vivra.",
          en: "But the righteous person will live by his faithfulness.",
          es: "Mas el justo por su fe vivira.",
          pt: "Mas o justo, pela sua fe, vivera.",
          fr: "Mais le juste vivra par sa foi."
        },
        theme: "Fede"
      },
      {
        reference: "Gioele 2:28",
        text: {
          it: "Dopo questo, avverra che io spandero il mio Spirito su ogni persona: i vostri figli e le vostre figlie profetizzeranno.",
          en: "And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy.",
          es: "Y despues de esto derramare mi Espiritu sobre toda carne, y profetizaran vuestros hijos y vuestras hijas.",
          pt: "E ha de ser que, depois, derramarei o meu Espirito sobre toda a carne, e vossos filhos e vossas filhas profetizarao.",
          fr: "Apres cela, je repandrai mon esprit sur toute chair; vos fils et vos filles prophetiseront."
        },
        theme: "Promessa dello Spirito"
      },
      {
        reference: "Malachia 3:10",
        text: {
          it: "Portate tutte le decime alla casa del tesoro, perche ci sia cibo nella mia casa; poi mettetemi alla prova in questo, dice il SIGNORE degli eserciti.",
          en: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the LORD Almighty.",
          es: "Traed todos los diezmos al alfoli y haya alimento en mi casa; y probadme ahora en esto, dice Jehova de los ejercitos.",
          pt: "Trazei todos os dizimos a casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim, diz o SENHOR dos Exercitos.",
          fr: "Apportez a la maison du tresor toutes les dimes, afin qu'il y ait de la nourriture dans ma maison; mettez-moi de la sorte a l'epreuve, dit l'Eternel des armees."
        },
        theme: "Decima"
      },
      {
        reference: "Osea 6:6",
        text: {
          it: "Poiche io gradisco la misericordia e non i sacrifici, e la conoscenza di Dio piu degli olocausti.",
          en: "For I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings.",
          es: "Porque misericordia quiero, y no sacrificio, y conocimiento de Dios mas que holocaustos.",
          pt: "Porque eu quero a misericordia e nao o sacrificio; e o conhecimento de Deus, mais do que os holocaustos.",
          fr: "Car j'aime la piete et non les sacrifices, et la connaissance de Dieu plus que les holocaustes."
        },
        theme: "Misericordia"
      }
    ]
  },
  {
    categoryId: "vangeli",
    categoryName: "Quattro Vangeli",
    verses: [
      {
        reference: "Matteo 5:3-4",
        text: {
          it: "Beati i poveri in spirito, perche di loro e il regno dei cieli. Beati quelli che sono afflitti, perche saranno consolati.",
          en: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted.",
          es: "Bienaventurados los pobres en espiritu, porque de ellos es el reino de los cielos. Bienaventurados los que lloran, porque ellos recibiran consolacion.",
          pt: "Bem-aventurados os pobres de espirito, porque deles e o Reino dos ceus. Bem-aventurados os que choram, porque eles serao consolados.",
          fr: "Heureux les pauvres en esprit, car le royaume des cieux est a eux! Heureux les affliges, car ils seront consoles!"
        },
        theme: "Beatitudini"
      },
      {
        reference: "Matteo 28:19-20",
        text: {
          it: "Andate dunque e fate miei discepoli tutti i popoli battezzandoli nel nome del Padre, del Figlio e dello Spirito Santo, insegnando loro a osservare tutte quante le cose che vi ho comandate.",
          en: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.",
          es: "Por tanto, id, y haced discipulos a todas las naciones, bautizandolos en el nombre del Padre, y del Hijo, y del Espiritu Santo; ensenandoles que guarden todas las cosas que os he mandado.",
          pt: "Portanto, ide, ensinai todas as nacoes, batizando-as em nome do Pai, e do Filho, e do Espirito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado.",
          fr: "Allez, faites de toutes les nations des disciples, les baptisant au nom du Pere, du Fils et du Saint-Esprit, et enseignez-leur a observer tout ce que je vous ai prescrit."
        },
        theme: "Grande Mandato"
      },
      {
        reference: "Marco 10:45",
        text: {
          it: "Poiche anche il Figlio dell'uomo non e venuto per essere servito, ma per servire e per dare la sua vita come prezzo di riscatto per molti.",
          en: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
          es: "Porque el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.",
          pt: "Porque o Filho do Homem tambem nao veio para ser servido, mas para servir e dar a sua vida em resgate de muitos.",
          fr: "Car le Fils de l'homme est venu, non pour etre servi, mais pour servir et donner sa vie comme la rancon de plusieurs."
        },
        theme: "Missione di Cristo"
      },
      {
        reference: "Luca 15:7",
        text: {
          it: "Io vi dico che cosi ci sara gioia in cielo per un solo peccatore che si ravvede, piu che per novantanove giusti che non hanno bisogno di ravvedimento.",
          en: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
          es: "Os digo que asi habra mas gozo en el cielo por un pecador que se arrepiente, que por noventa y nueve justos que no necesitan de arrepentimiento.",
          pt: "Digo-vos que assim havera alegria no ceu por um pecador que se arrepende, mais do que por noventa e nove justos que nao necessitam de arrependimento.",
          fr: "De meme, je vous le dis, il y aura plus de joie dans le ciel pour un seul pecheur qui se repent, que pour quatre-vingt-dix-neuf justes qui n'ont pas besoin de repentance."
        },
        theme: "Gioia per il Ravvedimento"
      },
      {
        reference: "Giovanni 14:6",
        text: {
          it: "Gesu gli disse: Io sono la via, la verita e la vita; nessuno viene al Padre se non per mezzo di me.",
          en: "Jesus answered, I am the way and the truth and the life. No one comes to the Father except through me.",
          es: "Jesus le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mi.",
          pt: "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguem vem ao Pai senao por mim.",
          fr: "Jesus lui dit: Je suis le chemin, la verite, et la vie. Nul ne vient au Pere que par moi."
        },
        theme: "Gesu e la Via"
      }
    ]
  },
  {
    categoryId: "lettere-paoline",
    categoryName: "Lettere Paoline",
    verses: [
      {
        reference: "Romani 3:23",
        text: {
          it: "Tutti hanno peccato e sono privi della gloria di Dio.",
          en: "For all have sinned and fall short of the glory of God.",
          es: "Por cuanto todos pecaron, y estan destituidos de la gloria de Dios.",
          pt: "Porque todos pecaram e destituidos estao da gloria de Deus.",
          fr: "Car tous ont peche et sont prives de la gloire de Dieu."
        },
        theme: "Universalita del Peccato"
      },
      {
        reference: "Romani 6:23",
        text: {
          it: "Perche il salario del peccato e la morte, ma il dono di Dio e la vita eterna in Cristo Gesu, nostro Signore.",
          en: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
          es: "Porque la paga del pecado es muerte, mas la dadiva de Dios es vida eterna en Cristo Jesus Senor nuestro.",
          pt: "Porque o salario do pecado e a morte, mas o dom gratuito de Deus e a vida eterna, por Cristo Jesus, nosso Senhor.",
          fr: "Car le salaire du peche, c'est la mort; mais le don gratuit de Dieu, c'est la vie eternelle en Jesus Christ notre Seigneur."
        },
        theme: "Salario e Dono"
      },
      {
        reference: "1 Corinzi 13:4-7",
        text: {
          it: "L'amore e paziente, e benevolo; l'amore non invidia; l'amore non si vanta, non si gonfia, non si comporta in modo sconveniente.",
          en: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others.",
          es: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.",
          pt: "O amor e sofredor, e benigno; o amor nao e invejoso; o amor nao trata com leviandade, nao se ensoberbece.",
          fr: "L'amour est patient, il est plein de bonte; l'amour n'est point envieux; l'amour ne se vante point, il ne s'enfle point d'orgueil."
        },
        theme: "Inno all'Amore"
      },
      {
        reference: "Galati 5:22-23",
        text: {
          it: "Il frutto dello Spirito invece e: amore, gioia, pace, pazienza, benevolenza, bonta, fedelta, mansuetudine, autocontrollo.",
          en: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
          es: "Mas el fruto del Espiritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.",
          pt: "Mas o fruto do Espirito e: caridade, gozo, paz, longanimidade, benignidade, bondade, fe, mansidao, temperanca.",
          fr: "Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonte, la benignite, la fidelite, la douceur, la temperance."
        },
        theme: "Frutto dello Spirito"
      },
      {
        reference: "Efesini 2:8-9",
        text: {
          it: "Infatti e per grazia che siete stati salvati, mediante la fede; e cio non viene da voi; e il dono di Dio. Non e in virtu di opere affinche nessuno se ne vanti.",
          en: "For it is by grace you have been saved, through faith and this is not from yourselves, it is the gift of God not by works, so that no one can boast.",
          es: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se glorie.",
          pt: "Porque pela graca sois salvos, por meio da fe; e isso nao vem de vos; e dom de Deus. Nao vem das obras, para que ninguem se glorie.",
          fr: "Car c'est par la grace que vous etes sauves, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. Ce n'est point par les oeuvres, afin que personne ne se glorifie."
        },
        theme: "Salvezza per Grazia"
      }
    ]
  },
  {
    categoryId: "letteratura-sapienziale",
    categoryName: "Letteratura Sapienziale",
    verses: [
      {
        reference: "Salmo 23:1-4",
        text: {
          it: "Il SIGNORE e il mio pastore: nulla mi manca. Egli mi fa riposare in verdeggianti pascoli, mi guida lungo le acque calme.",
          en: "The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters.",
          es: "Jehova es mi pastor; nada me faltara. En lugares de delicados pastos me hara descansar; junto a aguas de reposo me pastoreara.",
          pt: "O SENHOR e o meu pastor; nada me faltara. Deitar-me faz em verdes pastos, guia-me mansamente a aguas tranquilas.",
          fr: "L'Eternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts paturages, il me dirige pres des eaux paisibles."
        },
        theme: "Il Buon Pastore"
      },
      {
        reference: "Proverbi 3:5-6",
        text: {
          it: "Confida nel SIGNORE con tutto il cuore e non ti appoggiare sul tuo discernimento. Riconoscilo in tutte le tue vie ed egli appianera i tuoi sentieri.",
          en: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
          es: "Fiate de Jehova de todo tu corazon, y no te apoyes en tu propia prudencia. Reconocelo en todos tus caminos, y el enderezara tus veredas.",
          pt: "Confia no SENHOR de todo o teu coracao e nao te estribes no teu proprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitara as tuas veredas.",
          fr: "Confie-toi en l'Eternel de tout ton coeur, et ne t'appuie pas sur ta sagesse; reconnais-le dans toutes tes voies, et il aplanira tes sentiers."
        },
        theme: "Fiducia in Dio"
      },
      {
        reference: "Ecclesiaste 3:1",
        text: {
          it: "Per tutto c'e il suo tempo, c'e il suo momento per ogni cosa sotto il cielo.",
          en: "There is a time for everything, and a season for every activity under the heavens.",
          es: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.",
          pt: "Tudo tem o seu tempo determinado, e ha tempo para todo o proposito debaixo do ceu.",
          fr: "Il y a un temps pour tout, un temps pour toute chose sous les cieux."
        },
        theme: "Tempo per Ogni Cosa"
      },
      {
        reference: "Salmo 119:105",
        text: {
          it: "La tua parola e una lampada al mio piede e una luce sul mio sentiero.",
          en: "Your word is a lamp for my feet, a light on my path.",
          es: "Lampara es a mis pies tu palabra, y lumbrera a mi camino.",
          pt: "Lampada para os meus pes e a tua palavra e luz, para o meu caminho.",
          fr: "Ta parole est une lampe a mes pieds, et une lumiere sur mon sentier."
        },
        theme: "La Parola come Guida"
      },
      {
        reference: "Proverbi 1:7",
        text: {
          it: "Il timore del SIGNORE e il principio della scienza; gli stolti disprezzano la saggezza e l'istruzione.",
          en: "The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.",
          es: "El principio de la sabiduria es el temor de Jehova; los insensatos desprecian la sabiduria y la ensenanza.",
          pt: "O temor do SENHOR e o principio da ciencia; os loucos desprezam a sabedoria e a instrucao.",
          fr: "La crainte de l'Eternel est le commencement de la science; les insenses meprisent la sagesse et l'instruction."
        },
        theme: "Timore del Signore"
      }
    ]
  },
  {
    categoryId: "atti-apostoli",
    categoryName: "Atti degli Apostoli",
    verses: [
      {
        reference: "Atti 1:8",
        text: {
          it: "Ma riceverete potenza quando lo Spirito Santo verra su di voi, e mi sarete testimoni in Gerusalemme, e in tutta la Giudea e Samaria, e fino all'estremita della terra.",
          en: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
          es: "Pero recibireis poder, cuando haya venido sobre vosotros el Espiritu Santo, y me sereis testigos en Jerusalen, en toda Judea, en Samaria, y hasta lo ultimo de la tierra.",
          pt: "Mas recebereis a virtude do Espirito Santo, que ha de vir sobre vos; e ser-me-eis testemunhas tanto em Jerusalem como em toda a Judeia e Samaria e ate aos confins da terra.",
          fr: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes temoins a Jerusalem, dans toute la Judee, dans la Samarie, et jusqu'aux extremites de la terre."
        },
        theme: "Potenza dello Spirito"
      },
      {
        reference: "Atti 2:38",
        text: {
          it: "E Pietro a loro: Ravvedetevi e ciascuno di voi sia battezzato nel nome di Gesu Cristo, per il perdono dei vostri peccati, e voi riceverete il dono dello Spirito Santo.",
          en: "Peter replied, Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.",
          es: "Pedro les dijo: Arrepentios, y bauticense cada uno de vosotros en el nombre de Jesucristo para perdon de los pecados; y recibireis el don del Espiritu Santo.",
          pt: "E disse-lhes Pedro: Arrependei-vos, e cada um de vos seja batizado em nome de Jesus Cristo para perdao dos pecados, e recebereis o dom do Espirito Santo.",
          fr: "Pierre leur dit: Repentez-vous, et que chacun de vous soit baptise au nom de Jesus-Christ, pour le pardon de vos peches; et vous recevrez le don du Saint-Esprit."
        },
        theme: "Pentecoste"
      },
      {
        reference: "Atti 4:12",
        text: {
          it: "In nessun altro c'e salvezza; perche non vi e sotto il cielo nessun altro nome che sia stato dato agli uomini, per mezzo del quale noi dobbiamo essere salvati.",
          en: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
          es: "Y en ningun otro hay salvacion; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.",
          pt: "E em nenhum outro ha salvacao, porque tambem debaixo do ceu nenhum outro nome ha, dado entre os homens, pelo qual devamos ser salvos.",
          fr: "Il n'y a de salut en aucun autre; car il n'y a sous le ciel aucun autre nom qui ait ete donne parmi les hommes, par lequel nous devions etre sauves."
        },
        theme: "Salvezza in Cristo"
      },
      {
        reference: "Atti 16:31",
        text: {
          it: "Ed essi risposero: Credi nel Signore Gesu, e sarai salvato tu e la tua famiglia.",
          en: "They replied, Believe in the Lord Jesus, and you will be saved you and your household.",
          es: "Ellos dijeron: Cree en el Senor Jesucristo, y seras salvo, tu y tu casa.",
          pt: "E eles disseram: Cre no Senhor Jesus Cristo e seras salvo, tu e a tua casa.",
          fr: "Paul et Silas repondirent: Crois au Seigneur Jesus, et tu seras sauve, toi et ta famille."
        },
        theme: "Fede Salvifica"
      },
      {
        reference: "Atti 20:35",
        text: {
          it: "In ogni cosa vi ho mostrato che bisogna venire in aiuto ai deboli lavorando cosi, e ricordarsi delle parole del Signore Gesu, il quale disse egli stesso: Vi e piu gioia nel dare che nel ricevere.",
          en: "In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: It is more blessed to give than to receive.",
          es: "En todo os he ensenado que, trabajando asi, se debe ayudar a los necesitados, y recordar las palabras del Senor Jesus, que dijo: Mas bienaventurado es dar que recibir.",
          pt: "Tenho-vos mostrado em tudo que, trabalhando assim, e necessario auxiliar os enfermos e recordar as palavras do Senhor Jesus, que disse: Mais bem-aventurada coisa e dar do que receber.",
          fr: "Je vous ai montre de toutes manieres que c'est en travaillant ainsi qu'il faut soutenir les faibles, et se rappeler les paroles du Seigneur, qui a dit lui-meme: Il y a plus de bonheur a donner qu'a recevoir."
        },
        theme: "Generosita"
      }
    ]
  },
  {
    categoryId: "apocalisse",
    categoryName: "Apocalisse",
    verses: [
      {
        reference: "Apocalisse 1:8",
        text: {
          it: "Io sono l'Alfa e l'Omega, dice il Signore Dio, colui che e, che era e che viene, l'Onnipotente.",
          en: "I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty.",
          es: "Yo soy el Alfa y la Omega, principio y fin, dice el Senor, el que es y que era y que ha de venir, el Todopoderoso.",
          pt: "Eu sou o Alfa e o Omega, o Principio e o Fim, diz o Senhor, que e, e que era, e que ha de vir, o Todo-Poderoso.",
          fr: "Je suis l'Alpha et l'Omega, dit le Seigneur Dieu, celui qui est, qui etait, et qui vient, le Tout-Puissant."
        },
        theme: "Alfa e Omega"
      },
      {
        reference: "Apocalisse 3:20",
        text: {
          it: "Ecco, io sto alla porta e busso: se qualcuno ascolta la mia voce e apre la porta, io entrero da lui e cenero con lui ed egli con me.",
          en: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
          es: "He aqui, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entrare a el, y cenare con el, y el conmigo.",
          pt: "Eis que estou a porta e bato; se alguem ouvir a minha voz e abrir a porta, entrarei em sua casa e com ele cearei, e ele, comigo.",
          fr: "Voici, je me tiens a la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi."
        },
        theme: "Invito di Cristo"
      },
      {
        reference: "Apocalisse 21:4",
        text: {
          it: "Egli asciughera ogni lacrima dai loro occhi e non ci sara piu la morte, ne cordoglio, ne grido, ne dolore, perche le cose di prima sono passate.",
          en: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
          es: "Enjugara Dios toda lagrima de los ojos de ellos; y ya no habra muerte, ni habra mas llanto ni clamor ni dolor, porque las primeras cosas pasaron.",
          pt: "E Deus limpara de seus olhos toda lagrima, e nao havera mais morte, nem pranto, nem clamor, nem dor, porque ja as primeiras coisas sao passadas.",
          fr: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premieres choses ont disparu."
        },
        theme: "Nuova Creazione"
      },
      {
        reference: "Apocalisse 22:13",
        text: {
          it: "Io sono l'Alfa e l'Omega, il primo e l'ultimo, il principio e la fine.",
          en: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.",
          es: "Yo soy el Alfa y la Omega, el principio y el fin, el primero y el ultimo.",
          pt: "Eu sou o Alfa e o Omega, o Primeiro e o Ultimo, o Principio e o Fim.",
          fr: "Je suis l'Alpha et l'Omega, le premier et le dernier, le commencement et la fin."
        },
        theme: "Eternita di Cristo"
      },
      {
        reference: "Apocalisse 22:20",
        text: {
          it: "Colui che attesta queste cose, dice: Si, vengo presto! Amen! Vieni, Signore Gesu!",
          en: "He who testifies to these things says, Yes, I am coming soon. Amen. Come, Lord Jesus.",
          es: "El que da testimonio de estas cosas dice: Ciertamente vengo en breve. Amen; si, ven, Senor Jesus.",
          pt: "Aquele que testifica estas coisas diz: Certamente, cedo venho. Amem! Ora, vem, Senhor Jesus!",
          fr: "Celui qui atteste ces choses dit: Oui, je viens bientot. Amen! Viens, Seigneur Jesus!"
        },
        theme: "Ritorno di Cristo"
      }
    ]
  }
];

export const getKeyVersesByCategory = (categoryId: string): CategoryKeyVerses | undefined => {
  return keyVersesByCategory.find(c => c.categoryId === categoryId);
};

export const getAllKeyVerses = (): KeyVerse[] => {
  return keyVersesByCategory.flatMap(c => c.verses);
};
