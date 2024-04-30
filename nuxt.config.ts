// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://api.fonts.coollabs.io", crossorigin: "true" },
        {
          href: "https://api.fonts.coollabs.io/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  site: {
    name: "mindful",
    url: "https://www.bemindful.dev",
  },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/seo"],
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
