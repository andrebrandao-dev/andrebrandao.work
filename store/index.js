import Vuex from 'vuex'
import Parser from 'rss-parser'
import axios from 'axios'

// Modules
import moduleGeneral from './general'
import moduleProjects from './projects'
import moduleArticles from './articles'
import moduleAuth from './auth'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...moduleGeneral.state,
      ...moduleProjects.state,
      ...moduleArticles.state,
      ...moduleAuth.state
    },

    mutations: {
      ...moduleGeneral.mutations,
      ...moduleProjects.mutations,
      ...moduleArticles.mutations,
      ...moduleAuth.mutations
    },

    actions: {
      nuxtServerInit (vuexContext, context) {

        let parser = new Parser()

        return (async () => {
          const articles = parser.parseURL('https://medium.com/feed/andrebf')
            .then(response => {
              vuexContext.commit('setArticles', response.items)
            })

          const projects = axios.get(`${ process.env.baseUrl }/projects.json`)
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

          const promises = await Promise.all([articles, projects])
        })()

      },
      ...moduleGeneral.actions,
      ...moduleProjects.actions,
      ...moduleArticles.actions,
      ...moduleAuth.actions
    },

    getters: {
      ...moduleGeneral.getters,
      ...moduleProjects.getters,
      ...moduleArticles.getters,
      ...moduleAuth.getters
    }
  })
}

export default createStore
