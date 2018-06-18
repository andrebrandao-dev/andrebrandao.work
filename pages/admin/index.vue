<template>
  <div>
    <Section color="ligth" :sectionHeader="sectionHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <div class="columns">
            <div class="col">
              <nuxt-link tag="div" to="/admin/projects" title="Projetos">
                <div class="card pointer wow fadeInLeft">
                  <div class="card-header bg-success flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-code-working"></i>
                    <span class="sr-only">Projetos</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Projetos</h3>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div class="col">
              <nuxt-link tag="div" to="/admin/courses" title="Courses">
                <div class="card pointer wow fadeInLeft">
                  <div class="card-header bg-warning flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-book"></i>
                    <span class="sr-only">Cursos</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Cursos</h3>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div class="col">
              <nuxt-link tag="div" to="/admin/recommendations" title="Recommendations">
                <div class="card pointer wow fadeInRight">
                  <div class="card-header bg-info flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-star"></i>
                    <span class="sr-only">Recommendations</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Recommendations</h3>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div class="col">
              <nuxt-link tag="div" to="/admin/messages" title="Messages">
                <div class="card pointer wow fadeInRight">
                  <div class="card-header bg-danger flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-text"></i>
                    <span class="sr-only">Messages</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Messages</h3>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
// COmponents
import Section from '@/components/UI/Section'

export default {
  name: 'page-admin-index',
  layout: 'admin',
  components: {
    Section
  },
  data () {
    return {
      sectionHeader: {
        title: 'Dashboard',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-apps'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .col
    width 25%

    @media(max-width 992px)
      width 50%

    @media(max-width 767px)
      width 100%

  .card
    &-header
      height 100px

</style>
