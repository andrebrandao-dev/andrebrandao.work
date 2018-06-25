<template>
  <header class="app-header">
    <div class="container">
      <Navbar />
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Admin/Navbar'

export default {
  components: {
    Navbar
  },
  name: 'component-admin-header',
}
</script>

<style scoped lang="stylus">

</style>
