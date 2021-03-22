<template>
  <div>
    <Alert :msg="msg" :button_event="hideAlert" v-if="showAlert" />
    <div class="columns">
      <div class="column is-four-fifths"></div>
      <div class="column">
        <button class="button is-primary is-outlined" v-on:click="leaveRoom">
          Leave Room
        </button>
      </div>
    </div>
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
      <div class="column">
        <div class="box">
          <Chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chat from "./Chat.vue";
import Alert from "../Alert";
export default {
  name: "Collab",
  components: { Chat, Alert },
  data() {
    return {
      videoId: "",
      id: "",
      URL: process.env.APP_URL,
      link: "",
      roomName: "",
      showAlert: false,
      msg: "",
    };
  },
  created() {
    let link = document.URL.split("/");
    this.id = link[link.length - 1];
    const URL = `http://127.0.0.1:5000/${this.id}`;
    axios
      .get(URL)
      .then((res) => {
        if (res.status == 200) {
          this.videoId = res.data.message.video_link;
        } else {
          this.showAlert = true;
          this.msg = "There is an error";
          console.log("There is an error");
        }
      })
      .catch((err) => {
        this.showAlert = true;
        this.msg = "I think room  id wrong go back and enter valid room id";
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
    admin_deleted_the_room() {
      this.$router.push("admin");
      this.$socket.client.emit("ok", { room_id: this.id });
    },
    notification() {
      console.log("There is notification");
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
      this.$socket.client.emit("play", { room: this.id });
    },
    pauseVideo() {
      this.$socket.client.emit("pause", { room: this.id });
    },
    hideAlert() {
      this.showAlert = false;
    },
    leaveRoom() {
      this.$socket.client.emit("leave", {
        room: this.id,
        username: sessionStorage.getItem("username"),
      });
      sessionStorage.removeItem("username");
      this.$router.push("admin");
    },
  },

  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>
