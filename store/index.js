import Vuex from 'vuex'
import Parser from 'rss-parser'
import axios from 'axios'
import * as _ from 'lodash'

// Modules
import moduleGeneral from './general'
import moduleProjects from './projects'
import moduleArticles from './articles'
import moduleRecommendations from './recommendations'
import moduleAuth from './auth'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ...moduleGeneral.state,
      ...moduleProjects.state,
      ...moduleArticles.state,
      ...moduleAuth.state,
      ...moduleRecommendations.state
    },

    mutations: {
      ...moduleGeneral.mutations,
      ...moduleProjects.mutations,
      ...moduleArticles.mutations,
      ...moduleAuth.mutations,
      ...moduleRecommendations.mutations
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
              const orderedProject = _.orderBy(projects, ['created_at'], ['desc'])
              vuexContext.commit('setProjects', orderedProject)
            })
            .catch(e => {
              console.log(e)
            })

          const recommendations = axios.get(`${ process.env.baseUrl }/recommendations.json`)
            .then(response => {
              const recommendations = []
              for (const key in response.data) {
                recommendations.push({
                  id: key,
                  ...response.data[key]
                })
              }
              vuexContext.commit('setRecommendations', recommendations)
            })
            .catch(e => {
              console.log(e)
            })


          const promises = await Promise.all([articles, projects, recommendations])
        })()

      },
      ...moduleGeneral.actions,
      ...moduleProjects.actions,
      ...moduleArticles.actions,
      ...moduleAuth.actions,
      ...moduleRecommendations.actions
    },

    getters: {
      ...moduleGeneral.getters,
      ...moduleProjects.getters,
      ...moduleArticles.getters,
      ...moduleAuth.getters,
      ...moduleRecommendations.getters
    }
  })
}

export default createStore
