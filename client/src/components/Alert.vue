<template>
  <div class="notification is-danger">
    <button class="delete" v-on:click="button_event"></button>
    <p class="title is-4">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["msg", "button_event"],
};
</script>