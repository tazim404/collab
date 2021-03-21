<template>
  <div class="send_message is-size-5 has-text-left">
    {{ msg }} <span class="time">9:50 PM </span>
  </div>
</template>
<script>
export default {
  name: "Notification",
  props: ["msg"],
};
</script>

<style scoped>
.send_message {
  background-color: lightgray;
  width: 15rem;
  padding: 1px 5px;
  margin: 5px;
  border-radius: 6px;
  color: black;
  float: inline-end;
}
.time {
  font-size: 0.9rem;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}
</style>