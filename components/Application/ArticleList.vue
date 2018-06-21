<template>
  <div class="columns">
    <div class="col wow fadeInLeft" v-for="(article, index) in listedArticles" v-if="index + 1 <= limit">
      <a :href="article.link" :title="article.title" target="_blank">
        <div class="card">
          <div class="card-header cover" :style="{ backgroundImage: `url(${ getImage(article['content:encoded']) })` }">
            <span class="sr-only">{{ article.title }}</span>
          </div>
          <div class="card-body">
            <h3 class="card-body-title t-overflow">{{ article.title }}</h3>
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
  methods: {
    getImage (text) {
      return text.split('" />').shift().split('src="').pop()
    }
  }
}
</script>

<style scoped lang="stylus">
  .col
    width 33.333%
    @media (max-width 767px)
      width 100%

  .tags
    margin-top 25px
</style>
