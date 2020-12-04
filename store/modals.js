export const state = () => ({
  interstitial: {
    show: false,
    href: ''
  }
});

export const mutations = {
  // ## Interstitial
  setShowInterstitial(state, boolean) {
    state.interstitial.show = boolean;
  },
  setInterstitialHref(state, string) {
    state.interstitial.href = string;
  }
};

export const getters = {};

export const actions = {
  resetModalStates({ commit }) {
    commit('setShowInterstitial', false);
    commit('setInterstitialHref', '');
  }
};
