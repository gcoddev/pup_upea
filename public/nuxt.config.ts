// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
      apiKeyValue: process.env.NUXT_API_KEY_VALUE,
      baseUrl: process.env.NUXT_BASE_URL
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
        // {
        //   rel: 'stylesheet',
        //   href: '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/minified.css'
        // },
        // {
        //   rel: 'stylesheet',
        //   href: '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/colors/default.css'
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        // },
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
          href: '/assets/admin/css/aero.css'
        },
        // {
        //   rel: 'stylesheet',
        //   href: '/assets/admin/css/fontawesome-all.css'
        // },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/admin/lagom2/assets/css/dataTables.responsive.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css'
        },
        {
          rel: 'icon',
          href: '/images/upea.png',
          type: 'image/x-icon'
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          async: true
        },
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
        {
          src: '/assets/admin/lagom2/assets/js/dataTables.responsive.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/dataTables.custom.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: '/assets/admin/lagom2/assets/js/app.js',
          type: 'text/javascript',
          async: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js',
          type: 'text/javascript',
          async: true
        }
      ]
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  plugins: [
    '~/plugins/select2.js'
  ]
})
