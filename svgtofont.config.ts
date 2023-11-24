import { defineConfig } from 'csvg-to-font';

export default defineConfig({
  src: 'public/icon', // svg path
  dist: 'src/styles/fontIcon', // output path
  fontName: 'icon', // font name
  css: true, // Create CSS files.
  typescript: true,
});
