<template>
  <div id="home">
    <div class="columns is-gapless">
      <div class="column">
        <section class="hero is-medium">
          <div class="hero-body">
            <h1 class="title is-size-2">{{ title }}</h1>
            <p class="subtitle is-size-4">{{ description }}</p>
            <router-link :to="ctaLink">
              <button :class="ctaType">{{ cta }}</button></router-link
            >
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
      title: "Collab Play",
      description:
        "Welcome to collab paly.A place where you can collaboratively watch youtube videos. The suggested number of people in the room is 2 but you can go with more users also. If you want to know how to use this product please scroll down a little bit and you will find a walkthrough",
      cta: "Be the part",
      ctaLink: "admin",
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