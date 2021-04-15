<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="navColor">
      <b-navbar-brand href="/" class="text-light">
        Book Store
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="text-light">
        <b-navbar-nav class="ml-auto">
          <!-- <router-link to="/cadastro" v-show="!logged" class="mr-2 text-light"
            >Cadastre-se</router-link
          >
          
          <router-link to="/login" v-show="!logged" class="ml-2 text-light"
            >Login</router-link
          > -->

          <b-button @click="$router.push('/carrinho')"
            variant="outline" v-show="logged" class="text-light mb-1">
            <b-badge pill class="badgeBtn">{{cartSize}}</b-badge>
            <b-icon icon="cart" scale="2"></b-icon>
          </b-button>

          <b-dropdown
            no-caret
            dropleft
            variant="outline"
            class="ml-2 dropColor text-light mt-3"
            v-show="logged"
          >
            <template #button-content>
              <b-icon icon="person-circle" scale="2" class="text-light"></b-icon>
            </template>

            <b-dropdown-item>Link inativo</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="logout()">Sair</b-dropdown-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ic: false,
    };
  },
  computed: {
    logged() {
      return this.$store.state.loggedIn;
    },
    cartSize(){
      return this.$store.state.cart.length;
    }
  },
  methods:{
    logout(){
      this.$store.commit('logout')

      if (!localStorage.getItem('token')) {
        this.$router.push('/')
      }
    }
  }
};
</script>
<style scoped>
.navColor {
  background-color: black;
  color: white;
}
.dropColor {
  color: black;
}
.icoBtn {
  color: crimson;
}
.badgeBtn{
  display: flex;
  top: 10px;
  left: 5px;
}
</style>
