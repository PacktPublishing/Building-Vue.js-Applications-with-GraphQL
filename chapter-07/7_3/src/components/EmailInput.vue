<template>
  <q-input
    :value="value"
    :rules="[ val => (val && val.length > 0 && validateEmail(val)
              || 'Please type a valid E-mail')]"
    outlined
    type="email"
    label="Your E-mail"
    lazy-rules
    v-on="$listeners"
  />
</template>
<script>
export default {
  name: 'EmailInput',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
  methods: {
    validateEmail(email) {
      const regex = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;
      return regex.test(email);
    },
  },
};
</script>
