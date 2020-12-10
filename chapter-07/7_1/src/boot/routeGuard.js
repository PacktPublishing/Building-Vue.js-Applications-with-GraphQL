export default async ({ app }) => {
  const { store } = app;

  try {
    if (!store.getters['user/getUserId']) {
      await store.dispatch('user/initialLogin');
    }
  } catch {
    await app.router.replace({ name: 'Index' });
  }
};
