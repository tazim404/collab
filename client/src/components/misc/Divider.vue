<template>
  <div>
    <h1 :class="size">{{ title }}</h1>
    <hr :width="width" :color="color" />
  </div>
</template>

<script>
export default {
  name: "Divider",
  props: ["title", "size", "color", "width"],
};
</script>
<style scoped>
</style>