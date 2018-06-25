<template>
  <Section color="success" :sectionHeader="sectionArticlesHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <ArticleList :limit="9" />
      </div>
    </div>
    <div slot="footer" class="section-footer">
      <div class="t-center">
        <a class="btn btn-ligth" href="https://medium.com/andrebf" title="Ver Todos No Medium" target="_blank">
          Ver Todos No Medium
        </a>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import ArticleList from '@/components/Application/ArticleList'

export default {
  name: 'page-articles-index',
  middleware: ['menu', 'check-auth'],
  components: {
    Section,
    ArticleList
  },
  data () {
    return {
      sectionArticlesHeader: {
        title: 'Artigos',
        subtitle: 'Textos sobre as minhas experiências, dicas e aprendizados.',
        animation: 'fadeInLeft',
        icon: 'ion-md-book'
      },
    }
  },
  mounted() {
    this.$store.dispatch('countPageView', 'articles')
  }
}
</script>

<style scoped>
</style>
