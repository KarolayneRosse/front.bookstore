<template>
  <div class="main">
    <div class="divCard">
      <b-row class="mt-5">
        <b-col class="mr-5">
          <b-img
            :src="require(`@/assets/${book.images[0].url}`)"
            height="350"
            width="250"
          />
        </b-col>
        <b-col>
          <h3 class="bookName text-left">{{ book.name }}</h3>
          <br />
          <br />
          <div
            :class="
              btnLer
                ? 'descriptionComplete p-2 text-justify'
                : 'description p-2 text-justify'
            "
          >
            <p>{{ book.description }}</p>
          </div>
          <b-button @click="btnLer = !btnLer" variant="outline">{{
            btnLer ? "Ler menos" : "Ler mais"
          }}</b-button>
        </b-col>
        <b-col class="ml-5">
          <div class="ml-3 mt-5">
            <div>
              <h4>{{ book.price | money }}</h4>
            </div>
            <br />
            <div>
              <b-row style="margin-left: 0%">
                <p class="mt-3">Quantidade:</p>
                <b-form-select
                  :options="options"
                  v-model="qnt"
                  class="selectQnt bg-transparent border-dark border-left-0 border-right-0 border-top-0 ml-2"
                >
                </b-form-select>
              </b-row>
            </div>
            <br />
            <div>
              <b-button variant="warning" pill @click="adicionarCarrinho()">
                Adicionar ao carrinho
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <br />
    <hr />
    <div>
      <h4 class="ml-3">Livros que você pode gostar</h4>
      <br />
      <div>
        <b-carousel :interval="0" ref="myCarousel">
          <b-carousel-slide>
            <template #img>
              <b-row>
                <b-col sm="1"></b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 1</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 2</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 3</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 4</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 5</p>
                  </b-card>
                </b-col>
                <b-col sm="1"></b-col>
              </b-row>
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <b-row>
                <b-col sm="1"></b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 6</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 7</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 8</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 9</p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card>
                    <h3>Card</h3>
                    <p>Texto simples 10</p>
                  </b-card>
                </b-col>
                <b-col sm="1"></b-col>
              </b-row>
            </template>
          </b-carousel-slide>
          
          <b-button style="width: 70px"
            class="carousel-control-prev"
            role="button"
            data-slide="prev"
            @click="prev()"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </b-button>
          <b-button style="width: 70px"
            class="carousel-control-next"
            role="button"
            data-slide="next"
            @click="next()"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </b-button>
        </b-carousel>
      </div>
    </div>
    <br />
    <hr />
    <div>
      <h4 class="ml-3">Detalhes do produto</h4>
      <div class="ml-5">
        <p class="mb-0"><b>Editora: </b>{{ book.details.editora }}</p>
        <p class="mb-0"><b>Idioma: </b>{{ book.details.idioma }}</p>
        <p class="mb-0"><b>Capa simples: </b>{{ book.details.capa }}</p>
        <p class="mb-0"><b>ISBN-10: </b>{{ book.details.isbn_10 }}</p>
        <p class="mb-0"><b>ISBN-13: </b>{{ book.details.isbn_13 }}</p>
        <p class="mb-0"><b>Dimensões: </b>{{ book.details.dimensoes }}</p>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnLer: false,
      book: {},
      listBooks1:[],
      listBooks2:[],
      qnt: 1,
      options: [
        { value: 1, text: "1" },
        { value: 2, text: "2" },
        { value: 3, text: "3" },
        { value: 4, text: "4" },
        { value: 5, text: "5" },
        { value: 6, text: "6" },
        { value: 7, text: "7" },
        { value: 8, text: "8" },
        { value: 9, text: "9" },
        { value: 10, text: "10" },
        { value: 11, text: "11" },
        { value: 12, text: "12" },
        { value: 13, text: "13" },
        { value: 14, text: "14" },
        { value: 15, text: "15" },
        { value: 16, text: "16" },
        { value: 17, text: "17" },
        { value: 18, text: "18" },
        { value: 19, text: "19" },
        { value: 20, text: "20" },
        { value: 21, text: "21" },
        { value: 22, text: "22" },
        { value: 23, text: "23" },
        { value: 24, text: "24" },
        { value: 25, text: "25" },
        { value: 26, text: "26" },
        { value: 27, text: "27" },
        { value: 28, text: "28" },
        { value: 29, text: "29" },
        { value: 30, text: "30" },
      ],
    };
  },
  created() {
    this.getBook();
  },
  computed: {
    books() {
      return this.$store.state.weapons;
    },
  },
  methods: {
    getListBooks(){
      this.books.forEach( (book) =>{
        if (!book.id === this.$route.params) {
          if (this.listBooks1.length < 5) {
            this.listBooks1.push(book)
          }
        }
      })
    },
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
    getBook() {
      this.$store.state.weapons.forEach((book) => {
        if (book.id === Number(this.$route.params.book)) {
          this.book = book;
        }
      });
    },
    adicionarCarrinho() {
      if (!this.$store.state.loggedIn) {
        this.$router.push("/login");
      } else {
        this.book.qnt = this.qnt;
        this.$store.state.cart.push(this.book);
      }
    },
    pushDetail(id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>
<style scoped>
.carousel-control-prev {
  color: aqua;
}

.divCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.text-align {
  text-align: center;
}
.main {
  height: 100%;
}
.selectQnt {
  width: 60px;
}
.bookName {
  margin-top: 0%;
  position: absolute;
}
.description {
  width: 400px;
  overflow: hidden;
  max-height: 196px;
  text-align: justify;
}
.descriptionComplete {
  width: 400px;
  overflow: hidden;
  max-height: 100%;
  text-align: justify;
}
.attName {
  max-width: 18ch;
  overflow: hidden;
  text-overflow: unset;
  white-space: nowrap;
}
</style>
