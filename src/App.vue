<template>
  <div>
    <div id="nav">
      <Header></Header>
    </div>
    <div>
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
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
  font-family: Georgia, "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: white;
  height: 100%;
}

#nav {
  a {
    color: white;

    &.router-link-exact-active {
      color: blue;
    }
  }
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(233, 227, 227, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 2px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(226, 222, 222, 0.3);
  background-color: #555;
}
</style>
