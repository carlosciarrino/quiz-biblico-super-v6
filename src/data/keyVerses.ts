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
          it: "Nel principio Dio creò i cieli e la terra.",
          en: "In the beginning God created the heavens and the earth.",
          es: "En el principio creó Dios los cielos y la tierra.",
          pt: "No princípio Deus criou os céus e a terra.",
          fr: "Au commencement, Dieu créa les cieux et la terre."
        },
        theme: "Creazione"
      },
      {
        reference: "Genesi 12:1-2",
        text: {
          it: "Il SIGNORE disse ad Abramo: «Va' via dal tuo paese, dai tuoi parenti e dalla casa di tuo padre, e va' nel paese che io ti mostrerò; io farò di te una grande nazione».",
          en: "The LORD had said to Abram, 'Go from your country, your people and your father's household to the land I will show you. I will make you into a great nation.'",
          es: "Jehová dijo a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré. Haré de ti una nación grande.",
          pt: "Ora, o SENHOR disse a Abrão: Sai da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei. Farei de ti uma grande nação.",
          fr: "L'Éternel dit à Abram: Va-t'en de ton pays, de ta patrie, et de la maison de ton père, dans le pays que je te montrerai. Je ferai de toi une grande nation."
        },
        theme: "Vocazione di Abramo"
      },
      {
        reference: "Esodo 20:2-3",
        text: {
          it: "Io sono il SIGNORE, il tuo Dio, che ti ho fatto uscire dal paese d'Egitto, dalla casa di schiavitù. Non avere altri dèi oltre a me.",
          en: "I am the LORD your God, who brought you out of Egypt, out of the land of slavery. You shall have no other gods before me.",
          es: "Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre. No tendrás dioses ajenos delante de mí.",
          pt: "Eu sou o SENHOR, teu Deus, que te tirei da terra do Egito, da casa da servidão. Não terás outros deuses diante de mim.",
          fr: "Je suis l'Éternel, ton Dieu, qui t'ai fait sortir du pays d'Égypte, de la maison de servitude. Tu n'auras pas d'autres dieux devant ma face."
        },
        theme: "I Dieci Comandamenti"
      },
      {
        reference: "Deuteronomio 6:4-5",
        text: {
          it: "Ascolta, Israele: Il SIGNORE, il nostro Dio, è l'unico SIGNORE. Tu amerai il SIGNORE tuo Dio con tutto il cuore, con tutta l'anima tua e con tutte le tue forze.",
          en: "Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart and with all your soul and with all your strength.",
          es: "Oye, Israel: Jehová nuestro Dios, Jehová uno es. Amarás a Jehová tu Dios de todo tu corazón, de toda tu alma y con todas tus fuerzas.",
          pt: "Ouve, ó Israel: O SENHOR, nosso Deus, é o único SENHOR. Amarás o SENHOR, teu Deus, de todo o teu coração, de toda a tua alma e de todas as tuas forças.",
          fr: "Écoute, Israël! L'Éternel, notre Dieu, est le seul Éternel. Tu aimeras l'Éternel, ton Dieu, de tout ton cœur, de toute ton âme et de toute ta force."
        },
        theme: "Shema Israel"
      },
      {
        reference: "Isaia 53:5",
        text: {
          it: "Egli è stato trafitto a causa delle nostre trasgressioni, stroncato a causa delle nostre iniquità; il castigo, per cui abbiamo pace, è caduto su di lui e dalle sue lividure noi siamo stati guariti.",
          en: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
          es: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.",
          pt: "Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",
          fr: "Mais il était blessé pour nos péchés, brisé pour nos iniquités; le châtiment qui nous donne la paix est tombé sur lui, et c'est par ses meurtrissures que nous sommes guéris."
        },
        theme: "Profecia Messianica"
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
          it: "Perché Dio ha tanto amato il mondo, che ha dato il suo unigenito Figlio, affinché chiunque crede in lui non perisca, ma abbia vita eterna.",
          en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
          es: "De tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, sino que tenga vida eterna.",
          pt: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
          fr: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
        },
        theme: "Amore di Dio"
      },
      {
        reference: "Romani 8:28",
        text: {
          it: "Or sappiamo che tutte le cose cooperano al bene di quelli che amano Dio, i quali sono chiamati secondo il suo disegno.",
          en: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
          es: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
          pt: "E sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
          fr: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein."
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
          it: "Ogni Scrittura è ispirata da Dio e utile a insegnare, a riprendere, a correggere, a educare alla giustizia.",
          en: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
          es: "Toda la Escritura es inspirada por Dios y útil para enseñar, para redargüir, para corregir, para instruir en justicia.",
          pt: "Toda a Escritura é divinamente inspirada e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça.",
          fr: "Toute Écriture est inspirée de Dieu, et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice."
        },
        theme: "Ispirazione della Scrittura"
      },
      {
        reference: "Ebrei 11:1",
        text: {
          it: "Or la fede è certezza di cose che si sperano, dimostrazione di realtà che non si vedono.",
          en: "Now faith is confidence in what we hope for and assurance about what we do not see.",
          es: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
          pt: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.",
          fr: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas."
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
          it: "Noè fu uomo giusto, integro, ai suoi tempi; Noè camminò con Dio.",
          en: "Noah was a righteous man, blameless among the people of his time, and he walked faithfully with God.",
          es: "Noé era varón justo, era perfecto entre los hombres de su tiempo; con Dios caminó Noé.",
          pt: "Noé era homem justo e perfeito em suas gerações; Noé andava com Deus.",
          fr: "Noé était un homme juste et intègre dans son temps; Noé marchait avec Dieu."
        },
        theme: "Noè"
      },
      {
        reference: "1 Samuele 16:7",
        text: {
          it: "L'uomo guarda all'apparenza, ma il SIGNORE guarda al cuore.",
          en: "The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.",
          es: "El hombre mira lo que está delante de sus ojos, pero Jehová mira el corazón.",
          pt: "O homem vê o exterior, porém o SENHOR vê o coração.",
          fr: "L'homme regarde à ce qui frappe les yeux, mais l'Éternel regarde au cœur."
        },
        theme: "Davide"
      },
      {
        reference: "Daniele 3:17-18",
        text: {
          it: "Il nostro Dio, che noi serviamo, può liberarci dalla fornace ardente, e ci libererà dalla tua mano, o re. Ma anche se non lo facesse, sappi, o re, che noi non serviremo i tuoi dèi.",
          en: "The God we serve is able to deliver us from the blazing furnace, and he will deliver us from Your Majesty's hand. But even if he does not, we will not serve your gods.",
          es: "Nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo; y de tu mano, oh rey, nos librará. Y si no, has de saber, oh rey, que no serviremos a tus dioses.",
          pt: "O nosso Deus, a quem nós servimos, é que nos pode livrar da fornalha de fogo ardente; e ele nos livrará da tua mão, ó rei. E, se não, fica sabendo, ó rei, que não serviremos a teus deuses.",
          fr: "Notre Dieu que nous servons peut nous délivrer de la fournaise ardente, et il nous délivrera de ta main, ô roi. Sinon, sache, ô roi, que nous ne servirons pas tes dieux."
        },
        theme: "Sadrac, Mesac e Abed-Nego"
      },
      {
        reference: "Ester 4:14",
        text: {
          it: "Chi sa che tu non sia pervenuta alla dignità reale proprio per un tempo come questo?",
          en: "And who knows but that you have come to your royal position for such a time as this?",
          es: "¿Y quién sabe si para esta hora has llegado al reino?",
          pt: "E quem sabe se para tal tempo como este chegaste a este reino?",
          fr: "Et qui sait si ce n'est pas pour un temps comme celui-ci que tu es parvenue à la royauté?"
        },
        theme: "Ester"
      },
      {
        reference: "Giobbe 19:25",
        text: {
          it: "Ma io so che il mio Redentore vive e che alla fine si ergerà sulla polvere.",
          en: "I know that my redeemer lives, and that in the end he will stand on the earth.",
          es: "Yo sé que mi Redentor vive, y que al fin se levantará sobre el polvo.",
          pt: "Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.",
          fr: "Mais je sais que mon rédempteur est vivant, et qu'il se lèvera le dernier sur la terre."
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
          it: "Dio creò l'uomo a sua immagine; lo creò a immagine di Dio; li creò maschio e femmina.",
          en: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
          es: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",
          pt: "E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou.",
          fr: "Dieu créa l'homme à son image, il le créa à l'image de Dieu, il créa l'homme et la femme."
        },
        theme: "Immagine di Dio"
      },
      {
        reference: "Esodo 3:14",
        text: {
          it: "Dio disse a Mosè: «IO SONO COLUI CHE SONO». Poi disse: «Dirai così ai figli d'Israele: "L'IO SONO mi ha mandato da voi"».",
          en: "God said to Moses, 'I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you.'",
          es: "Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.",
          pt: "Disse Deus a Moisés: EU SOU O QUE SOU. Disse mais: Assim dirás aos filhos de Israel: EU SOU me enviou a vós.",
          fr: "Dieu dit à Moïse: Je suis celui qui suis. Et il ajouta: C'est ainsi que tu répondras aux enfants d'Israël: Celui qui s'appelle 'Je suis' m'a envoyé vers vous."
        },
        theme: "Nome di Dio"
      },
      {
        reference: "Levitico 19:18",
        text: {
          it: "Ama il tuo prossimo come te stesso. Io sono il SIGNORE.",
          en: "Love your neighbor as yourself. I am the LORD.",
          es: "Amarás a tu prójimo como a ti mismo. Yo Jehová.",
          pt: "Amarás o teu próximo como a ti mesmo. Eu sou o SENHOR.",
          fr: "Tu aimeras ton prochain comme toi-même. Je suis l'Éternel."
        },
        theme: "Amore per il Prossimo"
      },
      {
        reference: "Numeri 6:24-26",
        text: {
          it: "Il SIGNORE ti benedica e ti protegga! Il SIGNORE faccia risplendere il suo volto su di te e ti sia propizio! Il SIGNORE rivolga verso di te il suo volto e ti dia la pace!",
          en: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
          es: "Jehová te bendiga y te guarde; Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia; Jehová alce sobre ti su rostro, y ponga en ti paz.",
          pt: "O SENHOR te abençoe e te guarde; o SENHOR faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti; o SENHOR sobre ti levante o seu rosto e te dê a paz.",
          fr: "Que l'Éternel te bénisse et te garde! Que l'Éternel fasse luire sa face sur toi, et qu'il t'accorde sa grâce! Que l'Éternel tourne sa face vers toi, et qu'il te donne la paix!"
        },
        theme: "Benedizione Sacerdotale"
      },
      {
        reference: "Deuteronomio 31:8",
        text: {
          it: "Il SIGNORE cammina egli stesso davanti a te; egli sarà con te; non ti lascerà e non ti abbandonerà; non temere e non perderti d'animo.",
          en: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
          es: "Jehová va delante de ti; él estará contigo, no te dejará, ni te desamparará; no temas ni te intimides.",
          pt: "O SENHOR, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes.",
          fr: "L'Éternel marchera lui-même devant toi, il sera lui-même avec toi, il ne te délaissera point, il ne t'abandonnera point; ne crains point, et ne t'effraie point."
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
          it: "O uomo, egli ti ha fatto conoscere ciò che è bene; che altro richiede da te il SIGNORE, se non che tu pratichi la giustizia, che tu ami la misericordia e cammini umilmente con il tuo Dio?",
          en: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.",
          es: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios.",
          pt: "Ele te declarou, ó homem, o que é bom; e que é o que o SENHOR pede de ti, senão que pratiques a justiça, e ames a beneficência, e andes humildemente com o teu Deus?",
          fr: "On t'a fait connaître, ô homme, ce qui est bien; et ce que l'Éternel demande de toi, c'est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu."
        },
        theme: "Richieste di Dio"
      },
      {
        reference: "Habacuc 2:4",
        text: {
          it: "Ma il giusto per la sua fede vivrà.",
          en: "But the righteous person will live by his faithfulness.",
          es: "Mas el justo por su fe vivirá.",
          pt: "Mas o justo, pela sua fé, viverá.",
          fr: "Mais le juste vivra par sa foi."
        },
        theme: "Fede"
      },
      {
        reference: "Gioele 2:28",
        text: {
          it: "Dopo questo, avverrà che io spanderò il mio Spirito su ogni persona: i vostri figli e le vostre figlie profetizzeranno.",
          en: "And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy.",
          es: "Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas.",
          pt: "E há de ser que, depois, derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão.",
          fr: "Après cela, je répandrai mon esprit sur toute chair; vos fils et vos filles prophétiseront."
        },
        theme: "Promessa dello Spirito"
      },
      {
        reference: "Malachia 3:10",
        text: {
          it: "Portate tutte le decime alla casa del tesoro, perché ci sia cibo nella mia casa; poi mettetemi alla prova in questo, dice il SIGNORE degli eserciti; vedrete se io non vi aprirò le cateratte del cielo.",
          en: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the LORD Almighty, and see if I will not throw open the floodgates of heaven.",
          es: "Traed todos los diezmos al alfolí, y haya alimento en mi Casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos.",
          pt: "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e provai-me nisto, diz o SENHOR dos Exércitos, se eu não vos abrir as janelas do céu.",
          fr: "Apportez à la maison du trésor toutes les dîmes, afin qu'il y ait de la nourriture dans ma maison; mettez-moi de la sorte à l'épreuve, dit l'Éternel des armées, et vous verrez si je n'ouvre pas pour vous les écluses des cieux."
        },
        theme: "Decime"
      },
      {
        reference: "Osea 6:6",
        text: {
          it: "Poiché io desidero misericordia, e non sacrificio, e la conoscenza di Dio più degli olocausti.",
          en: "For I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings.",
          es: "Porque misericordia quiero, y no sacrificio, y conocimiento de Dios más que holocaustos.",
          pt: "Porque eu quero a misericórdia e não o sacrifício; e o conhecimento de Deus, mais do que os holocaustos.",
          fr: "Car j'aime la piété et non les sacrifices, et la connaissance de Dieu plus que les holocaustes."
        },
        theme: "Misericordia"
      }
    ]
  },
  {
    categoryId: "quattro-vangeli",
    categoryName: "Quattro Vangeli",
    verses: [
      {
        reference: "Matteo 28:19-20",
        text: {
          it: "Andate dunque e fate miei discepoli tutti i popoli battezzandoli nel nome del Padre, del Figlio e dello Spirito Santo, insegnando loro a osservare tutte quante le cose che vi ho comandate.",
          en: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.",
          es: "Por tanto, id y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, del Hijo y del Espíritu Santo; y enseñándoles que guarden todas las cosas que os he mandado.",
          pt: "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado.",
          fr: "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit, et enseignez-leur à observer tout ce que je vous ai prescrit."
        },
        theme: "Grande Mandato"
      },
      {
        reference: "Marco 10:45",
        text: {
          it: "Poiché anche il Figlio dell'uomo non è venuto per essere servito, ma per servire, e per dare la sua vita come prezzo di riscatto per molti.",
          en: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
          es: "Porque el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.",
          pt: "Porque o Filho do Homem também não veio para ser servido, mas para servir e dar a sua vida em resgate de muitos.",
          fr: "Car le Fils de l'homme est venu, non pour être servi, mais pour servir et donner sa vie comme la rançon de plusieurs."
        },
        theme: "Servizio"
      },
      {
        reference: "Luca 19:10",
        text: {
          it: "Perché il Figlio dell'uomo è venuto per cercare e salvare ciò che era perduto.",
          en: "For the Son of Man came to seek and to save the lost.",
          es: "Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.",
          pt: "Porque o Filho do Homem veio buscar e salvar o que se havia perdido.",
          fr: "Car le Fils de l'homme est venu chercher et sauver ce qui était perdu."
        },
        theme: "Missione di Gesù"
      },
      {
        reference: "Giovanni 14:6",
        text: {
          it: "Gesù gli disse: «Io sono la via, la verità e la vita; nessuno viene al Padre se non per mezzo di me».",
          en: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
          es: "Jesús le dijo: Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",
          pt: "Disse-lhe Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.",
          fr: "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi."
        },
        theme: "Via, Verità, Vita"
      },
      {
        reference: "Giovanni 1:14",
        text: {
          it: "E la Parola è diventata carne e ha abitato per un tempo fra di noi, piena di grazia e di verità; e noi abbiamo contemplato la sua gloria, gloria come di unigenito dal Padre.",
          en: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.",
          es: "Y asatisfecho esforzado con el fue palabra tengo que morar hiciste es el morada me entre nosotros, lleno de gracia y de verdad; y vimos su gloria, gloria como del unigénito del Padre.",
          pt: "E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do Unigênito do Pai, cheio de graça e de verdade.",
          fr: "Et la Parole a été faite chair, et elle a habité parmi nous, pleine de grâce et de vérité; et nous avons contemplé sa gloire, une gloire comme la gloire du Fils unique venu du Père."
        },
        theme: "Incarnazione"
      }
    ]
  },
  {
    categoryId: "lettere-paoline",
    categoryName: "Lettere Paoline",
    verses: [
      {
        reference: "Romani 3:23-24",
        text: {
          it: "Tutti hanno peccato e sono privi della gloria di Dio, ma sono giustificati gratuitamente per la sua grazia, mediante la redenzione che è in Cristo Gesù.",
          en: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.",
          es: "Por cuanto todos pecaron y están destituidos de la gloria de Dios, siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús.",
          pt: "Porque todos pecaram e destituídos estão da glória de Deus, sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus.",
          fr: "Car tous ont péché et sont privés de la gloire de Dieu; et ils sont gratuitement justifiés par sa grâce, par le moyen de la rédemption qui est en Jésus-Christ."
        },
        theme: "Giustificazione"
      },
      {
        reference: "1 Corinzi 13:4-7",
        text: {
          it: "L'amore è paziente, è benevolo; l'amore non invidia; l'amore non si vanta, non si gonfia, non si comporta in modo sconveniente, non cerca il proprio interesse, non s'inasprisce, non addebita il male.",
          en: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
          es: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor.",
          pt: "O amor é paciente, é benigno; o amor não é invejoso, não trata com leviandade, não se ensoberbece, não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal.",
          fr: "L'amour est patient, il est plein de bonté; l'amour n'est point envieux; l'amour ne se vante point, il ne s'enfle point d'orgueil, il ne fait rien de malhonnête, il ne cherche point son intérêt, il ne s'irrite point, il ne soupçonne point le mal."
        },
        theme: "Inno all'Amore"
      },
      {
        reference: "Galati 5:22-23",
        text: {
          it: "Il frutto dello Spirito invece è amore, gioia, pace, pazienza, benevolenza, bontà, fedeltà, mansuetudine, dominio di sé.",
          en: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
          es: "Pero el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.",
          pt: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
          fr: "Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance."
        },
        theme: "Frutto dello Spirito"
      },
      {
        reference: "Efesini 2:8-9",
        text: {
          it: "Infatti è per grazia che siete stati salvati, mediante la fede; e ciò non viene da voi; è il dono di Dio. Non è in virtù di opere affinché nessuno se ne vanti.",
          en: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
          es: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios. No por obras, para que nadie se gloríe.",
          pt: "Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus. Não vem das obras, para que ninguém se glorie.",
          fr: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. Ce n'est point par les œuvres, afin que personne ne se glorifie."
        },
        theme: "Salvezza per Grazia"
      },
      {
        reference: "Colossesi 3:23",
        text: {
          it: "Qualunque cosa facciate, fatela di buon animo, come per il Signore e non per gli uomini.",
          en: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
          es: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.",
          pt: "E, tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens.",
          fr: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes."
        },
        theme: "Lavorare per il Signore"
      }
    ]
  },
  {
    categoryId: "letteratura-sapienziale",
    categoryName: "Letteratura Sapienziale",
    verses: [
      {
        reference: "Proverbi 3:5-6",
        text: {
          it: "Confida nel SIGNORE con tutto il cuore e non ti appoggiare sul tuo discernimento. Riconoscilo in tutte le tue vie ed egli appianerà i tuoi sentieri.",
          en: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
          es: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
          pt: "Confia no SENHOR de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
          fr: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse; reconnais-le dans toutes tes voies, et il aplanira tes sentiers."
        },
        theme: "Fiducia in Dio"
      },
      {
        reference: "Ecclesiaste 3:1",
        text: {
          it: "Per ogni cosa c'è il suo tempo, c'è il suo momento per ogni avvenimento sotto il cielo.",
          en: "There is a time for everything, and a season for every activity under the heavens.",
          es: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.",
          pt: "Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.",
          fr: "Il y a un temps pour tout, un temps pour toute chose sous les cieux."
        },
        theme: "Tempo per Ogni Cosa"
      },
      {
        reference: "Salmo 23:1",
        text: {
          it: "Il SIGNORE è il mio pastore: nulla mi manca.",
          en: "The LORD is my shepherd, I lack nothing.",
          es: "Jehová es mi pastor; nada me faltará.",
          pt: "O SENHOR é o meu pastor; nada me faltará.",
          fr: "L'Éternel est mon berger: je ne manquerai de rien."
        },
        theme: "Il Buon Pastore"
      },
      {
        reference: "Salmo 119:105",
        text: {
          it: "La tua parola è una lampada al mio piede e una luce sul mio sentiero.",
          en: "Your word is a lamp for my feet, a light on my path.",
          es: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
          pt: "Lâmpada para os meus pés é tua palavra e luz para o meu caminho.",
          fr: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier."
        },
        theme: "Parola di Dio"
      },
      {
        reference: "Proverbi 9:10",
        text: {
          it: "Il principio della saggezza è il timore del SIGNORE, e conoscere il Santo è intelligenza.",
          en: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.",
          es: "El temor de Jehová es el principio de la sabiduría, y el conocimiento del Santísimo es la inteligencia.",
          pt: "O temor do SENHOR é o princípio da sabedoria, e o conhecimento do Santo é prudência.",
          fr: "Le commencement de la sagesse, c'est la crainte de l'Éternel; et la science des saints, c'est l'intelligence."
        },
        theme: "Saggezza"
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
          it: "Ma riceverete potenza quando lo Spirito Santo verrà su di voi, e mi sarete testimoni in Gerusalemme, e in tutta la Giudea e Samaria, e fino all'estremità della terra.",
          en: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
          es: "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.",
          pt: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.",
          fr: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre."
        },
        theme: "Testimonianza"
      },
      {
        reference: "Atti 2:38",
        text: {
          it: "E Pietro a loro: «Ravvedetevi e ciascuno di voi sia battezzato nel nome di Gesù Cristo, per il perdono dei vostri peccati, e voi riceverete il dono dello Spirito Santo».",
          en: "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'",
          es: "Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.",
          pt: "E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo.",
          fr: "Pierre leur dit: Repentez-vous, et que chacun de vous soit baptisé au nom de Jésus-Christ, pour le pardon de vos péchés; et vous recevrez le don du Saint-Esprit."
        },
        theme: "Pentecoste"
      },
      {
        reference: "Atti 4:12",
        text: {
          it: "In nessun altro è la salvezza; perché non vi è sotto il cielo nessun altro nome che sia stato dato agli uomini, per mezzo del quale noi dobbiamo essere salvati.",
          en: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
          es: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.",
          pt: "E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos.",
          fr: "Il n'y a de salut en aucun autre; car il n'y a sous le ciel aucun autre nom qui ait été donné parmi les hommes, par lequel nous devions être sauvés."
        },
        theme: "Salvezza in Cristo"
      },
      {
        reference: "Atti 16:31",
        text: {
          it: "Ed essi risposero: «Credi nel Signore Gesù, e sarai salvato tu e la tua famiglia».",
          en: "They replied, 'Believe in the Lord Jesus, and you will be saved—you and your household.'",
          es: "Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa.",
          pt: "E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.",
          fr: "Paul et Silas répondirent: Crois au Seigneur Jésus, et tu seras sauvé, toi et ta famille."
        },
        theme: "Fede Salvifica"
      },
      {
        reference: "Atti 20:35",
        text: {
          it: "In ogni cosa vi ho mostrato che bisogna venire in aiuto ai deboli lavorando così, e ricordarsi delle parole del Signore Gesù, il quale disse egli stesso: "Vi è più gioia nel dare che nel ricevere".",
          en: "In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: 'It is more blessed to give than to receive.'",
          es: "En todo os he enseñado que, trabajando así, se debe ayudar a los necesitados, y recordar las palabras del Señor Jesús, que dijo: Más bienaventurado es dar que recibir.",
          pt: "Tenho-vos mostrado em tudo que, trabalhando assim, é necessário auxiliar os enfermos e recordar as palavras do Senhor Jesus, que disse: Mais bem-aventurada coisa é dar do que receber.",
          fr: "Je vous ai montré de toutes manières que c'est en travaillant ainsi qu'il faut soutenir les faibles, et se rappeler les paroles du Seigneur, qui a dit lui-même: Il y a plus de bonheur à donner qu'à recevoir."
        },
        theme: "Generosità"
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
          it: "«Io sono l'Alfa e l'Omega», dice il Signore Dio, «colui che è, che era e che viene, l'Onnipotente».",
          en: "'I am the Alpha and the Omega,' says the Lord God, 'who is, and who was, and who is to come, the Almighty.'",
          es: "Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir, el Todopoderoso.",
          pt: "Eu sou o Alfa e o Ômega, o Princípio e o Fim, diz o Senhor, que é, e que era, e que há de vir, o Todo-Poderoso.",
          fr: "Je suis l'Alpha et l'Oméga, dit le Seigneur Dieu, celui qui est, qui était, et qui vient, le Tout-Puissant."
        },
        theme: "Alfa e Omega"
      },
      {
        reference: "Apocalisse 3:20",
        text: {
          it: "Ecco, io sto alla porta e busso: se qualcuno ascolta la mia voce e apre la porta, io entrerò da lui e cenerò con lui ed egli con me.",
          en: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
          es: "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo.",
          pt: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e com ele cearei, e ele, comigo.",
          fr: "Voici, je me tiens à la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi."
        },
        theme: "Invito di Cristo"
      },
      {
        reference: "Apocalisse 21:4",
        text: {
          it: "Egli asciugherà ogni lacrima dai loro occhi e non ci sarà più la morte, né cordoglio, né grido, né dolore, perché le cose di prima sono passate.",
          en: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
          es: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto ni clamor ni dolor, porque las primeras cosas pasaron.",
          pt: "E Deus limpará de seus olhos toda lágrima, e não haverá mais morte, nem pranto, nem clamor, nem dor, porque já as primeiras coisas são passadas.",
          fr: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu."
        },
        theme: "Nuova Creazione"
      },
      {
        reference: "Apocalisse 22:13",
        text: {
          it: "Io sono l'Alfa e l'Omega, il primo e l'ultimo, il principio e la fine.",
          en: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.",
          es: "Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último.",
          pt: "Eu sou o Alfa e o Ômega, o Primeiro e o Último, o Princípio e o Fim.",
          fr: "Je suis l'Alpha et l'Oméga, le premier et le dernier, le commencement et la fin."
        },
        theme: "Eternità di Cristo"
      },
      {
        reference: "Apocalisse 22:20",
        text: {
          it: "Colui che attesta queste cose, dice: «Sì, vengo presto!» Amen! Vieni, Signore Gesù!",
          en: "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus.",
          es: "El que da testimonio de estas cosas dice: Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús.",
          pt: "Aquele que testifica estas coisas diz: Certamente, cedo venho. Amém! Ora, vem, Senhor Jesus!",
          fr: "Celui qui atteste ces choses dit: Oui, je viens bientôt. Amen! Viens, Seigneur Jésus!"
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
