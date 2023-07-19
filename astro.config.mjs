import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";



// https://astro.build/config
export default defineConfig({
  site:"https://elamandeep.netlify.app/",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sanity({
      projectId: "n9q58emw",
      dataset: "production",
      apiVersion: "2021-10-21",
      useCdn: true,
    }),
    sitemap()
  ],
});
