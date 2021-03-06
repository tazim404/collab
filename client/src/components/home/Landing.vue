<template>
  <div id="home">
    <div class="columns is-gapless">
      <div class="column">
        <section class="hero is-medium">
          <div class="hero-body">
            <h1 class="title is-size-2">{{ title }}</h1>
            <p class="subtitle is-size-4">{{ description }}</p>
            <button :class="ctaType">{{ cta }}</button>
          </div>
        </section>
      </div>
      <div class="column">
        <section class="hero is-medium">
          <div class="hero-body">
            <img :src="imageUrl" alt="Main Page Image" srcset="" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Landing",
  data() {
    return {
      title: "Collab Playback",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab placeat dicta natus minima repudiandae.Hello world my name is Tazim Rahbar and hello this is dummy text",
      cta: "Be the part",
      ctaLink: "",
      ctaType: "button is-success is-outlined is-medium",
      imageUrl: require("../../assets/home.svg"),
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: "Crimson Text", serif;
  color: #48c774;
}
p {
  font-family: "Crimson Text", serif;
}
hr {
  background-color: #48c774;
  width: 100%;
}
</style>