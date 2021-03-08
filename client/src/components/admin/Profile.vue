<template>
  <div class="card">
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column is-one-third">
        <div class="hero is-medium">
          <div class="hero-body">
            <h1 class="title has-text-centered">Profile</h1>
            <hr class="login-hr" />
            <!-- To center the image -->
            <div class="container has-text-centered">
              <div class="box">
                <figure class="avatar">
                  <img
                    src="https://semantic-ui.com/images/avatar2/small/matthew.png"
                  />
                </figure>
              </div>
            </div>
            <div class="content">
              <ul>
                <li
                  v-for="(value, key, id) in profile"
                  :key="id"
                  class="title is-5"
                >
                  {{ key }} <i class="arrow right"></i> {{ value }}
                </li>
              </ul>
            </div>

            <div class="container has-text-centered">
              <div class="buttons are-medium">
                <button class="button is-primary is-outlined">Join Room</button>
                <button class="button is-success is-outlined">
                  Create Room
                </button>
                <button class="button is-danger is-outlined">
                  Delete Room
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End -->
      </div>
    </div>
  </div>
</template>

<script>
// import Create from "./Create.vue";
export default {
  name: "Profile",
  components: {
    // Create,
  },
  data() {
    return {
      profile: {
        isActive: false,
        isComponentModalActive: false,
        username: "Jhon Doe",
        email: "jhon@maile.com",
        gender: "Male",
        public_id: "4f56fa3",
        message:
          "We dont keep anything secret from user that's why we give every data about you.",
      },
      avatar_url: "https://semantic-ui.com/images/avatar2/small/matthew.png",
    };
  },
};
</script>

<style scoped>
.login-hr {
  background-color: black;
}
ul {
  list-style-type: square;
  list-style-position: outside;
  list-style-image: none;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>