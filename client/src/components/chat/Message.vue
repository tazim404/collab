<template>
  <div class="mt-2 ml-1">
    <div class="receive_message is-size-6 has-text-left">
      <span class="user_name">{{ sender }}</span>
      {{ msg }}
      <span class="time">{{new Date().toLocaleTimeString()}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  username: sessionStorage.getItem("username"),
  props: ["msg", "sender"],
  created() {
    this.username = sessionStorage.getItem("username");
  },
};
</script>
<style scoped>
.chat {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.messaging {
  overflow: scroll;
  height: 28rem;
}

.receive_message {
  background-color: rgb(63, 194, 238);
  width: 12rem;
  padding: 1px 5px;
  margin: 5px;
  border-radius: 6px;
  color: white;
  margin-left: 1rem;
}

.send_message {
  background-color: lightgray;
  width: 12rem;
  padding: 1px 5px;
  margin: 5px;
  border-radius: 6px;
  color: white;
  margin-left: 5rem;
}

.time {
  font-size: 0.9rem;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}

.user_name {
  font-size: 0.9rem;
  display: flex;
  color: black;
  margin: 1px;
}

.send_image {
  float: right;
}

.receive_img {
  float: inline-start;
}
</style>