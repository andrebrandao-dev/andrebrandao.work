<template>
  <Section color="ligth" :sectionHeader="sectionProjectsHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <ProjectList :limit="10" />
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import Section from '@/components/UI/Section'
import ProjectList from '@/components/Application/ProjectList'

export default {
  name: 'page-projects-index',
  middleware: ['menu', 'check-auth'],
  components: {
    Section,
    ProjectList
  },
  data () {
    return {
      sectionProjectsHeader: {
        title: 'Projects',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-code-working'
      },
    }
  },
  computed: {
    ...mapGetters(['activedProjects'])
  }
}
</script>

<style scoped lang="stylus">
  .columns.projects
    .col
      width 33.333%
</style>
