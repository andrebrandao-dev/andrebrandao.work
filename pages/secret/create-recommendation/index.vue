<template>
  <div>
    <Loading v-if="isLoading" message="Enviando"/>
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
        title: 'Nova recomendação',
        subtitle: 'Use seu melhor e-mail para deixar sua mensagem',
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
