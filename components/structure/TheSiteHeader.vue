<template>
  <header class="bg--brand-primary">
    <h1 class="font--white">The Site Header</h1>

    <div class="links-wrap">
      <router-link to="/" class="font--white decorate-hover">Home</router-link>
      <router-link to="/contact-us" class="font--white decorate-hover">Contact Us</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'TheSiteHeader'
  }
</script>

<style scoped lang="scss">
header {
  padding: 20px 15px 20px;
}

.links-wrap {
  padding: 15px 0px;
}
</style>
