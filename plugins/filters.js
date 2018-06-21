import Vue from 'vue'
import moment from 'moment'

moment.locale('pt-BR')


Vue.filter('formatDate', value => new moment(value).format('DD [de] MMMM [de] YYYY'))
