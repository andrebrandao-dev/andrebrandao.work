<template>
<div>

  <div>
    <notifications group="form-feedback"></notifications>
  </div>

  <Loading v-if="isLoading" message="Sending message"/>
  <Section color="warning" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="t-center wow bounceIn">
          <nuxt-link class="btn btn-primary" exact to="/" title="Página inicial">
            Página inicial
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

// Components
import Section from '@/components/UI/Section'
import FormContact from '@/components/Application/FormContact'
import Loading from '@/components/UI/Loading'

export default {
  name: 'layout-error',
  components: {
    Section,
    FormContact,
    Loading
  },
  data () {
    return {
      sectionHeader: {
        title: 'Que feio servidor, você não pode fazer isso :(',
        subtitle: '',
        animation: 'bounceIn',
        icon: 'ion-md-bug'
      }
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  mounted() {
    new WOW().init()
  },
  methods: {
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
    line-height 2.5rem
    font-weight 300
    margin 50px 0

</style>
