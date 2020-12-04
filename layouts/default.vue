<template>
  <div class="layout-wrap">
    <TheSiteHeader />

    <div class="body-wrap">
      <Nuxt />
    </div>

    <TheIsi />

    <TheSiteFooter />
  </div>
</template>

<script>
import TheSiteFooter from "~/components/structure/TheSiteFooter.vue";
import TheSiteHeader from "~/components/structure/TheSiteHeader.vue";
import TheIsi from "~/components/structure/TheIsi.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheSiteHeader,
    TheSiteFooter,
    TheIsi
  }
};
</script>

<style lang="scss">
.body-wrap {
  min-height: 70vh;
  padding-top: 90px;
  padding-bottom: 90px;
}
</style>
