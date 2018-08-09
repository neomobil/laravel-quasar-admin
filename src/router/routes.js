const routes = [
  {
    path: '/',
    component: () => import('layouts/Login.vue'),
    children: [
      {path: '', component: () => import('pages/Login.vue')}
    ]
  },
  {
    path: '/home',
    beforeEnter: (to, from, next) => {
      let loggedIn = localStorage.getItem('loggedIn')
      if (loggedIn) {
        next()
      } else {
        next('/')
      }
    },
    component: () => import('layouts/Base.vue'),
    children: [
      {path: '', component: () => import('pages/Home.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
