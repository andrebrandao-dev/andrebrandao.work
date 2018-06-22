<template lang="html">
  <form class="form" @submit.prevent="submitForm">
    <div class="card wow fadeInLeft">
      <div class="card-body">
        <div class="form-body">
          <div class="columns">
            <div class="col half">
              <Input label="Title" icon="ion-md-apps" v-model="project.title" />
            </div>
            <div class="col half">
              <Input label="Company" icon="ion-md-business" v-model="project.company" />
            </div>
            <div class="col half">
              <Input label="Thumbnail" icon="ion-md-image" v-model="project.thumbnail" />
            </div>
            <div class="col half">
              <Input label="Color" icon="ion-md-color-palette" v-model="project.color" />
            </div>
            <div class="col half">
              <Input
                label="Tags"
                icon="ion-md-code-working"
                :helper="true"
                @saveHelper="addTag"
                v-model="tag"
                :disabled="project.tags.length > 2"
              />
            </div>
            <div class="col half">
              <div class="tags">
                <span class="tag tag-primary" v-for="(tag, index) in project.tags" @click="removeTag(index)">
                  {{ tag }} <i class="ion ion-md-trash"></i>
                </span>
              </div>
            </div>
            <div class="col is-3">
              <Input label="Access Web" icon="ion-md-globe" v-model="project.access.web" />
            </div>
            <div class="col is-3">
              <Input label="Access Android" icon="ion-logo-android" v-model="project.access.android" />
            </div>
            <div class="col is-3">
              <Input label="Access IOS" icon="ion-logo-apple" v-model="project.access.ios" />
            </div>
            <div class="col">
              <Input label="Content" icon="ion-md-text" controlType="textarea" v-model="project.content" />
            </div>

            <div class="col">
              <Button class="btn btn-primary" type="submit" title="Adicionar">
                {{ isNew ? 'Adicionar' : 'Atualizar' }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import slug from 'slug'

// Components
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'

export default {
  name: 'component-admin-form-project',
  components: {
    Input,
    Button
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    isNew: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      tag: ''
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions(['sendProject']),

    submitForm () {
      this.project.slug = slug(this.project.title).toLowerCase()
      this.sendProject(this.project)
    },

    removeTag(index) {
      this.project.tags.splice(index, 1)
    },

    addTag () {
      if (this.tag !== '') {
        this.project.tags.push(this.tag)
        this.tag = ''
      }
    },
  }
}
</script>

<style scoped lang="stylus">
  .container
    margin-top 50px
    margin-bottom 50px

  .col
    padding-top 15px
    padding-bottom 15px

  .col:not(.half)
    width 100%

    &.is-3
      width 33.333%

  .form
    max-width 767px
    margin 0 auto

    &-body
      margin 15px

  .tags
    text-align left
    display flex
    justify-content flex-start
    height 49px
    align-items flex-end

</style>
