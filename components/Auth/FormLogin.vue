<template lang="html">
  <form class="form" @submit.prevent="submitForm">
    <div class="card wow fadeInLeft">
      <div class="card-body">
        <div class="form-body">
          <Input label="Email" type="text" v-model="form.email" icon="ion-md-person" />
          <Input label="Password" type="password" v-model="form.password" icon="ion-md-mail" />
          <Button class="btn btn-primary" type="submit" title="Login">Login</Button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

// Components
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'

export default {
  name: 'component-auth-form-login',
  components: {
    Input,
    Button
  },
  data () {
    return {
      form: {
        email: '', password: ''
      }
    }
  },
  methods: {

    submitForm() {
      this.$store.dispatch('authenticateUser', this.form)
        .then(() => {
          this.$router.push('/admin')
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
