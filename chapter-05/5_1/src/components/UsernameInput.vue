<template>
  <q-input
    :value="value"
    :rules="[ val => (val && val.length > 5 || 'Please type a valid Username')]"
    outlined
    label="Your Username"
    lazy-rules
    v-on="$listeners"
  />
</template>
<script>
export default {
  name: 'UsernameInput',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
