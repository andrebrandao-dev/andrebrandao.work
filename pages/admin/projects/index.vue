<template>
  <Section color="success" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">

        <div class="t-center">
          <nuxt-link to="/admin/projects/create" class="btn btn-primary" title="New project">
            <i class="ion ion-md-add"></i>New Project
          </nuxt-link>
        </div>

        <div class="table-responsive">
          <table class="table">
            <thead class="table-header">
              <tr>
                <th>#</th>
                <th>Atalho</th>
                <th>Nome</th>
                <th>Empresa</th>
                <th>Color</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr v-for="(project, index) in activedProjects">
                <td>{{ project.id }}</td>
                <td>{{ project.slug }}</td>
                <td>{{ project.title }}</td>
                <td>{{ project.company }}</td>
                <td>{{ project.color }}</td>
                <td class="has-button">
                  <nuxt-link class="tag tag-success" :to="`/admin/projects/${ project.id }`" :name="`Remover ${ project.title }`">
                    <i class="ion ion-md-create"></i>
                    <span class="sr-only">Editar</span>
                  </nuxt-link>
                </td>
                <td class="has-button">
                  <span type="button" class="tag tag-danger" :name="`Remover ${ project.title }`" @click="remove(project.id)">
                    <i class="ion ion-md-trash"></i>
                    <span class="sr-only">Remover</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import Section from '@/components/UI/Section'

export default {
  name: 'page-admin-projects-index',
  layout: 'admin',
  middleware: ['menu', 'check-auth', 'auth'],
  components: {
    Section
  },
  data () {
    return {
      sortKey: '#',
      reverse: false,
      sectionHeader: {
        title: 'Projetos',
        subtitle: 'Lista de projetos adicionados, é possível adicionar, editar e remove-los',
        animation: 'fadeInLeft',
        icon: 'ion-md-code-working'
      }
    }
  },
  computed: {
    ...mapGetters(['activedProjects'])
  },
  mounted () {
    console.log(this.activedProjects);
  },
  methods: {
    sortBy (sortKey) {
      console.log(sortKey);
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    },
  }
}
</script>

<style scoped lang="stylus">
  .table-responsive
    margin-top 50px

  .tag
    i
      margin 0
</style>
