import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

const integrations = [mdx(), sitemap()];
try {
  const { default: inlineReview } = await import('review-loop');
  integrations.push(inlineReview());
} catch {}

export default defineConfig({
  site: 'https://www.viv.me.uk',
  output: 'static',
  integrations,
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: 'dark',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
