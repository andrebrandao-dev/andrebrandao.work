<template>
  <div>
    <Loading v-if="isLoading" message="Sending recommendation"/>
    <Section color="ligth" :sectionHeader="sectionProjectsHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <Form />
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


// Components
import Section from '@/components/UI/Section'
import Form from '@/components/Recommendation/Form'
import Loading from '@/components/UI/Loading'

export default {
  name: 'page-secret-create-recommendation',
  layout: 'secret',
  components: {
    Section,
    Form,
    Loading
  },
  data () {
    return {
      sectionProjectsHeader: {
        title: 'Create Recommendation',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-star'
      },
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style scoped lang="stylus">

</style>
