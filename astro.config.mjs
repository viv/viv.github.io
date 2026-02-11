import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.viv.me.uk',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
