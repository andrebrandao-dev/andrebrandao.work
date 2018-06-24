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
  },
  mounted() {
    this.viewCont()
  },
  methods: {
    viewCont() {
      return this.$axios.get(`${ process.env.baseUrl }/pageViews.json`)
        .then(response => {
          const data = response.data
          data.projects++

          this.$axios.put(`${ process.env.baseUrl }/pageViews.json`, data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  .columns.projects
    .col
      width 33.333%
</style>
