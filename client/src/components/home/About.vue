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
            <hr />
            <p class="subtitle is-size-4">{{ description }}</p>
            <div class="content">
              <ul>
                <li class="title is-5" v-for="step in steps" :key="step">
                  {{ step }}
                </li>
              </ul>
            </div>
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
      title: "How to use",
      description: "",
      cta: "Be the part",
      steps: [
        "Singup(If dosen't have an account)",
        "Login (If you have an account)",
        "# You will land to admin page",
        "Create Room by putting romm name and only youtube video id or Join Room by putting room id",
        "Delete room if you dont want it anymore only if you are the creator of that room",
      ],
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