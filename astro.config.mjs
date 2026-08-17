// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://neon-madeleine-8e18de.netlify.app",
  integrations: [preact()]
});