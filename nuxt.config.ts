// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    documentDriven: true,
  },
  modules: ['@nuxt/content', '@pinia/nuxt', "@vueuse/nuxt"],
})