<template>
  <b-modal
    v-model="isActive"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-label="Example Modal"
    aria-modal
  >
    <template #default="props">
      <modal-form v-bind="formProps" @close="props.close"></modal-form>
    </template>
  </b-modal>
</template>
<script>
export default {
  name: "Create",
  props: {
    isActive: Boolean,
  },
};
</script>
