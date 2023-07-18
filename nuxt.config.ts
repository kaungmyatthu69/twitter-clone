// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
// @ts-ignore
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig:{
    jwtAccessSecret : process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret : process.env.JWT_REFRESH_TOKEN_SECRET
  }
})
