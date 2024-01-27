import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), icon({
    include: {
      mdi: ['linkedin', 'twitter', 'github', 'arrow-down-bold-circle', 'arrow-right-bold-circle', 'code-block-braces', 'email-arrow-right-outline', 'briefcase', 'account', 'link-variant', 'file-document', 'email-edit-outline', 'whatsapp', 'robot-confused-outline']
    }
  })],
  adapter: vercel()
});