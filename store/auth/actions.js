import axios from 'axios'
import Cookie from 'js-cookie'

export const authenticateUser = (vuexContext, form) => {
  const authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbKey

  return axios.post(authUrl, {
    email: form.email,
    password: form.password,
    returnSecureToken: true
  })
  .then(result => {

    vuexContext.commit('setToken', result.idToken)
    localStorage.setItem('token', result.idToken)
    localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
    Cookie.set('jwt', result.idToken)
    Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)

  })
  .catch(e => {
    console.log(e)

    vuexContext.commit('setErrorAuth', true)
    setTimeout(() => {
      vuexContext.commit('setErrorAuth', null)
    }, 3000)

  })

}
