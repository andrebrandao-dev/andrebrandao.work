<template>
  <Section color="ligth" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="swiper-container" ref="swiperAbout">
          <div class="swiper-wrapper">
            <!-- Professional -->
            <div class="swiper-slide">
              Profissional
            </div>
            <!-- Personal -->
            <div class="swiper-slide">
              Pessoal
            </div>
          </div>
        </div>
        <div class="swiper-pagination" ref="swiperAboutPagination"></div>
      </div>
    </div>
  </Section>
</template>

<script>
import Swiper from 'swiper'

// Components
import Section from '@/components/UI/Section'

export default {
  name: 'page-about',
  middleware: ['menu', 'check-auth'],
  components: {
    Section
  },
  data() {
    return {
      swiperAbout: null,
      sectionHeader: {
        title: 'Sobre',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-person'
      }
    }
  },
  mounted() {
    this.initSwiper()
    this.viewCont()
  },
  methods: {
    initSwiper() {
      this.swiperAbout = new Swiper(this.$refs.swiperAbout, {
        slidePerView: 1,
        pagination: {
          el: this.$refs.swiperAboutPagination,
          type: 'bullets',
          clickable: true
        }
      })
    },
    viewCont() {
      return this.$axios.get(`${ process.env.baseUrl }/pageViews.json`)
        .then(response => {
          const data = response.data
          data.about++

          this.$axios.put(`${ process.env.baseUrl }/pageViews.json`, data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
