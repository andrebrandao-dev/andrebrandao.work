<template>
  <div>
    <Header />
    <nuxt/>
  </div>
</template>

<script>
  import Header from '@/components/Application/Header'

  export default {
    name: 'layout-default',
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
@import '../assets/styles/general.styl'
</style>
