import axios from 'axios'

export const sendMessage = (vuexContext, message) => {

  vuexContext.dispatch('setLoading', true)

  axios.post(`${ process.env.baseUrl }/messages.json`, message)
    .then(data => {
      vuexContext.dispatch('setLoading', false)
      console.log('mensagem enviada')
    })
    .catch(e => {
      vuexContext.dispatch('setLoading', false)
      console.log(e)
    })
}

export const getMessages = (vuexContext) => {
  axios.get(`${ process.env.baseUrl }/messages.json`)
    .then(response => {
      const messages = []
      for (const key in response.data) {
        messages.push({
          id: key,
          ...response.data[key]
        })
      }
      vuexContext.commit('setMessages', messages)
    })
    .catch(e => {
      console.log(e)
    })
}
