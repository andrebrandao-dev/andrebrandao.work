import Vuex from 'vuex'
import axios from 'axios'

// Modules
import moduleGeneral from './general'
import moduleMessages from './messages'
import moduleProjects from './projects'
import moduleAuth from './auth'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...moduleGeneral.state,
      ...moduleMessages.state,
      ...moduleProjects.state,
      ...moduleAuth.state
    },

    mutations: {
      ...moduleGeneral.mutations,
      ...moduleMessages.mutations,
      ...moduleProjects.mutations,
      ...moduleAuth.mutations
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
      ...moduleProjects.actions,
      ...moduleAuth.actions
    },

    getters: {
      ...moduleGeneral.getters,
      ...moduleMessages.getters,
      ...moduleProjects.getters,
      ...moduleAuth.getters
    }
  })
}

export default createStore
