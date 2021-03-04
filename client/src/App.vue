<template>
  <div id="app">
    <Navbar />
    <Home />
    <About />
    <Team />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Team from "./components/Team.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Team,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap");
</style>
