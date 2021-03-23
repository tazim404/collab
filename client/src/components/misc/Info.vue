<template>
  <div>
    <div class="box is-large">
      <h1 class="title">Some Info</h1>
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="image" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ name }}</strong>
              <br />
              <a :href="mailLink">{{ email }}</a>
              <br />
              {{ description }}.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      name: "Collab Playback",
      email: "vuecollabplay@gmail.com",
      mailLink: "mailto:vuecollabplay@gmail.com",
      image: require("../../assets/collab.png"),
      socials: [
        {
          name: "Twitter",
          icon: "fab fa-twitter",
          link: "https://twitter.com",
        },
        {
          name: "Instagram",
          icon: "fab fa-instagram",
          link: "https://instagram.com",
        },
      ],
      description:
        "So glad to see you scrolled till down I hope you will enjoy this product and have fun with your freind's",
    };
  },
};
</script>