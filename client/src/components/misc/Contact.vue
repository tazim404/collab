<template>
  <div class="box">
    <h1 class="title">Contact Us</h1>
    <section>
      <b-field label="Name">
        <b-input placeholder="eg.Jhon Doe" v-bind="name"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input
          placeholder="eg.jhon@mail.com"
          type="Email"
          v-bind="email"
        ></b-input>
      </b-field>
      <b-field label="Message">
        <b-input maxlength="200" type="textarea" v-bind="message"></b-input>
      </b-field>
      <button class="button is-success">Send</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>