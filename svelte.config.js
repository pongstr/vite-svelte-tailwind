import sveltePreprocess from 'svelte-preprocess'
import tailwind from 'tailwindcss'
import nested from 'postcss-nested'
import autoprefixer from 'autoprefixer'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [nested(), tailwind(), autoprefixer()],
    },
  }),
}
