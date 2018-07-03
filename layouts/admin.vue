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
import Header from '@/components/Admin/Header'
import Footer from '@/components/Admin/Footer'

export default {
  name: 'layout-admin',
  head: {
    title: 'Admin: André Brandão'
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    new WOW().init()
  }
}
</script>

<style lang="stylus">
  @import '../assets/styles/general.styl'
</style>
