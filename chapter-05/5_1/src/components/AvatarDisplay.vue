<template>
  <component
    :src="src"
    :is="componentIs"
    spinner-color="primary"
  />
</template>
<script>
import { QImg } from 'quasar';
import getAvatar from 'src/mixins/getAvatar';

export default {
  name: 'AvatarDisplay',
  props: {
    avatarObject: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    tag: {
      type: String,
      required: false,
      default: 'q-img',
    },
  },
  mixins: [getAvatar],
  async beforeMount() {
    await this.updateSrc();
  },
  data: () => ({
    src: '',
  }),
  watch: {
    avatarObject: {
      async handler() {
        await this.updateSrc();
      },
      deep: true,
    },
    name: {
      async handler() {
        await this.updateSrc();
      },
    },
  },
  computed: {
    componentIs() {
      return this.tag === 'q-img' ? QImg : 'img';
    },
  },
  methods: {
    async updateSrc() {
      this.src = await this.getAvatar(this.avatarObject, this.name);
    },
  },
};
</script>
