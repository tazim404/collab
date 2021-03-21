<template>
  <div class="recieve_message is-size-5 has-text-left">
    {{ msg }} <span class="time">9:48 PM</span>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["msg"],
};
</script>
<style scoped>
.recieve_message {
  background-color: rgb(63, 194, 238);
  width: 15rem;
  padding: 1px 5px;
  margin: 5px;
  border-radius: 6px;
  color: white;
}
.time {
  font-size: 0.9rem;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}
</style>