<template>
  <div class="">
    <Section :color="notFound ? 'warning' : 'ligth'" :sectionHeader="sectionProjectsHeader" v-if="project || notFound">
      <div slot="body" class="section-body">
        <div class="container">
          <div class="card" v-if="!notFound">
            <div class="card-body">
              <p class="card-body-text">{{ project.content }}</p>
            </div>
          </div>
          <div class="t-center" v-if="notFound">
            <nuxt-link class="btn btn-primary" exact to="/" title="Home">
              Got To Home
            </nuxt-link>
            <nuxt-link class="btn btn-primary" exact to="/projects" title="More projects">
              More projects
            </nuxt-link>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as _ from 'lodash'

// Components
import Section from '@/components/UI/Section'

export default {
  name: 'page-projects-index',
  components: {
    Section
  },
  data () {
    return {
      notFound: false,
      project: null,
      sectionProjectsHeader: {
        title: 'Project',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      }
    }
  },
  computed: {
    ...mapGetters(['activedProjects'])
  },
  mounted () {
    this.findProject()
  },
  methods: {
    findProject () {
      const slug = this.$route.params.slug
      const index = _.findIndex(this.activedProjects, (project) => project.slug === slug)

      if (index < 0) {
        this.notFound = true

        this.sectionProjectsHeader = {
          title: 'Project Not Found',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          animation: 'fadeInRight',
          icon: 'ion-md-bug'
        }

      } else {
        this.project = this.activedProjects[index]
        this.sectionProjectsHeader.title = this.project.title
      }
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
