<template>
  <div>
    <Loading v-if="isLoading" message="Sending message"/>
    <Section color="ligth" :sectionHeader="sectionHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <FormContact />
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import Section from '@/components/UI/Section'
import FormContact from '@/components/Application/FormContact'
import Loading from '@/components/UI/Loading'

export default {
  name: 'page-contact',
  middleware: ['menu', 'check-auth'],
  components: {
    Section,
    FormContact,
    Loading
  },
  data() {
    return {
      sectionHeader: {
        title: 'Contact',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-mail'
      }
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>
