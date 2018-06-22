<template>
  <Section color="success" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="t-center" v-if="!messages.length">
          <p class="t-primary">Nenhuma mensagem</p>
        </div>

        <div class="table-responsive" v-if="messages.length">
          <table class="table">
            <thead class="table-header">
              <tr>
                <th>Enviado em:</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Status</th>
                <th>Ler</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr v-for="(message, index) in messages">
                <td>{{ message.created_at | formatDate }}</td>
                <td>{{ message.name }}</td>
                <td>{{ message.email }}</td>
                <td>{{ message.read ? 'Lida' : 'Nova' }}</td>

                <td class="has-button">
                  <nuxt-link class="tag tag-success" :to="`/admin/messages/${ message.id }`" :name="`Remover ${ message.title }`">
                    <i class="ion ion-md-create"></i>
                    <span class="sr-only">Editar</span>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'

export default {
  name: 'page-admin-messages-index',
  layout: 'admin',
  middleware: ['menu', 'check-auth', 'auth'],
  components: {
    Gravatar,
    Section
  },
  asyncData (context) {
    return axios.get(`${ process.env.baseUrl }/messages.json?auth=${ context.store.state.token }`)
      .then(response => {
        const messages = []
        for (const key in response.data) {
          messages.push({
            id: key,
            ...response.data[key]
          })
        }
        return { messages: messages }
      })
      .catch(e => {
        console.log(e)
      })
  },
  data () {
    return {
      sectionHeader: {
        title: 'Mensagens',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-text'
      }
    }
  },
}
</script>

<style scoped lang="stylus">

.table-responsive,
.t-primary
  margin-top 50px

.t-primary
  font-weight 300
  font-size 2rem

.avatar
  margin 25px auto 0 auto

</style>
