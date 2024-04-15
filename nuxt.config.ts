// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    name: "mindful",
    url: "https://www.bemindful.dev",
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/seo",
  ],
  colorMode: {
    dataValue: "theme",
    preference: "sunset",
    classSuffix: "",
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
});
