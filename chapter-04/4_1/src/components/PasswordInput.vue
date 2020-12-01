<template>
  <q-input
    :value="value"
    :type="isPwd ? 'password' : 'text'"
    :rules="[ val => val.length >= 8 || 'Your password need to have 8 or more characters',
              val => val !== null && val !== '' || 'Please type your password']"
    :hint=" value.length < 8 ? 'Your password has a minimum of 8 characters' : ''"
    :label="label"
    outlined
    lazy-rules
    v-on="$listeners"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>
<script>
export default {
  name: 'PasswordInput',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
    label: {
      type: String,
      default: 'Your password',
      required: false,
    },
  },
  data: () => ({
    isPwd: true,
  }),
};
</script>
