const routes = [
  {
    path: '/',
    component: () => import('layouts/Base.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        meta: {
          authenticated: false,
        },
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('layouts/Chat.vue'),
    children: [
      {
        path: 'contacts',
        name: 'Contacts',
        meta: {
          authenticated: true,
        },
        component: () => import('pages/Contacts.vue'),
      },
    ],
  },
  {
    path: '/chat/messages',
    component: () => import('layouts/Messages.vue'),
    children: [
      {
        path: ':id/:name',
        name: 'Messages',
        meta: {
          authenticated: true,
          goBack: {
            name: 'Contacts',
          },
        },
        component: () => import('pages/Messages.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('layouts/Chat.vue'),
    children: [
      {
        path: '',
        alias: 'edit',
        name: 'Edit',
        meta: {
          authenticated: true,
          goBack: {
            name: 'Contacts',
          },
        },
        component: () => import('pages/Edit.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('layouts/Base.vue'),
    children: [
      {
        path: '',
        alias: 'sign-up',
        name: 'SignUp',
        meta: {
          authenticated: false,
        },
        component: () => import('pages/SignUp.vue'),
      },
      {
        path: 'validate',
        name: 'Validate',
        meta: {
          authenticated: false,
        },
        component: () => import('pages/Validate.vue'),
      },
    ],
  },
];

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
