import axios from 'axios';

const linksUrl = '/api/meta/links';

export default {
  namespaced: true,
  state: {
    links: {}
  },
  mutations: {
    setLinks(state, links) {
      state.links = links;
    }
  },
  actions: {
    async load({ dispatch }) {
      return Promise.all([
        dispatch('loadLinks')
      ]);
    },
    async loadLinks({ commit }) {
      const { data: links } = await axios.get(linksUrl);
      commit('setLinks', links);
    }
  }
};
