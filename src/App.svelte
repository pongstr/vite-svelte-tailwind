<script lang="ts">
  import viteLogo from '/vite.svg'
  import svelteLogo from './assets/svelte.svg'
  import tailwind from './assets/tailwindcss.svg'
  import Counter from '@/components/Counter.svelte'
  import Theme from '@/components/Theme.svelte'

  const degit = `
$ npx degit pongstr/vite-svelte-tailwind my-app && cd ./my-app
$ pnpm install && pnpm dev
`.trim()
</script>

<main id="intro">
  <header>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo vite" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
        <img src={tailwind} class="logo tailwind" alt="TailwindCSS Logo" />
      </a>
    </div>
    <h1>Vite + Svelte + TailwindCSS</h1>
    <span> Just another Svelte app boilerplate intended for prototyping. </span>
  </header>

  <section class="button-section">
    <Theme />
    <Counter />
  </section>

  <section>
    <pre>{degit}</pre>
  </section>

  <footer class="text-center">
    Click on the Vite, Svelte and TailwindCSS logos to learn more
  </footer>
</main>

<style lang="postcss">
  :global(#app) {
    @apply flex justify-center items-center;
  }

  main {
    @apply px-6;
  }

  header {
    & > div {
      @apply flex justify-center items-center  mb-6;
    }

    :global(& > div a ~ a) {
      @apply ml-6;
    }

    h1 {
      @apply font-bold text-4xl text-center mb-3;
    }

    :global(& span) {
      @apply block mb-6 text-center text-lg text-gray-500;
    }
  }

  main > section,
  footer {
    @apply py-4;
  }

  .vite,
  .svelte {
    width: 64px;
    height: 64px;
  }

  .tailwind {
    width: 80px;
    height: 80px;
  }

  .button-section {
    @apply flex justify-center items-center flex-col sm:flex-row;

    :global(& button ~ button) {
      @apply my-2 md:ml-8;
    }
  }
</style>
