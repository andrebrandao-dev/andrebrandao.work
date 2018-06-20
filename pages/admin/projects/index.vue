<template>
  <Section color="success" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">

        <div class="t-center">
          <nuxt-link to="/admin/projects/create" class="btn btn-primary" title="New project">
            <i class="ion ion-md-add"></i>New Project
          </nuxt-link>
        </div>

        <div class="columns">

        </div>
      </div>
    </div>
  </Section>
</template>

<script>

// Components
import Section from '@/components/UI/Section'

export default {
  name: 'page-admin-projects-index',
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    Section
  },
  data () {
    return {
      sectionHeader: {
        title: 'Projects',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInLeft',
        icon: 'ion-md-code-working'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
