<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <div>
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
// body{
//   background-color: #212121;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    color: black;

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
