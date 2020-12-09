<template>
  <q-input
    :value="value"
    :rules="[ val => (val && val.length > 0
              || 'Please type a valid Name')]"
    outlined
    label="Your Name"
    lazy-rules
    v-on="$listeners"
  />
</template>
<script>
export default {
  name: 'NameInput',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
