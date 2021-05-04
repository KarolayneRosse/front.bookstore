<template>
  <div id="cart">
    <div>
      <div class="ml-3 mt-2" v-if="books.length > 0">
        <b-row>
          <b-col>
            <h4>Carrinho de compras</h4>
          </b-col>
          <b-col>
            <h5>Total da compra: {{total | money}}</h5>
          </b-col>
        </b-row>
      </div>
      <div :class="books.length < 3 ? 'cartcheio': 'cartvazio'">
        <div v-if="books.length <= 0">
          <h3 class="text-center mt-5">Não há itens no seu carrinho :(</h3>
        </div>
        <div v-else>
          <b-card class="border-top-1" v-for="(book, index) in books" :key="book.id">
          <b-row>
            <b-col sm="2">
              <b-img width="130" :src="require(`@/assets/${book.images[0].url}`)"></b-img>
            </b-col>
            <b-col>
              <h5>
                {{book.name}}
              </h5>
              <p class="mb-0">{{book.autor}}</p>
              <small> <b>Capa comun</b> </small>
              <br />
              <b-row style="margin-left: 0%">
                <b-row style="margin-left: 0%" class="mt-1">
                  <small class="mt-3">Qnt:</small>
                  <b-form-select
                    :options="options"
                    v-model="book.qnt"
                    class="selectQnt bg-transparent border-dark border-left-0 border-right-0 border-top-0 border-bottom-0 ml-2 mt-1"
                  >
                  </b-form-select>
                </b-row>
                <div class="ml-4 mt-2">
                    |
                <b-button variant="outline" @click="deleteItem(index)">
                    <small>Excluir</small>
                </b-button>
                </div>
              </b-row>
            </b-col>
            <b-col>
              <h5>{{book.price | money}}</h5>
            </b-col>
          </b-row>
        </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      books: []
    };
  },
  created(){
    this.getBooksCart();
  },
  computed:{
    total(){
      let value = 0

      this.$store.state.cart.forEach(element => {
        value += (element.price * element.qnt)
      });

      return value
    }
  },
  methods:{
    getBooksCart(){
      this.books = this.$store.state.cart;
    },
    deleteItem(index){
      this.$store.state.cart.splice(index, 1)
    },
  }
};
</script>
<style scoped>
.selectQnt {
  width: 60px;
}
.cartvazio{
  height: 100%;
}
.cartcheio{
  height: 100vh;
}
#cart{
  height: 100%;
}
</style>
