import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weapons:[
      {
        images:[
          {url: '5passosDeVoceCapa.jpg'},
          {url: '5passosDeVoceCapa1.jpg'}
        ],
        autor: "Rachael Lippincott",
        name: 'A cinco passos de você',
        description:" Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica, mas em sua rotina há listas de" +
          "tarefas e inúmeros remédios que ela deve tomar para controlar a fibrose cística, uma doença crônica que impede que seus " +
          "pulmões funcionem como deveriam. Suas prioridades são manter seus pais felizes e conseguir um transplante – e uma coisa não " +
          "existe sem a outra. Mas para ganhar pulmões novos, Stella precisa seguir seu tratamento à risca e eliminar qualquer chance de " +
          "infecção, o que significa que ela não pode ficar a menos que dois metros de distância – ou seis passos – de outros pacientes com " +
          "a doença. O primeiro item é fácil para ela, mas o segundo pode se provar mais difícil do que ela esperava." +
          "O único controle que Will Newman deseja é o de sua própria vida. Ele não dá a mínima para o novo tratamento experimental " +
          "para o qual foi selecionado e não aguenta mais a pressão de sua mãe para que melhore. Prestes a completar dezoito anos," +
          "ele mal pode esperar para finalmente se livrar das máquinas e hospitais, usando o pouco de vida que ainda lhe resta para " +
          "conhecer o mundo. Stella e Will são muito diferentes. Ao mesmo tempo, a doença que os une não é a única coisa que têm em comum. " +
          "Eles têm que ficar a cinco passos um do outro, mas, conforme a conexão entre os dois aumenta, a vontade de burlar a distância " +
          "física parece insuportável. Um grande amor vale um passo roubado?" ,
          details:{
            editora: "Alt; 1ª edição (25 fevereiro 2019)",
            idioma: "Português",
            capa: "288 páginas",
            isbn_10: "8525067423",
            isbn_13: "978-8525067425",
            dimensoes: "21 x 14 x 1.8 cm"
          },
        price: 19.80,
        id: 0
      },
      {
        images:[
          {url: 'AliceNoPaisDasMaravilhas.jpg'}
        ],
        autor: "Lewis Carrol",
        name: 'Alice no país das maravilhas',
        description: "Com as ilustrações originais que deram vida aos personagens, explore o universo único criado por Lewis Carroll. " +
          "Esta é a história sobre uma garotinha caindo de um buraco de coelho que se tornou a heroína mais popular da literatura " +
          "inglesa. Enquanto Alice explora um mundo subterrâneo bizarro, ela encontra um elenco de personagens estranhos e fantasiosos:" +
          "o apressado Coelho Branco, o Chapeleiro Maluco, o sorridente gato Cheshire, os gêmeos, a terrível Rainha de Copas e outras " +
          "criaturas extraordinárias. Perca-se nesta aventura através dos olhos de Alice nesse maravilhoso mundo nonsense, repleto de " +
          "significados criados por meio de sátiras, alegorias e metáforas, que escondem profundas revelações. Talvez Alice não seja " +
          "mais que um sonho, um conto de fadas sobre os desafios e tribulações do crescer ― talvez seja a visão de que o mundo adulto " +
          "parece estar de cabeça para baixo, quando visto pelos olhos de uma criança...",
        details:{
          editora: "Faro Editorial; 1ª edição (10 setembro 2020)",
          idioma: "Português",
          capa: "144 páginas",
          isbn_10: "6586041317",
          isbn_13: "978-6586041316",
          dimensoes: "23 x 5 x 16 cm"
        },
        price: 17.90,
        id: 1
      },
      {
        images:[
          {url: 'Capa-1 HP.jpg'},
          {url: 'Capa-2 hp.jpg'},
          {url: 'Capa-4 hp.jpg'},
          {url: 'Capa-5 hp.jpg'},
        ],
        autor: "J.K. Rowlling",
        name: 'Box Harry Potter Tradicional',
        description: "Esse box especial e inédito é feito para você que gosta das capas tradicionais de Harry Potter." + 
          "Os sete livros da saga do bruxo mais querido do mundo reunidos num box rígido, com capas em brochura, projeto gráfico " + 
          "baseado nas ilustrações originais de Mary GrandPré e miolo em papel offwhite, o “amarelinho”. A vida do menino Harry Potter " +
          "não tem um pingo de magia. Ele vive com os tios e o primo, que não gostam nem um pouco dele. O quarto de Harry é, na verdade, " +
          "um armário sob a escada, e ele nunca comemorou um aniversário sequer em onze anos. Até que, um dia, Harry recebe uma " +
          "carta misteriosa, entregue por uma coruja: um convite para estudar num lugar incrível chamado Escola de Magia e Bruxaria Hogwarts. " + 
          "Lá ele vai encontrar não só amigos, esportes praticados em vassouras voadoras e magia para todo lado, como também seu destino: "+ 
          "ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o bruxo que assassinou seus pais. "+
          "Mas, para isso, Harry precisará passar por uma série de desafios e enfrentar inúmeros perigos. Em sete livros que se "+
          "tornaram o maior fenômeno editorial de todos os tempos, com mais de 450 milhões de exemplares vendidos e traduções em 78 idiomas, "+
          "Harry Potter não é exposto apenas a batalhas e feitiços. Ele precisa superar traições, surpresas e, sobretudo, aprender a lidar "+
          "com os próprios sentimentos. O amor, a amizade e claro, uma boa dose de magia e imaginação, são os elementos - chave para da "+
          "maior saga bruxa de todos os tempos.",
        details:{
          editora: "Rocco; 1ª edição (15 outubro 2020)",
          idioma: "Português",
          capa: "3067 páginas",
          isbn_10: "6555320478",
          isbn_13: "978-6555320473",
          dimensoes: "21.84 x 18.29 x 13.97 cm"
        },
        price: 181.90,
        id: 2
      },
      {
        images:[
          {url: 'extraordinarioCapa.jpg'},
          {url: 'extraordinarioCapa1.jpg'},
        ],
        autor: "R. J. Palacio",
        name: 'Extraordinário',
        description: "August Pullman, o Auggie, nasceu com uma síndrome cuja sequela é uma severa deformidade facial, "+
          "que lhe impôs diversas cirurgias e complicações médicas. Por isso ele nunca frequentou uma escola de verdade.. "+
          "até agora. Todo mundo sabe que é difícil ser um aluno novo, mais ainda quando se tem um rosto tão diferente. "+
          "Prestes a começar o quinto ano em um colégio particular em Nova York, Auggie tem uma missão nada fácil pela frente: "+
          "convencer os colegas de que, apenas da aparência incomum, ele é um menino igual a todos os outros."+
          "R.J.Palacio criou uma história edificante, repleta de amor e esperança, em que um grupo de pessoas luta para espalhar compaixão, "+
          "aceitação e gentileza. Narrado da perspectiva de Auggie e também de seus familiares e amigos, com momentos comoventes e outros "+
          "descontraídos, Extraordinário consegue captar o impacto que um menino pode causar na vida e no comportamento de todos, "+
          "família, amigos e comunidade – um impacto forte, comovente e , sem dúvida nenhuma, extraordinariamente positivo, que vai "+
          "tocar todo tipo de leitor."+
          "Para espalhar a mensagem de Extraordinário, Palacio iniciou uma campanha antibullying, da qual milhares de crianças "+
          "já participaram."+
          "“Uma história rara, com o poder de abrir nossos olhos – e o coração – para que é ser diferente por algo que está "+
          "além do seu controle, enquanto tudo o que você quer é ser mais um na multidão” Publishers Weekly"+
          "“Uma história memorável de gentileza, coragem e maravilhamento” Kirkus Reviews"+
          "Best-seller da Veja",
        details:{
          editora: "Intrínseca; 1ª edição (31 janeiro 2013)",
          idioma: "Português",
          capa: "320 páginas",
          isbn_10: "8580573017",
          isbn_13: "978-8580573015",
          dimensoes: "22.8 x 16 x 2 cm"
        },
        price: 23.90,
        id: 3
      },
      {
        images:[
          {url: 'vDeVingança-capa1.jpg'},
          {url: 'vDeVingança-capa2.jpg'},
        ],
        autor: "Alan Moore e David Lloyd",
        name: 'V de vingança',
        description: "Uma poderosa e aterradora história sobre a perda da liberdade e cidadania em um mundo totalitário bem possível," + 
          "V DE VINGANÇA permanece como uma das maiores obras dos quadrinhos e o trabalho que revelou ao mundo seus criadores, " +
          "Alan Moore e David Lloyd. Encenada em uma Inglaterra de um futuro imaginário que se entregou ao fascismo, " +
          "esta arrebatadora história captura a natureza sufocante da vida em um estado policial autoritário e a força " +
          "redentora do espírito humano que se rebela contra esta situação. Obra de surpreendente clareza e inteligência," + 
          "V DE VINGANÇA traz inigualável profundidade de caracterizações e verossimilhança, em um audacioso conto de opressão e resistência.",
        details:{
          editora: "Panini; 1ª edição (5 novembro 2018)",
          idioma: "Português",
          capa: "304 páginas",
          isbn_10: "8583681406",
          isbn_13: "978-8583681403",
          dimensoes: "26.42 x 17.53 x 1.78 cm"
        },
        price: 69.99,
        id: 4
      },
      {
        images:[
          {url: 'corteCapa1.jpg'},
          {url: 'corteCapa1.jpg'},
          {url: 'corteCapa3.jpg'},
        ],
        autor: "Sarah J. Maas e Mariana Kohnert",
        name: 'Corte de espinhos e rosas (Vol. 1)',
        description: "Ela roubou uma vida. Agora deve pagar com o coração. Corte de espinhos e rosas é primeiro" +
          "volume da série best-seller, da mesma autora da saga Trono de vidro.Num mundo dividido uma muralha "+
          "mágica separa duas espécies. De um lado, os feéricos vivem dentro de suas fronteiras cheias de beleza "+
          "e mistério; do outro, os humanos possuem apenas medo, desconfiança e dificuldades.Feyre, filha de um "+
          "casal de mercadores humanos e falidos, se torna caçadora para sustentar a família. Dura como as flechas "+
          "que carrega, letal como sua pontaria, ela abandona as fantasias de garota e as troca pela árdua vida"+ 
          "nas florestas ao redor de sua aldeia.Sua única alegria é observar as cores e sonhar em capturá-las. "+
          "Mas, na floresta, coberta de neve tudo é branco e árido; como o ódio pelos feéricos que carrega no coração;"+
          "Como as telas que não pode comprar ou colorir. Até que um enorme lobo cruza seu caminho... "+
          "Sem hesitar, Feyre dispara... uma flecha. Um ato de rebelião.Após matar o lobo, uma criatura "+
          "bestial surge exigindo uma reparação. Arrastada para além do muro, para uma terra mágica e traiçoeira "+
          "- que ela só conhece por meio de lendas -, a jovem descobre que seu captor não é um animal, mas Tamlin, "+
          "Grão Senhor da Terra Primaveril. Um feérico com um segredo, escondido sob uma máscara. Ela descobre ainda "+
          "que o então animal que havia assassinado era, na verdade, uma criatura mágica, uma fada zoomórfica "+
          "transformada em lobo.À medida que ela descobre mais sobre este mundo onde a magia impera, seus "+
          "sentimentos por Tamlin passam da mais pura hostilidade até uma paixão avassaladora. Enquanto isso,"+ 
          "uma sinistra e antiga sombra avança sobre o mund­­o das fadas e Feyre deve provar seu amor para "+
          "detê-la ou Tamlin e seu povo estarão condenados.Corte de espinhos e rosas é um livro de fantasia de "+
          "tirar o fôlego. Memorável em todos os aspectos, com personagens complexos, enredo rico e um magnífico "+
          "mundo de fantasia combinados impecavelmente para criar um romance épico.",
        details:{
          editora: "Galera; 28ª edição (9 outubro 2015)",
          idioma: "Português",
          capa: "434 páginas",
          isbn_10: "8501105872",
          isbn_13: "978-8501105875",
          dimensoes: "22.6 x 15.4 x 2.6 cm"
        },
        price: 30.84,
        id: 5
      },
      {
        images:[
          {url: 'corte2capa1.jpg'},
          {url: 'corte2capa2.jpg'},
          {url: 'corte2capa3.jpg'},
        ],
        autor: "Sarah J. Maas e Mariana Kohnert",
        name: 'Corte de névoa e fúria(Vol. 2 de Corte de espinhos e rosas)',
        description: "Corte de névoa e fúria é o esperado segundo volume da saga iniciada em Corte de espinhos "+
          "e rosas, da mesma autora da série Trono de vidro.Neste livro, seguimos a saga de Feyre Archeron, "+
          "que morreu Sob a Montanha. Nas garras de Amarantha, a jovem humana que ansiava por amor e proteção "+
          "deixou de existir. Das cinzas de seu velho eu, Feyre Quebradora da Maldição foi Feita - com poderes "+
          "de sete Grão-Feéricos... e uma vontade tão férrea quanto o metal temido por eles."+
          "Seu coração no entanto, permanece humano, vulnerável. Incapaz de esquecer o que sofreu para "+
          "libertar o povo de Tamlin... e o pacto firmado com Rhysand, senhor da Corte Noturna. Mas mesmo assim, "+
          "Feyre se esforça para reconstruir o lar que criou na Corte Primaveril. Então por que é ao lado de "+
          "Rhys que ela se sente mais plena?Peça-chave num jogo que desconhece. Feyre deve aprender"+ 
          "rapidamente do que á capaz. E curar sua alma partida. Pois um antigo mal, muito pior que Amarantha, "+
          "se agita no horizonte... um que ameaça não apenas os feéricos, mas o mundo humano e a muralha também."+
          "Enquanto navega por uma teia de intrigas políticas, paixões e poder, sufocada por Tamlin, "+
          "Feyre precisa decidir o que deseja: amor ou liberdade?Corte de névoa e fúria apresenta uma "+
          "história de emoção absoluta. Feyre aprende como se tornar uma verdadeira guerreira usando as "+
          "ferramentas que possui. Um novo elenco de personagens dá vida ao reino. Cassian e Azriel "+
          "- os irmãos de armas de Rhys, o sempre poderoso e charmoso Morrigan e o mortal, sarcástico, "+
          "Amren.Sarah J. Maas desenvolve a narrativa com tramas tão hábeis que nenhum leitor pode começar "+
          "este livro sem tentar terminá-lo o mais rápido possível. É cativante, romântico, cheio de ação "+
          "e um estudo intenso dos reinos em guerra. Um verdadeiro clássico no gênero fantasia.", 
        details:{
          editora: "Galera; 23ª edição (2 agosto 2016)",
          idioma: "Português",
          capa: "658 páginas",
          isbn_10: "8501076600",
          isbn_13: "978-8501076601",
          dimensoes: "22.8 x 15.2 x 3.8 cm"
        },
        price: 38.97,
        id: 6
      },
      {
        images:[
          {url: 'corte3capa1.jpg'},
          {url: 'corte3capa2.jpg'},
          {url: 'corte3capa3.jpg'},
        ],
        autor: "Sarah J. Maas e Mariana Kohnert",
        name: 'Corte de asas e ruína(Vol.3 de Corte de espinhos e rosas)',
        description: "Corte de asas e ruína é o terceiro volume da série best-seller Corte de Espinhos e "+
          "Rosas, da mesma autora da saga Trono de vidro.Seguindo os acontecimentos do volume anterior,"+ 
          "Corte de névoa e fúria, acompanhamos a saga de Feyre Archeon, que suportou a fome, o frio "+
          "e a desesperança, atravessou a Montanha e foi Sob a Montanha. Reclamou seu amor, quebrou a "+
          "maldição e livrou o povo feérico da mais terrível ameaça... ou não? Amarantha pode ter sido "+
          "aniquilada, mas o rei de Hybern pretende usar o Caldeirão para moldar um novo tempo; uma época"+ 
          "de trevas e escravidão.A guerra se aproxima, um conflito que promete devastar Prythian." +
          " Em meio à Corte Primaveril, num perigoso jogo de intrigas e mentiras, a Grã-Senhora da "+
          "Corte Noturna esconde seu laço de parceria e sua verdadeira lealdade. Longe de sua corte, "+
          "longe de seu Grão-Senhor e verdadeiro amor, ela reúne informações, na esperança de vencer Hybern."+
          "Tamlin está fazendo acordos com o invasor, Jurian recuperou suas forças e as rainhas humanas "+
          "prometem se alinhar aos desejos de Hybern em troca de imortalidade. O exército inimigo parece imbatível. "+
          "Mas o sonho de Velaris é como um farol em meio às trevas. O ideal de um mundo mais justoEnquanto "+
          "isso Feyre e seus amigos precisam aprender em quais Grãos-Senhores confiar, e procurar aliados "+
          "nos mais improváveis lugares. Porém, a Quebradora da Maldição ainda tem uma ou duas cartas na "+
          "manga antes que sua ilha queime.Sarah J. Maas faz questão de salientar neste livro que Rhysand e "+
          "Feyre são iguais. A protagonista não é retratada como uma donzela fraca em perigo, ela realmente "+
          "é uma guerreira forte e determinada! Os personagens são muito complexos, todas as perguntas que "+
          "permeiam a trama serão respondidas. Corte de asas e ruína é um romance épico que preenche todos"+ 
          "os requisitos para um livro exemplar, abrindo caminho de forma impecável para o final de uma "+
          "série inesquecível­.",
        details:{
          editora: "Galera; 18ª edição (19 setembro 2017)",
          idioma: "Português",
          capa: "686 páginas",
          isbn_10: "8501110124",
          isbn_13: "978-8501110121",
          dimensoes: "22.6 x 15.4 x 3.6 cm"
        },
        price: 38.97,
        id: 7
      },
      {
        images:[
          {url: 'corte4Capa1.jpg'},
          {url: 'corte4Capa2.jpg'},
          {url: 'corte4Capa3.jpg'},
        ],
        autor: "Sarah J. Maas e Mariana Kohnert",
        name: 'Corte de gelo e estrelas(Vol.4 de Corte de espinhos e rosas)',
        description:  "A série best seller Corte de Espinhos e Rosas, da mesma autora de Trono de Vidro,"+
          "ganha um spin-off em Corte de gelo e estrelas, volume que tem início após os acontecimentos "+
          "de Corte de asas e ruína.Para Feyre Archeon, ser Grã-Senhora ainda é uma novidade, e ela precisa "+
          "descobrir seu papel enquanto luta para reconstruir uma Velaris devastada pela guerra contra Hybern. "+
          "A muralha que separava o mundo feérico do mundo humano se foi, Keir está prestes a deixar a Corte dos "+
          "Pesadelos para uma visita à cidade de Luz Estelar e os illyrianos parecem insatisfeitos com o resultado "+
          "da guerra.Divididos entre as tentativas de retomar suas vidas após a grande batalha, as "+
          "responsabilidades de liderar a Corte Noturna e a preparação para o rigoroso inverno, o trabalho de "+
          "Feyre, Rhys e seu Círculo Íntimo parece nunca ter fim. Todos seguem tentando manter a paz, "+
          "conquistada a base de muito esforço e perdas pessoais, após a queda da muralha. Mas com o "+
          "Solstício de Inverno finalmente se aproximando, chega também a promessa de descanso conquistado "+
          "com muito esforço.No entanto, nem as festividades conseguem impedir que as sombras da guerra se "+
          "aproximem.Enquanto vive primeiro Solstício como Grã-Senhora, Feyre ainda lida com os horrores do "+
          "passado recente e percebe que seu parceiro e sua família têm mais cicatrizes do que ela esperava "+
          "- cicatrizes que podem impactar o futuro, e a paz, de sua Corte.Corte de gelo e estrelas é derivado "+
          "do universo de Corte de Espinhos e Rosas, e tem como foco principal os seus personagens, "+
          "proporcionando aos fãs da série, uma visão geral do universo após o final da primeira trilogia. "+
          "Contado a partir de perspectivas alternadas, a narrativa permite que o leitor reencontre Feyre, "+
          "Rhysand, Cassian, More, Elain, Nesta, Azriel e Amren, enquanto tentam encontrar o caminho para o "+
          "novo mundo pós-guerra.",
        details:{
          editora: "Galera; 12ª edição (1 outubro 2018)",
          idioma: "Português",
          capa: "238 páginas",
          isbn_10: "9788501115607",
          isbn_13: "978-8501115607",
          dimensoes: "22.8 x 15.4 x 1.6 cm"
        },
        price: 24.82,
        id: 8
      },
      {
        images:[
          {url: 'morroVento1.jpg'},
          {url: 'morroVento2.jpg'},
        ],
        autor: "Emily Brontë",
        name: 'Morro dos ventos uivantes',
        description:"Único romance da escritora inglesa Emily Bronte, O morro dos ventos uivantes retrata "+
          "uma trágica historia de amor e obsessão em que os personagens principais são a obstinada e "+
          "geniosa Catherine Earnshaw e seu irmão adotivo, Heathcliff. Grosseiro, humilhado e rejeitado, "+
          "ele guarda apenas rancor no coração, mas tem com Catherine um relaciona- mento marcado por amor e, "+
          "ao mesmo tempo, ódio. Essa ligação perdura mesmo com o casamento de Catherine com Edgar Linton.",
        details:{
          editora: "Principis; Texto integral traduzido do original em inglês edição (17 junho 2019)",
          idioma: "Português",
          capa: "368 páginas",
          isbn_10: "8594318235",
          isbn_13: "978-8594318237",
          dimensoes: "16 x 1 x 23 cm"
        },
        price: 9.99,
        id: 9
      },
      {
        images:[
          {url: 'cartasDiabo1.jpg'},
          {url: 'cartasDiabo2.jpg'},
          {url: 'cartasDiabo3.jpg'},
        ],
        autor: "C. S. Lewis e Gabriele Greggersen",
        name: 'Cartas de um diabo a seu aprendiz',
        description: "Irônica, astuta, irreverente. Assim pode ser descrita esta obra-prima de C.S. Lewis, "+
          "dedicada a seu amigo J.R.R. Tolkien. Um clássico da literatura cristã, este retrato satírico da vida humana, "+
          "feito pelo ponto de vista do diabo, tem divertido milhões de leitores desde sua primeira publicação, na década de 1940; "+
          "agora com novo projeto gráfico e tradução atual.Cartas de um diabo a seu aprendiz é a correspondência ao mesmo tempo cômica, "+
          "séria e original entre um diabo e seu sobrinho aprendiz. Revelando uma personalidade mais espirituosa, Lewis apresenta "+
          "nesta obra a mais envolvente narrativa já escrita sobre tentações ― e a superação delas.",
        details:{
          editora: "Thomas Nelson Brasil; 1ª edição (18 novembro 2017)",
          idioma: "Português",
          capa: "208 páginas",
          isbn_10: "857860184X",
          isbn_13: "978-8578601843",
          dimensoes: "21.6 x 14 x 1.8 cm"
        },
        price: 19.50,
        id: 10
      },
    ],
    loggedIn: true,
    user:{},
    cart: []
  },
  mutations: {
    setUSer(state, payload){
      state.user = payload
    },
    logout(state){
      state.user = {}
      state.loggedIn = false
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  getters: {
    gerUserData(state){
      return state.user
    },
  }
})
