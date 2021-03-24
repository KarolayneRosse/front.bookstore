<template>
  <div id="divs" class="pt-3 pb-5 ">
    <div class="formulario">
      <b-form>
        <b-form-group>
          <b-form-input
            placeholder="Nome completo"
            v-model="registerForm.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            placeholder="Email"
            v-model="registerForm.email"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            placeholder="Senha"
            v-model="registerForm.password"
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button @click="submitUser()">{{ btnSubmit }}</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnSubmit: "Enivar",
      pass: false,
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitUser() {
      let errorMsg = "";
      this.btnSubmit = "Enviando...";

      console.log(this.registerForm);

      this.$http.post("register", this.registerForm).then(
        (res) => {
          console.log(res.data["data"]);
          alert("Parabéns o seu cadastro foi realizado!!");
          this.$router.push("/login");
        },
        (error) => {
          this.btnSubmit = "Enviar";

          if (error.data["message"].length > 0) {
            error.data["message"].forEach((value) => {
              errorMsg += value + "\n";
            });
          } else {
            errorMsg = error.data["message"];
          }
          alert(errorMsg);
        }
      );
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
