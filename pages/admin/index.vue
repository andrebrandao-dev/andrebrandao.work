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
              <nuxt-link tag="div" to="/admin/recommendations" title="Recomendações">
                <div class="card pointer wow fadeInRight">
                  <div class="card-header bg-info flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-star"></i>
                    <span class="sr-only">Recomendações</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Recomendações</h3>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div class="col">
              <nuxt-link tag="div" to="/admin/messages" title="Mensagens">
                <div class="card pointer wow fadeInRight">
                  <div class="card-header bg-success flex flex-align-center">
                    <i class="icon-circled icon-circled-primary ion ion-md-text"></i>
                    <span class="sr-only">Mensagens</span>
                  </div>
                  <div class="card-body">
                    <h3 class="card-body-title">Mensagens</h3>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section color="success" :sectionHeader="sectionHeaderAnalytics">
      <div slot="body" class="section-body">
        <div class="container">
          <BarChart :data="chartData"/>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import axios from 'axios'
import BarChart from '@/models/BarChart'

// Components
import Section from '@/components/UI/Section'

export default {
  name: 'page-admin-index',
  layout: 'admin',
  middleware: ['menu', 'check-auth', 'auth'],
  components: {
    Section,
    BarChart
  },
  asyncData(context) {
    return axios.get(`${ process.env.baseUrl }/pageViews.json`)
      .then(res => {
        return {
          chartData: {
            labels: Object.keys(res.data),
            datasets: [
              {
                label: 'Visualizações',
                backgroundColor: '#333132',
                data: Object.values(res.data)
              }
            ]
          }
        }
      })
      .catch(err => {
        console.log(err)
      })

  },
  data() {
    return {
      sectionHeader: {
        title: 'Dashboard',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-apps'
      },
      sectionHeaderAnalytics: {
        title: 'Analytics',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInLeft',
        icon: 'ion-md-analytics'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .col
    width 33.333%

    @media(max-width 767px)
      width 100%

  .card
    &-header
      height 100px

</style>
