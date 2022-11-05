export default defineNuxtConfig({
  components: {
    global: true,
    dirs: [{ path: "~/components", pathPrefix: false }],
  },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    // https://google-fonts.nuxtjs.org/options
  },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    "@formkit/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["acceptHMRUpdate", "defineStore", "storeToRefs"],
      },
    ],
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  typescript: {
    shim: false,
  },
});
