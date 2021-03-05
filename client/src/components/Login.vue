<template>
  <div>
    <h1>This is login page</h1>
    <div class="box">
      <b-field
        v-for="(form, id) in formFields"
        :key="id"
        :label="form.name"
        :type="form.style"
      >
        <b-input :type="form.type" :aria-placeholder="form.placeholder">
        </b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formFields: [
        {
          name: "Username",
          style: "is-primary",
          type: "text",
          placeholder: "eg.Jhon Doe",
        },
        {
          name: "Password",
          style: "is-primary",
          type: "password",
          placeholder: "eg.Jhon@pass",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>