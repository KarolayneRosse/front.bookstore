<template>
  <div xl12 xs1 md2>
    <b-row>
      <b-card class="m-2 border-0 carts" v-for="arma in weapons" :key="arma.name">
        <img src="../assets/logo.png" alt="" width="120" />
        <p>{{ arma.name }}</p>
        <p>{{arma.price | money}}</p>
        <b-button variant="outline" v-show="logged" @click="addToCart(arma)">
            Comprar
        </b-button>
      </b-card>
    </b-row>
  </div>
</template>
<script>
export default {
  props: ["weapons"],
  computed:{
      logged(){
        return this.$store.state.loggedIn
      }
  },
  methods:{
    addToCart(item){
      let cart = this.$store.state.cart

      cart.push(item)
    }
  }
};
</script>
<style scoped>
.carts {
  display: inline-flex;
}
</style>
