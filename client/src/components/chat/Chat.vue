<template>
  <div class="chat">
    <div class="messaging">
      <Notification
        v-for="(notification, id) in notifications"
        :key="id"
        :msg="notification"
      />
      <Message
        v-for="message in messages"
        :key="message.message"
        :msg="message.message"
        :sender="message.sender"
      />
    </div>
    <!-- Sending Forms -->
    <div class="field has-addons is-justify-content-center mb-2">
      <div class="control is-expanded ml-1">
        <input
          class="input"
          type="text"
          placeholder="Message"
          v-model="message_to_send"
        />
      </div>
      <div class="control mr-1">
        <button class="button is-info" v-on:click="send">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
import Notification from "./Notification.vue";
export default {
  name: "Chat",
  components: {
    Message,
    Notification,
  },
  data() {
    return {
      room_id: "",
      message_to_send: "",
      messages: [],
      notifications: ["Welcome"],
    };
  },
  sockets: {
    incoming_message(data) {
      console.log(data);
      this.messages.push({ message: data.msg, sender: data.sender });
      console.log(this.messages);
    },
    notification(data) {
      console.log(data);
      this.notifications.push(data.message);
    },
  },
  methods: {
    send() {
      console.log(this.message_to_send);
      this.$socket.client.emit("msg", {
        sender: sessionStorage.getItem("username"),
        message: this.message_to_send,
        room: this.room_id,
      });
      this.message_to_send = "";
    },
  },
  created() {
    // When created get the room id from URl
    let url = document.URL.split("/");
    this.room_id = url[url.length - 1];
  },
};
</script>
<style scoped>
.chat {
  border: 2px solid black;
  border-radius: 3px;
}

.messaging {
  overflow: scroll;
  height: 28rem;
}

.resive_message {
  background-color: rgb(63, 194, 238);
  width: 15rem;
  padding: 1px 5px;
  margin: 5px;
  border-radius: 6px;
  color: white;
}

.send_message {
  background-color: lightgray;
  width: 15rem;
  padding: 1px 5px;
  margin: 5px;
  border-radius: 6px;
  color: black;
  float: inline-end;
}
</style>