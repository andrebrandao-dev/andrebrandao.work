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

export const initAuth = (vuexContext, req) => {

  let token;
  let expirationDate;

  if (req) {

    if (!req.headers.cookie) {
      return;
    }

    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))

    if (!jwtCookie) {
      return;
    }

    token = jwtCookie.split('=')[1]

    expirationDate = req.headers.cookie
      .split(';')
      .find(c => c.trim().startsWith('expirationDate='))
      .split('=')[1]

  } else {
    token = localStorage.getItem('token')
    expirationDate = localStorage.getItem('tokenExpiration')
  }

  if (new Date().getTime() > +expirationDate || !token) {
    vuexContext.dispatch('logout')
    return;
  }

  vuexContext.commit('setToken', token)
}

export const logout = (vuexContext) => {

  vuexContext.commit('clearToken')
  Cookie.remove('jwt')
  Cookie.remove('expirationDate')

  if (process.client) {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
  }
}
