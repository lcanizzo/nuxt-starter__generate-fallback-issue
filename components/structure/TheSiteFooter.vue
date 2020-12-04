<template>
  <footer class="bg--brand-primary">
    <div class="footer-copy-block">
      <div class="copy-row">
        <h1 class="font--white">The Site Footer <img class="inline-logo inline-logo--brand" src="/img/brand-logo-sm.png" alt="Brand Logo"></h1>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheSiteFooter'
  }
</script>

<style scoped lang="scss">
footer {
  padding: 30px 15px 30px;
}

.inline-logo {
  display: inline;
}

.inline-logo--brand {
  max-width: 50px;
}
</style>
