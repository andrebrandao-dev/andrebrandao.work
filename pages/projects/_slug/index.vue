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
              <div class="card-body t-left">
                <p class="card-body-text">{{ project.content }}</p>
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

              <h3 class="form-contact-title">Entre em contato!</h3>
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
.form-contact
  margin-top 50px

  &-title
    font-size 2rem
    font-weight 300
    margin 50px 0

</style>
