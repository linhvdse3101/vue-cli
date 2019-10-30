const state = {
  loginDialog: false,
  loadingData: false,
  loadingDialog: false,
  autocompleteDialog: false
}

const mutations = {
  TOGGLE_LOGIN_DIALOG: (state, payload) => {
    state.loginDialog = payload
  },
  TOGGLE_LOADING_DATA: (state, payload) => {
    state.loadingData = payload
  },
  TOGGLE_LOADING_DIALOG: (state, payload) => {
    state.loadingDialog = payload
  },
  TOGGLE_AUTOCOMPLETE_DIALOG: (state, payload) => {
    state.autocompleteDialog = payload
  }
}

const actions = {
  toggleLoginDialog({ commit }, payload) {
    commit('TOGGLE_LOGIN_DIALOG', payload)
  },
  toggleLoadingData({ commit }, payload) {
    commit('TOGGLE_LOADING_DATA', payload)
  },
  toggleLoadingDialog({ commit }, payload) {
    commit('TOGGLE_LOADING_DIALOG', payload)
  },
  toggleAutocompleteDialog({ commit }, payload) {
    commit('TOGGLE_AUTOCOMPLETE_DIALOG', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
