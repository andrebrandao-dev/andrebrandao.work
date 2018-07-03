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
  head: {
    title: 'Projetos: André Brandão'
  },
  components: {
    Section,
    ProjectList
  },
  data () {
    return {
      sectionProjectsHeader: {
        title: 'Projetos',
        subtitle: 'Saiba mais sobre os trabalhos em que participei.',
        animation: 'fadeInRight',
        icon: 'ion-md-code-working'
      },
    }
  },
  computed: {
    ...mapGetters(['activedProjects'])
  },
  mounted() {
    this.$store.dispatch('countPageView', 'projects')
  }
}
</script>

<style scoped lang="stylus">
  .columns.projects
    .col
      width 33.333%

  .comming-soon
    font-size 1.8rem
    line-height 2rem
    font-weight 300
    margin 0
</style>
