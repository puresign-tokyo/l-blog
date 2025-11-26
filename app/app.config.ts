export default defineAppConfig({
  header: {
    logo: {
      light: "/logo.png",
      dark: "/logo.png",
      alt: "Site logo",
    },
  },
  ui: {
    colors: {
      primary: "violet",
      neutral: "zinc",
    },
  },
  seo: {
    titleTemplate: "%s - えるろだブログ",
    title: "えるろだブログ",
    description: "えるろだ開発者ブログ",
  },
});
