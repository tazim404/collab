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
              <b-input type="text" v-model="username" required>
              </b-input> </b-field
            ><b-field label="Email" type="is-primary">
              <b-input
                type="email"
                aria-placeholder="eg.Jhon@mail.com"
                v-model="email"
                password-reveal
                required
              >
              </b-input>
            </b-field>
            <!-- {{ gender }} -->
            <b-field label="Password" type="is-primary">
              <b-input
                type="password"
                aria-placeholder="eg.Jhon@123"
                v-model="password"
                password-reveal
                required
              >
              </b-input>
            </b-field>
            <div class="block">
              <b-radio v-model="gender" name="name" native-value="male">
                Male
              </b-radio>
              <b-radio v-model="gender" name="name" native-value="female">
                Female
              </b-radio>
            </div>
            <button
              class="button is-block is-success is-outlined is-large is-fullwidth"
              v-on:click="singup()"
            >
              Singup
            </button>
          </div>
        </div>
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
      username: "",
      email: "",
      password: "",
      gender: "male",
    };
  },
  methods: {
    singup() {
      const URL = "http://127.0.0.1:5000/singup";
      axios
        .post(URL, {
          username: this.username,
          password: this.password,
          email: this.email,
          gender: this.gender,
        })
        .then((res) => {
          if (res.status == 200) {
            this.$router.push("login");
          }
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