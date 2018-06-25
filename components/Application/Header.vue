<template>
  <header class="app-header">
    <div class="container">
      <Navbar />
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Application/Navbar'

export default {
  components: {
    Navbar
  },
  name: 'component-application-header',
}
</script>

<style scoped lang="stylus">

</style>
