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
    ],
    loggedIn: false,
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
