const isProdEnv = process.env.DEPLOYMENT_ENV === 'production';
const testServicesEndpoint = 'EXPLICIT_TEST_API_ENDPOINT';
const prodServicesEndpoint = 'EXPLICIT_API_ENDPOINT';
const servicesEndpoint = isProdEnv ? prodServicesEndpoint : testServicesEndpoint;
// ## Google Analytics Variables
const isDebugGoogleAnalytics = process.argv.includes('--debug-ga') || false;
const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID || 'EXPLICIT_GA_CONTAINER_ID';
const PolyfillIoFeatures = ['Array.from', 'fetch', 'CustomEvent', 'Object.entries', 'Map', 'Element.prototype.closest', 'Element.prototype.classList'].join('%2C');
const staticHeadScripts = [
  // ## `/scripts` is under the `/static` directory
  {
    src: '/scripts/gtm.js'
  },
  {
    src: `https://polyfill.io/v3/polyfill.min.js?features=${PolyfillIoFeatures}`
  }
];

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'NUXT_STATIC_STARTER',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: staticHeadScripts
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/main.scss'],

  // Style Resources (imported into all componenets)
  styleResources: {
    scss: [
      // ## scss VARIABLE / MIXIN files to load in all components go here
      // NOTE: Do not import class-based / style files here as it will replicate the styles for -each- component instance as compiled CSS.
      // Remember: Mixins & variables do not compile to CSS, only their implementations do
      '~/assets/scss/colors.scss',
      '~/assets/scss/variables.scss',
      '~/assets/scss/_mixins.scss'
    ]
  },

  // Instance Environment Variables (SSR & client)
  env: {
    apiBaseUrl: servicesEndpoint
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/interstitialMethods.js',
    '~/plugins/formatters.js',
    '~/plugins/services.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: googleAnalyticsId,
        dev: !isProdEnv,
        checkDuplicatedScript: true,
        debug: {
          enabled: isDebugGoogleAnalytics,
          sendHitTask: isProdEnv
        }
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      presets: ['@nuxt/babel-preset-app'],
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibrary: {
              name: 'theme-chalk',
              base: true
            }
          }
        ]
      ]
    },
  },

  // Generate Configuration
  generate: {
    dir: 'build/_site'
  }
}
