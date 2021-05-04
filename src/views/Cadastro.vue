<template>
  <div id="divs" class="pt-3 pb-5 ">
    <div class="formulario">
      <b-form class="card-form">
        <h2 class="text-center mb-5">Cadastre-se</h2>
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
          <b-input-group>
            <b-input-group-prepend>
              <b-icon icon="lock"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              placeholder="Senha"
              v-model="registerForm.password"
              :type="pass ? 'text' : 'password'"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="outline" @click="pass = !pass">
                <b-icon :icon="pass ? 'eye-fill' : 'eye-slash-fill'"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend>
              <b-icon icon="lock"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              placeholder="Confirmar senha"
              v-model="registerForm.password"
              :type="pass ? 'text' : 'password'"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="outline" @click="pass = !pass">
                <b-icon :icon="pass ? 'eye-fill' : 'eye-slash-fill'"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <br />
        <b-button style="margin-left: 45%" @click="submitUser()">{{
          btnSubmit
        }}</b-button>
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
      this.btnSubmit = "Enviando...";
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-form {
  width: 30%;
}
</style>
