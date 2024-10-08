import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import metaTags from "astro-meta-tags";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.dxse.site/',
  // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    },
    drafts: true
  }), sitemap(), tailwind(), metaTags(), pagefind(), react()]
});