<template>
  <Section color="ligth" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <FormContact />
      </div>
    </div>
  </Section>
</template>

<script>
// Components
import Section from '@/components/UI/Section'
import FormContact from '@/components/Application/FormContact'

export default {
  name: 'page-contact',
  components: {
    Section,
    FormContact
  },
  data() {
    return {
      sectionHeader: {
        title: 'Contact',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-book'
      }
    }
  }
}
</script>
