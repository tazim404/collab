<template>
  <div>
    <Landing />
    <About />
    <Team />
  </div>
</template>

<script>
import About from "./home/About.vue";
import Team from "./home/Team.vue";
import Landing from "./home/Landing.vue";
export default {
  name: "Main",
  components: {
    About,
    Team,
    Landing,
  },
};
</script>

<style scoped>
</style>