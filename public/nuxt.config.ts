// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/assets/admin/lagom2/core/styles/modern/assets/css/vars/minified.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/admin/lagom2/core/styles/modern/assets/css/vars/colors/default.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/admin/lagom2/assets/css/theme.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/admin/lagom2/assets/css/site.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/admin/css/fontawesome-all.css'
        }
      ],
      script: [
        {
          src: '/assets/admin/lagom2/assets/js/scripts.min.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/core.min.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/core/extensions/ClientNotifications/assets/js/client-notifications.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/vendor.min.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/lagom-app.min.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/whmcs-custom.min.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/block-modal.js',
          type: 'text/javascript',
          async: true
        },
      ]
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'
  ]
})
