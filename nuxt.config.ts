// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['~/assets/global.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ },
  app:{
    head:{title:'hhhh',
      charset:'utf-8',
      viewport:'width=device-width, initial-scale=1'
    }
  }
})
