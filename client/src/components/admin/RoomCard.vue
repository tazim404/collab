<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Image"
          />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="title is-5">
            <strong>Room Id</strong> <i class="arrow right"></i>
            <small>{{ id }}</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Room Card",
  props: ["id"],
};
</script>