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
    <Section color="ligth" :sectionHeader="sectionProjectsHeader">
      <div slot="body" class="section-body">
        <div class="container">
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
      </div>
    </Section>

    <!-- Articles Section -->
    <Section color="success" :sectionHeader="sectionArticlesHeader">
      <div slot="body" class="section-body">
        <div class="container">

        </div>
      </div>
    </Section>

    <!-- Courses Section -->
    <Section color="ligth" :sectionHeader="sectionCoursesHeader">
      <div slot="body" class="section-body">
        <div class="container">

        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import axios from 'axios'

// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'

const token = '276b049bd3812e1b5677fa27256a4a421e7892ab4f2d91746ebfe01083c67c546'
const mediumID = '16f7304dcd9b'

export default {
  name: 'page-index',
  components: {
    Gravatar,
    Section
  },
  data() {
    return {
      sectionProjectsHeader: {
        title: 'Projects',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      },
      sectionArticlesHeader: {
        title: 'Articles',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInLeft',
        icon: 'ion-md-book'
      },
      sectionCoursesHeader: {
        title: 'Courses',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      },
      my: {
        name: 'André Brandão',
        email: 'andrebf4@gmail.com'
      }
    }
  },
  mounted () {
    // axios.get(`https://api.medium.com/v1/users/${ mediumID }/publications?accessToken=${ token }&scope=listPublications`)
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
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
