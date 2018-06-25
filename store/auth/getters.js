export const isAuthenticated = (state) => {
  return state.token !== null
}

export const getErrorAuth = (state) => {
  return state.errorAuth
}
