<template>
  <h1>Projeto</h1>
</template>

<script>
export default {
  name: 'page-admin-projects-slug',
  layout: 'admin',
  middleware: ['menu', 'check-auth', 'auth']
}
</script>

<style scoped>
</style>
