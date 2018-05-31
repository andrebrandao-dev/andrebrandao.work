<template>
  <header class="app-header">
    <div class="app-header-content">
      <h1 class="app-header-title">
        {
          <span>status: 'in development'</span>
        }
      </h1>
    </div>
  </header>
</template>

<script>
import Trianglify from 'trianglify'
import Gravatar from 'vue-gravatar'

export default {
  name: 'component-application-header',
  components: {
    Gravatar
  },
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
  .app-header
    width 100%
    height 100vh
    position fixed
    background-size cover
    background-position top center
    background-repeat no-repeat
    display flex
    justify-content center
    align-items center
    background-image url('~/static/images/cover.jpg')
    overflow hidden
    padding 15px
    &:before
      position absolute
      content ''
      width 100%
      height 100%
      background-image url('~/static/images/chalkboard.jpg')
      opacity .7
      top 0
      left 0
      bottom 0
      right 0

    &-content
      position relative
      padding 50px 0

    &-title
      color #FFF
      margin-top 15px
      font-size 4rem
      font-weight 300
      text-shadow 0 3px 7px rgba(0, 0, 0, .2)
      background-color #FFF
      color #333132
      padding 10px 20px
      span
        display block
        margin-left 20px
      @media(max-width 414px)
        font-size 1.5rem


</style>
