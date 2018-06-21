<template>
  <div class="columns">
    <div class="col" v-for="(article, index) in listedArticles" v-if="index + 1 <= limit">
      <a :href="article.link" :title="article.title">
        <div class="card">
          <div class="card-body">
            <h3 class="card-body-title">{{ article.title }}</h3>
            <p class="card-body-text">{{ article.pubDate | formatDate }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'

export default {
  name: 'component-application-article-list',
  props: {
    limit: {
      type: Number,
      default: 3
    }
  },
  computed: {
    ...mapGetters(['listedArticles'])
  },
  mounted () {
    console.log(this.listedArticles)
  }
}
</script>

<style scoped lang="stylus">
  .col
    width 33.333%
</style>
