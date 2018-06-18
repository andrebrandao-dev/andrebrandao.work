<template>
  <div>
    <Section color="ligth" :sectionHeader="sectionHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <div class="columns">
            <div class="col">
              <nuxt-link tag="div" to="/" title="Courses">
                <div class="card pointer">
                  <div class="card-header bg-success flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-apps"></i>
                    <span class="sr-only">Cursos</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Cursos</h3>
                    <p class="card-body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
    width 50%
    border 1px solid red

</style>
