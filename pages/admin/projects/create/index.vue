<template>
  <Section color="success" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">

        <div class="t-center">
          <nuxt-link to="/admin/projects" class="btn btn-primary" title="New project">
            Back
          </nuxt-link>
        </div>

        <FormProject />

      </div>
    </div>
  </Section>
</template>

<script>

// Components
import Section from '@/components/UI/Section'
import FormProject from '@/components/Admin/FormProject'

export default {
  name: 'page-admin-projects-create',
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    Section,
    FormProject
  },
  data () {
    return {
      sectionHeader: {
        title: 'New Project',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInDown',
        icon: 'ion-md-code-working'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
