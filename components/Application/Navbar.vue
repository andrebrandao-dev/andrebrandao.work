<template>
  <nav class="app-nav">
    <ul class="app-nav-list start">
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/" title="Home">Home</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/about" title="About">About</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/projects" title="Projects">Projects</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/articles" title="Articles">Articles</nuxt-link>
      </li>
      <li class="app-nav-item">
        <nuxt-link class="app-nav-link" exact to="/contact" title="Contact">Contact</nuxt-link>
      </li>
      <li class="app-nav-item">
        <a class="app-nav-link github" href="https://github.com/andrebrandaoo" title="Github">
          <i class="ion ion-logo-github f-1-5"></i>
          <span class="sr-only">Github</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'component-application-header',
}
</script>

<style scoped lang="stylus">
  .app-nav
    &-item:last-child
      margin-left 30px
</style>
