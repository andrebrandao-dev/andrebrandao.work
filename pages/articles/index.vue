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
        title: 'Articles',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInLeft',
        icon: 'ion-md-book'
      },
    }
  },
  mounted() {
    this.viewCont()
  },
  methods: {
    viewCont() {
      return this.$axios.get(`${ process.env.baseUrl }/pageViews.json`)
        .then(response => {
          const data = response.data
          data.articles++

          this.$axios.put(`${ process.env.baseUrl }/pageViews.json`, data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>
