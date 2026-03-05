// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. SSR Aktivierung (Standardmäßig 'true', aber hier explizit gesetzt)
  ssr: true,

  // 2. Globale Page Transitions
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/html-validator',
    '@artmizu/nuxt-prometheus',
    'nuxt-gtag',
    '@nuxt/icon',
    'nuxt-charts',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/ngrok',
    '@nuxt/hints',
    'nuxt-echarts'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
