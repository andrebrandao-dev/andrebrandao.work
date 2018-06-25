<template>
  <div class="">

    <div>
      <notifications group="form-feedback"></notifications>
    </div>

    <Loading v-if="isLoading" message="Sending message"/>
    <Section :color="notFound ? 'warning' : 'ligth'" :sectionHeader="sectionProjectsHeader" v-if="project || notFound">
      <div slot="body" class="section-body">
        <div class="container">
          <!-- Project Found -->
          <div v-if="!notFound">
            <div class="project-cover" :style="{ backgroundImage: `url(${ project.thumbnail })` }">
              <span class="sr-only">{{ project.title }}</span>
            </div>

            <div class="project-tags">
              <span class="tag tag-primary" v-for="tag in project.tags">{{ tag }}</span>
            </div>

            <div class="card">
              <div class="card-header flex flex-align-center flex-justify-center">
                <a v-if="project.access.web" :href="project.access.web" title="Acessar: Web">
                  <i class="icon-circled icon-circled-primary ion ion-md-globe"></i>
                  <span class="sr-only">Acessar: Web</span>
                </a>
                <a v-if="project.access.android" :href="project.access.android" title="Acessar: PlayStore">
                  <i class="icon-circled icon-circled-primary ion ion-logo-android"></i>
                  <span class="sr-only">Acessar: PlayStore</span>
                </a>
                <a v-if="project.access.ios" :href="project.access.ios" title="Acessar: AppleStore">
                  <i class="icon-circled icon-circled-primary ion ion-logo-apple"></i>
                  <span class="sr-only">Acessar: AppleStore</span>
                </a>
              </div>
              <div class="card-body">
                <div v-html="project.content"></div>
              </div>
            </div>

          </div>

          <!-- Project Not Found -->
          <div class="t-center" v-if="notFound">
            <nuxt-link class="btn btn-primary" exact to="/" title="Página inicial">
              Página inicial
            </nuxt-link>
            <nuxt-link class="btn btn-primary" exact to="/projects" title="Todos Projetos">
              Todos Projetos
            </nuxt-link>

            <div class="form-contact">
              <hr>

              <h3 class="form-contact-title">Não encontrou a informação que precisava? <br>Entre em contato!</h3>
              <FormContact @submitForm="onSubmit" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as _ from 'lodash'

// Components
import Section from '@/components/UI/Section'
import FormContact from '@/components/Application/FormContact'
import Loading from '@/components/UI/Loading'

export default {
  name: 'page-projects-index',
  middleware: ['menu', 'check-auth'],
  components: {
    Section,
    FormContact,
    Loading
  },
  data () {
    return {
      notFound: false,
      project: null,
      sectionProjectsHeader: {
        title: 'Project',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      }
    }
  },
  computed: {
    ...mapGetters(['activedProjects', 'isLoading'])
  },
  mounted () {
    this.findProject()
  },
  methods: {
    findProject () {
      const slug = this.$route.params.slug
      const index = _.findIndex(this.activedProjects, (project) => project.slug === slug)

      if (index < 0) {
        this.notFound = true

        this.sectionProjectsHeader = {
          title: 'Projeto não encontrado',
          subtitle: 'Estranho, não consegui achar esse projeto :X',
          animation: 'fadeInRight',
          icon: 'ion-md-bug'
        }

      } else {
        this.project = this.activedProjects[index]
        this.sectionProjectsHeader.title = this.project.title
        this.sectionProjectsHeader.subtitle = this.project.company
      }
    },
    onSubmit(success) {
      this.$notify({
        group: 'form-feedback',
        type: success ? 'success' : 'warn',
        title: success ? 'Mensagem enviada' : 'Mensagem não enviada',
        text: success ? 'Obrigado pelo contato, logo retornarei' : 'Tente mais tarde'
      });
    }
  }
}
</script>

<style scoped lang="stylus">
.card-header
  height auto
  padding-top 25px
  a
    margin 5px

.card-body
  padding-left 25px
  padding-right 25px
  padding-bottom 25px

.form-contact
  margin-top 50px

  &-title
    font-size 2rem
    line-height 2.5rem
    font-weight 300
    margin 50px 0

</style>
