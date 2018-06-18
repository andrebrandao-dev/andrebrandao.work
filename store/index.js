import Vuex from 'vuex'

// Modules
import moduleMessages from './messages'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...moduleMessages.state
    },

    mutations: {
      ...moduleMessages.mutations
    },

    actions: {
      ...moduleMessages.actions
    },

    getters: {
      ...moduleMessages.getters
    }
  })
}

export default createStore
