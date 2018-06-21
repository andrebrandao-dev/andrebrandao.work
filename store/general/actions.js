export const setLoading = (vuexContext, status) => {
  vuexContext.commit('setLoading', status)
}

export const toggleMenu = (vuexContext, status) => {
  vuexContext.commit('setMenu', status)
}
