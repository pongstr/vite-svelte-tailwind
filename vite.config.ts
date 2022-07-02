import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import tailwind from 'tailwindcss'
import nested from 'postcss-nested'
import autoprefixer from 'autoprefixer'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: join(process.cwd(), 'src') }],
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [nested(), tailwind(), autoprefixer()],
        },
      }),
    }),
  ],
})
