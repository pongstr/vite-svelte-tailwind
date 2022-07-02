<script>
  function toggle() {
    const html = document.querySelector('html')
    html.classList.toggle('dark')
  }
</script>

<button on:click={toggle}>Toggle Theme</button>
