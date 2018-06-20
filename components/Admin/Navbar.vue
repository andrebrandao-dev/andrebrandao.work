<template>
  <nav class="app-nav">
    <ul class="app-nav-list start mobile">
      <li class="app-nav-item">
        <button type="button" class="app-nav-link active" name="button" @click="isOpened = !isOpened">
          <i class="ion f-1-5" :class="isOpened ? 'ion-md-close' : 'ion-md-menu'"></i>
          <span class="sr-only">{{ isOpened ? 'Close Menu' : 'Open Menu' }}</span>
        </button>
      </li>
      <li class="app-nav-item">
        <span class="app-nav-link active" title="André Brandão">Admin</span>
      </li>
    </ul>

    <ul class="app-nav-list start side" :class="{ 'is-opened': isOpened }">
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/" title="Site">Site</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/admin" title="Admin">Admin</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/admin/projects" title="Projects">Projects</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/admin/recommendations" title="Recommendations">Recommendations</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/admin/messages" title="Messages">Messages</nuxt-link>
      </li>
    </ul>

    <ul class="app-nav-list end">
      <li class="app-nav-item">
        <button class="app-nav-link github" type="button" title="Sair">
          <i class="ion ion-md-log-out f-1-5"></i>
          <span class="sr-only">Sair</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'component-admin-header',
  data () {
    return {
      isOpened: false
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
