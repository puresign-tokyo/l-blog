// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },
  modules: ["@nuxt/content", "@nuxt/eslint"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  extends: ["docus"],
});
