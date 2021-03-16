<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <youtube
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
          ></youtube>
        </div>
        <div class="box">
          <button class="button is-medium" v-on:click="playVideo">Play</button>
          <button class="button is-medium" v-on:click="pauseVideo">
            Pause
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import socket from "../../App.vue";
// jSdj2pTH1Zg
export default {
  name: "Collab",

  data() {
    return {
      videoId: "jSdj2pTH1Zg",
      id: "",
      URL: process.env.APP_URL,
      link: "",
      roomName: "",
      playing: false,
    };
  },

  created() {
    let link = document.URL.split("/");
    this.id = link[link.length - 1];
    const URL = `http://127.0.0.1:5000/${this.id}`;
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  sockets: {
    user_played() {
      this.play();
    },
    user_paused() {
      this.pause();
    },
  },
  methods: {
    pause() {
      this.player.pauseVideo();
    },
    play() {
      this.player.playVideo();
    },
    playVideo() {
      // socket.socket.emit("play", { room: this.id });
      this.$socket.client.emit("play", { room: this.id });
    },
    pauseVideo() {
      this.$socket.client.emit("pause", { room: this.id });
    },
  },

  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>
