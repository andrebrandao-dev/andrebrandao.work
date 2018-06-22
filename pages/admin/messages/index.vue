<template>
  <div>

    <!-- Section -->
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
                    <span class="tag tag-info" @click="onReadMessage(message.id)">
                      <i class="ion ion-md-eye"></i>
                      <span class="sr-only">Ler mensagem</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>

    <!-- Modal Message -->
    <Modal v-if="selectedMessage" :title="selectedMessage.email" :avatar="true" @close="selectedMessage = null">
      <div slot="body" class="modal-body">
        <div class="message-text">
          <h3 class="message-title">Email:</h3>
          <p class="message-text">{{ selectedMessage.email }}</p>
        </div>

        <hr>

        <div class="message-text">
          <h3 class="message-title">Mensagem:</h3>
          <p class="message-text">{{ selectedMessage.message }}</p>
        </div>
      </div>
      <div slot="footer" class="modal-footer">
        <button type="button" class="btn btn-info" @click.prevent="updateMessage()">
          {{ selectedMessage.read ? 'Fechar e Marcar como não lida' : 'Fechar e Marcar como lida' }}
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import { findIndex, orderBy } from 'lodash'
import { mapActions, mapGetters } from 'vuex'

// Components
import Section from '@/components/UI/Section'
import Modal from '@/components/UI/Modal'

export default {
  name: 'page-admin-messages-index',
  layout: 'admin',
  middleware: ['menu', 'check-auth', 'auth'],
  components: {
    Section,
    Modal
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

        return { messages: orderBy(messages, ['created_at'], ['desc']) }
      })
      .catch(e => {
        console.log(e)
      })
  },
  data () {
    return {
      selectedMessage: null,
      sectionHeader: {
        title: 'Mensagens',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-text'
      }
    }
  },
  mounted() {
    console.log(this.messages);
  },
  methods: {
    onReadMessage(id) {
      const index = findIndex(this.messages, (message) => message.id === id)
      this.selectedMessage = this.messages[index]
    },
    updateMessage() {
      this.selectedMessage.read = !this.selectedMessage.read

      axios.put(`${ process.env.baseUrl }/messages/${ this.selectedMessage.id }.json`, this.selectedMessage)
        .then(res => {
          this.selectedMessage = null
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
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

.message-text
  font-size 1.3rem
  font-weight 300
  margin 25px 0

</style>
