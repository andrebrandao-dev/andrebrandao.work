<template>
  <div>
    <Header />
    <div class="first-container">
      <nuxt/>
    </div>
    <Footer />
  </div>
</template>

<script>
// Components
import Header from '@/components/Application/Header'
import Footer from '@/components/Application/Footer'

export default {
  name: 'layout-default',
  components: {
    Header,
    Footer,
  },
  mounted() {
    new WOW().init()
  }
}
</script>

<style lang="stylus">
  @import '../assets/styles/general.styl'
</style>
