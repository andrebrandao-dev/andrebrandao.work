const pkg = require('./package')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'André Brandão',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#333132' },
      { name: 'msapplication-navbutton-color', content: '#333132' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#333132' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: 'http://www.andrebrandao.work' },
      { property: 'og:type', content: 'portfolio' },
      { property: 'og:title', content: 'André Brandão Desenvolvedor: Portfólio' },
      { property: 'og:description', content: 'Portfólio e Artigos sobre Desenvolvimento' },
      { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/andrebrandao-work.appspot.com/o/screenshot.png?alt=media&token=c90593f4-5eed-491c-a338-fc62b4538bb8' },
      { property: 'og:image:width', content: '997' },
      { property: 'og:image:height', content: '352' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    './node_modules/ionicons/dist/css/ionicons.min.css',
    './node_modules/swiper/dist/css/swiper.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/filters.js',
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/firebase'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://andrebrandao-work.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    target: 'node',
    extend(config, ctx) {

    },
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://andrebrandao-work.firebaseio.com',
    fbKey: 'AIzaSyAK-Pm-zs_WCU-ladN-mr3LPKC5QLGbwzc'
  },

  router: {
    linkActiveClass: 'active'
  }
}
