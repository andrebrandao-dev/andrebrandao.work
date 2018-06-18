<template>
  <div>
    <Header />
    <div class="first-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Admin/Header'

export default {
  name: 'layout-admin',
  components: {
    Header
  }
}
</script>

<style lang="stylus">
  @import '../assets/styles/general.styl'
</style>
