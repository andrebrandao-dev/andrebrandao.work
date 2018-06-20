import Vuex from 'vuex'
import axios from 'axios'

// Modules
import moduleGeneral from './general'
import moduleMessages from './messages'
import moduleProjects from './projects'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...moduleGeneral.state,
      ...moduleMessages.state,
      ...moduleProjects.state
    },

    mutations: {
      ...moduleGeneral.mutations,
      ...moduleMessages.mutations,
      ...moduleProjects.mutations
    },

    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get(`${ process.env.baseUrl }/projects.json`)
          .then(response => {
            const projects = []
            for (const key in response.data) {
              projects.push({
                id: key,
                ...response.data[key]
              })
            }
            vuexContext.commit('setProjects', projects)
          })
          .catch(e => {
            console.log(e)
          })
      },
      ...moduleGeneral.actions,
      ...moduleMessages.actions,
      ...moduleProjects.actions
    },

    getters: {
      ...moduleGeneral.getters,
      ...moduleMessages.getters,
      ...moduleProjects.getters
    }
  })
}

export default createStore
