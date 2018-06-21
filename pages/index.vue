<template>
  <div>
    <!-- About Section -->
    <section class="section section-about">
      <div class="section-body">
        <div class="wow fadeInDown">
          <Gravatar class="avatar avatar-ligth" :email="my.email"/>
          <h1 class="section-about-title">
            Hi, I'm
            <strong>{{ my.name }}</strong>
          </h1>
        </div>

        <nuxt-link class="btn-outline btn-outline-ligth wow fadeInUp" exact to="/about" title="More about me">
          More about me
        </nuxt-link>
      </div>
    </section>

    <!-- Projects Section -->
    <Section color="ligth" :sectionHeader="sectionProjectsHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <div class="columns projects">
            <div class="col wow fadeInLeft" v-for="(project, index) in activedProjects" v-if="index < 3">
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
      <div slot="footer" class="section-footer">
        <div class="t-center">
          <nuxt-link class="btn btn-primary" exact to="/projects" title="More projects">
            More projects
          </nuxt-link>
        </div>
      </div>
    </Section>

    <!-- Articles Section -->
    <Section color="success" :sectionHeader="sectionArticlesHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <ArticleList :limit="6"/>
        </div>
      </div>
    </Section>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'
import ArticleList from '@/components/Application/ArticleList'

export default {
  name: 'page-index',
  components: {
    Gravatar,
    Section,
    ArticleList
  },
  data () {
    return {
      sectionProjectsHeader: {
        title: 'Projects',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-code-working'
      },
      sectionArticlesHeader: {
        title: 'Articles',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInLeft',
        icon: 'ion-md-book'
      },
      my: {
        name: 'André Brandão',
        email: 'andrebf4@gmail.com'
      }
    }
  },

  computed: {
    ...mapGetters(['activedProjects'])
  },
}
</script>

<style scoped lang="stylus">
  .columns.projects
    .col
      width 33.333%
</style>
