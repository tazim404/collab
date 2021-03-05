<template>
  <div>
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column is-one-third">
        <div class="hero is-medium">
          <div class="hero-body">
            <h1 class="title has-text-centered">Singup</h1>
            <hr class="login-hr" />
            <p class="subtitle has-text-black has-text-centered">
              Please singup to proceed.
            </p>
            <b-field label="Username" type="is-primary">
              <b-input type="text" v-model="username"> </b-input> </b-field
            ><b-field label="Email" type="is-primary">
              <b-input
                type="email"
                aria-placeholder="eg.Jhon@mail.com"
                v-model="email"
                password-reveal
              >
              </b-input>
            </b-field>
            <b-field label="Password" type="is-primary">
              <b-input
                type="password"
                aria-placeholder="eg.Jhon@123"
                v-model="password"
                password-reveal
              >
              </b-input>
            </b-field>
            <button
              class="button is-block is-success is-outlined is-large is-fullwidth"
              v-on:click="singup()"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    singup() {
      console.log(this.username, this.password, this.email);
      console.log("Created acc");
    },
  },
};
</script>

<style scoped>
.login-hr {
  background-color: black;
}
</style>