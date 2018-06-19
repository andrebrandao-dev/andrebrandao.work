import Vuex from 'vuex'

// Modules
import moduleGeneral from './general'
import moduleMessages from './messages'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...moduleGeneral.state,
      ...moduleMessages.state
    },

    mutations: {
      ...moduleGeneral.mutations,
      ...moduleMessages.mutations
    },

    actions: {
      ...moduleGeneral.actions,
      ...moduleMessages.actions
    },

    getters: {
      ...moduleGeneral.getters,
      ...moduleMessages.getters
    }
  })
}

export default createStore
