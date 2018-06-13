<template>
  <div>
    <!-- About Section -->
    <section class="section section-about">
      <div class="section-body">
        <div class="wow fadeInDown">
          <Gravatar class="avatar avatar-ligth" :email="my.email"/>
          <h1 class="section-about-title">
            Hi, I'm
            <strong>{{ my.name }}</strong>
          </h1>
        </div>

        <nuxt-link class="btn-outline btn-outline-ligth wow fadeInUp" exact to="/about" title="More about me">
          More about me
        </nuxt-link>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section bg-ligth">
      <header class="section-header wow fadeInRight">
        <i class="icon-circled icon-circled-primary ion ion-md-book"></i>
        <h1 class="section-header-title">Projetos</h1>
        <span class="section-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </header>
      <div class="section-body">

        <div class="card">
          <div class="card-header cover" style="background-image: url('https://matheuslima.com.br/uploads/02df72283b28f5885266c572f87b0406.png');">
            <span class="sr-only">Projeto Name</span>
          </div>
          <div class="card-body">
            <h3 class="card-body-title">Projeto Name</h3>
            <p class="card-body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="card-footer" style="background-color: #fad45c">
            <span class="card-footer-item">Vue Js</span>
            <span class="card-footer-item">Laravel</span>
            <span class="card-footer-item">Mobile</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Articles Section -->
    <section class="section bg-success">
      <header class="section-header wow fadeInLeft">
        <i class="icon-circled icon-circled-primary ion ion-md-book"></i>
        <h1 class="section-header-title">Artigos</h1>
        <span class="section-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </header>
      <div class="section-body">

      </div>
    </section>

    <!-- Courses Section -->
    <section class="section bg-ligth">
      <header class="section-header wow fadeInRight">
        <i class="icon-circled icon-circled-primary ion ion-md-book"></i>
        <h1 class="section-header-title">Cursos</h1>
        <span class="section-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </header>
      <div class="section-body">

      </div>
    </section>
  </div>
</template>

<script>
import Gravatar from 'vue-gravatar'

export default {
  name: 'page-index',
  components: {
    Gravatar
  },
  data() {
    return {
      my: {
        name: 'André Brandão',
        email: 'andrebf4@gmail.com'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .section
    position relative
    width 100%
    height auto
    padding 50px 0
</style>
