<template>
  <div class="columns">
    <div class="col wow fadeInLeft" v-for="(project, index) in activedProjects" v-if="index + 1 <= limit">
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
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'

export default {
  name: 'component-application-project-list',
  props: {
    limit: {
      type: Number,
      default: 3
    }
  },
  computed: {
    ...mapGetters(['activedProjects'])
  }
}
</script>

<style scoped lang="stylus">
  .col
    width 33.333%
    padding-top 15px
    padding-bottom 15px
    @media (max-width 767px)
      width 100%

  .card
    margin-bottom 25px

</style>
