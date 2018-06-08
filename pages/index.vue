<template>
  <div>
    <section class="section">
      <header class="section-header">
        <h1 class="section-header-title">Projetos</h1>
      </header>
    </section>
    <section class="section">
      <header class="section-header">
        <h1 class="section-header-title">Artigos</h1>
      </header>
    </section>
    <section class="section">
      <header class="section-header">
        <h1 class="section-header-title">Cursos</h1>
      </header>
    </section>
  </div>
</template>

<script>
export default {
  name: 'page-index'
}
</script>

<style scoped lang="stylus">
  .section
    position relative
    width 100%
    height auto
    padding 50px 0

    &:nth-child(1)
      border 1px solid cyan
    &:nth-child(2)
      border 1px solid magenta
    &:nth-child(3)
      border 1px solid purple

    &-header
      text-align center

</style>
