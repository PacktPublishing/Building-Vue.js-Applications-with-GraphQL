import { getFile } from 'src/driver/bucket';

export default {
  methods: {
    async getAvatar(object, name) {
      const baseUrl = 'http://placehold.jp/350/9c27b0/FFFFFF/600x600.png?text=';

      if (object === null && !name) return `${baseUrl}%20`;

      if (!object && name) return `${baseUrl}${name.split('').shift()}`;

      return getFile(object.key);
    },
  },
};
