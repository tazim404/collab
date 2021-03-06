<template>
  <div id="about">
    <hr />
    <div class="columns">
      <div class="column">
        <section class="hero is-medium">
          <div class="hero-body">
            <img :src="imageUrl" alt="About Image" />
          </div>
        </section>
      </div>
      <div class="column">
        <section class="hero is-medium">
          <div class="hero-body">
            <h1 class="title is-size-2">{{ title }}</h1>
            <p class="subtitle is-size-4">{{ description }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "About ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab placeat dicta natus minima repudiandae.Hello world my name is Tazim Rahbar and hello this is dummy text",
      cta: "Be the part",
      ctaLink: "",
      ctaType: "button is-success is-outlined is-medium",
      imageUrl: require("../../assets/about.svg"),
    };
  },
};
</script>

<style scoped>
hr {
  background-color: #48c774;
  width: 100%;
  margin-top: 0;
}
</style>