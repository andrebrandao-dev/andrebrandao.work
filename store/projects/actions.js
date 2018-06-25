import axios from 'axios'
import * as _ from 'lodash'

export const sendProject = (vuexContext, project) => {

  axios.post(`${ process.env.baseUrl }/projects.json?auth=${ vuexContext.state.token }`, project)
    .then(data => {
      vuexContext.dispatch('getProjects')
    })
    .catch(e => {
      console.log(e)
    })
}

export const getProjects = (vuexContext) => {
  axios.get(`${ process.env.baseUrl }/projects.json`)
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
}

export const updateProject = (vuexContext, project) => {
  axios.put(`${ process.env.baseUrl }/projects/${ project.id }.json?auth=${ vuexContext.state.token }`, project)
    .then(data => {
      vuexContext.dispatch('getProjects')
    })
    .catch(e => {
      console.log(e)
    })
}
