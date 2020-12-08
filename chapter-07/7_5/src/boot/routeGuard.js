// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ app, router }) => {
  const { store } = app;
  const indexRoute = { name: 'Index' };
  try {
    await store.dispatch('user/initialLogin');
  } catch {
    await app.router.replace(indexRoute);
  }

  router.beforeEach(({ to, next }) => {
    if (to.meta.authenticated && !store.getters['user/getUserId']) {
      next(indexRoute);
    } else {
      next();
    }
  });
};
