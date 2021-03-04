<template>
  <div>
    <footer class="footer">
      <div class="columns">
        <div class="column is-one-third">
          <Contact />
        </div>
        <div class="column is-one-third">
          <Info />
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
// import Sitemap from "../components/misc/Sitemap.vue";
import Info from "../components/misc/Info.vue";
import Contact from "../components/misc/Contact.vue";
export default {
  name: "Footer",
  components: {
    // Sitemap,
    Info,
    Contact,
  },
};
</script>

<style scoped>
.footer {
  background-color: #48c774;
}
</style>