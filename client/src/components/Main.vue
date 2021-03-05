<template>
  <div>
    <Home />
    <About />
    <Team />
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Team from "./Team.vue";
export default {
  name: "Main",
  components: {
    Home,
    About,
    Team,
  },
};
</script>

<style scoped>
</style>