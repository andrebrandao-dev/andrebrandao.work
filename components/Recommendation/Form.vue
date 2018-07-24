<template lang="html">
  <form class="form" @submit.prevent="submitForm">
    <div class="card wow fadeInLeft">
      <div class="card-body">
        <div class="form-body">
          <Input label="Nome" v-model="form.name" icon="ion-md-person" />
          <Input label="E-mail" v-model="form.email" icon="ion-md-mail" />
          <Input label="Mensagem" controlType="textarea" v-model="form.message" icon="ion-md-text" />
          <Button class="btn btn-primary" type="submit" title="Send">Send</Button>
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
  name: 'component-application-form-contact',
  components: {
    Input,
    Button,
  },
  data () {
    return {
      form: {
        name: '', email: '', message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.form);
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
