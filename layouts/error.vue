<template>
  <Section color="warning" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="t-center wow bounceIn">
          <nuxt-link class="btn btn-primary" exact to="/" title="Home">
            Home
          </nuxt-link>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'

export default {
  name: 'layout-error',
  components: {
    Section
  },
  data () {
    return {
      sectionHeader: {
        title: 'Oops, something went wrong!',
        subtitle: 'Back to safety',
        animation: 'bounceIn',
        icon: 'ion-md-bug'
      }
    }
  },
  mounted() {
    new WOW().init()
  }
}
</script>

<style scoped lang="stylus">

</style>
