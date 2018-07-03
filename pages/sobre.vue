<template>
  <div>
    <Section color="ligth" :sectionHeader="sectionHeader">
      <div slot="body" class="section-body">
        <div class="container wow fadeIn">
          <div class="swiper-container" ref="swiperAbout">
            <div class="swiper-wrapper">
              <!-- Professional -->
              <div class="swiper-slide">
                <p class="text-about">
                  Busco trabalhar com desenvolvimento de sites e aplicações - mobile ou web, me empenhando para
                  conhecer as tecnologias atuais, prezando pela qualidade do serviço.
                </p>
              </div>
              <!-- Personal -->
              <div class="swiper-slide">
                <p class="text-about">
                  No meu tempo livre gosto de tocar minha guitarra ou arriscar alguns kills nos jogos online.
                  Também crio alguns pratos na minha humilde cozinha, seja para minha esposa ou para os amigos.
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" ref="swiperAboutPagination"></div>
        </div>
      </div>
    </Section>
    <Section color="success" :sectionHeader="sectionAboutHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <div class="columns courses">
            <div class="col half wow fadeIn">
              <div class="img-courses">
                <a href="https://cursos.alura.com.br/user/andrebf4" target="_blank">
                  <img class="img-fluid" src="~/static/images/alura-logo.svg" alt="Alura">
                </a>
              </div>
            </div>
            <div class="col half wow fadeIn">
              <div class="img-courses">
                <a href="https://www.udemy.com/user/andre-brandao-8/" target="_blank">
                  <img class="img-fluid" src="~/static/images/udemy-logo.svg" alt="Udemy">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section color="ligth" :sectionHeader="sectionPDF">
      <div slot="body" class="section-body">
        <div class="container wow fadeIn">
          <div class="t-center">
            <a class="btn btn-primary" target="_blank" :href="pdflink" title="Download PDF">Download</a>
          </div>
        </div>
      </div>
    </Section>
  </div>
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
      pdflink: 'https://firebasestorage.googleapis.com/v0/b/andrebrandao-work.appspot.com/o/Curriculo%2C%20Andr%C3%A9%20Brand%C3%A3o%20Ferreira.pdf?alt=media&token=4a1393ba-2781-4913-836c-cf2c64c590bb',
      swiperAbout: null,
      sectionHeader: {
        title: 'Profissional',
        subtitle: 'O segredo de um bom projeto está na equipe que coloca ele em prática.',
        animation: 'fadeInRight',
        icon: 'ion-md-person'
      },
      sectionAboutHeader: {
        title: 'Cursos',
        subtitle: 'Sempre buscando aprimorar meus conhecimentos, veja mais nas plataformas abaixo:',
        animation: 'fadeInLeft',
        icon: 'ion-md-laptop'
      },
      sectionPDF: {
        title: 'Currículo',
        subtitle: 'Quer saber mais sobre mim? Faça o download em PDF:',
        animation: 'fadeInRight',
        icon: 'ion-md-download'
      }
    }
  },
  mounted() {
    this.initSwiper()
    this.$store.dispatch('countPageView', 'about')
  },
  methods: {
    initSwiper() {
      let that = this

      this.swiperAbout = new Swiper(this.$refs.swiperAbout, {
        slidePerView: 1,
        pagination: {
          el: this.$refs.swiperAboutPagination,
          type: 'bullets',
          clickable: true
        },
        on: {
          slideChange: function() {
            if (this.realIndex === 0) {
              that.sectionHeader.title = 'Profissional'
              that.sectionHeader.subtitle = 'O segredo de um bom projeto está na equipe que coloca ele em prática.'
              that.sectionHeader.icon = 'ion-md-code-working'
            }
            if (this.realIndex === 1) {
              that.sectionHeader.title = 'Pessoal'
              that.sectionHeader.subtitle = 'Aspirante a músico, gamer e aventureiro na cozinha'
              that.sectionHeader.icon = 'ion-md-person'
            }
          }
        }
      })
    },
  }
}
</script>

<style scoped lang="stylus">
.text-about
  text-align justify
  font-size 1.2rem
  line-height 2rem
  font-weight regular
  padding 10px 0 25px 0
  text-align center

.columns.courses
  .col.half
    display flex
    align-items center
    justify-content center
    @media(max-width 440px)
      width 100%

.img-courses
  width 350px
  height 80px
  padding 15px
  border-radius 10px
  display flex
  align-items center
  justify-content center
  background-color #edd8b7
  box-shadow -1px 15px 30px -12px rgba(0, 0, 0, .3)

  .img-fluid
    max-height 40px

  @media(max-width 440px)
    width 100%
    height auto
    margin 5px 0
</style>
