<template>
  <b-navbar fixed-top type="is-success" mobile-burger-false>
    <template #brand>
      <b-navbar-item>
        <img src="../assets/logo.png" alt="Brand Logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#" v-for="(item, id) in navItems" :key="id">
        {{ item.name }}
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a v-for="(button, id) in navButtons" :key="id" :class="button.type">
            <strong>
              <router-link :to="button.link" class="xyz">
                {{ button.name }}</router-link
              ></strong
            >
          </a>
          <b-field>
            <b-switch
              :rounded="isRounded"
              v-model="lightMode"
              passive-type="is-dark "
              type="is-warning"
              v-on:input="change"
            >
              {{ lightMode ? "Light" : "Dark" }}
            </b-switch>
          </b-field>
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
      navItems: [
        {
          name: "Home",
          link: "",
        },
        {
          name: "About",
          link: "",
        },
        {
          name: "Developers",
          link: "",
        },
      ],
      navButtons: [
        {
          name: "Login",
          link: "/login",
          type: "button is-primary ",
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
  },
};
</script>

<style >
.xyz {
  color: black;
}
</style>
