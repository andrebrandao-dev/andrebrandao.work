<template>
  <Section color="ligth" :sectionHeader="sectionProjectsHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="columns projects">
          <div class="col" v-for="(project, index) in activedProjects">
            <nuxt-link :to="`/projects/${ project.slug }`" :title="project.title">
              <div class="card">
                <div class="card-header cover" :style="{ backgroundImage: `url(${ project.thumbnail })` }">
                  <span class="sr-only">{{ project.title }}</span>
                </div>
                <div class="card-body">
                  <h3 class="card-body-title">{{ project.title }}</h3>
                  <p class="card-body-text resumed">{{ project.content }}</p>
                </div>
                <div class="card-footer" :style="{ backgroundColor: project.color }">
                  <span class="card-footer-item" v-for="tag in project.tags">{{ tag }}</span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import Section from '@/components/UI/Section'

export default {
  name: 'page-projects-index',
  components: {
    Section
  },
  data () {
    return {
      sectionProjectsHeader: {
        title: 'Projects',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
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
