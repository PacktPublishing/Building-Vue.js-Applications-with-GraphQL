import { register } from 'register-service-worker';
import { Notify } from 'quasar';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

async function clearLocalCache() {
  const cachedFiles = await caches.keys();

  await cachedFiles.map(async (file) => {
    await caches.delete(file);
  });

  window.location.reload();
}

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {},

  registered(/* registration */) {},

  cached(/* registration */) {},

  updatefound(/* registration */) {
    const installKey = 'chatAppInstalled';
    if (localStorage.getItem(installKey)) {
      Notify.create({
        color: 'dark',
        message: 'An update is being downloaded from the server.',
      });
    } else {
      localStorage.setItem(installKey, '1');
    }
  },

  updated(/* registration */) {
    Notify.create({
      type: 'positive',
      message: 'The application was updated successfully!',
      caption: 'Please refresh the page to apply the new update.',
      actions: [
        {
          label: 'Refresh',
          color: 'white',
          handler: clearLocalCache,
        },
      ],
    });
  },

  offline() {},

  error(/* err */) {},
});
