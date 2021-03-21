<template>
  <div id="teams" class="box">
    <!-- <Divider color="red" size="is-4" width="50%" title="Developers" /> -->
    <hr color="#fc0000" width="100%" height="100%" />
    <h1 class="title is-2 has-text-centered">Developers</h1>

    <div class="columns">
      <div class="column is-one-third" v-for="(team, id) in teams" :key="id">
        <!-- Card ende -->
        <div class="box">
          <article class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ team.name }}</strong>
                  <br />
                  {{ team.designation }}.
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" v-if="team.github" :href="team.github">
                    <span class="icon is-medium">
                      <b-icon pack="fab" icon="fab fa-github" size="is-medium">
                      </b-icon>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    v-if="team.instagram"
                    :href="team.instagram"
                  >
                    <span class="icon is-small">
                      <b-icon
                        pack="fab"
                        icon="fab fa-instagram"
                        size="is-medium"
                      >
                      </b-icon>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    v-if="team.twitter"
                    :href="team.twitter"
                  >
                    <span class="icon is-medium">
                      <b-icon pack="fab" icon="fab fa-twitter" size="is-medium">
                      </b-icon>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    v-if="team.facebook"
                    :href="team.facebook"
                  >
                    <span class="icon is-medium">
                      <b-icon
                        pack="fab"
                        icon="fab fa-facebook"
                        size="is-medium"
                      >
                      </b-icon>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    v-if="team.website"
                    :href="team.website"
                  >
                    <span class="icon is-medium">
                      <b-icon pack="fa" icon="fab fa-globe" size="is-medium">
                      </b-icon>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams",
  data() {
    return {
      teams: [
        {
          name: "Tazim Rahbar",
          designation: "Founder/Creator",
          description: "",
          github: "https://github.com/tazim404",
          instagram: "https://instgram.com/tazim_rahbar",
          twitter: "https://twitter.com/tazim_rahbar",
          facebook: "",
          website: "https://tazim.netlify.app",
        },
        {
          name: "?",
          designation: "?",
          github: "?",
          instagram: "?",
          twitter: "?",
          facebook: "?",
          website: "?",
        },
      ],
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
.card {
  box-shadow: 0 5px 10px 0 #48c774;
}
</style>