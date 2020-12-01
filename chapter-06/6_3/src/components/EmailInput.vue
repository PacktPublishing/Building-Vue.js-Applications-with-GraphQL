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
      // eslint-disable-next-line no-useless-escape
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
  },
};
</script>
