<template>
  <div class="mt-2 ml-1">
    <div class="send_message is-size-6 has-text-left">
      <span class="user_name">Notification</span>
      {{ msg }}
      <span class="time">9:48 PM</span>
    </div>
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
  /* float: inline-end; */
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
</style>