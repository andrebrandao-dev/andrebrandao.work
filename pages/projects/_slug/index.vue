<template>
  <Section color="ligth" :sectionHeader="sectionProjectsHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="columns">

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
  name: 'page-projects-index',
  components: {
    Section
  },
  data () {
    return {
      sectionProjectsHeader: {
        title: 'Project',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      },
    }
  },
  computed: {
    ...mapGetters(['activedProjects'])
  },
  mounted () {
    console.log(this);
  }
}
</script>

<style scoped lang="stylus">

</style>
