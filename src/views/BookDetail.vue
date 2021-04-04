<template>
  <div class="main">
    <br />
    <div>
      <h3 class="text-center">
        Detalhes do livro
      </h3>
    </div>
    <div class="divCard">
      <b-col>
        <b-img :src="require(`@/assets/${book.images[0].url}`)" height="350" width="250"/>
      </b-col>

      <b-col>
        <h3>{{ book.name }}</h3>
        <!-- <p>{{ book.description }}</p> -->
      </b-col>

      <b-col>
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
      </b-col>
    </div>
    <br />
    <hr />
    <div>
      <p>Livros que você pode gostar</p>
    </div>
    <br />
    <hr />
    <div>
      <p>Detalhes do produto</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      book: {},
      qnt: null,
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
  methods: {
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
  },
};
</script>
<style scoped>
.divCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 90%;
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
</style>
