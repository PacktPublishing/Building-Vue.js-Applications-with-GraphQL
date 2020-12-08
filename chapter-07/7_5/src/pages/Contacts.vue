<template>
  <q-page>
    <q-list bordered>
      <q-item
        v-for="contact in getConversations"
        :key="contact.id"
        :to="{
          name: 'Messages',
           params: {
            id: contact.conversation,
            name: contact.name,
          },
        }"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <avatar-display
              :avatar-object="contact.avatar"
              :name="contact.name"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green"/>
        </q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="chat"
        color="accent"
        @click="dialogNewConversation = !dialogNewConversation"
      />
      <new-conversation
        v-model="dialogNewConversation"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ChatContacts',
  components: {
    AvatarDisplay: () => import('components/AvatarDisplay'),
    NewConversation: () => import('components/NewConversation'),
  },
  data: () => ({
    dialogNewConversation: false,
  }),
  async mounted() {
    await this.getMessages();
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    ...mapGetters('chat', ['getConversations']),
  },
  methods: {
    ...mapActions('chat', [
      'getMessages',
    ]),
  },
};
</script>
