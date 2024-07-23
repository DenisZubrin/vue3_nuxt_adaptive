// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { 
    enabled: false,
  },
  alias: {
    '@': '/src',
  },
  css: ['@/shared/assets/styles/style.scss'],
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
  },
  modules: ['@nuxt/eslint'],
  // router: {
  //   base: '/vue3_nuxt_adaptive/'
  // },
  app: {
    baseURL: '/vue3_nuxt_adaptive/'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
});
