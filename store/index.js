import Vuex from 'vuex'

// Modules
import moduleMessages from './messages'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: false,
      ...moduleMessages.state
    },

    mutations: {
      setLoading (state, status) {
        state.loading = status
      },
      ...moduleMessages.mutations
    },

    actions: {
      setLoading (vuexContext, status) {
        vuexContext.commit('setLoading', status)
      },
      ...moduleMessages.actions
    },

    getters: {
      isLoading (state) {
        return state.loading
      },
      ...moduleMessages.getters
    }
  })
}

export default createStore
