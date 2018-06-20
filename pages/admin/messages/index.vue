<template>
  <Section color="danger" :sectionHeader="sectionHeader">
    <div slot="body" class="section-body">
      <div class="container">
        <div class="columns">
          <div class="col" v-for="message in submittedMessages">
            <div class="card wow fadeInRight">
              <div class="card-header flex flex-align-center">
                <Gravatar class="avatar avatar-ligth" :email="message.email"/>
              </div>
              <div class="card-body">
                <h3 class="card-body-title">{{ message.name }}</h3>
                <p class="card-body-text">{{ message.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// Components
import Gravatar from 'vue-gravatar'
import Section from '@/components/UI/Section'

export default {
  name: 'page-admin-messages-index',
  layout: 'admin',
  components: {
    Gravatar,
    Section
  },
  data () {
    return {
      sectionHeader: {
        title: 'Messages',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        animation: 'fadeInRight',
        icon: 'ion-md-text'
      }
    }
  },
  mounted () {
    this.getMessages()
  },
  computed: {
    ...mapGetters(['submittedMessages'])
  },
  methods: {
    ...mapActions(['getMessages'])
  }
}
</script>

<style scoped lang="stylus">
.col
  width 25%

  @media(max-width 992px)
    width 50%

  @media(max-width 767px)
    width 100%

.card
  &-header
    height 100px

.avatar
  margin 25px auto 0 auto

</style>
