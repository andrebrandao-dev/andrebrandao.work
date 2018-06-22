import axios from 'axios'
import * as _ from 'lodash'

export const sendProject = (vuexContext, message) => {

  axios.post(`${ process.env.baseUrl }/projects.json`, message)
    .then(data => {
      console.log('projeto enviado')
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

export const deleteProject = (vuexContext, id) => {
  const index = _.findIndex(vuexContext.state.projects, project => project.id === id)
  vuexContext.commit('deleteProject', index)
}
