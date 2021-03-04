<template>
  <div>
    <div class="box is-large">
      <h1 class="title">Some Info</h1>
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
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
          <nav class="level is-mobile">
            <div class="level-left">
              <a
                class="level-item"
                v-for="(social, id) in socials"
                :key="id"
                :href="social.link"
                target="_blank"
              >
                <span class="icon is-small"
                  ><b-icon
                    pack="fab"
                    :icon="social.icon"
                    size="is-medium"
                  ></b-icon>
                </span>
              </a>
            </div>
          </nav>
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
      email: "collab@gmail.com",
      mailLink: "mailto:collab@gmail.com",
      image: require("../../assets/logo.png"),
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