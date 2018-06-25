export const setToken = (state, token) => {
  state.token = token
}

export const clearToken = (state) => {
  state.token = null
}

export const setErrorAuth = (state, err) => {
  state.errorAuth = err
}
