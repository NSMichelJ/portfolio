import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon({
    include: {
      mdi: ['linkedin', 'twitter', 'github', 'arrow-down-bold-circle', 'arrow-right-bold-circle', 'code-block-braces', 'email-arrow-right-outline', 'briefcase', 'account', 'link-variant', 'file-document', 'email-edit-outline', 'whatsapp', 'robot-confused-outline']
    }
  })],
  adapter: vercel()
});