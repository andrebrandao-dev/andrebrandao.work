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

<style>
</style>
