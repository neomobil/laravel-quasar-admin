// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    boot: [
      'i18n',
      'axios',
      'vuelidate'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      'roboto-font',
      'material-icons', // optional, you are not bound to it
      // 'ionicons-v4',
      'mdi-v3'
      // 'fontawesome-v5'
    ],
    supportIE: true,
    build: {
      env: ctx.dev
        ? { // so on dev we'll have
          API: JSON.stringify('http://homestead.test')
        }
        : { // and on build (production):
          API: JSON.stringify('https://remote.com')
        },
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QBtn',
        'QCard',
        'QCardActions',
        'QCardMain',
        'QCardMedia',
        'QCardSeparator',
        'QCardTitle',
        'QField',
        'QIcon',
        'QInput',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QItemTile',
        'QLayout',
        'QLayoutFooter',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QList',
        'QListHeader',
        'QModal',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle'
      ],
      directives: [
        'Ripple',
        'CloseOverlay'
      ],
      // Quasar plugins
      plugins: [
        'Notify'
      ]
      // iconSet: 'material-icons'
      // lang: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'Quasar Backend',
        short_name: 'Laravel Quasar Admin',
        description: 'Quasar based admin app to user with Laravel >= 5.6',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
