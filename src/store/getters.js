const getters = {
  // app
  loginDialog: state => state.app.loginDialog,
  loadingData: state => state.app.loadingData,
  loadingDialog: state => state.app.loadingDialog,
  autocompleteDialog: state => state.app.autocompleteDialog,

  // user
  loggedUser: state => state.user.loggedUser

  // home
}
export default getters
