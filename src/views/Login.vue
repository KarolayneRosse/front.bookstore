<template>
  <div id="divs" class="pt-3 pb-5 ">
    <div class="formulario">
      <b-form>
        <b-form-group>
          <b-form-input
            placeholder="Email"
            v-model="loginForm.email"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            placeholder="Senha"
            v-model="loginForm.password"
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button @click="submitLogin()" @keydown.enter="submitLogin()">{{
          btnEnviar
        }}</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnEnviar: "Enviar",
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      this.btnEnviar = "Enviando...";

      this.$http.post("login", this.loginForm).then(
        (res) => {
          this.$store.state.loggedIn = true;
          localStorage.setItem("token", res.data["token"]);
          
          this.getUserData();

          this.$router.push("/home");
        },
        (error) => {
          alert(error.data["message"]);
        }
      );
    },
    getUserData() {
      this.$http
        .get("user/data", { headers: { Authorization: "Bearer " + localStorage.getItem('token') } })
        .then((res) => {
          this.$store.state.user = res.data;
        });
    },
  },
};
</script>
<style scoped>
#divs {
  margin-top: 2%;
  height: 75vh;
}
.formulario {
  width: 30%;
  margin-left: 10%;
}
</style>
