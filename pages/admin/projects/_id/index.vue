<template>
  <Section color="success" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">

        <div class="t-center">
          <nuxt-link to="/admin/projects" class="btn btn-primary" title="Listar Projetos">
            Listar Projetos
          </nuxt-link>
        </div>

        <FormProject :project="project" :isNew="false" />

      </div>
    </div>
  </Section>
</template>

<script>
import axios from 'axios'

// Components
import Section from '@/components/UI/Section'
import FormProject from '@/components/Admin/FormProject'

export default {
  name: 'page-admin-projects-id',
  layout: 'admin',
  middleware: ['menu', 'check-auth', 'auth'],
  asyncData ({ params }) {
    return axios.get(`${ process.env.baseUrl }/projects/${ params.id }.json`)
        .then(res => {
          return { project: res.data }
        })
        .catch(err => {
          console.log(err)
        })
  },
  components: {
    Section,
    FormProject
  },
  data () {
    return {
      sectionHeader: {
        title: 'Editando',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInDown',
        icon: 'ion-md-code-working'
      }
    }
  },
  mounted () {
    console.log(this.project)
  }
}
</script>

<style scoped lang="stylus">
</style>
