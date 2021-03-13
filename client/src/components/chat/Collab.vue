<template>
  <div>
    <div class="columns">
      <div class="column">
        <Video :link="link" />
        <button class="button is-medium" v-on:click="play">Play</button>
        <button class="button is-medium" v-on:click="pause">Pause</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Video from "./Video.vue";
import socket from "../../App.vue";
// import { Socket } from 'socket.io-client';
export default {
  name: "Collab",
  components: { Video },
  data() {
    return {
      id: "",
      URL: process.env.APP_URL,
      link: "",
      roomName: "",
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
  mounted() {
    socket.emit("play");
  },
  methods:{
    play(){
      console.log(socket.socket.emit)
      socket.socket.emit('play')
    },
    pause(){
      console.log(socket.socket.emit('pause'))
      console.log(socket.socket.id)
    }
  }
};
</script>

