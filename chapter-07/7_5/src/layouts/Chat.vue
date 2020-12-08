<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          :icon="goBack.name !== 'Edit' ? 'keyboard_arrow_left' : 'person'"
          :to="goBack"
        />
        <q-toolbar-title>
          Chat App
        </q-toolbar-title>
        <q-btn
          dense
          flat
          round
          icon="exit_to_app"
          @click="logOff"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  signOut,
} from 'driver/auth';

export default {
  name: 'ChatLayout',
  methods: {
    async logOff() {
      await signOut();
      window.location.reload();
    },
  },
  computed: {
    goBack() {
      const { $meta } = this.$route;
      return $meta ? $meta.goBack : { name: 'Edit' };
    },
  },
};
</script>
