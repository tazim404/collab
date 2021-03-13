<template>
  <div>
    <iframe
      width="560"
      height="315"
      :src="link"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: ["link"],
};
</script>