const state = {
  loggedUser:
    localStorage.getItem('loggedUser') != undefined
      ? JSON.parse(localStorage.getItem('loggedUser'))
      : null
}

const mutations = {
  SET_LOGGED_USER: (state, loggedUser) => {
    state.loggedUser = loggedUser
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
  },
  LOGOUT: state => {
    state.loggedUser = null
    localStorage.removeItem('loggedUser')
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
