<template>
  <div>
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column is-one-third">
        <div class="hero is-medium">
          <div class="hero-body">
            <h1 class="title has-text-centered">Login</h1>
            <hr class="login-hr" />
            <p class="subtitle has-text-black has-text-centered">
              Please login to proceed.
            </p>
            <b-field label="Username" type="is-primary">
              <b-input type="text" v-model="username"> </b-input> </b-field
            ><b-field label="Password" type="is-primary">
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
              v-on:click="login()"
            >
              Login
            </button>
          </div>
        </div>
        <!-- End -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      formFields: [
        {
          name: "Username",
          style: "is-primary",
          type: "text",
          placeholder: "eg.Jhon Doe",
        },
        {
          name: "Password",
          style: "is-primary",
          type: "password",
          placeholder: "eg.Jhon@pass",
        },
      ],
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const URL = "http://127.0.0.1:5000/login";
      axios
        .post(URL, { username: this.username, password: this.password })
        .then((res) => {
          let serverToken = res.data.token;
          localStorage.setItem("token", serverToken);
          localStorage.setItem("isAuthentictaed", true);
          this.$router.push("admin");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.login-hr {
  background-color: black;
}
</style>