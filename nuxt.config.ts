import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Marko Maric",
    },
  },
  css: ["~/assets/tailwind.css", "~/assets/app.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon"],

  icon: {
    componentName: "NuxtIcon",
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
