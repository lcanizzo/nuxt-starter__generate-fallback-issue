import Vue from 'vue';

if (!Vue.__interstitial__mixin___) {
  Vue.__interstitial__mixin___ = true;

  Vue.mixin({
    methods: {
      openInterstitial(event) {
        if (event) {
          event.preventDefault();
          this.$store.commit('modals/setInterstitialHref', event.target.href);
        }

        this.$store.commit('modals/setShowInterstitial', true);
      }
    }
  });
}
