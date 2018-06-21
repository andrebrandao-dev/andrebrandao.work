<template>
  <nav class="app-nav">
    <ul class="app-nav-list start mobile">
      <li class="app-nav-item">
        <button type="button" class="app-nav-link active" name="button" @click="toggleMenu(!menuIsClosed)">
          <i class="ion f-1-5" :class="menuIsClosed ? 'ion-md-close' : 'ion-md-menu'"></i>
          <span class="sr-only">{{ menuIsClosed ? 'Close Menu' : 'Open Menu' }}</span>
        </button>
      </li>
      <li class="app-nav-item">
        <span class="app-nav-link active" title="André Brandão">Admin</span>
      </li>
    </ul>

    <ul class="app-nav-list start side" :class="{ 'is-opened': menuIsClosed }">
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
        <button class="app-nav-link github pointer" type="button" title="Sair" @click="onLogout">
          <i class="ion ion-md-log-out f-1-5"></i>
          <span class="sr-only">Sair</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'component-admin-header',
  computed: {
    ...mapGetters(['menuIsClosed'])
  },
  methods: {
    ...mapActions(['toggleMenu']),

    onLogout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
