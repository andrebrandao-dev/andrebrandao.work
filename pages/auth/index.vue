<template>
  <div>
    <Section :color="getErrorAuth ? 'warning' : 'ligth'" :sectionHeader="sectionHeader">
      <div slot="body" class="section-body">
        <div class="container">
          <FormLogin />
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// Components
import Section from '@/components/UI/Section'
import FormLogin from '@/components/Auth/FormLogin'

export default {
  name: 'page-auth',
  components: {
    Section,
    FormLogin
  },
  data() {
    return {
      sectionHeader: {
        title: 'Login',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInDown',
        icon: 'ion-md-log-in'
      },
    }
  },
  computed: {
    ...mapGetters(['getErrorAuth'])
  },
}
</script>

<style scoped lang="stylus">
</style>
