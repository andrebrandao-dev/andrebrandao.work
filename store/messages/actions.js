import Vue from 'vue'

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
