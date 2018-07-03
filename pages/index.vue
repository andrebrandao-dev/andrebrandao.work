<template>
  <div>
    <!-- About Section -->
    <section class="section section-about">
      <div class="section-body">
        <div class="wow fadeInDown">
          <Gravatar class="avatar avatar-ligth" :email="my.email"/>
          <h1 class="section-about-title">
            {{ my.name }}
          </h1>
        </div>

        <nuxt-link class="btn-outline btn-outline-ligth wow fadeInUp" exact to="/sobre" title="Mais sobre mim">
          Mais sobre mim
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
          <nuxt-link class="btn btn-success" exact to="/projetos" title="More projects">
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
          <nuxt-link class="btn btn-ligth" exact to="/artigos" title="Ver Todos No Medium">
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
  middleware: ['menu', 'check-auth'],
  components: {
    Gravatar,
    Section,
    ArticleList,
    ProjectList
  },
  data() {
    return {
      sectionProjectsHeader: {
        title: 'Projetos',
        subtitle: 'Saiba mais sobre os trabalhos em que participei.',
        animation: 'fadeInRight',
        icon: 'ion-md-code-working'
      },
      sectionArticlesHeader: {
        title: 'Artigos',
        subtitle: 'Textos sobre as minhas experiências, dicas e aprendizados.',
        animation: 'fadeInLeft',
        icon: 'ion-md-book'
      },
      my: {
        name: 'André Brandão',
        email: 'andrebf4@gmail.com'
      }
    }
  },
  mounted() {
    this.$store.dispatch('countPageView', 'home')
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
