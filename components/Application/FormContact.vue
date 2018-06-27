<template lang="html">
  <div>
    <form class="form" @submit.prevent="submitForm">
      <div class="card wow fadeInLeft">
        <div class="card-body">
          <div class="form-body">
            <Input
              label="Name"
              v-model="form.name"
              icon="ion-md-person"
              :hasError="nameError"
              @blur="onBlur($event, 'name')"
            />
            <Input
              label="Email"
              v-model="form.email"
              icon="ion-md-mail"
              :hasError="emailError"
              @blur="onBlur($event, 'email')"
            />
            <Input
              label="Message"
              controlType="textarea"
              v-model="form.message"
              icon="ion-md-text"
              :hasError="msgError"
              @blur="onBlur($event, 'message')"
            />
            <Button
              class="btn btn-primary"
              type="submit"
              title="Enviar"
              :disabled="form.name === '' || form.email === '' || form.message === '' || nameError || msgError || emailError"
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import * as EmailValidator from 'email-validator'

// Components
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'

export default {
  name: 'component-application-form-contact',
  components: {
    Input,
    Button
  },
  data () {
    return {
      nameError: false,
      msgError: false,
      emailError: false,
      form: {
        name: '', email: '', message: '', created_at: '', read: false
      }
    }
  },
  methods: {
    onBlur(event, type) {
      if (type === 'name') {
        if (this.form.name === '') {
          this.nameError = true
          return
        }
        this.nameError = false
        return
      }

      if (type === 'email') {
        const emailValid = EmailValidator.validate(this.form.email)

        if (!emailValid) {
          this.emailError = true
          return
        }
        this.emailError = false
        return
      }

      if (type === 'message') {
        if (this.form.message === '') {
          this.msgError = true
          return
        }
        this.msgError = false
        return
      }
    },
    submitForm() {
      this.form.created_at = new Date()
      this.$store.dispatch('setLoading', true)

      axios.post(`${ process.env.baseUrl }/messages.json`, this.form)
        .then(data => {
          this.$store.dispatch('setLoading', false)
          this.$emit('submitForm', true)
          this.form = { name: '', email: '', message: '', created_at: '', read: false }
        })
        .catch(e => {
          this.$store.dispatch('setLoading', false)
          this.$emit('submitForm', false)
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  .container
    margin-top 50px
    margin-bottom 50px

  .form
    max-width 570px
    margin 0 auto

    &-body
      margin 15px
</style>
