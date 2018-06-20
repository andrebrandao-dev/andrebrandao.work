<template>
  <nuxt/>
</template>

<script>
export default {
  name: 'layout-secret',
  mounted() {
    new WOW().init()
  }
}
</script>

<style lang="stylus">
  @import '../assets/styles/general.styl'
</style>
