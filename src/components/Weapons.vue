<template>
  <div xl12 xs1 md2 class="divCard">
    <div class="row divCard">
      <b-card 
        class="m-2 border-0 cartao"
        v-for="arma in weapons"
        :key="arma.name"
      >
        <div>
          <b-img @click="pushDetail(arma.id)" 
            :src="require(`@/assets/${arma.images[0].url}`)"
            height="280"
            width="200"
          ></b-img>
        </div>

        <b-button
          variant="warning"
          v-show="logged"
          class="btnComprar"
          @click="addToCart(arma)"
        >
          <b>Comprar</b>
        </b-button>

        <div>
          <h5 @click="$router.push(`/detail/${arma.id}`)"
            class="attName text-dark" v-b-tooltip.hover :title="arma.name">
            {{ arma.name }}
          </h5>

          <p class="price">{{ arma.price | money }}</p>
        </div>
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
    pushDetail(id){
      this.$router.push('/detail/' + id)
    }
  },
};
</script>
<style scoped>
.btnComprar {
  position: absolute;
  top: 282px;
  left: 150px;
}
.cartao {
  width: 250px;
  height: 400px;
}
.divCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.attName {
  max-width: 18ch;
  overflow: hidden;
  text-overflow: unset;
  white-space: nowrap;
}
.attName:hover {
  color: darkgoldenrod;
}
.price {
  position: relative;
  top: 15px;
}
</style>
