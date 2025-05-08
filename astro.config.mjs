// @ts-check
import { defineConfig } from 'astro/config';
// UnoCSS integration
import UnoCSS from 'unocss/astro'

// https://astro.build/config

export default defineConfig({
  integrations: [
    UnoCSS({
        injectReset: true // or a path to the reset file
      }),
  ],
})