<template>
  <div class="page-wrap">
    <div class="container">
      <h1>404</h1>
      <a href="www.google.com" target="_blank" @click.prevent="handleExternalClick">External Link</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: '404',
    methods: {
      handleExternalClick() {
        console.log('clicked the link!');
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
