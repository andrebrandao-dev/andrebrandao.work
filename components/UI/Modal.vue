<template>
  <div class="modal">
    <div class="modal-bd" @click.prevent="$emit('close')"></div>
    <div class="modal-container wow fadeInDown">
      <div class="modal-header">
        <button type="button" class="icon-circled icon-circled-primary" @click.prevent="$emit('close')">
          <i class="ion ion-md-close"></i>
          <span class="sr-only"></span>
        </button>
        <div v-if="avatar">
          <Gravatar class="avatar avatar-ligth" :email="title"/>
        </div>
        <div v-else>
          <h2 class="modal-header-title">{{ title }}</h2>
        </div>
      </div>
      <slot name="body" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import Gravatar from 'vue-gravatar'

export default {
  name: 'Modal',
  components: {
    Gravatar
  },
  props: {
    avatar: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
