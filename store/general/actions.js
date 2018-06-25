import axios from 'axios'
export const setLoading = (vuexContext, status) => {
  vuexContext.commit('setLoading', status)
}

export const toggleMenu = (vuexContext, status) => {
  vuexContext.commit('setMenu', status)
}

export const countPageView = (vuexContext, page) => {
  if (!vuexContext.state.token) {
    axios.get(`${ process.env.baseUrl }/pageViews.json`)
      .then(response => {
        const data = response.data

        if (page === 'home') {
          data.home++
        }
        if (page === 'about') {
          data.about++
        }
        if (page === 'contact') {
          data.contact++
        }
        if (page === 'projects') {
          data.projects++
        }
        if (page === 'articles') {
          data.articles++
        }

        return axios.put(`${ process.env.baseUrl }/pageViews.json`, data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
