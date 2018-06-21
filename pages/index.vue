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
          <ProjectList :limit="3" />
        </div>
      </div>
      <div slot="footer" class="section-footer">
        <div class="t-center">
          <nuxt-link class="btn btn-primary" exact to="/projects" title="More projects">
            Todos Projetos
          </nuxt-link>
        </div>
      </div>
    </Section>

    <!-- Articles Section -->
    <Section color="success" :sectionHeader="sectionArticlesHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <ArticleList :limit="3" />
        </div>
      </div>
      <div slot="footer" class="section-footer">
        <div class="t-center">
          <nuxt-link class="btn btn-ligth" exact to="/articles" title="Ver Todos No Medium">
            Mais Artigos
          </nuxt-link>
        </div>
      </div>
    </Section>

  </div>
</template>

<script>
// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'
import ArticleList from '@/components/Application/ArticleList'
import ProjectList from '@/components/Application/ProjectList'

export default {
  name: 'page-index',
  middleware: ['menu'],
  components: {
    Gravatar,
    Section,
    ArticleList,
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
}
</script>

<style scoped lang="stylus">
  .columns.projects
    .col
      width 33.333%
</style>
