// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/global.css",
  ],
  imports: {
    dirs: ["./utils", "./composables", "./api", "./stores"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-lodash",
    '@vueuse/nuxt',
    '@nuxt/devtools'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_ADDRESS ?? "/api",
    },
  },

  elementPlus: {
    /** Options */
  },
  app: {
    head: {
      title: "hhhh",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
