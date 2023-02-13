import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://aleixcaasas.github.io',
  base: '/AleixCasas-Portfolio',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  })]
});