<template>
  <b-navbar fixed-top type="is-success" mobile-burger-false>
    <template #brand>
      <b-navbar-item>
        <a href="/">
          <img src="../assets/logo.png" alt="Brand Logo" />
        </a>
      </b-navbar-item>
    </template>
    <template #start>
      <!-- Nav Items -->

      <b-navbar-item href="#" v-for="(item, id) in navItems" :key="id">
        <a :href="item.link" class="nav-links"> {{ item.name }}</a>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div" v-if="signedIn()">
        <div class="buttons">
          <button class="button is-primary" v-on:click="logout">
            <strong> Logout</strong>
          </button>
        </div>
      </b-navbar-item>
      <b-navbar-item tag="div" v-else>
        <!-- Buttons gropup -->
        <div class="buttons">
          <a v-for="(button, id) in navButtons" :key="id" :class="button.type">
            <strong>
              <router-link :to="button.link" class="xyz">
                {{ button.name }}</router-link
              ></strong
            >
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isRounded: false,
      isOutlined: false,
      lightMode: false,
      isAuthentictaed: localStorage.getItem("isAuthentictaed"),
      navItems: [
        {
          name: "Home",
          link: "/#home",
        },
        {
          name: "About",
          link: "/#about",
        },
        {
          name: "Developers",
          link: "/#teams",
        },
      ],
      navButtons: [
        {
          name: "Login",
          link: "/login",
          type: "button is-primary",
        },
        {
          name: "SingUp",
          link: "/singup",
          type: "button is-light",
        },
      ],
    };
  },
  methods: {
    change() {
      console.log("Chnaged ");
    },
    logout() {
      localStorage.removeItem("token");
      // localStorage.getItem("isAuthentictaed");
      localStorage.setItem("isAuthentictaed", false);
      this.$router.push("login");
    },
    signedIn() {
      if (localStorage.getItem("isAuthentictaed") == "true") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style >
.xyz {
  color: black;
}
.nav-links {
  color: black;
  font-size: 1.5em;
}
</style>
