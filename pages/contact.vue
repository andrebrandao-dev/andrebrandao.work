<template>
  <Section color="ligth" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <form class="form" @submit.prevent="submitForm">
          <Input label="Name" v-model="form.name" />
          <Input label="Email" v-model="form.email" />
          <Input label="Message" controlType="textarea" v-model="form.message" />
          <Button class="btn btn-primary" type="submit">Submit</Button>
        </form>
      </div>
    </div>
  </Section>
</template>

<script>
// Components
import Section from '@/components/UI/Section'
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'

export default {
  name: 'page-contact',
  components: {
    Section,
    Input,
    Button
  },
  data() {
    return {
      sectionHeader: {
        title: 'Contact',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      },
      form: {
        name: '', email: '', message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped lang="stylus">
  .container
    margin-top 50px
    margin-bottom 50px

</style>
