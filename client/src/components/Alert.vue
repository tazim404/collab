<template>
  <div class="notification is-danger">
    <button class="delete"></button>
    <p class="title is-4">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["msg"],
};
</script>