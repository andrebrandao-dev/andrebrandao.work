<template>
  <Footer class="app-footer">
    <h1>Footer</h1>
  </Footer>
</template>

<script>

export default {
  name: 'component-application-header',
  data() {
    return {
      email: 'andrebf4@gmail.com'
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="stylus">

  .app-footer
    position fixed
    bottom 0
    left 0
    right 0
    width 100%
    height 60px
    border-top 1px solid black
    display flex
    justify-content center
    align-items center
    background-color #FFF

</style>
