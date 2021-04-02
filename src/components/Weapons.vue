<template>
  <div
    xl12
    xs1
    md2
    class="d-flex justify-content-center align-items-center divCard"
  >
    <div class="row divCard">
      <b-card
        class="m-2 border-0 cartao"
        v-for="arma in weapons"
        :key="arma.name"
      >
        <b-row>
          <b-col>
            <div>
              <b-img src="../assets/teste_image_edited.jpg" fluid></b-img>
            </div>
          </b-col>
          <b-col>
            <div>
              <p>{{ arma.name }}</p>
              <p>{{ arma.price | money }}</p>
              <b-button
                variant="outline"
                v-show="logged"
                @click="addToCart(arma)"
              >
                Comprar
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: ["weapons"],
  computed: {
    logged() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    addToCart(item) {
      let cart = this.$store.state.cart;

      cart.push(item);
    },
  },
};
</script>
<style scoped>
.cartao {
  width: 40%;
  height: 40%;
}

.divCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
